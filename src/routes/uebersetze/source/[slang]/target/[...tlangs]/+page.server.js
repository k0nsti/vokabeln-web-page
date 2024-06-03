import { getWord } from '$lib/server/db/index.mjs';

export function load({ params }) {
    return getWord()
}