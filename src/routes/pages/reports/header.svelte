<script>
	/**
	 * @type {(arg0: string) => void}
	 */
	export let searchData;

	const handleSearch = () => {
		searchData('some');
	};
</script>

<div>
	<input type="text" on:change={handleSearch} />
</div>
