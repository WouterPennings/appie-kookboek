import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ah_logo.png","favicon.png","food/broodje_kroket.jpeg","food/hamburger.jpeg","food/no_img.png","food/pita_falafel.jpg","food/poke_bowl.jpg","food/ramen.png","food/salmon_bagel.png","home_img.jpg","home_img2.jpg","icons/airfryer_icon.png","icons/arrow_icon.png","icons/carrot_icon.png","icons/clock_icon.png","icons/dollar_icon.png","icons/fish_icon.png","icons/leaf_icon.png","icons/meat_icon.png","icons/microwave_icon.png","icons/pan_icon.png","icons/star_icon.png","icons/vegan_icon.png","icons/vegatarian_icon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a1974d06.js","imports":["_app/immutable/entry/start.a1974d06.js","_app/immutable/chunks/index.86f7df87.js","_app/immutable/chunks/singletons.773ceaec.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.67fa9e9e.js","imports":["_app/immutable/entry/app.67fa9e9e.js","_app/immutable/chunks/index.86f7df87.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/idee",
				pattern: /^\/idee\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/recepten",
				pattern: /^\/recepten\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/recepten/[name]",
				pattern: /^\/recepten\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
