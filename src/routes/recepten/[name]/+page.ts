import { error } from '@sveltejs/kit';
import { recipes } from '$lib/Recipe'; 

export function load({ params }: any) {
    let x = recipes.map(recipe => recipe.name);
    console.log(x.includes(params.name))
    if (params.name === 'hello-world') {
        return {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
    }

    throw error(404, 'Not found');
}