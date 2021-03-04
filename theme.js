module.exports = function(RED) {
  RED.plugins.registerPlugin("solarized-light", {
    type: "node-red-theme",
    css: [
      "theme.min.css"
    ]
  })

  RED.plugins.registerPlugin("solarized-light-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "scrollbars.min.css"
    ]
  })
}