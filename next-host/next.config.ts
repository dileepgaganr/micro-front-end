import type { NextConfig } from "next";
import path from "path";
const { ModuleFederationPlugin } = require('webpack').container;

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  webpack(config, options) {
    if (options.isServer) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
    } else {
      config.experiments = { topLevelAwait: true };
      config.resolve.alias["@shared"] = path.resolve(__dirname, 'shared');
      config.output.publicPath = 'http://localhost:3000/_next/';
    }
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          vueRemote: "vueRemote@http://localhost:8080/remoteEntry.js",
          angularRemote: "angularRemote@http://localhost:4200/remoteEntry.js"
        },
        shared: {
          'react': {
            singleton: true,
            eager: true
          },
          'react-dom': {
            singleton: true,
            eager: true
          }
        }
      })

    );

    return config;
  }
};

export default nextConfig;
