/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

// config.module.rules.push({
//   test: /\.scss$/,
//   use: [
//     'style-loader',
//     'css-loader',
//     'sass-loader',
//     {
//       loader: 'sass-resources-loader',
//       options: {
//         resources: ['./styles/variables.scss', './styles/mixins.scss'],
//       },
//     },
//   ],
// });

module.exports = nextConfig;
