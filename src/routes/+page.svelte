<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    * {
        font-family: 'Raleway', sans-serif;
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }

    p {
        text-align: center;
    }

    main {
        margin-top: 30px;
        padding: 0 5px;
    }

    footer {
        display: flex;
        justify-content: center;
        margin: 50px 0 20px 0;
        padding: 0 5px; 
    }

    .title {
        display:flex; 
        align-items: center; 
        gap: 10px; 
        margin: 5px 0;
    }

    .subtitle {
        margin-top: 50px;
        text-align: center;
        font-weight: 800;
    }

    .subsubtitle {
        display:flex; 
        justify-content: center;
        align-items: center; 
        gap: 10px; 

        margin-top: 15px;
        margin-bottom: 5px;
        text-align: center;
        font-weight: 700;
        color: #ff7900;
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
        width: 100%;
        margin-top: 10px;
        border-radius: 16px;
    }
</style>

<main>
    <div class="title">
        <img src="ah_logo.png" alt="ah_logo" width="48px"> 
        <h1>Appie kookboek</h1>
    </div>
    <h3>De lekkerste recepten voor tijdens de avond pauze!</h3>
    
    <a class="btn-recipe" href="/recepten">
        <h2>Naar de recepten</h2>  
        <img src="arrow.png" alt="arrow" width="36px" height="36px"> 
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
        Hier vind jij dus een lijst aan recepten voor het avond eten bij de Albert Heijn die goedgekeurd zijn door Wouter. De recepten ze bedoelt voor (kleine) groepjes, maar in je eentje kan bij sommigen ook! Wouter heeft ze natuurlijk niet allemaal zelf bedacht, de creativiteit van ander word altijd gewaardeerdt.
    </p>

    <h2 class="subtitle">De recept garanties</h2>
    <div class="subsubtitle">
        <img src="carrot_icon.png" alt="carrot_icon">
        <h3>Gezonder</h3>
    </div>
    <p>Door veel gebruik te maken van verse producten met minder zout en suiker dan de kant-en-klaar maaltijden.</p>

    <div class="subsubtitle">
        <img src="star_icon.png" alt="star_icon">
        <h3>Variërend</h3>
    </div>
    <p>Veel verschillende soorten maaltijden, waarbij veel gebruik wordt gemaakt van verschillende groente, eiwitten en koolhydraten.</p>


    <div class="subsubtitle">
        <img src="leaf_icon.png" alt="leaf_icon">
        <h3>Frisser</h3>
    </div>
    <p>Door het gebruik van bijvoorbeeld verse groente zijn deze maaltijden een stuk verser dan de meeste dingen die je bij de Appie zou eten.</p>
 
</main>

<footer>
    <h3>Made with ❤️ by <a href="https://wouterpennings.com">Wouter Pennings</a></h3>
</footer>

