Meteor-Winston-Airbrake
===============
A wrapper around [winston-airbrake](https://github.com/shakefon/winston-airbrake.git) for using [Airbrake](https://airbrake.io) transport with [winston](https://github.com/flatiron/winston.git) for use with [Meteorite](https://github.com/oortcloud/meteorite) on top of [Meteor](http://meteor.com) :)

##Install
mrt add winston-airbrake

##Usage

Winston is exposed as:

``` js
Winston
```

And airbrake transport is exposed as:

``` js
Winston_Airbrake
```

so it can be used as follows:

``` js
var options = {
  "level": "warn",
  "apiKey": "<airbrake api key>",
  "host": "<airbrake host>",
  "silent": false,
  "handleExceptions": true
};

Winston.add(Winston_Airbrake, options);
Winston.info('Added winston airbrake transport');

Winston.error('Hit the airbrakes!'); // this dummy test error should show up in airbrake

```

See winston-airbrake [documentation](https://github.com/shakefon/winston-airbrake) for more details.

Other related projects:

* [meteor-winston] (https://github.com/tomrogers3/meteor-winston)
* [meteor-winston-loggly] (https://github.com/tomrogers3/meteor-winston-loggly)

