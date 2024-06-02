<script>
    export let data;
	let enteredword = '';
    let answer = '';
	let color = '';

	let wordD = data.deutsch;
	let w1 = data.englisch;

    function check(w2) {
		if (w1.trim() == w2.trim()) {
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