const env = process.env.NODE_ENV

if (env === 'development') {
  console.log('开发环境')
} else if (env === 'qa') {
  console.log('测试环境')
} else if (env === 'uat') {
  console.log('预发环境')
} else if (env === 'prod') {
  console.log('正式环境')
}

// 接口服务前缀，同域一般为""
export const BASE_URL = ''
// 环境域名
export const HOST = ''
export const URL_PREFIX = ''

export const REG_MOBILE = /^1[3-9]\d{9}$/
export const REG_QQ = /^\d{5,13}$/
