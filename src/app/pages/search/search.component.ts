import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environments";
import { MealType, Result, CuisineType, RecipeClass, Hit } from "src/app/models/result";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { dummy } from "./dummyjson";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  fridge: string[] = this.localStorage.getFridge();
  app_id = environment.app_id;
  app_key = environment.app_key;
  recipe: Result | undefined;
  cuisineType: string[] = [];
  mealType: string[] = [];
  newCuisineType: string[] = [];
  newMealType: string[] = [];

  loadingState = true; // progress
  favIconList: { [uri: string]: boolean } = {}; // fav
  favList: RecipeClass[] = [];

  constructor(private http: HttpClient, private localStorage: LocalStorageService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    // this.recipe = dummy;
    this.cuisineType = this.localStorage.getCuisineType();
    this.mealType = this.localStorage.getMealType();
    this.favList = this.localStorage.getFavList();

    this.getResult(this.cuisineType, this.mealType);

    this.loadingState = false;
  }

  openDialog(recipe: Hit) {
    const dialogRef = this.dialog.open(DialogContent, { data: { recipe: recipe.recipe }, width: "80vh" });

    dialogRef.afterClosed().subscribe((data) => this.refreshFav());
  }

  toggleFavIcon(uri: string) {
    this.favIconList[uri] = !this.favIconList[uri];
  }

  toggleFav(recipe: RecipeClass) {
    this.favIconList[recipe.uri!] = !this.favIconList[recipe.uri!];
    if (this.favIconList[recipe.uri!]) {
      this.favList = this.favList.filter((item) => {
        return item.uri !== recipe.uri;
      });
      this.localStorage.setFavList(this.favList);
    } else {
      this.favList.push(recipe);
      this.localStorage.setFavList(this.favList);
    }
  }

  refreshFav() {
    this.favList = this.localStorage.getFavList();
    const tempFavListOnlyUri: string[] = [];
    this.favList.forEach((item) => tempFavListOnlyUri.push(item.uri!));
    this.recipe!.hits?.forEach((item) => {
      if (tempFavListOnlyUri.includes(item.recipe!.uri!)) {
        this.favIconList[item.recipe!.uri!] = true;
      } else {
        this.favIconList[item.recipe!.uri!] = false;
      }
    });
  }

  getResult(cuisineType?: string[], mealType?: string[]) {
    if (!cuisineType) {
      cuisineType = [""];
    } else {
      cuisineType.forEach((item) => this.newCuisineType.push("&cuisineType=" + item));
    }
    if (!mealType) {
      mealType = [""];
    } else {
      mealType.forEach((item) => this.newMealType.push("&mealType=" + item));
    }
    const url: string = `https://api.edamam.com/api/recipes/v2?type=public&q=${String(this.fridge)}&app_id=${this.app_id}&app_key=${
      this.app_key
    }${this.newCuisineType.join("")}${this.newMealType.join("")}`;

    this.http.get(url).subscribe(
      (response) => {
        this.recipe = response;

        const tempFavListOnlyUri: string[] = [];
        this.favList.forEach((item) => tempFavListOnlyUri.push(item.uri!));

        this.recipe!.hits?.forEach((item) => {
          if (tempFavListOnlyUri.includes(item.recipe!.uri!)) {
            this.favIconList[item.recipe!.uri!] = true;
          } else {
            this.favIconList[item.recipe!.uri!] = false;
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: "dialog-content",
  templateUrl: "dialog.html",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, MatIconModule],
})
export class DialogContent implements OnInit {
  recipe: RecipeClass | undefined;
  favList?: RecipeClass[] = [];
  favIcon: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { recipe: RecipeClass }, private http: HttpClient, private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.recipe = this.data.recipe;
    this.favList = this.localStorage.getFavList();

    // Create temp list that stores uri only for checking
    const tempFavListOnlyUri: string[] = [];
    this.favList.forEach((item) => tempFavListOnlyUri.push(item.uri!));

    if (tempFavListOnlyUri.includes(this.recipe.uri!)) {
      this.favIcon = true;
    }
  }

  toggleFavIcon() {
    this.favIcon = !this.favIcon;
  }

  toggleFav(uri: string) {
    this.favIcon = !this.favIcon;
    if (this.favIcon) {
      if (this.favList !== undefined) {
        this.favList = this.favList.filter((item) => {
          return item.uri !== this.recipe!.uri;
        });
        this.localStorage.setFavList(this.favList);
      }
    } else {
      this.favList?.push(this.recipe!);
      this.localStorage.setFavList(this.favList!);
    }
  }
}
