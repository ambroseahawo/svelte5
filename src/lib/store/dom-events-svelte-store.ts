import { readable } from "svelte/store";

type MousePosition = { x: number; y: number };

export const mousePosition = readable<MousePosition>({ x: 0, y: 0 }, (set) => {
	if (typeof window === "undefined") return () => {};

	function handleMouseMove(event: MouseEvent) {
		set({ x: event.clientX, y: event.clientY });
	}

	window.addEventListener("mousemove", handleMouseMove);

	return () => {
		window.removeEventListener("mousemove", handleMouseMove);
	};
});

// // dom-events-svelte-store.ts

// type MousePosition = { x: number; y: number };
// type Subscriber = (pos: MousePosition) => void;

// const subscribers: Subscriber[] = [];
// const lastMousePosition: MousePosition = { x: 0, y: 0 };
// let isSetup = false;

// function setupEventListener(): void {
// 	if (typeof document === "undefined" || isSetup) return;
// 	isSetup = true;
// 	document.addEventListener("mouseover", move);
// }

// function removeEventListener(): void {
// 	if (typeof document === "undefined") return;
// 	isSetup = false;
// 	document.removeEventListener("mouseover", move);
// }

// function move(event: MouseEvent): void {
// 	lastMousePosition.x = event.clientX;
// 	lastMousePosition.y = event.clientY;
// 	subscribers.forEach((sub) => sub(lastMousePosition));
// }

// const store = {
// 	subscribe(fn: Subscriber): () => void {
// 		if (typeof window !== "undefined") {
// 			fn(lastMousePosition);
// 			subscribers.push(fn);
// 			setupEventListener();

// 			return () => {
// 				const index = subscribers.indexOf(fn);
// 				if (index !== -1) subscribers.splice(index, 1);
// 				if (subscribers.length === 0) removeEventListener();
// 			};
// 		}
// 		// No-op unsubscribe function on the server
// 		return () => {};
// 	},
// };

// export default store;
