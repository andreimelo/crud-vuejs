import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import '../assets/tailwind.css';

const router = createRouter({
	history : createWebHistory(),
	routes,
});

export default router;
