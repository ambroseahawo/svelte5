<script lang="ts">
	import { setContext } from "svelte";
	import type { ColorContext } from "./Types";

	import Parent from "./Parent.svelte";

	let color = "red";
	let count = 0;

	const colorListeners: Set<(color: string) => void> = new Set();
	let colorObj: ColorContext = {
		color,
		listenToColorChange(fn: (color: string) => void) {
			colorListeners.add(fn);
		},
	};
	$: colorListeners.forEach((listener) => listener(colorObj.color));

	// console.log(`colorObj -> ${JSON.stringify(colorObj)}`);

	setContext("color", colorObj);

	function onClick(delta: number) {
		count += delta;
	}
	setContext("click", onClick);
</script>

<input type="color" bind:value={colorObj.color} />

{colorObj.color}

<Parent />

Count: {count}
