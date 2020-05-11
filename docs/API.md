# Feda API
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
