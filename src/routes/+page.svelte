
<div class="container">
  <h1>Bienvenue sur le site de IAF - Ingénieur-e au Féminin</h1>

  <h2>Événements à venir</h2>

  <div class="event">
    {#if upcomingEvents.length > 0}
      <p class="event-titre">{upcomingEvents[0].titre}</p>
      <p class="event-date">{formatDate(upcomingEvents[0].date)}</p>
      <p class="event-description">{upcomingEvents[0].description}</p>
    {:else}
      <p>Aucun événement à venir.</p>
    {/if}
  </div>

  <h2>Présentation de l'association</h2>
  <p>
    Ingénieur-e au féminin est une association de Polytech Annecy-Chambéry qui
    œuvre pour la promotion de l’égalité femmes-hommes dans les études
    scientifiques. Son objectif est d’encourager les jeunes filles à s’orienter
    vers les carrières d’ingénierie et de sensibiliser l’ensemble des étudiants
    aux enjeux de mixité dans ces domaines.
  </p>
  <h2>Organigramme</h2>
  <div class="chartH1Container">
  </div>
  <div class="chartGrid">
    <div class="chartModule">
      <span class="chartName">Emma Rechon-Reguet</span>
      <hr class="chartLine" />
      <span class="chartTitle">Présidente</span>
      <img src="/images_ornigramme/presidente.jpg" alt="photo_presidente" />
    </div>
  </div>
  <div class="chartH1Container">
  </div>
  <div class="chartGrid">
    <div class="chartModule">
      <span class="chartName">Alyssa Belleville</span>
      <hr class="chartLine" />
      <span class="chartTitle">Secrétaire</span>
      <img src="/images_ornigramme/secretaire.jpg" alt="photo_presidente" />
    </div>
    <div class="chartModule">
      <span class="chartName">Julie Fabre</span>
      <hr class="chartLine" />
      <span class="chartTitle">Vice Présidente</span>
      <img src="/images_ornigramme/vice_presidente.jpg" alt="photo_presidente" />
    </div>
  </div>
  <h2>Nos actions et événements</h2>
  <p>
    Tout au long de l’année, Ingénieur-e au féminin mène diverses actions pour
    promouvoir la place des femmes dans l’ingénierie. L’association intervient
    dans les collèges et lycées pour déconstruire les stéréotypes et encourager
    les jeunes filles à choisir des filières scientifiques. Elle organise
    également des conférences avec des professionnels du secteur afin de motiver
    et d’inspirer les étudiants.
  </p>
</div>


<script>
  import { onMount } from "svelte";
  import { supabase } from "../lib/supabase.js";

  let upcomingEvents = [];

  async function fetchEvents() {
    let today = new Date().toISOString().split("T")[0];
    let { data, error } = await supabase
      .from("events")
      .select("*")
      .gte("date", today)
      .order("date", { ascending: true })

    if (error) {
      console.error("Erreur de récupération :", error.message);
    } else {
      upcomingEvents = data;
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  onMount(fetchEvents);
</script>
