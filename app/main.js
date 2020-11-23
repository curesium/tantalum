const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new windows
  mainWindow = new BrowserWindow({});
  // Load HTML into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes:true
  }));

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [{
  label: 'TANTALUM',
  submenu: [
    {
      label: 'Reset'
    },
    {
      label: 'Quit',
      click(){
        app.quit();
      }
    }
  ]
}
];

// If Mac, add empty object to menu
if(process.platfrom == 'darwin'){
  mainMenuTemplate.unshift({});
};
