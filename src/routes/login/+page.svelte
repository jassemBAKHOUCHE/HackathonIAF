<script>
    import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabase";
    import bcrypt from "bcryptjs";
  
    let password = "";
    let message = "";
  
    async function handleLogin(event) {
      event.preventDefault();
  
      // Fetch the hashed password from Supabase (row where id = 1)
      const { data, error } = await supabase
        .from("password")
        .select("password") // Select only the password column
        .eq("id", 1) // Look for the row where id = 1
        .single();
  
      if (error || !data) {
        message = "❌ Erreur de connexion: Impossible de récupérer le mot de passe.";
        console.error(error);
        return;
      }
  
      const hashedPassword = data.password; // Retrieved hashed password
  
      // Compare the entered password with the hashed password
      const isValid = await bcrypt.compare(password, hashedPassword);
  
      if (isValid) {
        message = "✅ Connexion réussie !";
        setTimeout(() => goto("/admin"), 1000); // Redirect to the admin page
      } else {
        message = "❌ Mot de passe incorrect.";
      }
    }
  </script>
  
  <div class="login-container">
    <h2>Se connecter en tant qu'administrateur</h2>
  
    <form on:submit={handleLogin}>
      <label for="password">Mot de passe</label>
      <input type="password" id="password" bind:value={password} placeholder="Entrez votre mot de passe" required />
      
      <button type="submit">Se connecter</button>
    </form>
  
    <p>{message}</p>
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
  