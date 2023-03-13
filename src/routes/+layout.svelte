<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    * {
        font-family: 'Raleway', sans-serif;
    }

    h1, h3{
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
    }

    a:visited {
        color: black;
    }


    main {
        margin-top: 35px;
        padding: 0 15px;

    } 

    footer {
        color: black;
        text-align: center;
        margin: 30px 0;
    }

    .title {
        display:flex; 
        align-items: center; 
        gap: 10px; 
        margin-top: 15px;
    }

</style>




<main>
    <a class="title" href="/">
        <img src="ah_logo.png" alt="ah_logo" width="48px"> 
        <h1>Appie kookboek</h1>
    </a>
    <br>

    <slot></slot>

    <footer>
        <h3>Made with ❤️ by <a href="https://wouterpennings.com">Wouter Pennings</a></h3>
    </footer>
</main>
