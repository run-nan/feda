# Feda
Front-end Deploy Agent

![](https://user-gold-cdn.xitu.io/2020/5/11/172043d89263df89?w=1918&h=947&f=png&s=131739)

## 运行说明
- 准备好docker和docker-compose环境
- 把项目拷贝到~/feda目录
- 把你自己的https私钥private-key.pem和证书cert.pem放在~/.ssh目录下
- 进入~/feda, 执行`docker-compose up -d`

## API

### 部署一个前端微服务

**Method:** POST

**Url:** /rest/feda/v1/apps/:appName

**Query:** null

**Body**:
```
{
    package: zip包文件
}
```
**Response:**
```javaScript
// success:
{
    success: true
}

// failed:
{
    success: false,
    message: '...' // 错误信息
}
```


### 查询已部署的所有微服务

**Method:** POST

**Url:** /rest/feda/v1/apps

**Query:** null

**Response:**

```javaScript
// success：
{
    success: true,
    data: ['app1@version1', 'app2@version2']
}

// failed:
{
    success: false,
    data: 'Error' // 错误信息
}
```

### 获取一个微服务的资源配置

**Method：** GET

**Url:** /feda-assets/:appName/omicro.config.json

**Response:**

```javaScript
{
    "name": "normal-app@1.0.0",
    "assets": {
        "css": [
            "entry.1ffa7be5.css"
        ],
        "js": [
            "vendors.8f02d439.js",
            "entry.8f02d439.js"
        ]
    }
}
```

### obvious资源配置中间件

部署在Feda上的所有前端微服务，其静态资源路径由`https://{host}/feda-assets/{serviceName}/omicro.config.json`声明，因此，对应的obvious中间件实现为：

```javaScript
const obviousFedaMiddleware = async (name, loadJs, loadCss) => {
    const res = await fetch(`https://{host}/feda-assets/${name}/omicro.config.json`);
    const data = await res.json();
    for(const cssSrc of data.assets.css) {
        await loadCss(cssSrc);
    }

    for(const jsSrc of data.assets.js) {
        await loadJs(jsSrc);
    }
} 

```

创建bus后即可根据服务名拉起所有部署在Feda上的前端微服务：

```javaScript
import {createBus, getBus} from '@runnan/obvious';

createBus('fedaBus', null , obviousFedaMiddleWare);

const bus = getBus('fedaBus');
bus.startApp('normal-app@1.0.0');
```

## 关联项目

  - [obvious](https://github.com/SMIELPF/obvious):轻量级的微前端框架
  - [react-obvious](https://github.com/SMIELPF/react-obvious): 结合react和obvious的类react-redux框架
  - [omicro-cli](https://github.com/SMIELPF/omicro-cli): obvious微前端项目脚手架，支持生成代码模板和把项目部署到Feda