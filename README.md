# Solarized Light Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![NPM Shield][npm-shield]][npm-package]

## WIP

This is a work in progress. Please help us make this theme better, if you find
something wrong open an issue [here][github-issues]. Thank you!

## About

A solarized light theme for [Node-RED][node-red].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/solarized-light/master/images/screenshot.png)

## Install

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Install this package.

```shell
npm install @node-red-contrib-themes/solarized-light
```

Add the following to the `editorTheme` section of your `settings.js`.

```js
editorTheme: {
    page: {
        css: "<HOME>/.node-red/node_modules/@node-red-contrib-themes/solarized-light/theme.css"
    }
}
```

Replace `<HOME>` with the home directory of the user running Node-RED. For
example, `/home/username`.

For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

Restart Node-RED.

Enjoy!

## Update

Change to the Node-RED `userDir` directory, usually `~/.node-red`.

```shell
cd ~/.node-red
```

Update this package.

```shell
npm update @node-red-contrib-themes/solarized-light
```

Reload the Node-RED page on the web browser.

## License

[MIT][license]

[commits-shield]: https://img.shields.io/github/commit-activity/y/node-red-contrib-themes/solarized-light.svg
[commits]: https://github.com/node-red-contrib-themes/solarized-light/commits/master
[github-issues]: https://github.com/node-red-contrib-themes/solarized-light/issues/new
[last-commit-shield]: https://img.shields.io/github/last-commit/node-red-contrib-themes/solarized-light.svg
[license]: https://github.com/node-red-contrib-themes/solarized-light/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/node-red-contrib-themes/solarized-light.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
[npm-package]: https://nodei.co/npm/@node-red-contrib-themes/solarized-light
[npm-shield]: https://nodei.co/npm/@node-red-contrib-themes/solarized-light.png