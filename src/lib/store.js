import { writable } from 'svelte/store';

export const roverImage = writable();
export const fetchInterval = writable(10000);
export const clearSlideshow = writable();
export const roverImageTotal = writable();
