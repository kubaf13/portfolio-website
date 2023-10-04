// eslint-disable-next-line
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: {
      displayName: process.env.APP_ENVIRONMENT === 'development',
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
};

module.exports = nextConfig;
