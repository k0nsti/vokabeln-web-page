<script>
	import Uebersetze from '$lib/components/Uebersetze.svelte';
	import { writable } from 'svelte/store';
	export let data;
	import { onMount } from 'svelte';

	let sourceLang = data.sourceLang;
	const targetLangs = [data.targetLangs];
	//$: wordLangs=data.wordLangs;
	let wordLangs = writable(data.wordLangs);
	async function loadNewWord() {
		console.log('fetch new word');
		const response = await fetch('/api/get-new-word');
		wordLangs.set( await response.json());
		console.log(wordLangs)
		//set(wordLangs, await response.json());
	}
	//onMount(loadNewWord);
</script>

<ul>
	{#each targetLangs as tlang}
		<Uebersetze {sourceLang} {tlang} wordLangs={$wordLangs} />
	{/each}
</ul>
<br />
<button on:click={loadNewWord}> nächstes Wort </button>
