export default [
	{
		path      : '/',
		name      : 'Home',
		component : () => import('../views/Home'),
	},
	{
		path      : '/404',
		name      : 'Error404',
		component : () => import('../views/Error404'),
	},
	{
		path     : '/:catchAll(.*)',
		redirect : '404',
	},
];
