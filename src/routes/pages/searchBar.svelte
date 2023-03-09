<script>
	let content = [{ group: '' }];
	let contents = content;
	const searchData = (
		/** @type {Event & { currentTarget: EventTarget & HTMLInputElement; }} */ key
	) => {
		if (key.currentTarget.value !== '') {
			const searchedData = contents.filter((item) => {
				return Object.values(item.group)
					.join('')
					.toLowerCase()
					.includes(key.currentTarget.value.toLowerCase());
			});
			contents = searchedData;
		} else {
			contents = content;
		}
	};
	/**
	 * @type {(arg0: string) => void}
	 */
</script>

<div class="fixed top-4 flex right-10">
	<input
		class=" bg-inherit outline-none underline focus:bg-[#00000036] w-40 px-1 "
		type="search"
		name="search"
		id="search"
	/>
	<label class="px-2" for="search">Search</label>
</div>
