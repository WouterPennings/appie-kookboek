// since there's no dynamic data here, we can prerender
import type { Recipe } from "$lib/Recipe";
import type { PageLoad } from "../$types";

// it so that it gets served as a static asset in production
export const prerender = true;

const recipes: Recipe[] = [
    { name: "Broodje Kroket1", inventors: ["Wouter Pennings"], img_path: [], main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }], topings: [], vegan: false, vega: false, veganable: true, microwave: false, airfryer: true, pan: false},
    { name: "Broodje Kroket2", inventors: ["Wouter Pennings"], img_path: [], main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }], topings: [], vegan: false, vega: false, veganable: true, microwave: false, airfryer: true, pan: false},
    { name: "Broodje Kroket3", inventors: ["Wouter Pennings"], img_path: [], main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }], topings: [], vegan: false, vega: false, veganable: true, microwave: false, airfryer: true, pan: false}
];

export async function load(event: PageLoad) {
    return {
        data: recipes
    }
}
