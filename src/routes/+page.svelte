<script>
    import Zekerheid from "$lib/Zekerheid.svelte";

    
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    * {
        font-family: 'Raleway', sans-serif;
        text-align: center;
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }

    .subtitle {
        margin-top: 50px;
        font-weight: 800;
    }

    .btn-recipe {
        margin-top: 30px;
        margin-bottom: 10px;
        padding: 5px 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        text-decoration: none;
        font-weight: 800;
        color: black;
        border-radius: 16px;
        width: 260px;
        background-color: #e2f1fb;
    } 

    .btn-recipe:hover {
        transition-duration: 250ms;
        background-color: #00ade6;
        width: 89%;
    }

    .btn-idea {
        padding: 5px 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        width: max-content;

        border-radius: 16px;
        color: white;
        background-color: #ff7900;
        text-decoration: none;
        font-weight: 900;
    }

    .home_img {
        margin-left: 20px;
        width: 85%;
        margin-top: 10px;
        border-radius: 16px;
    }
</style>

<h3 style="text-align: start;">De lekkerste recepten voor tijdens de avond pauze!</h3>

<a class="btn-recipe" href="/recepten">
    <h2>Naar de recepten</h2>  
    <img src="icons/arrow_icon.png" alt="arrow" width="36px" height="36px"> 
</a>

<div style="display: flex; justify-content: end;">
    <a class="btn-idea" href="/idee"><h2>Nieuw idee?</h2></a>   
</div>

<img src="home_img2.jpg" alt="home_img" class="home_img"> 

<h2 class="subtitle">Over het kookboek</h2>
<br>
<p>
    Het is best simpel. Wouter moest elke week avond eten bij de Appie, alleen vindt magnetron maaltijden niet lekker en wraps met kip 🐓 elke week gaat hij ook niet aan beginnen.
    <br> <br>
    Hier vind jij dus een lijst aan recepten voor het avond eten bij de Albert Heijn die goedgekeurd zijn door Wouter. 
    De recepten ze bedoelt voor (kleine) groepjes, maar in je eentje kan bij sommigen ook! 
    Wouter heeft ze natuurlijk niet allemaal zelf bedacht, de creativiteit van ander word altijd gewaardeerd.
</p>

<h2 class="subtitle">De 5 recept zekerheden</h2>
 
<Zekerheid 
    subtitle="Binnen budget" 
    img_path="icons/dollar_icon.png" 
    text="Alle recepten vallen onder de prijs plafon van het inflatie-gekoppelde maaltijd budget.">
</Zekerheid>

<Zekerheid 
    subtitle="Gezonder" 
    img_path="icons/carrot_icon.png" 
    text="Door veel gebruik te maken van verse producten met minder zout en suiker dan de kant-en-klaar maaltijden.">
</Zekerheid>

<Zekerheid 
    subtitle="Variërend" 
    img_path="icons/star_icon.png" 
    text="Veel verschillende soorten maaltijden, waarbij veel gebruik wordt gemaakt van verschillende groente, eiwitten en koolhydraten.">
</Zekerheid>

<Zekerheid 
    subtitle="Lekker vers!" 
    img_path="icons/leaf_icon.png" 
    text="Door het gebruik van bijvoorbeeld verse groente zijn deze maaltijden een stuk verser dan de meeste dingen die je bij de Appie zou eten.">
</Zekerheid>

<Zekerheid 
    subtitle="Vlugge bereiding" 
    img_path="icons/clock_icon.png" 
    text="De recepten hebben een snelle bereiding zeker voor grotere groepen. Hierdoor kan jij weer snel door met werken.">
</Zekerheid>
