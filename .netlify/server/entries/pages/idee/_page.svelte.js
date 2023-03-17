import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { B as Backbtn } from "../../../chunks/Backbtn.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-17dxg39{font-family:'Raleway', sans-serif}main.svelte-17dxg39{padding:0 10px}p.svelte-17dxg39,h2.svelte-17dxg39{margin:0;padding:0}a.svelte-17dxg39{display:flex;justify-content:center;margin-top:30px;margin-bottom:10px;padding:5px 20px;text-decoration:none;font-weight:800;color:black;border-radius:16px;background-color:#ff7900}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13sl41r_START -->${$$result.title = `<title>Appie Kookboek | Ideeën</title>`, ""}<!-- HEAD_svelte-13sl41r_END -->`, ""}

<main class="${"svelte-17dxg39"}">${validate_component(Backbtn, "Backbtn").$$render($$result, { url: "/" }, {}, {})}

    <h2 class="${"subtitle svelte-17dxg39"}">Nieuwe recept of idee?</h2>
    <br class="${"svelte-17dxg39"}">
    <p class="${"svelte-17dxg39"}">Deze pagina is helaas nog in ontwikkeling. Als je al een idee hebt, klik dan op de link hieronder. In het mailtje staan het liefst deze dingen:
    </p>
    <ol class="${"svelte-17dxg39"}"><li class="${"svelte-17dxg39"}">Hoofd ingredienten </li>
        <li class="${"svelte-17dxg39"}">Topings voor eten</li>
        <li class="${"svelte-17dxg39"}">Foto&#39;s van het eten</li>
        <li class="${"svelte-17dxg39"}">Belangrijke opmerkingen</li></ol>

    <p class="${"svelte-17dxg39"}">Maar deze dingen mogen er ook best in staan:
    </p>
    <ul class="${"svelte-17dxg39"}"><li class="${"svelte-17dxg39"}">Vragen</li>
        <li class="${"svelte-17dxg39"}">Tips; tops; opmerkingen; liefdesverklaringen - allemaal goed!</li>
        <li class="${"svelte-17dxg39"}">Functionaliteit aanvragen</li></ul>

    <a href="${"mailto:wouter.pennings@outlook.com?subject=Appie kookboek recept idee"}" class="${"svelte-17dxg39"}"><h2 class="${"svelte-17dxg39"}">Stuur idee via Email</h2></a></main>`;
});
export {
  Page as default
};
