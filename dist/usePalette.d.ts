import { PaletteColors } from "./getPalette";
export declare type PaletteState = {
    loading: boolean;
    error?: Error;
    data: PaletteColors;
};
export declare function usePalette(src: string, existingData?: PaletteColors): {
    data: any;
    loading: boolean;
    error?: Error;
} | {
    error: any;
    loading: boolean;
    data: PaletteColors;
};
