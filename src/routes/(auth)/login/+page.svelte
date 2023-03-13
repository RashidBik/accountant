<script>
	import { page } from '$app/stores';
	import { lang } from '$lib/store/lang';
	/**
	 * @type {{ result: any; message: any; error: any; }}
	 */
	export let form;
</script>

<div class="h-[99vh] pt-32">
	<button on:click={() => history.go(-1)} class="text-xl fixed top-8 right-8 text-white">
		&leftarrow;
	</button>
	<div class="px-8 text-[8px] md:text-[14px]">
		<form action="/login" method="post" class="flex flex-col rounded-xl max-w-sm justify-center ">
			<div>{$lang.login[0]}</div>
			<h1>{form?.result || ''}</h1>
			<h3>{form?.message || ''}</h3>
			<input
				class="p-2 mt-4 rounded-xl text-gray-900"
				type="email"
				name="email"
				placeholder={$lang.login[1]}
				required
			/>

			<input
				class="p-2 mt-4 rounded-xl text-gray-900"
				type="password"
				name="password"
				placeholder={$lang.login[2]}
				required
			/>
			<input
				class="border mt-4 px-3 py-2 rounded-xl text-green-300"
				type="submit"
				value={$lang.login[0]}
			/>
		</form>
	</div>
	<p class="text-center text-[11px] text-red-500">{form?.error || ''}</p>
	<div>
		<p class="text-[8px] p-8 text-center">
			if you don't have an account already click to &RightArrow; <a
				class="text-bold  underline text-green-400"
				href="/register">Register</a
			> and create one
		</p>
	</div>
</div>
