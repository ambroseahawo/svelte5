<script lang="ts">
	import Child from "./Child.svelte";

	let show = true;
</script>

<label for="show">
	<input type="checkbox" name="show" id="show" bind:checked={show} /> Show
</label>

{#if show}
	{#each Array.from({ length: 5 }, (_, i) => i + 1) as num}
		<Child number={num} />
	{/each}
{/if}
