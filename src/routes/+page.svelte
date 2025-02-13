<div class="container">
  <h1>Bienvenue sur le site de IAF - Ingénieur-e au Féminin</h1>

  <h2>Événements à venir</h2>

  <div class="carousel">
    <button on:click={prev} class="prev">‹</button>
      <div class = "carousel-container">
        <p class="carousel-titre">{upcomingEvents[currentIndex]?.titre}</p>
        <p class="carousel-date">{formatDate(upcomingEvents[currentIndex]?.date)}</p>
        <p class="carousel-description">{upcomingEvents[currentIndex]?.description}</p>
      </div>
    <button on:click={next} class="next">›</button>
    
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
  
    let events = [];
    let upcomingEvents = [];
    let pastEvents = [];
    let today = new Date().toISOString().split("T")[0];
  
    async function fetchEvents() {
      let { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error("Erreur de récupération :", error.message);
      } else {
        events = data;
        console.log(events);
        upcomingEvents = events.filter(event => event.date >= today);
        pastEvents = events.filter(event => event.date < today);
      }
    }
  
    onMount(fetchEvents);

    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');  // Ajoute un zéro devant si nécessaire
      const month = String(date.getMonth() + 1).padStart(2, '0');  // Les mois commencent à 0, donc ajout +1
      const year = date.getFullYear();
      return `${day} / ${month} / ${year}`;
    }


  import { onDestroy } from 'svelte';
  let images = [
    '../../favicon.png',
    '../../Logo_Credit_Agricol.jpg',
    '../../Logo_CVEC.png'
  ];
  
  let currentIndex = 0;
  
  function next() {
    currentIndex = (currentIndex + 1) % upcomingEvents.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % upcomingEvents.length;
  }

  let interval;
  onMount(() => {
    interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  });
</script>
