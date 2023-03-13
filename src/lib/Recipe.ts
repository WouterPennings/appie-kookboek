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
    vegan: boolean;
    vega: boolean;
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
      main_ingredients: [{ name: "Gerookte zalm (warm of koud)" }, { name: "Bagel" }, { name: "Roomkaas (bijv. met kruiden)"}],
      topings: [{ name: "Avocado"}, { name: "Ijsbergsla"}, { name: "Gefrietuurde uitjes"}, { name: "Mosterd-dille saus"}, { name: "komkommer"},],
      vegan: false,
      vega: true,
      veganable: false,
      microwave: false,
      airfryer: true,
      pan: false,
    },
    {
      name: "Poke Bowl",
      inventors: ["Wouter Pennings", "Job Sturm"],
      img_path: ["food/poke_bowl.jpg"],
      main_ingredients: [{ name: "Rijst (Magentron of zelf koken)" }, { name: "Gerookte zalm (Warm of koud)" }, { name: "Saus (Bijv. Sesam of wasabi mayo)" }],
      topings: [],
      vegan: false,
      vega: false,
      veganable: true,
      microwave: true,
      airfryer: false,
      pan: false,
    },
    {
      name: "Broodje Kroket",
      inventors: ["Wouter Pennings"],
      img_path: ["food/broodje_kroket.jpeg"],
      main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }],
      topings: [],
      vegan: true,
      vega: true,
      veganable: true,
      microwave: false,
      airfryer: true,
      pan: false,
    },
    {
      name: "Ramen",
      inventors: ["Job Sturm", "Wouter Pennings"],
      img_path: ["food/ramen.png"],
      main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }],
      topings: [],
      vegan: true,
      vega: true,
      veganable: true,
      microwave: false,
      airfryer: false,
      pan: true,
    },
    {
      name: "Kibbeling Tortilla",
      inventors: ["Wouter Pennings"],
      // img_path: ["food/wrapskibbeling.png"],
      img_path: ["food/no_img.png"],
      main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }],
      topings: [],
      vegan: true,
      vega: true,
      veganable: true,
      microwave: false,
      airfryer: true,
      pan: false,
    },
    {
      name: "Vegan Hamburger",
      inventors: ["Job Sturm"],
      img_path: ["food/hamburger.jpeg"],
      main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }],
      topings: [],
      vegan: true,
      vega: true,
      veganable: true,
      microwave: true,
      airfryer: false,
      pan: false,
    },
    {
      name: "Pita met Gehaktballen",
      inventors: ["Anouk Nobel", "Wouter Pennings"],
      // img_path: ["food/pita_meatballs.png"],
      img_path: ["food/no_img.png"],
      main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }],
      topings: [],
      vegan: true,
      vega: true,
      veganable: true,
      microwave: true,
      airfryer: true,
      pan: false,
    },
    {
      name: "Pita met Falafel",
      inventors: ["Wouter Pennings"],
      img_path: ["food/pita_falafel.jpg"],
      main_ingredients: [{ name: "Zacht broodje" }, { name: "Kroket" }],
      topings: [],
      vegan: true,
      vega: true,
      veganable: true,
      microwave: true,
      airfryer: true,
      pan: false,
    },
  ];
  