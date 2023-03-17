import { c as create_ssr_component, e as escape, h as null_to_empty, d as add_attribute } from "./index2.js";
const Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: "label.svelte-15zf7us{display:flex;align-items:center;width:min-content;padding:1px 6px;border-radius:16px;font-weight:700;font-size:0.9em}img.svelte-15zf7us{width:15px}.veg_label.svelte-15zf7us{border:2px #40c057 solid;color:#236b30}.meat_label.svelte-15zf7us{border:2px #fa5252 solid;color:#b33b3b}.fish_label.svelte-15zf7us{border:2px #22c3e6 solid;color:#167a91}.utility_label.svelte-15zf7us{border:2px #4d4d4d solid;color:#252525}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class_name } = $$props;
  let { path } = $$props;
  let { label_name } = $$props;
  if ($$props.class_name === void 0 && $$bindings.class_name && class_name !== void 0)
    $$bindings.class_name(class_name);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.label_name === void 0 && $$bindings.label_name && label_name !== void 0)
    $$bindings.label_name(label_name);
  $$result.css.add(css);
  return `
<label class="${escape(null_to_empty(class_name), true) + " svelte-15zf7us"}"><img${add_attribute("src", path, 0)}${add_attribute("alt", path, 0)} class="${"svelte-15zf7us"}"> ${escape(label_name)}</label>`;
});
export {
  Tag as T
};
