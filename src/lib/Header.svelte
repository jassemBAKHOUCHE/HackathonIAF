<script>
  export let title = "IAF - Ingénieur-e au Féminin";
  let menuOpen = false;
</script>


<header>
  <div class="nav-container">
    <!-- Logo -->
    <a href="/" class="logo">{title}</a>

    <!-- Bouton Menu Mobile -->
    <button class="menu-btn" on:click={() => (menuOpen = !menuOpen)}>
      {menuOpen ? "✖" : "☰"}
    </button>

    <!-- Navigation -->
    <nav>
      <ul class="nav-links {menuOpen ? 'open' : ''}">
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À Propos</a></li>
        <li><a href="/actions">Nos Actions</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Se connecter</a></li>
      </ul>
    </nav>
  </div>
</header>
