<script>
	import { lang } from '$lib/store/lang';
</script>

<div class="px-4 py-8 h-[99vh] ">
	<!-- <header style={color.C1} class='flex justify-end p-4'> 
      <Back/>
    </header> -->
	<div class="px-8 text-sm">
		<form class="flex flex-col rounded-xl">
			<div>{$lang.login[0]}</div>
			<input
				class="px-3 py-2 mt-4 rounded-xl text-gray-900"
				type="email"
				placeholder={$lang.login[1]}
				required
			/>
			<input
				class="px-3 py-2 mt-4 rounded-xl text-gray-900"
				type="password"
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
	<div>
		<p class="text-[8px] p-8 text-center">
			if you don't have an account already click to &RightArrow; <a
				class="text-bold  underline text-green-400"
				href="/register">Register</a
			> and create one
		</p>
	</div>
</div>
