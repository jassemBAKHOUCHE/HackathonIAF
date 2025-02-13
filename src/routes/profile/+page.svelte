<script context="module">
    import profiles from '$lib/profiles.json';
  
    export function load({ params }) {
      return {
        props: { profile }
      };
    }
  </script>
  
  <script>
    export let profile;
  </script>

  <main>
    <h1>Profil Utilisateur</h1>
      <p><strong>ID:</strong> {profile.id}</p>
      <p><strong>Pseudo:</strong> {profile.pseudo}</p>

    {#if profile.admin}
      <p><a href="/panel"> Accéder au panel de personnalisation</a></p>
    {/if}
  </main>
  