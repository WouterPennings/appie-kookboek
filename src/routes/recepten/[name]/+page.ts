import { recipeNames, recipes } from "$lib/Recipe";

export const load = ({ params }: any) => {
    if(recipeNames.includes(params.name)) {
        return {
            data: recipes.find(r => r.name == params.name)
        }
    }

    return;
}