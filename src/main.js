import App from './App.svelte';

window['APP_VERSION'] = "process.env.PACKAGE_VERSION";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;