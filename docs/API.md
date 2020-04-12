# Feda API
----

### 查询微服务配置信息
**Method:** GET
**Url:** /rest/feda/v1/apps/:appName/:appVersion
**Query:** null
**Response:**
```javaScript
// success:
{
    success: true,
    data: {
        name: 'sampleApp',
        version: '1.0.0',
        assets: {
            js: [
                'vendors.su3h2u4.js',
                'main.su78390s.js'
            ],
            css: [

            ]
        }
    }
}

// failed:
{
    success: false,
    data: 'Error' // 错误信息
}
```


### 部署一个新的前端微服务
**Method:** POST
**Url:** /rest/feda/v1/apps/:appName/:appVersion
**Query:** null
**Response:**
```javaScript
// success：
{
    success: true,
    data: 'successfully deploy micro-service-1'
}

// failed:
{
    success: false,
    data: 'Error' // 错误信息
}
```

### 删除已部署的前端微服务
**Method:** DELETE
**Url:** /rest/feda/v1/apps/:appName/:appVersion
**Query:** null
**Response:**
```javaScript
// success：
{
    success: true,
    data: 'successfully undeploy micro-service-1'
}

// failed:
{
    success: false,
    data: 'Error' // 错误信息
}
```
