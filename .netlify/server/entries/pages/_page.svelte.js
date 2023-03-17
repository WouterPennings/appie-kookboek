import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
const Zekerheid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h3.svelte-ap0znu,p.svelte-ap0znu{margin:0}.subsubtitle.svelte-ap0znu{display:flex;align-items:center;gap:10px;margin-top:15px;margin-bottom:5px;text-align:center;font-weight:700;color:#ff7900}",
  map: null
};
const Zekerheid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { text } = $$props;
  let { img_path } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.img_path === void 0 && $$bindings.img_path && img_path !== void 0)
    $$bindings.img_path(img_path);
  $$result.css.add(css$1);
  return `<div class="${"subsubtitle svelte-ap0znu"}"><img${add_attribute("src", img_path, 0)} alt="${"carrot_icon"}" width="${"24px"}">
    <h3 class="${"svelte-ap0znu"}">${escape(subtitle)}</h3></div>
<p class="${"svelte-ap0znu"}">${escape(text)}</p>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');.svelte-19zs8w8{font-family:'Raleway', sans-serif}h2.svelte-19zs8w8,h3.svelte-19zs8w8,p.svelte-19zs8w8{margin:0}main.svelte-19zs8w8{margin:0 10px}.subtitle.svelte-19zs8w8{margin-top:30px;font-weight:800}.btn-recipe.svelte-19zs8w8{margin-top:30px;margin-bottom:10px;padding:5px 20px;display:flex;justify-content:space-between;align-items:center;text-decoration:none;font-weight:800;color:black;border-radius:16px;width:260px;background-color:#e2f1fb}.btn-recipe.svelte-19zs8w8:hover{transition-duration:250ms;background-color:#00ade6;width:89%}.btn-idea.svelte-19zs8w8{padding:5px 20px;display:flex;justify-content:space-between;align-items:center;width:max-content;border-radius:16px;color:white;background-color:#ff7900;text-decoration:none;font-weight:900}.home_img.svelte-19zs8w8{width:100%;border-radius:16px;margin-top:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-gjv7gd_START -->${$$result.title = `<title>Appie Kookboek</title>`, ""}<!-- HEAD_svelte-gjv7gd_END -->`, ""}

<main class="${"svelte-19zs8w8"}"><h3 style="${"text-align: start;"}" class="${"svelte-19zs8w8"}">De lekkerste recepten voor tijdens de avond pauze!</h3>

    <a class="${"btn-recipe svelte-19zs8w8"}" href="${"/recepten"}"><h2 class="${"svelte-19zs8w8"}">Naar de recepten</h2>  
        <img src="${"icons/arrow_icon.png"}" alt="${"arrow"}" width="${"36px"}" height="${"36px"}" class="${"svelte-19zs8w8"}"></a>

    <div style="${"display: flex; justify-content: end;"}" class="${"svelte-19zs8w8"}"><a class="${"btn-idea svelte-19zs8w8"}" href="${"/idee"}"><h2 class="${"svelte-19zs8w8"}">Nieuw idee?</h2></a></div>

    <img src="${"home_img2.jpg"}" alt="${"home_img"}" class="${"home_img svelte-19zs8w8"}"> 

    <h2 class="${"subtitle svelte-19zs8w8"}">Over het kookboek</h2>
    <br class="${"svelte-19zs8w8"}">
    <p class="${"svelte-19zs8w8"}">Het is best simpel. Wouter moest elke week avond eten bij de Appie, alleen vindt magnetron maaltijden niet lekker en wraps met kip 🐓 elke week gaat hij ook niet aan beginnen.
        <br class="${"svelte-19zs8w8"}"> <br class="${"svelte-19zs8w8"}">
        Hier vind jij dus een lijst aan recepten voor het avond eten bij de Albert Heijn die goedgekeurd zijn door Wouter. 
        De recepten ze bedoelt voor (kleine) groepjes, maar in je eentje kan bij sommigen ook! 
        Wouter heeft ze natuurlijk niet allemaal zelf bedacht, de creativiteit van ander word altijd gewaardeerd.
    </p>

    <h2 class="${"subtitle svelte-19zs8w8"}">De 5 recept zekerheden</h2>
    
    ${validate_component(Zekerheid, "Zekerheid").$$render(
    $$result,
    {
      subtitle: "Binnen budget",
      img_path: "icons/dollar_icon.png",
      text: "Alle recepten vallen onder de prijs plafon van het inflatie-gekoppelde maaltijd budget."
    },
    {},
    {}
  )}

    ${validate_component(Zekerheid, "Zekerheid").$$render(
    $$result,
    {
      subtitle: "Gezonder",
      img_path: "icons/carrot_icon.png",
      text: "Door veel gebruik te maken van verse producten met minder zout en suiker dan de kant-en-klaar maaltijden."
    },
    {},
    {}
  )}

    ${validate_component(Zekerheid, "Zekerheid").$$render(
    $$result,
    {
      subtitle: "Variërend",
      img_path: "icons/star_icon.png",
      text: "Veel verschillende soorten maaltijden, waarbij veel gebruik wordt gemaakt van verschillende groente, eiwitten en koolhydraten."
    },
    {},
    {}
  )}

    ${validate_component(Zekerheid, "Zekerheid").$$render(
    $$result,
    {
      subtitle: "Lekker vers!",
      img_path: "icons/leaf_icon.png",
      text: "Door het gebruik van bijvoorbeeld verse groente zijn deze maaltijden een stuk verser dan de meeste dingen die je bij de Appie zou eten."
    },
    {},
    {}
  )}

    ${validate_component(Zekerheid, "Zekerheid").$$render(
    $$result,
    {
      subtitle: "Vlugge bereiding",
      img_path: "icons/clock_icon.png",
      text: "De recepten hebben een snelle bereiding zeker voor grotere groepen. Hierdoor kan jij weer snel door met werken."
    },
    {},
    {}
  )}</main>`;
});
export {
  Page as default
};
