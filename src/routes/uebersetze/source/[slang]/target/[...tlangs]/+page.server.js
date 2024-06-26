import { getWord } from '$lib/server/db/index.mjs';

export function load({ params }) {
    return {
        wordLangs: getWord(),
        sourceLang: params.slang,
        targetLangs: params.tlangs
    }
}