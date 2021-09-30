<script>
	console.log("navbar component");
</script>

<nav>
	<div class="brand">
		<h1 class="brand-title">SVELTE THREE</h1>
	</div>
	<div class="nav-menu">
		<ul class="nav-items">
			<li class="nav-item">Item 1 Nav</li>
		</ul>
		<ul class="nav-items">
			<li class="nav-item">Item 1 Nav</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.nav-menu {
		padding: 1rem;
		display: flex;
		writing-mode: vertical-rl;
		text-orientation: sideways-right;
	}
</style>
