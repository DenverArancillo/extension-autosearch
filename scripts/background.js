chrome.storage.onChanged.addListener((changes, namespace) => {

	console.log('storage.onChange')
	console.log(changes)

	for (let key of Object.keys(changes)) {
		let tabId = changes[key]['newValue'].id

		console.log('key', key)

		if (key === 'firstSite') {
			// inject script
			const a = () => '';

			// #t-formula-bar-input div.cell-input



			// chrome.scripting.executeScript({
			// 	target : { tabId },
			// 	func: a 
			// })
		} else {

		}

		// console.log(
		// 	`Storage key "${key}" in namespace "${namespace}" changed.`,
		// 	`Old value was "${oldValue}", new value is "${newValue}".`
		// )
	}

})

console.log(self)