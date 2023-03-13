<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    * {
        font-family: 'Raleway', sans-serif;
    }

    main {
        margin-top: 30px;
        padding: 0 15px
    } 

    footer {
        display: flex;
        justify-content: center;
        margin: 50px 0 20px 0;
        padding: 0 5px; 
    }
</style>

<main>
    <slot></slot>

    <footer>
        <h3>Made with ❤️ by <a href="https://wouterpennings.com">Wouter Pennings</a></h3>
    </footer>
</main>
