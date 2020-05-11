# Feda
Front-end Deploy Agent

![](https://user-gold-cdn.xitu.io/2020/5/11/172043d89263df89?w=1918&h=947&f=png&s=131739)

## 运行说明
----
- 准备好docker和docker-compose环境
- 把项目拷贝到~/feda目录
- 把你自己的https私钥private-key.pem和证书cert.pem放在~/.ssh目录下
- 进入~/feda, 执行`docker-compose up -d`

## API
----

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