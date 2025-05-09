import { proxy, snapshot, subscribe, type Snapshot } from "valtio/vanilla";

export const store = proxy({ count: { value: 0 }, text: "valtio store" });

export function toSvelteStore<T extends object>(proxyState: T) {
	return {
		subscribe(fn: (value: Snapshot<T>) => void) {
			fn(snapshot(proxyState));

			return subscribe(proxyState, () => {
				fn(snapshot(proxyState));
			});
		},
	};
}
