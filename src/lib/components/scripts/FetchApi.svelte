<script lang="ts">
	import { onMount } from "svelte";

	let selectedBreed: string;
	const breeds = ["affenpinscher", "african", "airedale", "bulldog"];

	let imageSrc: string | null;
	let hasError = false;
	let isFetching = false;

	onMount(() => {
		fetchDogImage(selectedBreed);
	});

	// $: fetchDogImage(selectedBreed);

	// react to breed change
	$: if (selectedBreed) {
		fetchDogImage(selectedBreed);
	}

	async function fetchDogImage(breed: string) {
		try {
			hasError = false;
			isFetching = true;
			imageSrc = null;

			const obj = await getRandomDogImage(breed);
			imageSrc = obj.message;
		} catch (error) {
			hasError = true;
		} finally {
			isFetching = false;
		}
	}

	async function getRandomDogImage(breed: string) {
		const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
		if (!response.ok) throw new Error("Failed to fetch");
		return await response.json();
	}
</script>

<select bind:value={selectedBreed}>
	{#each breeds as breed}
		<option value={breed}>{breed}</option>
	{/each}
</select>

Selected Breed: {selectedBreed}
<hr />

<!-- {#await getRandomDogImage(selectedBreed)}
	loading...
{:then obj}
	<img src={obj.message} alt="Dog" />
{:catch error}
	Oops... something went wrong
{/await} -->

{#if hasError}
	Oops... something went wrong
{:else if isFetching}
	loading...
{:else}
	<img src={imageSrc} alt="Dog" />
{/if}
