const { ModuleFederationPlugin } = require('webpack').container
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'auto',
  configureWebpack: {
    output: {
      uniqueName: 'vueApp',
      scriptType: 'text/javascript'
    },
    optimization: {
      minimize: false,
      splitChunks: false,
      runtimeChunk: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueRemote',
        filename: 'remoteEntry.js',
        exposes: {
          './createVueApp': './src/main.js',
          './App': './src/App.vue'

        },
        shared: {
          vue: {
            singleton: true,
            eager: true,
            strictVersion:true
          },
          'vue-router': {
            singleton: true,
            eager: true,
            strictVersion:true
          }
        }
      })
    ]
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
