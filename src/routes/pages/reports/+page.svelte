<script>
	import { goto } from '$app/navigation';
	import { lang } from '$lib/store/lang';
	import Header from './header.svelte';
	import NewInser from './newInser.svelte';
	import Time from './time.svelte';

	// useEffect(() => {
	//   axios({
	//     method: 'get',
	//     url: `${process.env.REACT_APP_API_URL}/api/content/`,
	//     headers: {'accesstoken': accessToken }
	//   })
	//   .then((res)=> res.data)
	//   .then(data => {
	//     setData(data)
	//     setContents(data.content)
	//   })
	//   .catch(err => {
	//     setError(err)
	//   });
	// }, []);
	$: color = 'red';
	const content = [
		{
			id: 1,
			type: 'expens',
			amount: 200333333333333330,
			deal: 'cash',
			group: 'food',
			date: '2023-12-4'
		},
		{
			id: 2,
			type: 'income',
			amount: 204,
			deal: 'cash',
			group: 'utility and some foodllllllll',
			date: '2023-12-4'
		},
		{
			id: 3,
			type: 'income',
			amount: 20444,
			deal: 'cash',
			group: 'utilit',
			date: '2023-12-4'
		}
	];
	let contents = content;

	const data = { income: 3333, expens: 23422 };
	const searchData = (keyword) => {
		if (keyword.length !== '') {
			const searchedData = contents.filter((item) => {
				return Object.values(item.group).join('').toLowerCase().includes(keyword.toLowerCase());
			});
			contents = searchedData;
		} else {
			contents = content;
		}
	};
	const sortDate = (choosedDate) => {
		const selectedData = content.filter((item) => {
			return new Date().getMonth(item.date) === choosedDate;
		});
	};
	let auth = true;
</script>

<div class=" w-full h-full overflow-y-auto ">
	{#if auth}
		<div>
			<!-- /////////////////////////// -->
			<div class="">
				<div class="">
					<Header {searchData} />
				</div>
				<span>
					<NewInser />
				</span>
				<nav class=" ">
					<Time {sortDate} />
				</nav>
				<div class="flex flex-col ">
					<div class="py-1">
						<nav class="flex text-xl justify-evenly font-bold lg:min-w-[10em]">
							<div class="text-green-800">
								<p>{$lang.reports.calc[0]}</p>
								<p>{data && data.income}</p>
							</div>
							<div class="text-red-800">
								<p>{$lang.reports.calc[1]}</p>
								<p>{data && data.expens}</p>
							</div>
							<div class="text-blue-800">
								<p>{$lang.reports.calc[2]}</p>
								<p>{data && data.income - data.expens}</p>
							</div>
						</nav>
					</div>

					<div class=" text-center">
						{#each contents as item (item.id)}
							<div class="">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<div
									on:click={() => goto('/card', { state: item.id })}
									class="grid grid-cols-3 justify-around items-stretch "
									style={item.type === 'income' ? color : ''}
								>
									<span
										class="overflow-x-auto {item.amount >= 999999 && 'border-r'}"
										style="color: {item.type === 'income' ? 'green' : 'red'}">{item.amount}</span
									>
									<span class="" style="color: {item.type === 'income' ? 'green' : 'red'}"
										>{item.deal}</span
									>
									<span
										class=" {item.group.length >= 9 && 'border-r'}"
										style="color: {item.type === 'income' ? 'green' : 'red'}">{item.group}</span
									>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<!-- /////////////////////////////// -->
		</div>
	{:else}
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores earum pariatur modi quaerat
			voluptate, possimus placeat! Soluta perferendis quis temporibus eligendi libero sapiente totam
			consequuntur, nam odit magnam velit ducimus.
		</p>
	{/if}
</div>

<style>
</style>
