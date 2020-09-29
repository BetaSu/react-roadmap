module.exports = {
	"title": "React通关路线图",
	"description": "React技术栈完整的学习路线",
	"dest": "dist",
	"serviceWorker": false,
	"configureWebpack": {
		"resolve": {
			"alias": {}
		}
	},
	"markdown": {},
	"themeConfig": {
		"repo": "BetaSu/react-roadmap",
		"repoLabel": "点亮⭐不迷路",
		"editLinks": true,
		"docsDir": "docs",
		"editLinkText": "为该章节纠错",
		"lastUpdated": "上次更新",
		"nav": [
			// {
			// 	"text": "🙋‍♂️ 一起学习",
			// 	"link": "/me"
			// }
		],
		"sidebar": [
			['/', '前言'],
			{
				"title": "入门篇",
				"collapsable": true,
				
				"children": [
					[
						"/pre/what-is-react",
						"React是什么"
					],
					[
						"/pre/js-for-react",
						"必要的JS知识"
					],
					[
						"/pre/react-start",
						"React基础知识"
					],
					[
						"/pre/lifecycle",
						"组件的生命周期"
					],
					[
						"/pre/cwrp",
						"componentWillReceiveProps"
					],
					[
						"/pre/feature",
						"一些特性"
					]
				]
			},
			{
				"title": "进阶篇",
				"collapsable": true,
				
				"children": [
					[
						"/advance/pre",
						"前言"
					],
					[
						"/advance/hooks",
						"Hooks"
					],
					[
						"/advance/state-management",
						"状态管理"
					]
				]
			}
		]
	},
	"base": ""
}