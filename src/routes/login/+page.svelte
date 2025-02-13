<script>
    let email = '';
    let password = '';
    let isLoginMode = true;
</script>

<div class="login-container">
    <h2>{isLoginMode ? 'Se connecter' : 'Créer un compte'}</h2>

    <form>
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} placeholder="Entrez votre email" required />

        <label for="password">Mot de passe</label>
        <input type="password" id="password" bind:value={password} placeholder="Entrez votre mot de passe" required />

        {#if !isLoginMode}
            <!-- Champ supplémentaire pour l'inscription -->
            <label for="confirm-password">Confirmer le mot de passe</label>
            <input type="password" id="confirm-password" placeholder="Confirmez votre mot de passe" required />
        {/if}

        <button type="submit">{isLoginMode ? 'Se connecter' : 'S\'inscrire'}</button>
    </form>

    <p class="toggle">
        {isLoginMode ? "Pas encore de compte ?" : "Déjà un compte ?"} 
        <a href="#" on:click|preventDefault={() => isLoginMode = !isLoginMode}>
            {isLoginMode ? "Créer un compte" : "Se connecter"}
        </a>
    </p>
</div>
<style>
    .login-container {
        width: 100%;
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        margin-bottom: 10%;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        color: #333;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 8px;
        color: #555;
        font-size: 1rem;
    }

    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }

    button {
        padding: 10px;
        background-color: #D085FA;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }

    button:hover {  
        background-color: #520184;
    }
</style>
