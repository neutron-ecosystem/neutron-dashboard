const path = require('path');
const spawn = require('child_process').spawn;

const serve = require('koa-static');
const route = require('koa-route');
const mount = require('koa-mount');
const proxy = require('koa-proxy');

const ReactScripts = {
  start: () => {
    const start = spawn('node', ['neutron-server/start.js'], {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
  },
  build: () => {
    const build = spawn('node', ['neutron-server/build.js'], {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
  },
}

const serialize = (context) => {
  const { spec } = context;
  return {
    spec,
  };
};

module.exports = (app, context) => {
  ReactScripts.build();

  const staticDir = path.join(__dirname, '..', 'build');

  app.use(mount('/dashboard', serve(staticDir, {
    root: 'index.html',
  })));

  app.use(mount('/static', proxy({
    host: 'http://localhost:9001/',
    map: path => `dashboard/static/${path}`
  })));

  app.use(route.get('/dashboard/context', function* getContext(next) {
    this.body = serialize(context);
  }));
};
