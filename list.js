请注意运行模式下，因日志输出、sourcemap以及未压缩源码等原因，性能和包体积，均不及发行模式。
{
  mode: 'development',
  context: 'E:\\demo\\demo-cloud',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'E:\\demo\\demo-cloud\\dist\\dev\\h5',
    filename: 'static/js/[name].js',
    publicPath: '/',
    chunkFilename: 'static/js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'E:\\demo\\demo-cloud\\src',
      vue$: '@dcloudio/vue-cli-plugin-uni/packages/h5-vue',
      './@': 'E:\\demo\\demo-cloud\\src',
      'uni-pages': 'E:\\demo\\demo-cloud\\src\\pages.json',
      '@dcloudio/uni-stat': 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\uni-stat\\dist\\index.js',
      'uni-stat-config': 'E:\\demo\\demo-cloud\\src\\pages.json?{"type":"stat"}',
      vuex: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\vuex3\\dist\\vuex.common.js',
      'vue-router': 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-router',
      'uni-h5': 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\uni-h5\\dist\\index.umd.min.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
      '.nvue'
    ],
    modules: [
      'node_modules',
      'E:\\demo\\demo-cloud\\node_modules',
      'E:\\demo\\demo-cloud\\node_modules\\@vue\\cli-service\\node_modules',
      'E:\\demo\\demo-cloud\\src',
      'E:\\demo\\demo-cloud\\src\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      'E:\\demo\\demo-cloud\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'E:\\demo\\demo-cloud\\node_modules',
      'E:\\demo\\demo-cloud\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ],
    alias: {
      'babel-loader': 'E:\\demo\\demo-cloud\\node_modules\\babel-loader\\lib\\index.js',
      'cache-loader': 'E:\\demo\\demo-cloud\\node_modules\\cache-loader\\dist\\cjs.js',
      'thread-loader': 'E:\\demo\\demo-cloud\\node_modules\\thread-loader\\dist\\cjs.js',
      'css-loader': 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
      'file-loader': 'E:\\demo\\demo-cloud\\node_modules\\file-loader\\dist\\cjs.js',
      'postcss-loader': 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
      'url-loader': 'E:\\demo\\demo-cloud\\node_modules\\url-loader\\dist\\cjs.js',
      'vue-loader': 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\vue-loader\\lib\\index.js',
      'vue-style-loader': 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader'
    }
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('mjs') */
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        include: [
          /node_modules/
        ]
      },
      /* config.module.rule('vue') */
      {
        test: [
          /\.vue$/,
          /\.nvue$/
        ],
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\vue-loader\\lib\\index.js',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
                h5: true,
                modules: [
                  {
                    postTransformNode: function () { /* omitted long function */ }
                  },
                  {
                    preTransformNode: function () { /* omitted long function */ },
                    postTransformNode: function () { /* omitted long function */ }
                  }
                ]
              },
              cacheDirectory: false,
              cacheIdentifier: false,
              compiler: {
                compile: function () { /* omitted long function */ },
                parseComponent: function () { /* omitted long function */ },
                compileToFunctions: function () { /* omitted long function */ },
                ssrCompile: function () { /* omitted long function */ },
                ssrCompileToFunctions: function () { /* omitted long function */ },
                generateCodeFrame: function () { /* omitted long function */ }
              },
              hotReload: true,
              transformAssetUrls: false,
              isH5: true
            }
          },
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-scoped-loader\\index.js'
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name]22.[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'static/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'expanded',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'E:\\demo\\demo-cloud\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    APP_PLUS: false,
                    H5: true,
                    MP_360: false,
                    MP_ALIPAY: false,
                    MP_BAIDU: false,
                    MP_JD: false,
                    MP_KUAISHOU: false,
                    MP_LARK: false,
                    MP_QQ: false,
                    MP_TOUTIAO: false,
                    MP_WEIXIN: false,
                    QUICKAPP_NATIVE: false,
                    QUICKAPP_WEBVIEW: false,
                    VUE2: true,
                    VUE3: false,
                    MP: false,
                    APP: false,
                    APP_PLUS_NVUE: false,
                    APP_VUE: false,
                    APP_NVUE: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\babel-loader\\lib\\index.js'
          },
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
            options: {
              type: 'js',
              context: {
                APP_PLUS: false,
                H5: true,
                MP_360: false,
                MP_ALIPAY: false,
                MP_BAIDU: false,
                MP_JD: false,
                MP_KUAISHOU: false,
                MP_LARK: false,
                MP_QQ: false,
                MP_TOUTIAO: false,
                MP_WEIXIN: false,
                QUICKAPP_NATIVE: false,
                QUICKAPP_WEBVIEW: false,
                VUE2: true,
                VUE3: false,
                MP: false,
                APP: false,
                APP_PLUS_NVUE: false,
                APP_VUE: false,
                APP_NVUE: false
              }
            }
          }
        ]
      },
      {
        test: 'E:\\demo\\demo-cloud\\src\\pages.json',
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@dcloudio/webpack-uni-pages-loader'
          }
        ],
        type: 'javascript/auto'
      },
      {
        resourceQuery: /vue&type=template/,
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
            options: {
              type: 'html',
              context: {
                APP_PLUS: false,
                H5: true,
                MP_360: false,
                MP_ALIPAY: false,
                MP_BAIDU: false,
                MP_JD: false,
                MP_KUAISHOU: false,
                MP_LARK: false,
                MP_QQ: false,
                MP_TOUTIAO: false,
                MP_WEIXIN: false,
                QUICKAPP_NATIVE: false,
                QUICKAPP_WEBVIEW: false,
                VUE2: true,
                VUE3: false,
                MP: false,
                APP: false,
                APP_PLUS_NVUE: false,
                APP_VUE: false,
                APP_NVUE: false
              }
            }
          }
        ]
      },
      {
        resourceQuery: /vue&type=script/,
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
            options: {
              type: 'js',
              context: {
                APP_PLUS: false,
                H5: true,
                MP_360: false,
                MP_ALIPAY: false,
                MP_BAIDU: false,
                MP_JD: false,
                MP_KUAISHOU: false,
                MP_LARK: false,
                MP_QQ: false,
                MP_TOUTIAO: false,
                MP_WEIXIN: false,
                QUICKAPP_NATIVE: false,
                QUICKAPP_WEBVIEW: false,
                VUE2: true,
                VUE3: false,
                MP: false,
                APP: false,
                APP_PLUS_NVUE: false,
                APP_VUE: false,
                APP_NVUE: false
              }
            }
          }
        ]
      },
      {
        test: 'E:\\demo\\demo-cloud\\src\\main.js',
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\wrap-loader',
            options: {
              before: [
                'import \'uni-pages\';import \'uni-h5\';'
              ]
            }
          }
        ]
      },
      {
        test: /App\.vue$/,
        use: {
          loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\wrap-loader',
          options: {
            before: [
              '<template><App :keepAliveInclude="keepAliveInclude"/></template>'
            ]
          }
        }
      },
      {
        resourceQuery: /vue&type=script/,
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-uni-app-loader\\using-components'
          }
        ]
      },
      {
        resourceQuery: /vue&type=template/,
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-uni-app-loader\\filter-modules-template.js'
          },
          {
            loader: '@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta'
          }
        ]
      },
      {
        resourceQuery: [
          /lang=wxs/,
          /blockType=wxs/
        ],
        use: [
          {
            loader: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-uni-filter-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: false,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ],
    moduleIds: 'hashed'
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          VUE_APP_INDEX_CSS_HASH: '"a5c69d49"',
          VUE_APP_NAME: '""',
          VUE_APP_PLATFORM: '"h5"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ],
        onErrors: function () { /* omitted long function */ }
      }
    ),
    /* config.plugin('html-index') */
    new HtmlWebpackPlugin(
      {
        title: '',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'index'
        ],
        template: 'E:\\demo\\demo-cloud\\public\\index.html',
        filename: 'index.html',
        baseUrl: '/'
      }
    ),
    /* config.plugin('uni-define') */
    new (require('E:\\demo\\demo-cloud\\node_modules\\webpack\\lib\\DefinePlugin.js'))(
      {
        __UNI_FEATURE_PROMISE__: 'false',
        'process.env.UNI_ENV': '"h5"',
        'process.env.UNI_APP_ID': '"wx21327a19dfa7b31b"',
        'process.env.UNI_APP_NAME': '""',
        'process.env.UNI_PLATFORM': '"h5"',
        'process.env.UNI_CLOUD_PROVIDER': '[]',
        'process.env.UNICLOUD_DEBUG': undefined,
        'process.env.RUN_BY_HBUILDERX': 'false',
        'process.env.UNI_AUTOMATOR_WS_ENDPOINT': undefined,
        __UNI_ROUTER_MODE__: '"hash"'
      }
    ),
    {
      patterns: [
        {
          from: 'E:\\demo\\demo-cloud\\src\\static',
          to: 'E:\\demo\\demo-cloud\\dist\\dev\\h5\\static',
          ignore: [
            'app-plus/**/*',
            'mp-360/**/*',
            'mp-alipay/**/*',
            'mp-baidu/**/*',
            'mp-jd/**/*',
            'mp-kuaishou/**/*',
            'mp-lark/**/*',
            'mp-qq/**/*',
            'mp-toutiao/**/*',
            'mp-weixin/**/*',
            'quickapp-native/**/*',
            'quickapp-webview/**/*'
          ]
        },
        {
          from: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\uni-h5\\dist\\index.css',
          to: 'static\\[name].a5c69d49.[ext]',
          transform: function () { /* omitted long function */ }
        }
      ],
      options: {}
    },
    {
      patterns: [
        {
          from: 'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\uni-automator\\dist\\automator.json',
          to: '../.automator/h5/.automator.json',
          transform: function () { /* omitted long function */ }
        }
      ],
      options: {}
    },
    {
      options: {
        test: /E:\\demo\\demo-cloud\\src/,
        exclude: [
          /pages\.json/,
          /node_modules/,
          /vue&type=template/,
          /vue&type=style/
        ],
        moduleFilenameTemplate: function () { /* omitted long function */ }
      }
    },
    {},
    {
      definitions: {
        __f__: [
          'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\lib\\format-log.js',
          'log'
        ],
        uniCloud: [
          'E:\\demo\\demo-cloud\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\uni-cloud\\dist\\index.js',
          'default'
        ],
        'wx.nextTick': [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'nextTick'
        ],
        Page: [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'Page'
        ],
        Component: [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'Component'
        ],
        Behavior: [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'Behavior'
        ],
        getDate: [
          '@dcloudio/uni-mp-weixin/dist/wxs.js',
          'getDate'
        ],
        getRegExp: [
          '@dcloudio/uni-mp-weixin/dist/wxs.js',
          'getRegExp'
        ]
      }
    },
    {
      content: '\n        <script>\n        (function () {\r\n  var userAgent = navigator.userAgent\r\n  window.addEventListener(\'resize\', function () {\r\n    if (navigator.userAgent !== userAgent) {\n      /* eslint-disable no-undef */\r\n      location.reload()\r\n    }\r\n  })\r\n})()\n\n        </script>\n        '
    }
  ],
  entry: {
    index: [
      'E:\\demo\\demo-cloud\\src\\main.js'
    ]
  },
  devtool: false,
  performance: {
    assetFilter: function () { /* omitted long function */ }
  },
  watchOptions: {
    ignored: [
      'E:\\demo\\demo-cloud\\src\\*.md',
      'E:\\demo\\demo-cloud\\src\\.hbuilderx',
      'E:\\demo\\demo-cloud\\src\\.editorconfig',
      'E:\\demo\\demo-cloud\\src\\.gitignore',
      'E:\\demo\\demo-cloud\\src\\LICENSE',
      'E:\\demo\\demo-cloud\\src\\unpackage',
      'E:\\demo\\demo-cloud\\src\\uniCloud-aliyun',
      'E:\\demo\\demo-cloud\\src\\uniCloud-tcb',
      'E:\\demo\\demo-cloud\\src\\cloudfunctions-aliyun',
      'E:\\demo\\demo-cloud\\src\\cloudfunctions-tcb'
    ]
  },
  devServer: {
    watchOptions: {
      ignored: [
        'E:\\demo\\demo-cloud\\src\\*.md',
        'E:\\demo\\demo-cloud\\src\\.hbuilderx',
        'E:\\demo\\demo-cloud\\src\\.editorconfig',
        'E:\\demo\\demo-cloud\\src\\.gitignore',
        'E:\\demo\\demo-cloud\\src\\LICENSE',
        'E:\\demo\\demo-cloud\\src\\unpackage',
        'E:\\demo\\demo-cloud\\src\\uniCloud-aliyun',
        'E:\\demo\\demo-cloud\\src\\uniCloud-tcb',
        'E:\\demo\\demo-cloud\\src\\cloudfunctions-aliyun',
        'E:\\demo\\demo-cloud\\src\\cloudfunctions-tcb'
      ]
    }
  }
}
