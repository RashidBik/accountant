<script>
	import group2 from '$lib/images/group2.png';
	import group1 from '$lib/images/group1.png';
	import report from '$lib/images/report.png';
	import home from '$lib/images/home.png';
	import login from '$lib/images/login.png';
	import rashid from '$lib/images/rashid2.jpg';
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="http://">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
				viewBox="0 0 24 24"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
			</svg>
			<span class="ml-3 text-xl text-yellow-600">Svelte Kit AAP</span>
		</a>
		<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
			<a class="mr-5 hover:text-gray-900" href="https://rashidbik-a8ep.vercel.app/">
				<img
					class=" object-cover rounded-full w-16 h-16 border border-indigo-400 my-8 md:my-0"
					src={rashid}
					alt="rashid"
				/>
			</a>
		</nav>
		<a
			href="/pages"
			class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
			>Start
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-4 h-4 ml-1"
				viewBox="0 0 24 24"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</a>
	</div>
</header>

<section class="text-gray-600 body-font my-20">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col-reverse md:flex-row mb-20">
			<div class="text-center">
				<h1 class="sm:text-3xl text-2xl font-medium title-font text-yellow-600 mb-4">
					Accounting App
				</h1>
				<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200">
					This is a complete and capsulated full-stack accounting web app built with Svelte Kit and
					connected to mongodb as its database using mongoose. It allows users to track their
					expenses and income, view reports, and manage their accounts.
				</p>
				<div class="flex mt-6 justify-center">
					<div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
				</div>
			</div>

			<div class="flex justify-center -space-x-10 mb-16 md:mb-0">
				<img class="w-[20%] scale-[30%] translate-x-2" src={group1} alt="Image1" />
				<img class="w-[20%] scale-[40%] translate-x-2" src={group2} alt="Image2" />
				<img class="w-[20%] scale-[55%]" src={report} alt="Image3" />
				<img class="w-[20%] scale-[70%] translate-x-2" src={home} alt="Image4" />
				<img class="w-[20%] scale-[35%] translate-x-2" src={login} alt="Image5" />
			</div>
		</div>
		<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
			<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
				<div
					class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-10 h-10"
						viewBox="0 0 24 24"
					>
						<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
					</svg>
				</div>
				<div class="flex-grow">
					<h2 class="text-yellow-600 text-lg title-font font-medium mb-3">Usage</h2>
					<p class="leading-relaxed text-base text-gray-400">
						When you first open the app, you'll be prompted to log in or create an account. Once
						you're logged in, you can start adding transactions.
					</p>
					<a class="mt-3 text-indigo-500 inline-flex items-center" href="/1"
						>Learn More
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
			<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
				<div
					class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-10 h-10"
						viewBox="0 0 24 24"
					>
						<circle cx="6" cy="6" r="3" />
						<circle cx="6" cy="18" r="3" />
						<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
					</svg>
				</div>
				<div class="flex-grow">
					<h2 class="text-yellow-600 text-lg title-font font-medium mb-3">Installation</h2>
					<p class="leading-relaxed text-base text-gray-400">
						To run the app locally, you'll need to have Node.js and MongoDB installed on your
						machine. Here are the steps to get started.
					</p>
					<a class="mt-3 text-indigo-500 inline-flex items-center" href="/2"
						>Learn More
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
			<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
				<div
					class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-10 h-10"
						viewBox="0 0 24 24"
					>
						<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
				</div>
				<div class="flex-grow">
					<h2 class="text-yellow-600 text-lg title-font font-medium mb-3">Deployment</h2>
					<p class="leading-relaxed text-base text-gray-400">
						To deploy the app, you can use a cloud platform like Heroku, AWS, or Google Cloud. Here
						are the basic steps for deploying to Heroku.
					</p>
					<a class="mt-3 text-indigo-500 inline-flex items-center" href="/3"
						>Learn More
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<a
			class="flex w-[40%] text-center justify-center mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			href="https://kit.svelte.dev/">More About Svelte Kit</a
		>
	</div>
</section>

<footer class="text-gray-600 body-font">
	<div
		class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
	>
		<div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
			<a
				href="#"
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
					viewBox="0 0 24 24"
				>
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
				</svg>
				<span class="ml-3 text-xl text-yellow-600">Contributing</span>
			</a>
			<p class="mt-2 text-sm text-gray-400">
				If you'd like to contribute to the project, feel free to submit a pull request. Please make
				sure to follow the contribution guidelines.
			</p>
		</div>
		<div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
			<div class="lg:w-1/4 md:w-1/2 w-full px-4">
				<h2 class="title-font font-medium text-yellow-600 tracking-widest text-sm mb-3">
					Edit This Page
				</h2>
				<nav class="list-none mb-10">
					<li>
						<a
							class="text-gray-100 underline hover:text-gray-400"
							href="https://github.com/RashidBik/accountant">GitHub</a
						>
					</li>
					<li>
						<a
							class="text-gray-100 underline hover:text-gray-400"
							href="https://github.com/RashidBik/income-server">The same app made by MERN {' >'}</a
						>
					</li>
				</nav>
			</div>
		</div>
	</div>
	<div class="bg-gray-900">
		<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
			<p class="text-gray-500 text-sm text-center sm:text-left">
				© 2023 Income App —
				<a
					href="https://rashidbik-a8ep.vercel.app/"
					rel="noopener noreferrer"
					class="text-gray-600 ml-1"
					target="_blank">@RashidBik</a
				>
			</p>
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
				<a class="text-gray-500" href="https://m.facebook.com/badfoxxxxx">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
					</svg>
				</a>
				<a class="ml-3 text-gray-500" href="https://twitter.com/RashidBik_T">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						/>
					</svg>
				</a>
				<a class="ml-3 text-gray-500" href="https://www.instagram.com/abdurashid.bigzad.5/">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
					</svg>
				</a>
				<a class="ml-3 text-gray-500" href="https://www.linkedin.com/in/rashid-bik-b830b8202/">
					<svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						/>
						<circle cx="4" cy="4" r="2" stroke="none" />
					</svg>
				</a>
			</span>
		</div>
	</div>
</footer>
