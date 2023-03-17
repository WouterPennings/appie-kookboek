import { c as create_ssr_component, d as add_attribute } from "./index2.js";
const Backbtn_svelte_svelte_type_style_lang = "";
const css = {
  code: "h4.svelte-suk4hg{margin:0;padding:0}.btn.svelte-suk4hg{width:fit-content;display:flex;gap:10px;padding:5px 20px;margin-bottom:5px;border-radius:16px;color:black;background-color:#e2f1fb;text-decoration:none;font-weight:900}.arrow-back.svelte-suk4hg{rotate:180deg;height:20px;width:auto}",
  map: null
};
const Backbtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `<a class="${"btn svelte-suk4hg"}"${add_attribute("href", url, 0)}><img class="${"arrow-back svelte-suk4hg"}" src="${"../icons/arrow_icon.png"}" alt="${"arrow"}"> 
    <h4 class="${"svelte-suk4hg"}">Terug</h4></a>`;
});
export {
  Backbtn as B
};
