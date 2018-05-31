import HtmlWebPackPlugin from 'html-webpack-plugin'

export const entry = {
  app: './src/app/index.jsx'
}

export const resolve = {
  extensions: ['.js', '.jsx', '.css'],
  modules: ['node_modules']
}

export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: true,
            minimize: true
          }
        }
      ]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader'
        }
      ]
    }
  ]
}

export const devServer = {
  proxy: {
    '/socket.io': {
      target: 'http://localhost:3000',
      ws: true
    }
  }
}

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/app/index.html',
  filename: './index.html'
})

export const plugins = [
  htmlWebpackPlugin
]
