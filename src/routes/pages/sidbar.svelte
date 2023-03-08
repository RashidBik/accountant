<script>
	/**
	 * @type {any}
	 */
	export let closeMenu;
</script>

<div class="w-full">
	<header class="md:!hidden flex justify-between px-6	 pt-[20px]">
		<span class="w-[20px] h-[20px]	p-[5px] bg-[forestgreen] rounded-full" />
		<button on:click={closeMenu}>&LeftArrow;</button>
	</header>
	<ul class="md:flex w-full md:justify-center md:space-x-8 ">
		<li>
			<a href="">Account</a>
		</li>
		<li>
			<a href="">Language</a>
		</li>
		<li>
			<a href="">Theme</a>
		</li>
		<li>
			<a href="">Quit</a>
		</li>
	</ul>
</div>

<style>
	ul li {
		list-style: none;
		padding: 12px 0;
		font-weight: bold;
	}
</style>
