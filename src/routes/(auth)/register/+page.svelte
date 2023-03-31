<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { lang } from '$lib/store/lang';
</script>

<div class="h-[99vh] flex justify-center items-center text-gray-900 px-3">
	<button on:click={() => history.go(-1)} class="text-xl fixed top-8 left-8 text-white">
		&leftarrow;
	</button>
	<form action="/register" use:enhance method="post" class=" bg-inherit p-2 rounded-xl  text-sm">
		<div class="text-blue-400">
			{$lang.register[0]}
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[1]}
				type="text"
				name="name"
				required
			/>
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[2]}
				type="text"
				name="job"
				required
			/>
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[3]}
				type="email"
				name="email"
				required
			/>
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[4]}
				type="password"
				name="password"
				required
			/>
		</div>
		<p class="text-white bg-[#92282872] mt-1 px-4">{$page.form?.result || ''}</p>
		<div class="relative py-4 text-center font-bold  ">
			<input
				class="px-3 py-2 border rounded-xl visited:bg-orange-500 text-green-300"
				type="submit"
				value={$lang.register[5]}
			/>
		</div>
	</form>
</div>
