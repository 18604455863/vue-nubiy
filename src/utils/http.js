import axios from "axios";//axios 二次封装


const http = axios.create({//创建新的服务
    timeout: 2000,
    //baseUrl:"",
    withCredentials: true//表示跨域请求是是否需要凭证
});//以上为基本配置项

http.interceptors.request.use(//响应的拦截
    config => {
        if (config.method == "get") {
            config.params = { ...config.data };
        } else if (config.method == "post") {
        }
        //loading.open();
        return config;

    },
    err => {
        return Promise.reject(err);
    }
);

http.interceptors.response.use(res => {
    if (res.status == 200){
        //loading.close();
        return res.data;
    }
});

export default http;
