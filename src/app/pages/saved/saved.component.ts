import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Hit, RecipeClass, Result } from "src/app/models/result";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { DialogContent } from "../search/search.component";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environments";

@Component({
  selector: "app-saved",
  templateUrl: "saved.component.html",
  styles: [],
})
export class SavedComponent implements OnInit {
  //declare constants
  app_id = environment.app_id;
  app_key = environment.app_key;
  //declare variables
  favList: RecipeClass[] = [];
  favIconList: { [uri: string]: boolean } = {}; // fav
  loadingState = true; // progress
  currentRecipe?: RecipeClass;

  constructor(private localStorage: LocalStorageService, public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    this.refreshFav();

    this.loadingState = false;
  }

  openDialog(recipe: RecipeClass) {
    const dialogRef = this.dialog.open(DialogContent, { data: { recipe: recipe }, width: "80vh" });

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
    this.favList.forEach((item) => {
      if (tempFavListOnlyUri.includes(item.uri!)) {
        this.favIconList[item.uri!] = true;
      } else {
        this.favIconList[item.uri!] = false;
      }
    });
  }

  loadContent(uri: string) {
    const url: string = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${encodeURIComponent(uri)}&app_id=${this.app_id}&app_key=${
      this.app_key
    }`;
    this.http.get(url).subscribe(
      (response) => {
        const tempRecipeList: Result = response;
        tempRecipeList.hits?.forEach((item) => (this.currentRecipe = item.recipe));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
