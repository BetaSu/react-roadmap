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
				"title": "入门",
				"collapsable": true,
				"children": [
					{
						"title": "第一章 前置知识",
						"children": [
							[
								"/pre/js",
								"js知识"
							]
						]
					},
					{
						"title": "第二章 前置知识",
						"children": [
							[
								"/preparation/file",
								"源码的文件结构"
							],
							[
								"/preparation/source",
								"调试源码"
							],
							[
								"/preparation/jsx",
								"深入理解JSX"
							]
						]
					}
				]
			},
		]
	},
	"base": ""
}