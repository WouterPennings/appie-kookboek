import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "../../../../chunks/index2.js";
import { B as Backbtn } from "../../../../chunks/Backbtn.js";
import { T as Tag } from "../../../../chunks/Tag.js";
import { e as error } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "ol.svelte-1xyjo0r,ul.svelte-1xyjo0r{margin-top:0}p.svelte-1xyjo0r,h2.svelte-1xyjo0r,h3.svelte-1xyjo0r,h4.svelte-1xyjo0r{margin:0;padding:0}main.svelte-1xyjo0r{margin:0 15px}img.svelte-1xyjo0r{width:100%;border-radius:16px}.inventors.svelte-1xyjo0r{color:gray;margin-bottom:10px}.tags.svelte-1xyjo0r{display:flex;gap:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if (data.data == void 0) {
    throw error(404, { message: "Not found" });
  }
  let recipe = data.data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="${"svelte-1xyjo0r"}">${validate_component(Backbtn, "Backbtn").$$render($$result, { url: "/recepten" }, {}, {})}

    
    <img${add_attribute("src", "../" + recipe.img_path[0], 0)} alt="${"Hello"}" class="${"svelte-1xyjo0r"}">
    <h2 class="${"svelte-1xyjo0r"}">${escape(recipe.name)}</h2>
    <h4 class="${"inventors svelte-1xyjo0r"}">${escape(recipe.inventors.join(", "))}</h4>

    <div class="${"tags svelte-1xyjo0r"}">${recipe.microwave ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "utility_label",
      path: "../icons/microwave_icon.png",
      label_name: "Magnetron"
    },
    {},
    {}
  )}` : ``}
        
        ${recipe.airfryer ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "utility_label",
      path: "../icons/airfryer_icon.png",
      label_name: "Airfryer"
    },
    {},
    {}
  )}` : ``}
        
        ${recipe.pan ? `${validate_component(Tag, "Tag").$$render(
    $$result,
    {
      class_name: "utility_label",
      path: "../icons/pan_icon.png",
      label_name: "Pan"
    },
    {},
    {}
  )}` : ``}
        ${recipe.vegan ? `${validate_component(Tag, "Tag").$$render(
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
  )}` : ``}`}`}</div>
    <br>
    <h3 class="${"svelte-1xyjo0r"}">Hoofd Ingredienten</h3>
    <ol class="${"svelte-1xyjo0r"}">${each(recipe.main_ingredients, (ingredient) => {
    return `<li>${escape(ingredient.name)}</li>
            ${Array.isArray(ingredient.options) ? `<ul class="${"svelte-1xyjo0r"}">${each(ingredient.options, (opt) => {
      return `<li>${escape(opt)}</li>`;
    })}
                </ul>` : ``}`;
  })}</ol>

    <h3 class="${"svelte-1xyjo0r"}">Toppings</h3>
    <ul class="${"svelte-1xyjo0r"}">${each(recipe.topings, (toping) => {
    return `<li>${escape(toping.name)}</li>
            ${Array.isArray(toping.options) ? `<ul class="${"svelte-1xyjo0r"}">${each(toping.options, (opt) => {
      return `<li>${escape(opt)}</li>`;
    })}
            </ul>` : ``}`;
  })}</ul>

    ${recipe.description != void 0 ? `<h3 class="${"svelte-1xyjo0r"}">Uitleg</h3>
        ${Array.isArray(recipe.description) ? `${each(recipe.description, (paragraph) => {
    return `<p class="${"svelte-1xyjo0r"}">${escape(paragraph)}</p>
                <br>`;
  })}` : `<p class="${"svelte-1xyjo0r"}">${escape(recipe.description)}</p>`}` : ``}</main>`;
});
export {
  Page as default
};
