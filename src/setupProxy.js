const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.jsonserve.com',
      pathRewrite: {'^/api' : ''},
      changeOrigin: true,
      secure: false,
    })
  );
};