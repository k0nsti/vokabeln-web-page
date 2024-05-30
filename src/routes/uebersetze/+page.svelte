<script>
	import sqlite3 from "sqlite3";
	
	const db = new sqlite3.Database("../../../db/words.sqlite");
	var stmt = db.prepare("select deutsch from load_csv ORDER BY RANDOM() LIMIT 1;");
	let enteredword = '';
	let color = '';
	const words = { 1: { de: 'gut', en: 'good' }, 2: { de: 'süß', en: 'cute' } };
	let wordD = stmt.run();
	console.log(wordD)
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
