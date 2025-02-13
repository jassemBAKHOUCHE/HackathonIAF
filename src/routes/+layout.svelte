<script>
	import Header from "../lib/Header.svelte";
  </script>

<style>
  @import "../app.css";
</style>
  
  <Header title="Awesome Website" />
  
  <slot /> <!-- This ensures page content is displayed -->
  