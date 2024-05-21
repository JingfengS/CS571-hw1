// !!! STOP !!!
// You should not need to modify anything below.
// See Step 9 for using your Badger ID to get today's feature,
// there is no code for you to do beyond here!

const badgeHeader = {
	"X-CS571-ID" : "bid_fa_02394994c155f940a4a80369e760c7c94262986507d310e61922a283f24de3bb"
}
fetch("https://cs571.org/api/s24/hw1/featured-sale-item", {
	headers: badgeHeader
})
.then(res => {
	if (res.status === 200 || res.status === 304) {
		return res.json()
	} else {
		throw new Error();
	}
})
.then(data => {
	document.getElementById("feature").innerText = `Today's sale is ${data.name} for \$${data.price}, which can only be asked for at the service desk!`
})
.catch(err => {
	console.error("Could not get the featured item.")
})
