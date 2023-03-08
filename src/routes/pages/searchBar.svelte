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

<div>
	<input
		class=" bg-inherit outline-none border-b "
		type="text"
		on:change={(word) => searchData(word)}
	/>
</div>
