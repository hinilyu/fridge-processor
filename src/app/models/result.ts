export interface Result {
  from?: number;
  to?: number;
  count?: number;
  _links?: RecipeLinks;
  hits?: Hit[];
}

export interface RecipeLinks {
  next?: Next;
}

export interface Next {
  href?: string;
  title?: Title;
}

export enum Title {
  NextPage = "Next page",
  Self = "Self",
}

export interface Hit {
  recipe?: RecipeClass;
  _links?: HitLinks;
}

export interface HitLinks {
  self?: Next;
}

export interface RecipeClass {
  uri?: string;
  label?: string;
  image?: string;
  images?: Images;
  source?: string;
  url?: string;
  shareAs?: string;
  yield?: number;
  dietLabels?: DietLabel[];
  healthLabels?: string[];
  cautions?: string[];
  ingredientLines?: string[];
  ingredients?: Ingredient[];
  calories?: number;
  totalCO2Emissions?: number;
  co2EmissionsClass?: string;
  totalWeight?: number;
  totalTime?: number;
  cuisineType?: string[];
  mealType?: MealType[];
  dishType?: string[];
  totalNutrients?: { [key: string]: Total };
  totalDaily?: { [key: string]: Total };
  digest?: Digest[];
}

export enum DietLabel {
  Balanced = "Balanced",
  HighFiber = "High-Fiber",
  LowSodium = "Low-Sodium",
}

export interface Digest {
  label?: Label;
  tag?: string;
  schemaOrgTag?: SchemaOrgTag | null;
  total?: number;
  hasRDI?: boolean;
  daily?: number;
  unit?: Unit;
  sub?: Digest[];
}

export enum Label {
  Calcium = "Calcium",
  CarbohydratesNet = "Carbohydrates (net)",
  Carbs = "Carbs",
  CarbsNet = "Carbs (net)",
  Cholesterol = "Cholesterol",
  Energy = "Energy",
  Fat = "Fat",
  Fiber = "Fiber",
  FolateEquivalentTotal = "Folate equivalent (total)",
  FolateFood = "Folate (food)",
  FolicAcid = "Folic acid",
  Iron = "Iron",
  Magnesium = "Magnesium",
  Monounsaturated = "Monounsaturated",
  NiacinB3 = "Niacin (B3)",
  Phosphorus = "Phosphorus",
  Polyunsaturated = "Polyunsaturated",
  Potassium = "Potassium",
  Protein = "Protein",
  RiboflavinB2 = "Riboflavin (B2)",
  Saturated = "Saturated",
  Sodium = "Sodium",
  SugarAlcohols = "Sugar alcohols",
  Sugars = "Sugars",
  SugarsAdded = "Sugars, added",
  ThiaminB1 = "Thiamin (B1)",
  Trans = "Trans",
  VitaminA = "Vitamin A",
  VitaminB12 = "Vitamin B12",
  VitaminB6 = "Vitamin B6",
  VitaminC = "Vitamin C",
  VitaminD = "Vitamin D",
  VitaminE = "Vitamin E",
  VitaminK = "Vitamin K",
  Water = "Water",
  Zinc = "Zinc",
}

export enum SchemaOrgTag {
  CarbohydrateContent = "carbohydrateContent",
  CholesterolContent = "cholesterolContent",
  FatContent = "fatContent",
  FiberContent = "fiberContent",
  ProteinContent = "proteinContent",
  SaturatedFatContent = "saturatedFatContent",
  SodiumContent = "sodiumContent",
  SugarContent = "sugarContent",
  TransFatContent = "transFatContent",
}

export enum Unit {
  Empty = "%",
  G = "g",
  Kcal = "kcal",
  Mg = "mg",
  Μg = "µg",
}

export interface Images {
  THUMBNAIL?: Large;
  SMALL?: Large;
  REGULAR?: Large;
  LARGE?: Large;
}

export interface Large {
  url?: string;
  width?: number;
  height?: number;
}

export interface Ingredient {
  text?: string;
  quantity?: number;
  measure?: null | string;
  food?: string;
  weight?: number;
  foodCategory?: string;
  foodId?: string;
  image?: null | string;
}

export enum MealType {
  Breakfast = "breakfast",
  Lunch = "lunch",
  Dinner = "dinner",
  Snack = "snack",
  Teatime = "teatime",
}

export enum CuisineType {
  American = "American",
  Asian = "Asian",
  British = "British",
  Caribbean = "Caribbean",
  CentralEurope = "Central Europe",
  Chinese = "Chinese",
  EasternEurope = "Eastern Europe",
  French = "French",
  Indian = "Indian",
  Italian = "Italian",
  Japanese = "Japanese",
  Kosher = "Kosher",
  Mediterranean = "Mediterranean",
  Mexican = "Mexican",
  MiddleEastern = "Middle Eastern",
  Nordic = "Nordic",
  SouthAmerican = "South American",
  SouthEastAsian = "South East Asian",
}

export interface Total {
  label?: Label;
  quantity?: number;
  unit?: Unit;
}
