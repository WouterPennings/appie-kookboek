import { c as create_ssr_component } from "../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');.svelte-60f8f8{font-family:'Raleway', sans-serif}h1.svelte-60f8f8,h3.svelte-60f8f8{margin:0;padding:0}a.svelte-60f8f8{text-decoration:none}a.svelte-60f8f8:hover{cursor:pointer}a.svelte-60f8f8:visited{color:black}main.svelte-60f8f8{margin-top:35px;padding:0 0}footer.svelte-60f8f8{color:black;text-align:center;margin:30px 0}.title.svelte-60f8f8{display:flex;align-items:center;gap:10px;margin-top:15px;margin-left:15px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<main class="${"svelte-60f8f8"}"><a class="${"title svelte-60f8f8"}" href="${"/"}"><img src="${"../ah_logo.png"}" alt="${"ah_logo"}" width="${"48px"}" class="${"svelte-60f8f8"}"> 
        <h1 class="${"svelte-60f8f8"}">Appie kookboek</h1></a>
    <br class="${"svelte-60f8f8"}">

    ${slots.default ? slots.default({}) : ``}

    <footer class="${"svelte-60f8f8"}"><h3 class="${"svelte-60f8f8"}">Made with ❤️ by <a href="${"https://wouterpennings.com"}" class="${"svelte-60f8f8"}">Wouter Pennings</a></h3></footer></main>`;
});
export {
  Layout as default
};
