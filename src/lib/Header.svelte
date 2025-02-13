<script>
  export let title = "Ingénieur-e au Féminin";
</script>

<style>

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo {
    width: 40px; /* Taille adaptée */
    height: auto;
  }

  .logo-title {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
</style>

<header>
  <div class="nav-container">
    <!-- Logo + Titre -->
    <div class="logo-container">
      <img src="/logo.png" alt="Logo IAF" class="logo" />
      <a href="/" class="logo-title">{title}</a>
    </div>

    <!-- Navigation -->
    <nav>
      <ul class="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/login">Se connecter</a></li>
        <li><a href="/events">Evenements</a></li>
      </ul>
    </nav>
  </div>
</header>
