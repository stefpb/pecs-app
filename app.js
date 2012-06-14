
/**
 * Module dependencies.
 */

var express = require('express')
  , sharejs = require('share').server
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

sharejs.attach(app, {db: {type: 'none', hostname: '50.30.35.9', port: 2354, auth: 'cf2e146038b9e37ef490119cc46f02d5'}});

app.listen(process.env.C9_PORT || process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
