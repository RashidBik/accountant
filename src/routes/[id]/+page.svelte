<script>
	import { page } from '$app/stores';

	$: id = $page.params.id;
</script>

<div class="flex flex-1 flex-col h-[100%] py-12 px-16 md:px-48">
	{#if id == '1'}
		<h2 class="text-yellow-600 text-lg title-font font-medium mb-3">Usage</h2>
		<div class="leading-relaxed text-base text-gray-400">
			<p class="p-3">
				Introducing the <b>Accounting App</b> – the easy and efficient way to manage your finances!
				Built with <b>Svelte Kit</b> and MongoDB, this full-stack web app allows you to track your expenses
				and income, view reports, and manage your accounts – all in one place.
			</p>

			<p class="p-3">
				With its intuitive user interface and powerful features, the Accounting App simplifies the
				process of managing your finances. You can easily add transactions and categorize them
				according to your needs, view a summary of your income and expenses, and generate detailed
				reports for a specific period or category.
			</p>

			<p class="p-3">
				The Accounting App is not only easy to use, but also secure and reliable. It uses
				industry-standard encryption to protect your data and stores it on a secure cloud-based
				server. And with its responsive design, you can access the app from any device, anywhere,
				anytime.
			</p>
			<p class="p-3">
				Whether you're a freelancer, a small business owner, or just looking to keep track of your
				personal finances, the Accounting App is the perfect solution for you. Try it today and
				experience the convenience of managing your finances in a whole new way!
			</p>
		</div>
	{:else if id == '2'}
		<h2 class="text-yellow-600 text-lg title-font font-medium mb-3">Installation</h2>
		<div class="leading-relaxed text-base text-gray-400">
			<p class="p-3">
				To run the app locally, you'll need to have Node.js and MongoDB installed on your machine.
				Here are the steps to get started:
			</p>

			<p class="p-1">1.Clone the repository to your local machine:</p>
			<p class="p-3 bg-black">git clone https://github.com/RashidBik/accountant.git</p>
			<p class="p-1">2.Install the dependencies:</p>
			<p class="p-3 bg-black">cd accountant <br /> npm install</p>
			<p class="p-1">
				3.Create a .env file in the root of the project and add your MongoDB connection string:
			</p>
			<p class="p-3 bg-black">MONGO_URI=your-mongodb-connection-string</p>
			<p class="p-1">Run the app:</p>
			<p class="p-3 bg-black">npm run dev</p>
			<p class="p-1">Open the app in your preferred web browser at http://localhost:5173.</p>
		</div>
	{:else if id == '3'}
		<h2 class="text-yellow-600 text-lg title-font font-medium mb-3">Deployment</h2>
		<div class="leading-relaxed text-base text-gray-400 h-[100%]">
			<p class="p-1">
				Deployment To deploy the app, you can use a cloud platform like Vercel, AWS, or Google
				Cloud. Here are the basic steps for deploying to Heroku:
			</p>

			<div class="bg-black m-2">
				<p class="p-1">1.Create a new Vercel project</p>
				<p class="p-1">2.Select your-app-domain</p>
				<p class="p-1">3.Set the MONGO_URI environment variable for your app</p>
				<p class="p-1">4.Deploy the app to Vercel</p>
			</div>

			the app in your web browser at https://your-app-name.vercelapp.com. For more detailed
			instructions on deploying a Svelte Kit app to Vercel, see the<a
				href="https://kit.svelte.dev/"
				target="_blank"
				rel="noopener noreferrer">official documentation</a
			>.
		</div>
	{/if}
</div>
