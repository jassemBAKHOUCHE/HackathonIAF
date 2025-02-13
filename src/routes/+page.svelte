<div class="container">
  <h1>Bienvenue sur le site de IAF - Ingénieur-e au Féminin</h1>

  <div class="carousel">
    <button on:click={prev} class="prev">‹</button>
      <img src={images[currentIndex]} alt="" class="carousel-img" />
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
      <span class="chartName">Prénom Nom</span>
      <hr class="chartLine" />
      <span class="chartTitle">Présidente</span>
      <img src="/images_ornigramme/presidente.png" alt="photo_presidente" />
    </div>
  </div>
  <div class="chartH1Container">
  </div>
  <div class="chartGrid">
    <div class="chartModule">
      <span class="chartName">Prénom nom</span>
      <hr class="chartLine" />
      <span class="chartTitle">Secrétaire</span>
      <img src="/images_ornigramme/presidente.png" alt="photo_presidente" />
    </div>
    <div class="chartModule">
      <span class="chartName">Prénom nom</span>
      <hr class="chartLine" />
      <span class="chartTitle">Trésorière</span>
      <img src="/images_ornigramme/presidente.png" alt="photo_presidente" />
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

  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';
  let images = [
    '../../favicon.png',
    '../../Logo_Credit_Agricol.jpg',
    '../../Logo_CVEC.png'
  ];
  
  let currentIndex = 0;
  
  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  let interval;
  onMount(() => {
    interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  });
</script>
