import { recipeNames, recipes, type Recipe } from "$lib/Recipe";
import { error } from "@sveltejs/kit";

export const load = ({ params }: any) => {
    if(recipeNames.includes(params.name)) {
        return {
            data: recipes.find(r => r.name == params.name) as Recipe
        }
    }

    throw error(404, {
        message: `Recipe: '${params.name}', not found`
    });

    return;
}