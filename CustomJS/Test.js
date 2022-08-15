class Test {
	constructor(){
		console.log('constructor of Test');
	}
	async drawAdmonition(type, title, content, collapse, container ){
		let contentArr = [`title: ${title}`, `collapse: ${collapse}`, content];
		await app.plugins.plugins["obsidian-admonition"].postprocessor(type, contentArr.join('\n'), container);
	}

	async drawTableAdmonition(type, title, columns, rows, collapse, container, dv){
		let contentArr = [`title: ${title}`, `collapse: ${collapse}`];
		let table = await dv.markdownTable(columns, rows);
		contentArr.push(table);
		await app.plugins.plugins["obsidian-admonition"].postprocessor(type, contentArr.join('\n'), container);
	}
}