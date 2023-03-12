export interface Ingredient {
    name: string,
    options?: string[] 
}

export interface Recipe {
    name: string,
    inventors: string[],
    img_path: string[],
    main_ingredients: Ingredient[],
    topings: Ingredient[],
    vegan: boolean,
    vega: boolean,
    veganable: boolean,
    microwave: boolean,
    airfryer: boolean,
    pan: boolean,
}