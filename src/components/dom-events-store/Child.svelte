<script lang="ts">
	import { mousePosition } from "$lib/dom-events-svelte-store";
</script>

<div>
	[Child] Mouse Position: {$mousePosition.x}, {$mousePosition.y}
</div>
