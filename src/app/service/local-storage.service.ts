import { Injectable } from "@angular/core";
import { RecipeClass, Result } from "../models/result";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  fridge: string[] = this.getFridge();

  constructor() {}

  getFridge(): string[] {
    try {
      return JSON.parse(localStorage.getItem("fridge") || "");
    } catch {
      return [];
    }
  }

  saveFridge(fridge: string[]) {
    localStorage.setItem("fridge", JSON.stringify(fridge));
  }

  deleteFridge() {
    localStorage.removeItem("fridge");
  }

  getMealType(): string[] {
    return JSON.parse(localStorage.getItem("mealType") || "");
  }
  setMealType(type: any) {
    localStorage.setItem("mealType", JSON.stringify(type));
  }

  getCuisineType(): string[] {
    return JSON.parse(localStorage.getItem("cuisineType") || "");
  }
  setCuisineType(type: any) {
    localStorage.setItem("cuisineType", JSON.stringify(type));
  }

  getFavList(): RecipeClass[] {
    return JSON.parse(localStorage.getItem("favList") || "[]");
  }

  setFavList(recipeList: RecipeClass[]) {
    localStorage.setItem("favList", JSON.stringify(recipeList));
    console.log(recipeList);
  }
}
