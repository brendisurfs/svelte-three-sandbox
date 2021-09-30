<script lang="ts">
	console.log("svelte and three");

	// reqs
	import { onMount } from "svelte";
	import { CreateThreeScene } from "./three-components/ThreeCanvas";

	// components
	import Navbar from "./components/Navbar.svelte";

	// ============================================================>

	let el;

	onMount(() => {
		CreateThreeScene(el);
	});
</script>

<main>
	<canvas bind:this={el} />
	<Navbar />
	<p>THREE JS AND SVELTE</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 100%;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	canvas {
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>
