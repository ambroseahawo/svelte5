<script lang="ts">
	import { store, toSvelteStore } from "$lib/valtio-svelte-store";

	const snapshotStore = toSvelteStore(store);
	const countSnapshotStore = toSvelteStore(store.count);

	$: console.log("snapshot changed! ", $snapshotStore);
	$: console.log("count snapshot changed! ", $countSnapshotStore);
</script>

<button onclick={() => store.count.value--}>-</button>
{$snapshotStore.count.value}
<button onclick={() => store.count.value++}>+</button>

<input type="text" name="store-text" id="store-text" bind:value={store.text} />
{$snapshotStore.text}
