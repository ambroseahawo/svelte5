// import { useMachine } from "@xstate/svelte";
import { readable } from "svelte/store";
import { createActor, createMachine } from "xstate";

const toggleMachine = createMachine({
	id: "toggle",
	initial: "inactive",
	states: {
		inactive: {
			on: { TOGGLE: "active" },
		},
		active: {
			on: { TOGGLE: "inactive" },
		},
	},
});
// const { state, send } = useMachine(toggleMachine);

const actor = createActor(toggleMachine).start();
actor.start();

const toggleStore = readable(actor.getSnapshot(), (set) => {
	const sub = actor.subscribe((state) => {
		set(state);
	});

	return () => sub.unsubscribe;
});

export { actor as toggleService, toggleStore };

// toggleService is the actor you send events to.
// toggleStore is a Svelte-readable store that wraps the actor’s state.
// getSnapshot() ensures it starts with the correct initial value.

// https://chatgpt.com/c/681dc921-a52c-8007-9f55-c0e1a32a4f72
