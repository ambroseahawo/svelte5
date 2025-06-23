<script lang="ts">
	// import { writable } from "svelte/store";
	import { Spring } from "svelte/motion";

	// function tweened(initialValue: number, duration = 5000) {
	// 	const store = writable(initialValue);
	// 	let intervalId: any;
	// 	let valueToSet: number;

	// 	function set(newValue: number) {
	// 		if (intervalId) {
	// 			clearInterval(intervalId);
	// 			intervalId = null;
	// 			initialValue = valueToSet;
	// 		}

	// 		const startTime = Date.now();
	// 		const endTime = startTime + duration;
	// 		intervalId = setInterval(() => {
	// 			let currentTime = Date.now();
	// 			if (currentTime > endTime) {
	// 				initialValue = newValue;
	// 				store.set(newValue);
	// 				clearInterval(intervalId);
	// 				intervalId = null;
	// 				return;
	// 			}

	// 			valueToSet =
	// 				((currentTime - startTime) / duration) * (newValue - initialValue) + initialValue;
	// 			store.set(valueToSet);
	// 		}, 100);
	// 	}

	// 	return {
	// 		subscribe: store.subscribe,
	// 		set,
	// 	};
	// }

	// let value = new Tween(0, { duration: 5000 });
	let value = new Spring(0, { stiffness: 0.4, damping: 0.3 });
</script>

<button onclick={() => (value.target -= 10)}>-</button>
<!-- <div>
	{value.current}
</div> -->

<div
	style="
	background: red;
	width: 1px;
	height:20px;
	transform-origin: 0;
	transform: scaleX({value.current});
  margin-bottom: 10px;
"
></div>
<button onclick={() => (value.target += 10)}>+</button>
