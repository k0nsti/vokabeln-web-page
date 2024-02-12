<script>
    let enteredword="";
	const words = { 1: { de: 'gut', en: 'good' }, 2: { de: 'süß', en: 'cute' } };
	let wordD = words[2]['de'];
	let w1 = words[2]['en'];
	let answer="";
	function check(w2) {
		console.log('xxx', w1, w2);
		if (w1 == w2) {
			answer = 'richtig';
		} else {
			answer = 'falsch';
		}
	}
</script>

<p>{wordD}</p>
<input bind:value={enteredword}/>
<button on:click={check(enteredword)}> Bestätigen! </button>
<p >{answer}</p>
