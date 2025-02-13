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
    animation: fadeIn 0.8s ease-in-out;
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

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1rem;
  }

  input:focus, textarea:focus {
    border-color: #5c6bc0;
    outline: none;
  }

  textarea {
    min-height: 150px;
    resize: vertical;
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
