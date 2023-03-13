// since there's no dynamic data here, we can prerender
import type { Recipe } from "$lib/Recipe";
import { recipes } from "$lib/Recipe"
import type { PageLoad } from "./$types";

// it so that it gets served as a static asset in production
export const prerender = true;


export async function load(event: PageLoad) {
    return {
        data: recipes
    }
}
