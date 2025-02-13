<script>
  import { onMount } from 'svelte';

  let name = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let submissionStatus = null;

  let isCaptchaValidated = false;
  let startTime = 0;

  let starPosition = { top: '0px', left: '0px' };

  // Générer une position aléatoire pour l'étoile
  function randomizeStarPosition() {
    const top = Math.floor(Math.random() * 150) + 20; // Entre 20px et 170px
    const left = Math.floor(Math.random() * 200) + 20; // Entre 20px et 220px

    starPosition = { top: `${top}px`, left: `${left}px` };
  }

  onMount(() => {
    startTime = Date.now();
    randomizeStarPosition();
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const timeTaken = Date.now() - startTime;
    if (timeTaken < 2000) {
      submissionStatus = 'Suspicion de bot : formulaire rempli trop vite.';
      return;
    }

    if (!isCaptchaValidated) {
      submissionStatus = 'Veuillez valider le CAPTCHA avant de soumettre.';
      return;
    }

    isSubmitting = true;

    const formData = {
      name,
      email,
      message
    };

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        submissionStatus = 'Message envoyé avec succès !';
        name = '';
        email = '';
        message = '';
        isCaptchaValidated = false;
        randomizeStarPosition();
        startTime = Date.now();
      } else {
        submissionStatus = 'Échec de l\'envoi du message.';
      }
    } catch (error) {
      submissionStatus = 'Une erreur est survenue.';
    } finally {
      isSubmitting = false;
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    if (data === 'star') {
      isCaptchaValidated = true;
    }
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', 'star');
  }
</script>

<h1>Contactez-nous</h1>

<form on:submit={handleSubmit}>
  <div>
    <label for="name">Nom</label>
    <input id="name" type="text" bind:value={name} required />
  </div>

  <div>
    <label for="email">Email</label>
    <input id="email" type="email" bind:value={email} required />
  </div>

  <div>
    <label for="message">Message</label>
    <textarea id="message" bind:value={message} required></textarea>
  </div>

  <!-- CAPTCHA Drag & Drop avec position aléatoire -->
  <div class="captcha-container">
    <p>Glissez l’étoile dans le carré :</p>
    <div
      class="drag-item"
      draggable="true"
      on:dragstart={handleDragStart}
      style="top: {starPosition.top}; left: {starPosition.left};"
    >
      ⭐
    </div>
    <div class="drop-area" on:drop={handleDrop} on:dragover={allowDrop}>
      {#if isCaptchaValidated}
        ✅ Validé
      {:else}
        ⬜
      {/if}
    </div>
  </div>

  {#if submissionStatus}
    <p>{submissionStatus}</p>
  {/if}

  <button type="submit" disabled={isSubmitting}>
    {#if isSubmitting}
      Envoi...
    {:else}
      Envoyer
    {/if}
  </button>
</form>

<style>
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1rem;
  }

  input:focus,
  textarea:focus {
    border-color: #5c6bc0;
    outline: none;
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  .captcha-container {
    position: relative;
    height: 200px;
    background-color: #f3f3f3;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
  }

  .drag-item {
    position: absolute;
    cursor: grab;
    font-size: 2rem;
  }

  .drop-area {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 60px;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .drop-area.valid {
    background-color: #d4edda;
    border-color: #28a745;
  }

  button {
    width: 100%;
    padding: 12px;
    background-color: #D085FA;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #520184;
  }

  button:disabled {
    background-color: #cfd8dc;
    cursor: not-allowed;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: #28a745;
    margin-top: 20px;
  }
</style>
