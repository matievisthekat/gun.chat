import './assets/styles/global.scss';
import App from './pages/Index.svelte';

const app = new App({target: document.getElementById('app'), hydrate: true});

export default app;
