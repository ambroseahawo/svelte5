<script lang="ts">
	import { derived, writable } from "svelte/store";

	const num = writable(10);
	const num2 = writable(42);

	// derived from 1 store
	const doubleOfNum = derived(num, (storeValue) => {
		return storeValue * 2;
	});

	// derive from multiple stores
	const multiplication = derived([num, num2], ([$num1, $num2]) => {
		return $num1 * $num2;
	});

	// get the derived value synchronously

	// get the derived value asynchronously
	const delayedNum = derived(
		num,
		($num, set) => {
			let timeoutId = setTimeout(() => {
				set($num);
			}, 1000);

			return () => {
				clearTimeout(timeoutId);
			};
		},
		0,
	);
	const delayedMultiplication = derived(
		[num, num2],
		([$num1, $num2], set) => {
			let timeoutId = setTimeout(() => {
				set($num1 * $num2);
			}, 1000);

			return () => {
				clearTimeout(timeoutId);
			};
		},
		0,
	);
</script>

<input type="number" bind:value={$num} />
<input type="number" bind:value={$num2} />

<div>
	{$num} * 2 = {$doubleOfNum}
</div>
<div>
	{$num} * {$num2} = {$multiplication}
</div>
<div>
	delayed: {$delayedNum}, {$delayedMultiplication}
</div>
