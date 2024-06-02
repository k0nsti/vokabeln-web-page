<!-- Button.svelte -->
<script>
	import { goto } from '$app/navigation';
	export let url;
    export let description;// = "Go to Next Page"

	function handleClick(url) {
		goto(url);
	}
</script>

<button on:click={handleClick(url)}> {description}  </button>
