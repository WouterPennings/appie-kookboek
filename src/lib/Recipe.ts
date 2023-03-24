export interface Ingredient {
  name: string;
  options?: string[];
}

export interface Recipe {
  name: string;
  inventors: string[];
  img_path: string[];
  main_ingredients: Ingredient[];
  topings: Ingredient[];
  description?: string | string[];
  vegan: boolean;
  vega: boolean;
  fish: boolean;
  meat: boolean;
  veganable: boolean;
  microwave: boolean;
  airfryer: boolean;
  pan: boolean;
}

export const recipes: Recipe[] = [
  {
    name: "Gerookte Zalm Bagel",
    inventors: ["Wouter Pennings", "Vincent Jansen"],
    img_path: ["food/salmon_bagel.png"],
    main_ingredients: [
      { name: "Gerookte zalm (warm of koud)" },
      { name: "Bagel" },
      { name: "Roomkaas (bijv. met kruiden)" },
    ],
    topings: [
      { name: "Avocado" },
      { name: "Ijsbergsla" },
      { name: "Gefrietuurde uitjes" },
      { name: "Mosterd-dille saus" },
      { name: "komkommer" },
    ],
    vegan: false,
    vega: false,
    fish: true,
    meat: false,
    veganable: false,
    microwave: false,
    airfryer: true,
    pan: false,
  },
  {
    name: "Libanese Wraps",
    inventors: ["Wouter Pennings", "Vincent Jansen"],
    img_path: ["food/libanese_wraps.png"],
    main_ingredients: [
      { name: "Libanese wraps" }, 
      { name: "Falafel" }, 
      { name: "Hummus" }
    ],
    topings: [
      { name: "komkommer" }, 
      { name: "Tomaatjes" }, 
      { name: "Rode/witte ui" },
      { name: "Sriracha" }, 
      { name: "Witte kaas / Feta" }
    ],
    vegan: true,
    vega: true,
    fish: false,
    meat: false,
    veganable: true,
    microwave: true,
    airfryer: false,
    pan: false,
  },
  {
    name: "Poke Bowl",
    inventors: ["Wouter Pennings", "Job Sturm"],
    img_path: ["food/poke_bowl.jpg"],
    main_ingredients: [
      { name: "Rijst (Magentron of zelf koken)" },
      { name: "Gerookte zalm (Warm of koud)" },
      { name: "Saus", options: ["Sesam mayo", "Wasabi mayo"] },
    ],
    topings: [
      { name: "Komkommer" },
      { name: "Tauge" },
      { name: "Zeewiersalade" },
      { name: "Fruit", options: ["Mango", "Ananas"] },
      { name: "Japanse gehaktballen" },
      { name: "Surimi" },
      { name: "Avocado" },
    ],
    vegan: false,
    vega: false,
    fish: true,
    meat: true,
    veganable: true,
    microwave: true,
    airfryer: false,
    pan: false,
  },
  {
    name: "Broodje Kroket",
    inventors: ["Wouter Pennings"],
    img_path: ["food/broodje_kroket.jpeg"],
    main_ingredients: [
      { name: "Zacht broodje" }, 
      { name: "Kroket of bitterballen" }, 
    ],
    topings: [
      { name: "Ijsbergsla" }, 
      { name: "Mosterd" }
    ],
    vegan: false,
    vega: false,
    fish: false,
    meat: true,
    veganable: true,
    microwave: false,
    airfryer: true,
    pan: false,
  },
  {
    name: "Ramen",
    inventors: ["Job Sturm", "Wouter Pennings"],
    img_path: ["food/ramen.png"],
    main_ingredients: [
      { name: "Ramen noodles" }, 
      { name: "Bouilion blokjes", options: ["Rund", "Planten", "Kip", "etc."] },
    ],
    topings: [
      { name: "Paksoi" },
      { name: "Kool" },
      { name: "Paddestoelen" },
      { name: "Soyasaus" },
      { name: "Lente ui" },
      { name: "Zacht gekookt ei" },
    ],
    description: "Dit werkt goed voor grotere groepen, zorg alleen wel dat je minder noodles maakt dan je verwacht. Ervaring leert dat je ongeveer 1/3 minder noodles gebruikt dan normaal.",
    vegan: false,
    vega: true,
    fish: false,
    meat: false,
    veganable: true,
    microwave: false,
    airfryer: false,
    pan: true,
  },
  {
    name: "Kibbeling Tortilla",
    inventors: ["Wouter Pennings"],
    img_path: ["food/no_img.png"],
    main_ingredients: [
      { name: "Tortilla" }, 
      { name: "Kibbeling (Kan ook lekkerbekje)" }, 
      { name: "Ravigotte saus" }
    ],
    topings: [
      { name: "Rode ui" },
      { name: "Ijsbergsla" },
      { name: "Augurk" },
      { name: "Cherry tomaatjes" },
      { name: "Gekruimde tortilla chips" },
    ],
    vegan: false,
    vega: false,
    fish: true,
    meat: false,
    veganable: true,
    microwave: false,
    airfryer: true,
    pan: false,
  },
  {
    name: "Vegan Hamburger",
    inventors: ["Job Sturm"],
    img_path: ["food/hamburger.jpeg"],
    main_ingredients: [
      { name: "Broodje (Hard of zacht)" }, 
      { name: "Burger", options: ["Vega", "Rund", "Kip"] }, 
      { name: "Saus", options: ["Mayonaise", "Burgersaus", "Ketchup", "etc."] }
    ],
    topings: [
      { name: "Ijsbergsla" }, 
      { name: "Gefrietuurde uitjes" }, 
      { name: "Augurk" },
      { name: "Kaas" }
    ],
    vegan: true,
    vega: true,
    fish: false,
    meat: false,
    veganable: true,
    microwave: true,
    airfryer: false,
    pan: false,
  },
  {
    name: "Pita met Gehaktballen",
    inventors: ["Anouk Nobel", "Wouter Pennings"],
    img_path: ["food/no_img.png"],
    main_ingredients: [
      { name: "Pita broodje" }, 
      { name: "Gehaktballen", options: ["Aziatisch", "Gewoon", "Vega"] }, 
      { name: "Knoflook saus" }
    ],
    topings: [
      { name: "Ijsbergsla" }, 
      { name: "Komkommer" }, 
      { name: "Rode ui" },
      { name: "Tomaat" }, 
      { name: "Augurk" }
    ],
    vegan: false,
    vega: false,
    fish: false,
    meat: true,
    veganable: true,
    microwave: true,
    airfryer: true,
    pan: false,
  },
  {
    name: "Pita met Falafel",
    inventors: ["Wouter Pennings"],
    img_path: ["food/pita_falafel.jpg"],
    main_ingredients: [
      { name: "Pita broodje" }, 
      { name: "Falafel" }, 
      { name: "Knoflook saus" }
    ],
    topings: [
      { name: "Ijsbergsla" }, 
      { name: "Komkommer" }, 
      { name: "Rode ui" },
      { name: "Tomaat" }, 
      { name: "Augurk" }
    ],
    vegan: true,
    vega: true,
    fish: false,
    meat: false,
    veganable: true,
    microwave: true,
    airfryer: true,
    pan: false,
  },
];

export const recipeNames: string[] = recipes.map(r => r.name);
