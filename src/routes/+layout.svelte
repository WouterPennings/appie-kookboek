<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    * {
        font-family: 'Raleway', sans-serif;
    }

    main {
        padding: 0 10px
    } 

    /* nav {
        width: 100%;

        display: flex; 
        justify-content: space-around; 
        align-items: center; 

        background-color: lightblue;
        padding: 0 10px;
    }

    .logo {
        width: 48px;
    }

    .nav-text {
        font-size: 20px;
        font-weight: 600;
    }

    a, a:visited, a:active {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    } */
</style>

<!-- This is the navbar, currently not in use, maybe later is needed
<nav>
    <a class="nav-text nav-btn" href="/recepten">Recepten</a>
    <a href="/">
        <img class="logo" alt="ah_logo" src="ah_logo.png">
    </a>
    <a class="nav-text nav-btn" href="/info">Info</a>
</nav> -->

<br>

<main>
    <slot></slot>
</main>
