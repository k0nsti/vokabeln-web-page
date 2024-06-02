<!-- Button.svelte -->
<script>
	import { goto } from '$app/navigation';
	export let url;
	export let description; // = "Go to Next Page"
	export let validate;

	function handleClick(url) {
		if (validate()) {
			goto(url);
		} else {
			alert('Please select a language and at least one play language.');
		}
	}
</script>

<button on:click={handleClick(url)}> {description} </button>
