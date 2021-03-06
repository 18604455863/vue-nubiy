const path = require("path")

module.exports = {
    devServer:{
        "/app":{
            target:"https://m.nubia.com",
            changeOrigin:true
        }
    },
    configureWebpack:{//别名的配置
        alias:{
            "@":path.join(__dirname,"./src"),
            "@api":path.join(__dirname,"./src/api"),
            "@assets":path.join(__dirname,"./src/assets"),
            "@common":path.join(__dirname,"./src/common"),
            "@components":path.join(__dirname,"./src/components"),
            "@pages":path.join(__dirname,"./src/pages"),
            "@router":path.join(__dirname,"./src/router"),
            "@utils":path.join(__dirname,"./src/utils")

        }
    }
}