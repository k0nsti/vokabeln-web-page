<script>
	export let activePage = '';
</script>

<nav>
	<ul>
		<li><a href="/" class:active={activePage === 'home'}>Home</a></li>
		<li><a href="/uebersetze" class:active={activePage === 'uebersetze'}>Übersetzen</a></li>
	</ul>
</nav>

<style>
	nav ul {
		display: flex;
		list-style: none;
		padding: 0;
		position: relative;
		background-color: #24ca19;
    height: 80px; /* Erhöht die Höhe der Navbar */
    align-items: center; /* Zentriert die Listenelemente vertikal */
	}
	nav ul li {
		margin-right: 1rem;
	}
	nav ul li a {
		text-decoration: none;
	}
	.active {
		font-weight: bold;
	}
</style>
