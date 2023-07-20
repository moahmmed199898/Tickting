import { Snipe } from 'snipe-it.js';
export const snipe = new Snipe(process.env.SNIPE_IT_URL as string, process.env.SNIPE_IT_TOEKN as string)
