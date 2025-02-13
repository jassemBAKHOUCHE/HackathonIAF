<script>
  export let title = "IAF - Ingénieur-e au Féminin";
  let menuOpen = false;
</script>

<style>
  @import "./header.css";

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo {
    width: 40px;
    height: auto;
  }

  .menu-btn {
    display: none;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
  }

  @media (max-width: 768px) {
    .menu-btn {
      display: block;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 50px;
      right: 10px;
      width: 200px;
      background: var(--primary-color);
      border-radius: 5px;
      padding: 10px;
    }

    .nav-links.open {
      display: flex;
    }
  }
</style>

<header>
  <div class="nav-container">
    <!-- Logo + Titre -->
    <div class="logo-container">
      <img src="/logo.png" alt="Logo IAF" class="logo" />
      <a href="/" class="logo-title">{title}</a>
    </div>

    <!-- Bouton Menu Mobile -->
    <button class="menu-btn" on:click={() => (menuOpen = !menuOpen)}>
      {menuOpen ? "✖" : "☰"}
    </button>

    <!-- Navigation -->
    <nav>
      <ul class="nav-links {menuOpen ? 'open' : ''}">
        <li><a href="/">Accueil</a></li>
        <li><a href="/events">Evenements</a></li>
        <li><a href="/login">Connexion</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
