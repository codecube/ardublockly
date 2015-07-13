/**
 * @author    carlosperate
 * @copyright 2015 carlosperate https://github.com/carlosperate
 * @license   Licensed under the The MIT License (MIT), a copy can be found in
 *            the electron project directory LICENSE file.
 *
 * @fileoverview Electron entry point continues here. Creates windows and
 *               handles system events.
 */
'use strict';

var app = require('app');
var shell = require('shell');
var jetpack = require('fs-jetpack');
var appMenu = require('./appmenu.js');
var server = require('./servermgr.js');
var BrowserWindow = require('browser-window');
var env = require('./vendor/electron_boilerplate/env_config');
var windowStateKeeper = require('./vendor/electron_boilerplate/window_state');

// Global reference of the window object must be maintain, or the window will
<<<<<<< HEAD
// be closed automatically when the javascript object is garbage collected.
var mainWindow = null;
=======
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
var splashWindow = null;
>>>>>>> origin

// Preserver of the window size and position between app launches.
var mainWindowState = windowStateKeeper('main', {
    width: 1200,
    height: 765
});

app.on('ready', function () {
<<<<<<< HEAD
    var splashWindow = createSplashWindow();
=======
    createSplashWindow();
>>>>>>> origin

    server.startServer();

    mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        title: 'Ardublockly',
        transparent: false,
        frame: true,
        show: false,
        'node-integration': false,
        'web-preferences': {
            'web-security': true,
            'java': false,
            'text-areas-are-resizable': false,
            'webgl': false,
            'webaudio': true,
<<<<<<< HEAD
=======
            'subpixel-font-scaling': true,
            'direct-write': true,
            //'overlay-scrollbars': true,
>>>>>>> origin
            'plugins': false
        }
    });

    if (mainWindowState.isMaximized) {
        mainWindow.maximize();
    }

    if (env.name === 'development') {
        appMenu.setArdublocklyMenu(true);
    } else {
        appMenu.setArdublocklyMenu();
    }

    mainWindow.webContents.on('did-fail-load',
        function (event, errorCode, errorDescription) {
            console.log('Page failed to load (' + errorCode + '). The server ' +
                'is probably not yet running. Trying again in 200 ms.');
            setTimeout(function() {
                mainWindow.webContents.reload();
            }, 200);
        }
    );

    mainWindow.webContents.on('did-finish-load', function () {
        mainWindow.show();
<<<<<<< HEAD
        splashWindow.close();
=======
        if (splashWindow !== null) {
            splashWindow.close();
            splashWindow = null;
        }
>>>>>>> origin
    });

    mainWindow.loadUrl('http://localhost:8000/ardublockly');

    mainWindow.on('close', function () {
        mainWindowState.saveState(mainWindow);
        mainWindow = null;
    });
});

app.on('window-all-closed', function () {
    server.stopServer();
    // Might need to add OS X exception
    // https://github.com/atom/electron/issues/1357 
    app.quit();
});

function createSplashWindow() {
<<<<<<< HEAD
    var imagePath = 'file://' + server.getProjectJetpack().path(
        'ardublockly', 'img', 'ardublockly_splash.png');

    var splashWindow = new BrowserWindow({
        width: 450,
        height: 300,
        frame: false,
        show: true,
        transparent: true,
        images: true,
        center: true,
        'use-content-size': true
    });
    splashWindow.loadUrl(imagePath);

    return splashWindow;
=======
    if (splashWindow === null) {
        var imagePath = 'file://' + server.getProjectJetpack().path(
            'ardublockly', 'img', 'ardublockly_splash.png');

        splashWindow = new BrowserWindow({
            width: 450,
            height: 300,
            frame: false,
            show: true,
            transparent: true,
            images: true,
            center: true,
            'use-content-size': true
        });
        splashWindow.loadUrl(imagePath);
    }
>>>>>>> origin
}
