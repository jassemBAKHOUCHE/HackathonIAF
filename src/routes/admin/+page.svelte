<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { supabase } from "$lib/supabase";
    import bcrypt from "bcryptjs";
  
    let events = $page.data.events || [];
    let newEvent = { titre: "", date: "", description: "", nb_membres: 1 };
    let editEvent = null;
  
    let newPassword = "";
    let confirmPassword = "";
    let passwordMessage = "";

    import { goto } from "$app/navigation";

    onMount(() => {
        const isAdminLoggedIn = sessionStorage.getItem("admin_logged_in");

        if (!isAdminLoggedIn) {
        goto("/login"); // Redirect to login page if not logged in
        }
    });
  
    async function addEvent() {
      const { data, error } = await supabase.from("events").insert([newEvent]).select();
  
      if (error) {
        console.error("❌ Error adding event:", error);
        return;
      }
  
      if (!data) {
        console.error("❌ Supabase returned null data");
        return;
      }
  
      events = [...events, data[0]];
      newEvent = { titre: "", date: "", description: "", nb_membres: 1 };
    }
  
    async function updateEvent() {
      const { error } = await supabase.from("events").update(editEvent).eq("id", editEvent.id);
  
      if (error) {
        console.error("Error updating event:", error);
        return;
      }
  
      events = events.map(event => (event.id === editEvent.id ? editEvent : event));
      editEvent = null;
    }
  
    async function deleteEvent(id) {
      const { error } = await supabase.from("events").delete().eq("id", id);
  
      if (error) {
        console.error("Error deleting event:", error);
        return;
      }
  
      events = events.filter(event => event.id !== id);
    }
  
    async function updatePassword() {
      if (newPassword !== confirmPassword) {
        passwordMessage = "❌ Les mots de passe ne correspondent pas.";
        return;
      }
  
      if (newPassword.length < 6) {
        passwordMessage = "❌ Le mot de passe doit contenir au moins 6 caractères.";
        return;
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      const { error } = await supabase
        .from("password")
        .update({ password: hashedPassword })
        .eq("id", 1);
  
      if (error) {
        console.error("❌ Erreur lors de la mise à jour du mot de passe:", error);
        passwordMessage = "❌ Échec de la mise à jour du mot de passe.";
      } else {
        passwordMessage = "✅ Mot de passe mis à jour avec succès !";
        newPassword = "";
        confirmPassword = "";
      }
    }
  </script>
  
  <style>
    .admin-container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .event-list {
      margin-top: 20px;
    }
  
    .event-item {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
  
    button {
      background-color: #c684b5;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #a55a93;
    }
  
    input,
    textarea {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    .password-container {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #ddd;
    }
  
    .message {
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
    }
  </style>
  
  <div class="admin-container">
    <h2>Admin - Manage Events</h2>
  
    <!-- Add Event Form -->
    <h3>Add Event</h3>
    <input type="text" placeholder="Title" bind:value={newEvent.titre} />
    <input type="date" bind:value={newEvent.date} />
    <textarea placeholder="Description" bind:value={newEvent.description}></textarea>
    <input type="number" min="1" placeholder="Number of Members" bind:value={newEvent.nb_membres} />
    <button on:click={addEvent}>Add Event</button>
  
    <!-- Edit Event Form -->
    {#if editEvent}
      <h3>Edit Event</h3>
      <input type="text" placeholder="Title" bind:value={editEvent.titre} />
      <input type="date" bind:value={editEvent.date} />
      <textarea placeholder="Description" bind:value={editEvent.description}></textarea>
      <input type="number" min="1" placeholder="Number of Members" bind:value={editEvent.nb_membres} />
      <button on:click={updateEvent}>Update Event</button>
      <button on:click={() => (editEvent = null)}>Cancel</button>
    {/if}
  
    <!-- Event List -->
    <h3>Existing Events</h3>
    <div class="event-list">
      {#each events as event}
        <div class="event-item">
          <div>
            <strong>{event.titre}</strong> - {event.date}
            <p>{event.description}</p>
          </div>
          <div>
            <button on:click={() => (editEvent = { ...event })}>Edit</button>
            <button on:click={() => deleteEvent(event.id)}>Delete</button>
          </div>
        </div>
      {/each}
    </div>
  
    <!-- Password Update Section -->
    <div class="password-container">
      <h3>Modifier le mot de passe administrateur</h3>
      <input type="password" placeholder="Nouveau mot de passe" bind:value={newPassword} />
      <input type="password" placeholder="Confirmer le mot de passe" bind:value={confirmPassword} />
      <button on:click={updatePassword}>Mettre à jour</button>
      <p class="message">{passwordMessage}</p>
    </div>
  </div>
  