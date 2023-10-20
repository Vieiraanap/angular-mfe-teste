const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'MFEComponents',

  exposes: {
    './Module': './src/app/app.module.ts',
    // './Card': './src/card/card.component.ts',
    './ButtonComponent': './src/button/button.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
