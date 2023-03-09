<script>
	import { lang } from '$lib/store/lang';
</script>

<div class="h-[99vh] flex justify-center items-center text-gray-900 px-3">
	<!-- <header style={color.C1} class='flex justify-end p-4'> 
        <Back />
      </header> -->
	<form class=" bg-inherit border p-2 rounded-xl  text-sm">
		<div class="text-blue-400">
			{$lang.register[0]}
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[1]}
				type="text"
				required
			/>
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[2]}
				type="text"
				required
			/>
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[3]}
				type="email"
				required
			/>
		</div>
		<div class="relative ">
			<input
				class="px-3 py-2 w-full mt-4 rounded-xl "
				placeholder={$lang.register[4]}
				type="password"
				required
			/>
		</div>
		<div class="relative py-4 text-center font-bold  ">
			<input
				class="px-3 py-2 border rounded-xl rounded-xl visited:bg-orange-500 text-green-300"
				type="submit"
				value={$lang.register[5]}
			/>
		</div>
	</form>
</div>
