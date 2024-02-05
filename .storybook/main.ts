// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { StorybookConfig } from '@storybook/nextjs';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const componentsDirectories = ["atoms", "molecules", "organisms", "templates"];

const components = componentsDirectories.map(dir => ({
  directory: `../src/components/${dir}`,
  titlePrefix: `Components/${dir}`,
  files: "**/*.stories.tsx",
}));

const config: StorybookConfig = {
  stories: [{
    directory: `../src/components`,
    titlePrefix: `Components`,
    files: "**/Welcome.stories.tsx",

  }, ...components],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/themes'
  ],
  staticDirs: ['../public/fonts'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin({})];
    config.resolve.extensions.push('.ts', '.tsx', '.d.ts');
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.xml$/,
      use: [{ loader: 'ignore-loader' }],
    });
    return config;
  },

  docs: {
    autodocs: 'tag',
  },
};
export default config;
