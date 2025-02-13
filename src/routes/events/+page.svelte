<script>
    import { onMount } from "svelte";
    import { supabase } from "../../lib/supabase.js";
  
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
  </script>
  
  <style>
    .event-container {
      max-width: 900px;
      margin: 40px auto;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      animation: fadeIn 0.8s ease-in-out;
    }
  
    .event {
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      transition: all 0.3s;
    }
  
    .event.upcoming {
      background: #f6ccb0;
      color: #333;
    }
  
    .event.past {
      background: #ddd;
      color: #888;
    }
  
    .event h2 {
      margin: 0 0 10px;
    }
  
    .event button {
      background: #c684b5;
      color: white;
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
    }
  
    .event button:hover {
      background: #cb9dae;
    }
  
    h1 {
      text-align: center;
      color: #c684b5;
    }
  
    .section-title {
      font-size: 24px;
      margin-top: 30px;
      text-align: center;
      color: #806886;
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
  
  <div class="event-container">
    <h1>Événements</h1>
  
    <!-- Événements à venir -->
    <h2 class="section-title">À Venir</h2>
    {#each upcomingEvents as event}
      <div class="event upcoming">
        <h2>{event.titre}</h2>
        <p><strong>Date :</strong> {formatDate(event.date)}</p>
        <p>{event.description}</p>
        <p><strong>Inscription :</strong> {event.nb_membres > 1 ? "En équipe" : "Individuelle"}</p>
        <button>S'inscrire</button>
      </div>
    {/each}
  
    <!-- Événements passés -->
    <h2 class="section-title">Événements Passés</h2>
    {#each pastEvents as event}
      <div class="event past">
        <h2>{event.titre}</h2>
        <p><strong>Date :</strong> {formatDate(event.date)}</p>
        <p>{event.description}</p>
      </div>
    {/each}
  </div>
  