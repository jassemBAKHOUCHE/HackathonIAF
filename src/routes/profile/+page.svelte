<script context="module">
  import profiles from '$lib/profiles.json';
  console.log('Profiles:', profiles);  // Vérifie le contenu de profiles

  export function load() {
    // Récupère le premier profil de la liste
    const profile = profiles[0];  // Ou vous pouvez utiliser `params` pour récupérer un profil spécifique

    // Affiche profile dans la console

    return {
      props: { profile }
    };
  
  console.log(profile)
  }
</script>

<script>
export let profile; // Import the profile passed as a prop
</script>

<main>
<h1>Profil Utilisateur</h1>
<p><strong>ID: </strong></p>
<p><strong>Pseudo:</strong></p>
</main>