import { createApp } from 'vue';
import App from './App.vue';
import { router as setupRouter } from '@/router';
import './assets/styles/tailwind.scss';

const init = async () => {
	const router = await setupRouter;
	const app = createApp(App);
	// await router.isReady()

	app.use(router).mount('#app');
};

init();
