const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: { 
    output: { 
      libraryTarget: "system"
    },
   },
   chainWebpack: (config) => { 
    if (config.plugins.has("SystemJSPublicPathWebpackPlugin")) { 
      config.plugins.delete("SystemJSPublicPathWebpackPlugin"); 
    } 
  }, 
  filenameHashing: false,
})
