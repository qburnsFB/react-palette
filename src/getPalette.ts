import Vibrant from "node-vibrant";
import camelCase from "lodash.camelcase";
import invoke from 'lodash.invoke';
import loadImage from './loadImage';

export type PaletteColors = {
  vibrant?: string;
  muted?: string;
  darkVibrant?: string;
  darkMuted?: string;
  lightVibrant?: string;
  lightMuted?: string;
  [name: string]: string | undefined;
};

export async function getPalette(src: string) {
  const img = await loadImage(src);
  const palette = await Vibrant.from(img).getPalette();
  const setPaletteColor = (acc, paletteName) => ({
    ...acc,
    [camelCase(paletteName)]: invoke(palette, [paletteName, 'getHex'])
  });

  return Object.keys(palette).reduce<PaletteColors>(setPaletteColor, {});
}
