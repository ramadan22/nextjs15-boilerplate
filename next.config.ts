import ESLintPlugin from 'eslint-webpack-plugin';
import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  webpack(
    config: Configuration,
    { dev, isServer }: { dev: boolean; isServer: boolean },
  ): Configuration {
    if (!config.module) {
      config.module = { rules: [] };
    } else if (!config.module.rules) {
      config.module.rules = [];
    }

    // Gunakan tanda seru (!) untuk yakin akses
    config.module!.rules!.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    if (dev && !isServer) {
      config.plugins = config.plugins ?? [];
      config.plugins.push(
        new ESLintPlugin({
          extensions: ['js', 'jsx', 'ts', 'tsx'],
          emitWarning: true,
          emitError: true,
          failOnError: false,
          failOnWarning: false,
          quiet: false,
        }),
      );
    }
    return config;
  },
};

export default nextConfig;
