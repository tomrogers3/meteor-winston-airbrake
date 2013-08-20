Package.describe({
  summary: 'An Airbrake transport for winston.'
});

Npm.depends({
    "winston": "0.7.2",
    "winston-airbrake": "0.0.2"
});

Package.on_use(function (api, where) {
  // api.use('winston', 'server');

  api.add_files('winston-airbrake.js', 'server');
  if(api.export){
    api.export('Winston_Airbrake');
  }
});
