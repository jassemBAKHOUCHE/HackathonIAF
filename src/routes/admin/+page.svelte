<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { supabase } from "$lib/supabase";
  
    let events = $page.data.events || [];
    let newEvent = { titre: "", date: "", description: "", nb_membres: 1 };
    let editEvent = null;
  
    async function addEvent() {
    const { data, error } = await supabase
        .from("events")
        .insert([newEvent])
        .select(); // Ensures Supabase returns the inserted data

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
      const { error } = await supabase
        .from("events")
        .update(editEvent)
        .eq("id", editEvent.id);
  
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
  </div>
  