import { getWord } from '$lib/server/db/index.mjs';

export async function GET() {
    const data = getWord()

    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    })

}