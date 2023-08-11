"use strict";
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
module.exports = {
	name: "calculator",
	settings: {},
	dependencies: [],
	actions: {
		welcome: {
			rest: "/calculate",
			async handler(ctx) {
				if (ctx.params.sign == "*") {
					return ctx.params.a * ctx.params.b;
					//to check http://localhost:3000/api/calculator/calculate?a=50&sign=*&b=2
					//50 * 2 = 100
				} else if (ctx.params.sign == "/") {
					return ctx.params.a / ctx.params.b;
					//to check http://localhost:3000/api/calculator/calculate?a=50&sign=/&b=2
					//50 / 2 = 25
				} else if (ctx.params.sign == "+") {
					return +ctx.params.a + +ctx.params.b;
					//to check http://localhost:3000/api/calculator/calculate?a=50&sign=%2B&b=2
					//50 + 2 = 52
				} else if (ctx.params.sign == "-") {
					return ctx.params.a - ctx.params.b;
					//to check http://localhost:3000/api/calculator/calculate?a=50&sign=-&b=2
					//50 - 2 = 48
				}
			},
		},
	},
	events: {},
	methods: {},
	created() {},
	async started() {},
	async stopped() {},
};
