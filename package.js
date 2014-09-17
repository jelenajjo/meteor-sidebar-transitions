
Package.describe({
  summary: "Transition effects for off-canvas views. Source: http://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/
",
  version: "1.0.0",
  name: "jelenajjo:meteor-sidebar-transitions",
  git: "https://github.com/jelenajjo/meteor-sidebar-transitions.git",
});


Package.onUse(function (api) {
  api.addFiles('component.css', 'client');
  api.addFiles('modernizr.custom.js', 'client');
  api.addFiles('classie.js', 'client');
  api.addFiles('sidebarEffects.js', 'client');
});

