<script context="module">
  // Importer les données du fichier JSON (pour un exemple, on peut charger les données directement dans le fichier Svelte)
  export async function load() {
    console.log("ha")
    const users = await fetch('$lib/profiles.json');
    return { props: { users } };
  }
</script>

<script>
  export let users = [];
</script>

<main>
  <h1>Liste des utilisateurs</h1>
  <ul>
    {#each users as { id, pseudo }}
      <li>ID: {id}, Pseudo: {pseudo}</li>
    {/each}
  </ul>
</main>