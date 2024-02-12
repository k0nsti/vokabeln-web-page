<script>
	let enteredword = '';
	let color = '';
	const words = { 1: { de: 'gut', en: 'good' }, 2: { de: 'süß', en: 'cute' } };
	let wordD = words[2]['de'];
	let w1 = words[2]['en'];
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

<p> tippe das Wort in Englisch ein und bestätige</p>
<input bind:value={enteredword}/>

<button on:click={check(enteredword)}> Bestätigen! </button>

<div style="--theme-color: {color}">
	<p>{answer}</p>
</div>

<style>
	p {
		color: var(--theme-color);
	}
</style>
