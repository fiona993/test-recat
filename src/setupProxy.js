const proxy=require('http-proxy-middleware');
module.exports=function(app){
    app.use(proxy('/apis',{
        target:'http://m.juooo.com',
        changeOrigin:true,
        pathRewrite:{
            '^/apis':''
        }
    }))
}