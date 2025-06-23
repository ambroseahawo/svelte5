<script lang="ts">
	import { mousePosition } from "$lib//store/dom-events-svelte-store";
	import Child from "./Child.svelte";
</script>

<div>
	Mouse Position: {$mousePosition.x}, {$mousePosition.y}
</div>

<Child />
