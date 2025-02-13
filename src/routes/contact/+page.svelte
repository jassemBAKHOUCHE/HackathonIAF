<script>
  let name = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let submissionStatus = null;

  async function handleSubmit(event) {
    event.preventDefault();

    isSubmitting = true;

    const formData = {
      name,
      email,
      message
    };

    try {
      const response = await fetch('/contact', {  // Envoie les données vers l'endpoint /contact
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        submissionStatus = 'Message envoyé avec succès !';
        name = '';
        email = '';
        message = '';
      } else {
        submissionStatus = 'Échec de l\'envoi du message.';
      }
    } catch (error) {
      submissionStatus = 'Une erreur est survenue.';
    } finally {
      isSubmitting = false;
    }
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
