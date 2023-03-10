<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { fetched } from '$lib/store/data';

	export let data;
	let { group, item } = data;
	fetched.set(group);

	$: visible = false;
	$: toggleOpt = false;
	const handlClick = () => {
		toggleOpt = !toggleOpt;
	};

	const handlNewGroup = () => {
		visible = !visible;
	};
</script>

<button on:click={() => history.go(-1)} class="text-xl fixed md:hidden top-3 right-8 text-white">
	&leftarrow;
</button>
<div class="flex flex-col pt-32 p-3 h-full  justify-center items-center">
	<form class="flex flex-col rounded-xl ">
		<div class="text-center ">Update Your Data</div>
		<div class="">
			<div class=" py-2  ">
				<div class=" flex flex-col justify-evenly items-center rounded-xl   ">
					<label class="p-2 " for="amount">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
							/>
						</svg>
					</label>
					<input
						class="max-w-40 underline text-center outline-none bg-inherit"
						type="text"
						name="amount"
						value={item.amount}
						placeholder="Insert Amount"
					/>
				</div>
			</div>
			<div class="flex justify-evenly">
				<input
					class=" font-bold px-3 p-2 {item.type == 'income'
						? 'bg-gray-500'
						: ''} rounded-xl border border-gray-100"
					type="button"
					value="income"
				/>
				<input
					class=" font-bold px-3 p-2 {item.type == 'expens'
						? 'bg-gray-500'
						: ''} rounded-xl border border-gray-100"
					type="button"
					value="expens"
				/>
			</div>
			<div class="px-12 py-4 ">
				<div class="flex flex-col border border-gray-100 rounded-xl space-y-12">
					<button
						class="flex select-none justify-between rounded-xl p-2 px-4  bg-inherit "
						on:click={() => (toggleOpt = !toggleOpt)}
					>
						<p>{item.group}</p>
						{toggleOpt ? '-' : '+'}
					</button>

					<div
						class=" absolute flex-wrap p-2 max-w-[160px] z-10 rounded-xl bg-[#222]"
						style="display: {toggleOpt ? 'flex' : 'none'}"
					>
						<div style="display: {!visible ? 'none' : 'flex'}" class=" flex-1 ">
							<input
								class=" text-[11px] border-b border-[#ffffff30] mb-2 outline-none bg-inherit text-white "
								type="text"
								placeholder="new group"
							/>
						</div>

						{#each group as content}
							<button
								class="m-1 w-16 h-8 text-center border border-gray-400 rounded-lg "
								on:click={handlClick}
							>
								{content}
							</button>
						{/each}

						<div class="m-1 w-16 h-8 text-center ">
							<button on:click={handlNewGroup} style=" display: {visible ? 'none' : 'flex'}"
								>+</button
							>
						</div>
					</div>
				</div>
			</div>
			<div class=" flex justify-center  p-2">
				<p class="px-4 font-bold">Credit</p>
				<label class="switch">
					<input type="checkbox" checked={item.deal == 'credit' ? false : true} />
					<span class="slider round" />
				</label>
				<p class="px-4 font-bold">Cash</p>
			</div>
			<div class="px-6 h-auto flex justify-center ">
				<textarea
					class=" h-32 p-2 w-full bg-inherit border border-[#ffffff40]"
					placeholder="Insert your report here"
					name="report"
					value={item.report}
				/>
			</div>
			<div class="p-2  flex justify-center">
				<div class="flex relative rounded-lg">
					<input class="w-40  p-1 rounded-lg bg-inherit" type="date" value={item.date} />
					<span class=" absolute right-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
		<div class="py-8 flex w-full justify-around">
			<div
				class=" w-20  hover:border bg-green-700 border-gray-100  text-center  font-bold rounded-xl"
			>
				<input type="submit" value="Save" />
			</div>
		</div>
	</form>
</div>
