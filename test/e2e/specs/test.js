module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser.page.home()
      .open(devServer)
      .assertMainContentPresent()
      .assertHeaderText('Karakurenai')
      .assertMainLogoPresent()

    browser.end()
  }
}
