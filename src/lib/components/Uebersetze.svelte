<script>
	export let sourceLang;
	export let tlang;
	export let wordLangs;
	console.log(wordLangs);
	let enteredword = '';
	let answer = '';
	let color = '';

	let sourceWord = wordLangs[sourceLang];
	let w1 = wordLangs[tlang];

	function check() {
		if (w1.trim() == enteredword.trim()) {
			answer = 'richtig';
			color = 'green';
		} else {
			answer = 'falsch';
			color = 'red';
		}
	}
</script>

<p>{sourceWord}</p>

<p>tippe das Wort in Englisch ein und bestätige</p>
<input bind:value={enteredword} />

<button on:click={check}> Bestätigen! </button>

<div style="--theme-color: {color}">
	<p>{answer}</p>
</div>

<style>
	p {
		color: var(--theme-color);
	}
</style>
