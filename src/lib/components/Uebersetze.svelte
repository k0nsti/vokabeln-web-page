<script>
	export let data;
	let enteredword = '';
	let answer = '';
	let color = '';

	let wordD = data.deutsch;
	let w1 = data.englisch;

	function check() {
		if (w1.trim() == enteredword.trim()) {
			answer = 'richtig';
			color = 'green';
		} else {
			answer = 'falsch';
			color = 'red';
		}
	}

	async function loadNewWord() {
		const response = await fetch('/api/get-new-word');
		let xxxdata = await response.json();
		// Update the word data with the new word received from the server
		wordD = xxxdata.deutsch;
		w1 = xxxdata.englisch;

		// Reset the entered word and answer
		enteredword = '';
		answer = '';
		color = '';
		return xxxdata
	}
</script>

<div>
	<p>{wordD}</p>
</div>

<p>tippe das Wort in Englisch ein und bestätige</p>
<input bind:value={enteredword} />

<button on:click={check}> Bestätigen! </button>

<div style="--theme-color: {color}">
	<p>{answer}</p>
</div>

<br />
<button on:click={loadNewWord}> nächstes Wort </button>

<style>
	p {
		color: var(--theme-color);
	}
</style>
