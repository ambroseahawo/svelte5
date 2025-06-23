<script lang="ts">
	import { getContext } from "svelte";
	import type { ColorContext } from "./Types";

	export let number = 1;
	const onClick: (delta: number) => void = getContext("click");

	const colorObj: ColorContext = getContext("color");
	let color = colorObj.color;

	colorObj.listenToColorChange((newColor: string) => {
		color = newColor;
	});
</script>

<div style="color: {color};">
	Child {number}
	{color}
	<button onclick={() => onClick(number)}>Click Me + {number}</button>
</div>
