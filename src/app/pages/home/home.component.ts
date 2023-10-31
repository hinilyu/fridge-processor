import { Component, OnInit } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Observable, startWith } from "rxjs";
import { options } from "./ingredients";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/service/local-storage.service";
import { CuisineType, MealType } from "src/app/models/result";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  options = options;
  filteredOptions = options;

  // for removing ingredients button
  hideElement: { [Name: string]: boolean } = {};

  //check localStorage
  fridgeString: string = "";
  fridge: string[] = Array();

  formGroup!: FormGroup;

  // filter

  mealTypeList: string[] = Object.values(MealType);
  cuisineTypeList: string[] = Object.values(CuisineType);
  mealType = new FormControl("");
  cuisineType = new FormControl("");

  constructor(private fb: FormBuilder, private _errorBar: MatSnackBar, private router: Router, private localStorageS: LocalStorageService) {}

  ngOnInit() {
    this.initForm();
    this.initFridge();
  }

  initFridge() {
    try {
      this.fridge = this.localStorageS.getFridge();
      // filter autocomplete options
      this.fridge.forEach((item) => (this.options = this.options.filter((toBefiltered) => toBefiltered !== item)));
      this.filteredOptions = this.options;
    } catch (e: unknown) {
      console.log("localStorage is empty");
    }
  }

  openErrorBar(message: string, action: string) {
    this._errorBar.open(message, action, {
      duration: 3500,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: "snackbar",
    });
  }

  initForm() {
    this.formGroup = this.fb.group({
      ingredient: [""],
    });
    this.formGroup.get("ingredient")?.valueChanges.subscribe((response) => {
      this.filterData(response);
    });
  }

  filterData(enteredData: any) {
    this.filteredOptions = this.options.filter((item) => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    });
  }

  onAdd() {
    var input = this.formGroup.get("ingredient")?.value;
    // check if fridge is full
    if (this.fridge.length >= 9) {
      this.openErrorBar("Fridge Capacity is 9 items", "Dismiss");
      return;
    }

    //check if input is empty
    if (input != undefined && input != "") {
      input = input.charAt(0).toUpperCase() + input.slice(1); //make input match filename
      if (this.fridge.includes(input)) {
        this.openErrorBar("Ingredient already added to the fridge", "Dismiss");
      } else {
        if (this.options.includes(input)) {
          //check if input is included in database
          this.fridge.push(input); //add input to fridge
          this.options = this.options.filter((item) => item !== input); //remove this ingredient from autocomplete
          this.hideElement[input] = true;
        } else {
          this.openErrorBar("We haven't include this ingredient, yet:(", "Dismiss");
        }
      }
    } else {
      this.openErrorBar("Ingredient field can't be empty", "Dismiss");
    }

    this.formGroup.setValue({ ingredient: "" });
    this.localStorageS.saveFridge(this.fridge);
  }

  onRemove(name: string) {
    //check if input exists
    if (this.fridge.includes(name)) {
      this.fridge = this.fridge.filter((item) => item !== name); //delete selected name using filter
      this.options.push(name);
      this.options = this.options.sort((a, b) => a.localeCompare(b)); //add back to autocomplete options
      this.filteredOptions = this.options;
      this.localStorageS.saveFridge(this.fridge);
    }
  }

  hide(opt: boolean, target: string) {
    this.hideElement[target] = opt;
  }

  getHideValue(target: string): boolean {
    let value = this.hideElement[target];
    if (value == undefined) {
      return true;
    } else {
      return value;
    }
  }

  getRecipe() {
    this.localStorageS.setMealType(this.mealType.value);
    this.localStorageS.setCuisineType(this.cuisineType.value);

    this.localStorageS.saveFridge(this.fridge);
    this.router.navigate(["/search"]);
  }
}
