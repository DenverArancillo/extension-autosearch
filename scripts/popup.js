const init = () => {
	const actionOnClick = async () => {
		let firstSiteUrl = document.getElementById("firstSite").value
		let secondSiteUrl = document.getElementById("secondSite").value

		let firstSiteQuery = await chrome.tabs.query({ url: firstSiteUrl })
		let secondSiteQuery = await chrome.tabs.query({ url: secondSiteUrl })

		console.log('firstSiteQuery', firstSiteQuery)
		console.log('secondSiteQuery', secondSiteQuery)

		chrome.storage.local.set({
			firstSite: {
				id: firstSiteQuery[0].id,
				url: firstSiteUrl
			}
		})

		chrome.storage.local.set({
			secondSite: {
				id: secondSiteQuery[0].id,
				url: secondSiteUrl
			}
		})
	}

	document.getElementById("setSites").addEventListener("click", actionOnClick)
}

document.addEventListener("DOMContentLoaded", init)