module.exports = {
	elements: {
	  container: {
		selector: "#app"
	  },
	  hello: {
		selector: ".hello"
	  },
	  title: {
		selector: "h1"
	  },
	  logo: {
		selector: "#app > img"
	  },
	},
	commands: [ {
	  open(url) {
		return this
		  .navigate(url)
		  .waitForElementVisible('@container', 5000)
	  },
	  assertHeaderText(content) {
		return this.assert.containsText('@title', content)
	  },
	  assertMainContentPresent() {
		return this.assert.elementPresent('@hello')
	  },
	  assertMainLogoPresent() {
		return this.assert.elementCount('@logo', 1)
	  },
	} ]
  }