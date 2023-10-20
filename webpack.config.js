const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-bidirecional',

  exposes: {
    './Module': './src/app/app.module.ts',
  },

  remotes: {
    'MFEComponents': 'MFEComponents@http://localhost:4202/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },


});


