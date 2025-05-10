import { readable } from "svelte/store";

export const valueStore = readable("red", function start(set) {
	const options = ["red", "blue", "yellow", "maroon", "indigo"];
	let lastValue: string | null = null;

	// non repeating consecutive
	function getRandom() {
		let newValue: string;
		do {
			newValue = options[Math.floor(Math.random() * options.length)];
		} while (newValue === lastValue);

		lastValue = newValue;
		return newValue;
	}

	const interval = setInterval(() => {
		set(getRandom());
	}, 1000);

	return () => clearInterval(interval);
});
