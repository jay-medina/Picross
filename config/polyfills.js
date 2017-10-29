const customWindow = (window);

if (customWindow.Map === undefined) {
  require('core-js/es6/map');
}

if (customWindow.Set === undefined) {
  require('core-js/es6/set');
}

if (customWindow.requestAnimationFrame === undefined) {
  customWindow.requestAnimationFrame = (callback) =>
    setTimeout(callback, 0);
}
