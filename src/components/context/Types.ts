export type ColorContext = {
	color: string;
	listenToColorChange: (fn: (color: string) => void) => void;
};