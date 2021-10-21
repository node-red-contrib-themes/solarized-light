module.exports = function(RED) {
  RED.plugins.registerPlugin("solarized-light", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css"
    ],
    monacoOptions: {
      theme: "solarized-light"
    }
  })

  RED.plugins.registerPlugin("solarized-light-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css",
      "theme-scrollbars.min.css"
    ],
    monacoOptions: {
      theme: "solarized-light"
    }
  })
}