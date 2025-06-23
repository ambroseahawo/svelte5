<script lang="ts">
	import { toggleService, toggleStore } from "$lib/store/xstate-svelte";

	$: current = $toggleStore;

	$: console.log("current xstate changed!", current);
</script>

<button onclick={() => toggleService.send({ type: "TOGGLE" })}>
	{current.matches("inactive") ? "off" : "on"}
</button>
