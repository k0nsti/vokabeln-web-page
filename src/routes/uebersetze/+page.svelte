<script>
	export let data;
	let enteredword = '';
	let color = '';
	let wordD = data.deutsch;
	let w1 = data.englisch;
	let answer = '';
	function check(w2) {
		console.log('xxx', w1, w2);
		if (w1 == w2) {
			answer = 'richtig';
			color = 'green';
		} else {
			answer = 'falsch';
			color = 'red';
		}
	}
</script>

<div>
	<p>{wordD}</p>
</div>

<p>tippe das Wort in Englisch ein und bestätige</p>
<input bind:value={enteredword} />

<button on:click={check(enteredword)}> Bestätigen! </button>

<div style="--theme-color: {color}">
	<p>{answer}</p>
</div>

<style>
	p {
		color: var(--theme-color);
	}
</style>
