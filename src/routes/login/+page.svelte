<script>
    let password = '';
    let isLoginMode = true;
</script>

<div class="login-container">
    <h2>Se connecter en temps qu'administrateur</h2>

    <form>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" bind:value={password} placeholder="Entrez votre mot de passe" required />

        
        <button type="submit">Se connecter</button>
    </form>

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
