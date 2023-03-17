import { a as recipeNames, r as recipes } from "../../../../chunks/Recipe.js";
import { e as error } from "../../../../chunks/index.js";
const load = ({ params }) => {
  if (recipeNames.includes(params.name)) {
    return {
      data: recipes.find((r) => r.name == params.name)
    };
  }
  throw error(404, {
    message: `Recipe: '${params.name}', not found`
  });
};
export {
  load
};
