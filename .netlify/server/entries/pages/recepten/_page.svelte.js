import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../../chunks/index2.js";
import { T as Tag } from "../../../chunks/Tag.js";
import { r as recipes } from "../../../chunks/Recipe.js";
import { B as Backbtn } from "../../../chunks/Backbtn.js";
const Recipecard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h3.svelte-1100icj,h4.svelte-1100icj{margin:0;padding:0}h4.svelte-1100icj{color:gray;font-size:small}a.svelte-1100icj{text-decoration:none;display:flex;justify-content:start;margin-bottom:20px;color:black\n    }img.svelte-1100icj{width:15px}.info.svelte-1100icj{display:flex;flex-direction:column;justify-content:start;gap:5px;margin-left:15px;text-align:start}.card_img.svelte-1100icj{width:130px;height:auto;border-radius:16px;box-shadow:0 0 3px 3px rgba(0, 0, 0, 0.164)}.tags.svelte-1100icj{display:flex;justify-content:start;gap:5px}",
  map: null
};
const Recipecard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", "/recepten/" + recipe.name, 0)} lang="${"ts"}" class="${"svelte-1100icj"}">
    <img class="${"card_img svelte-1100icj"}"${add_attribute("src", recipe.img_path[0], 0)}${add_attribute("alt", recipe.img_path[0], 0)}>
    <div class="${"info svelte-1100icj"}"><div><h3 class="${"svelte-1100icj"}">${escape(recipe.name)}</h3>
            <h4 class="${"svelte-1100icj"}">${escape(recipe.inventors.join(", "))}</h4></div>

        <div class="${"tags svelte-1100icj"}">${recipe.microwave ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "utility_label",
      path: "icons/microwave_icon.png",
      label_name: "Magnetron"
    },
    {},
    {}
  )}` : ``}

            ${recipe.airfryer ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "utility_label",
      path: "icons/airfryer_icon.png",
      label_name: "Airfryer"
    },
    {},
    {}
  )}` : ``}

            ${recipe.pan ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "utility_label",
      path: "icons/pan_icon.png",
      label_name: "Pan"
    },
    {},
    {}
  )}` : ``}</div>

        <div class="${"tags svelte-1100icj"}">${recipe.vegan ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "veg_label",
      path: "../icons/vegan_icon.png",
      label_name: "Vegan"
    },
    {},
    {}
  )}` : `${recipe.vega ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "veg_label",
      path: "../icons/vegatarian_icon.png",
      label_name: "Vegatarisch"
    },
    {},
    {}
  )}` : `${recipe.meat ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "meat_label",
      path: "../icons/meat_icon.png",
      label_name: "Vlees"
    },
    {},
    {}
  )}` : ``}
            
                ${recipe.fish ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "fish_label",
      path: "../icons/fish_icon.png",
      label_name: "Vis"
    },
    {},
    {}
  )}` : ``}`}`}</div></div></a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-19ce4vb{font-family:'Raleway', sans-serif}main.svelte-19ce4vb{margin:0 15px}h2.svelte-19ce4vb{margin:0;padding:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-18owjwj_START -->${$$result.title = `<title>Appie Kookboek | Recepten</title>`, ""}<!-- HEAD_svelte-18owjwj_END -->`, ""}

<main lang="${"ts"}" class="${"svelte-19ce4vb"}">${validate_component(Backbtn, "Backbtn").$$render($$result, { url: "/" }, {}, {})}

    <h2 class="${"svelte-19ce4vb"}">Recepten</h2>
    Toevoegingen? Meld bij de <a href="${"/idee"}" class="${"svelte-19ce4vb"}">de beheerder</a>
    <br class="${"svelte-19ce4vb"}"><br class="${"svelte-19ce4vb"}">
    
    ${each(recipes, (recipe) => {
    return `${validate_component(Recipecard, "Recipecard").$$render($$result, { recipe }, {}, {})}`;
  })}</main>`;
});
export {
  Page as default
};
