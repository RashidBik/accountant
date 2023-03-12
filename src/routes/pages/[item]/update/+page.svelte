<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	// @ts-nocheck
	import { fetched } from '$lib/store/data';

	export let data;
	let { group, item } = data;
	fetched.set(group);

	$: visible = false;
	$: toggleOpt = false;
	$: selectedGroup = item.group;

	const handlClick = (/** @type {string} */ group) => {
		selectedGroup = group;
		toggleOpt = !toggleOpt;
	};

	const handlNewGroup = () => {
		visible = !visible;
	};
</script>

<button on:click={() => history.go(-1)} class="text-xl fixed md:hidden top-3 right-8 text-white">
	&leftarrow;
</button>
<div class="flex flex-col p-3 h-[100vh] md:w-full">
	<form
		action="/pages/{item.id}/update"
		method="post"
		use:enhance
		class="flex flex-col rounded-xl "
	>
		<div class="text-center flex justify-center py-4 ">
			<h1 class="">Update Your Data</h1>
		</div>
		<div class="mt-4">
			<div class="flex justify-evenly">
				<label for="">Income</label>
				<input
					class=" font-bold px-3 p-2 rounded-xl border border-gray-100"
					type="radio"
					value="income"
					checked={item.type === 'income'}
					name="type"
				/>
				<label for="">Expense</label>
				<input
					class=" font-bold px-3 p-2 rounded-xl border border-gray-100"
					type="radio"
					value="expens"
					checked={item.type === 'expens'}
					name="type"
				/>
			</div>
			<div class="flex justify-evenly">
				<label for="">Cash</label>
				<input
					class=" font-bold px-3 p-2 rounded-xl border border-gray-100"
					type="radio"
					value="Cash"
					checked={item.deal === 'Cash'}
					name="deal"
				/>
				<label for="">Credit</label>
				<input
					class=" font-bold px-3 p-2 rounded-xl border border-gray-100"
					type="radio"
					value="Credit"
					checked={item.deal === 'Credit'}
					name="deal"
				/>
			</div>
			<div class="px-12 py-2  ">
				<div class=" flex flex-col justify-evenly items-center rounded-xl border border-gray-100 ">
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
						class="max-w-40  text-center outline-none bg-inherit"
						type="text"
						name="amount"
						value={item.amount}
						placeholder="Insert Amount"
					/>
				</div>
			</div>

			<div class="px-12 py-4">
				<div class="flex flex-col border border-gray-100 rounded-xl space-y-12">
					<button
						type="button"
						class="flex select-none justify-between rounded-xl p-2 px-4  bg-inherit "
						on:click={() => (toggleOpt = !toggleOpt)}
					>
						<p>{selectedGroup}</p>
						{toggleOpt ? '-' : '+'}
					</button>

					<div
						class=" absolute flex-wrap p-2 max-w-[160px] z-10 rounded-xl bg-[#222]"
						style="display: {toggleOpt ? 'flex' : 'none'}"
					>
						<div style="display: {!visible ? 'none' : 'flex'}" class=" flex-1 min-w-40 ">
							<input
								class=" min-w-[100px] w-auto overflow-x-hidden text-[11px] border-b border-[#ffffff30] mb-2 outline-none bg-inherit text-white "
								type="text"
								bind:value={selectedGroup}
								placeholder="new group"
								name="group"
								maxlength="16"
							/>
						</div>

						{#each $fetched as item, i}
							<button
								type="button"
								class="m-1 w-16 h-8 overflow-scroll text-center border border-gray-400 rounded-lg "
								on:click={() => handlClick(item)}
							>
								{item}
							</button>
						{/each}

						<div class="m-1 w-16 h-8 text-center ">
							<button
								type="button"
								on:click={handlNewGroup}
								style=" display: {visible ? 'none' : 'flex'}">+</button
							>
						</div>
					</div>
				</div>
			</div>

			<div class="px-12 flex justify-center ">
				<textarea
					class=" rounded-xl p-2 w-full bg-inherit border border-gray-100"
					placeholder="Insert your report here"
					name="report"
					value={item.report}
				/>
			</div>
			<div class="p-2  flex justify-center">
				<div class="flex relative rounded-lg">
					<input
						class="w-40  p-1 rounded-lg bg-inherit"
						type="date"
						name="date"
						value={item.date}
					/>
				</div>
			</div>
		</div>
		<div class=" px-12">
			{#if $page.form?.result}
				<div class="bg-green-600 border border-white px-2 rounded  ">
					{$page.form?.result}
				</div>
			{/if}
			<div
				class="hover:border mt-3 bg-green-700 border-gray-100  text-center  font-bold rounded-xl"
			>
				<input type="submit" value="Save" />
			</div>
		</div>
	</form>
</div>
