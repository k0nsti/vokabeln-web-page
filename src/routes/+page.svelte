<script>
	import Button from '$lib/components/Button.svelte';
	export let data;
	let selected = '';
	let languages = Object.keys(data);
	let playLangs = [];
	$: restlangs = languages.filter((l) => l !== selected);
	const url = '/uebersetze';
  const description="losgeht`s"

  function validate() {
		return selected !== '' && playLangs.length > 0;
	}
</script>

<h1>Lerne Vokabeln</h1>

such die Ausgangssprache aus:

<select bind:value={selected}>
	{#each languages as lang}
		<option value={lang}>
			{lang}
		</option>
	{/each}
</select>

<br />
Wähle Sprachen die du spielen willst:
<br />

{#each restlangs as rlang}
	<label>
		<input type="checkbox" bind:group={playLangs} value={rlang} />
		{rlang}
	</label>
{/each}

<br />
<Button {url} {description} {validate}/>
