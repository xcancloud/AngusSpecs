/**
 * Angus Script 枚举定义
 * 基于 Java 枚举类生成的 TypeScript 枚举
 */

/**
 * <p>
 * 脚本类型枚举
 * 定义正在执行的测试类别
 * </p>
 */
export enum ScriptType {
  /** 功能测试 */
  TEST_FUNCTIONALITY = 'TEST_FUNCTIONALITY',
  /** 性能测试 */
  TEST_PERFORMANCE = 'TEST_PERFORMANCE', 
  /** 稳定性测试 */
  TEST_STABILITY = 'TEST_STABILITY',
  /** 自定义测试 */
  TEST_CUSTOMIZATION = 'TEST_CUSTOMIZATION',
  /** 模拟数据 */
  MOCK_DATA = 'MOCK_DATA',
  /** 模拟API */
  MOCK_APIS = 'MOCK_APIS'
}

/**
 * <p>
 * 错误处理动作枚举
 * 定义系统在遇到错误时的响应方式
 * </p>
 */
export enum ActionWhenError {
  /** 继续执行 */
  CONTINUE = 'CONTINUE',
  /** 停止执行 */
  STOP = 'STOP',
  /** 立即停止 */
  STOP_NOW = 'STOP_NOW'
}

/**
 * <p>
 * 启动模式枚举
 * 定义测试任务的执行模式
 * </p>
 */
export enum StartMode {
  /** 立即执行 */
  IMMEDIATELY = 'IMMEDIATELY',
  /** 定时执行 */
  TIMING = 'TIMING'
}

/**
 * <p>
 * 语言枚举
 * 定义报告和用户界面提示的语言
 * </p>
 */
export enum Languages {
  /** 简体中文 */
  zh_CN = 'zh_CN',
  /** 美式英语 */
  en_US = 'en_US'
}

/**
 * <p>
 * 提取方法枚举
 * </p>
 */
export enum ExtractionMethod {
  /** 精确值 */
  EXACT_VALUE = 'EXACT_VALUE',
  /** 正则表达式 */
  REGEX = 'REGEX',
  /** JSONPath */
  JSON_PATH = 'JSON_PATH',
  /** XPath */
  X_PATH = 'X_PATH'
}

/**
 * <p>
 * 提取源枚举
 * </p>
 */
export enum ExtractionSource {
  /** 从值提取 */
  VALUE = 'VALUE',
  /** 从文件提取 */
  FILE = 'FILE',
  /** 从HTTP提取 */
  HTTP = 'HTTP',
  /** 从HTTP采样提取 */
  HTTP_SAMPLING = 'HTTP_SAMPLING',
  /** 从HTTP断言提取 */
  HTTP_ASSERTION = 'HTTP_ASSERTION',
  /** 从JDBC提取 */
  JDBC = 'JDBC'
}

/**
 * <p>
 * 提取文件类型枚举
 * </p>
 */
export enum ExtractionFileType {
  /** CSV文件 */
  CSV = 'CSV',
  /** Excel文件 */
  EXCEL = 'EXCEL'
}

/**
 * <p>
 * HTTP提取位置枚举
 * </p>
 */
export enum HttpExtractionLocation {
  /** 查询参数 */
  QUERY_PARAMETER = 'QUERY_PARAMETER',
  /** 路径参数 */
  PATH_PARAMETER = 'PATH_PARAMETER',
  /** 请求头 */
  REQUEST_HEADER = 'REQUEST_HEADER',
  /** 表单参数 */
  FORM_PARAMETER = 'FORM_PARAMETER',
  /** 请求原始体 */
  REQUEST_RAW_BODY = 'REQUEST_RAW_BODY',
  /** 响应头 */
  RESPONSE_HEADER = 'RESPONSE_HEADER',
  /** 响应体 */
  RESPONSE_BODY = 'RESPONSE_BODY'
}

/**
 * <p>
 * HTTP请求方法枚举
 * </p>
 */
export enum HttpMethod {
  /** GET请求 */
  GET = 'GET',
  /** POST请求 */
  POST = 'POST',
  /** PUT请求 */
  PUT = 'PUT',
  /** DELETE请求 */
  DELETE = 'DELETE',
  /** PATCH请求 */
  PATCH = 'PATCH',
  /** HEAD请求 */
  HEAD = 'HEAD',
  /** OPTIONS请求 */
  OPTIONS = 'OPTIONS',
  /** TRACE请求 */
  TRACE = 'TRACE'
}

/**
 * <p>
 * 参数位置枚举
 * </p>
 */
export enum ParameterIn {
  /** 查询参数 */
  QUERY = 'QUERY',
  /** 路径参数 */
  PATH = 'PATH',
  /** 请求头 */
  HEADER = 'HEADER',
  /** Cookie */
  COOKIE = 'COOKIE'
}

/**
 * <p>
 * 安全类型枚举
 * </p>
 */
export enum SecurityType {
  /** 无认证 */
  NONE = 'none',
  /** HTTP认证 */
  HTTP = 'http',
  /** API密钥 */
  API_KEY = 'apiKey',
  /** OAuth2 */
  OAUTH2 = 'oauth2',
  /** 扩展 */
  EXTENSION = 'extension'
}

/**
 * <p>
 * 安全位置枚举
 * </p>
 */
export enum SecurityIn {
  /** 请求头 */
  HEADER = 'HEADER',
  /** 查询参数 */
  QUERY = 'QUERY',
  /** Cookie */
  COOKIE = 'COOKIE'
}

/**
 * <p>
 * 客户端认证方法枚举
 * </p>
 */
export enum ClientIn {
  /** 查询参数认证 */
  QUERY_PARAMETER = 'QUERY_PARAMETER',
  /** HTTP基本认证头 */
  BASIC_AUTH_HEADER = 'BASIC_AUTH_HEADER',
  /** 请求体认证 */
  REQUEST_BODY = 'REQUEST_BODY'
}

/**
 * <p>
 * API用例类型枚举
 * </p>
 */
export enum ApisCaseType {
  /** 功能测试 */
  FUNCTIONAL = 'FUNCTIONAL',
  /** 性能测试 */
  PERFORMANCE = 'PERFORMANCE',
  /** 压力测试 */
  STRESS = 'STRESS',
  /** 负载测试 */
  LOAD = 'LOAD'
}

/**
 * <p>
 * 用例测试方法枚举
 * </p>
 */
export enum CaseTestMethod {
  /** 手动测试 */
  MANUAL = 'MANUAL',
  /** 自动测试 */
  AUTOMATIC = 'AUTOMATIC',
  /** 半自动测试 */
  SEMI_AUTOMATIC = 'SEMI_AUTOMATIC'
}

/**
 * <p>
 * 动作枚举
 * </p>
 */
export enum ActionOnEOF {
  /** 停止 */
  STOP = 'STOP',
  /** 循环 */
  RECYCLE = 'RECYCLE'
}

/**
 * <p>
 * 共享模式枚举
 * </p>
 */
export enum SharingMode {
  /** 所有线程 */
  ALL_THREAD = 'ALL_THREAD',
  /** 当前线程 */
  CURRENT_THREAD = 'CURRENT_THREAD'
}

/**
 * <p>
 * 管道元素类型枚举
 * </p>
 */
export enum PipelineElementKind {
  /** 目标 */
  TARGET = 'TARGET',
  /** 集合点 */
  RENDEZVOUS = 'RENDEZVOUS',
  /** 吞吐量 */
  THROUGHPUT = 'THROUGHPUT',
  /** 开始事务 */
  START_TRANSACTION = 'START_TRANSACTION',
  /** 结束事务 */
  END_TRANSACTION = 'END_TRANSACTION',
  /** 等待时间 */
  WAITING_TIME = 'WAITING_TIME'
}

/**
 * <p>
 * JDBC查询类型枚举
 * </p>
 */
export enum QueryType {
  /** 查询语句 */
  SELECT = 'SELECT',
  /** 更新语句 */
  UPDATE = 'UPDATE',
  /** 可调用语句 */
  CALLABLE = 'CALLABLE',
  /** 预编译查询语句 */
  PREPARED_SELECT = 'PREPARED_SELECT',
  /** 预编译更新语句 */
  PREPARED_UPDATE = 'PREPARED_UPDATE'
}

/**
 * <p>
 * 输入输出类型枚举
 * </p>
 */
export enum InputOutputType {
  /** 输入 */
  IN = 'IN',
  /** 输出 */
  OUT = 'OUT',
  /** 输入输出 */
  INOUT = 'INOUT'
}

/**
 * <p>
 * 列类型枚举
 * </p>
 */
export enum ColumnType {
  /** 字符串类型 */
  VARCHAR = 'VARCHAR',
  /** 整数类型 */
  INTEGER = 'INTEGER',
  /** 长整数类型 */
  BIGINT = 'BIGINT',
  /** 小数类型 */
  DECIMAL = 'DECIMAL',
  /** 浮点类型 */
  FLOAT = 'FLOAT',
  /** 双精度类型 */
  DOUBLE = 'DOUBLE',
  /** 布尔类型 */
  BOOLEAN = 'BOOLEAN',
  /** 日期类型 */
  DATE = 'DATE',
  /** 时间类型 */
  TIME = 'TIME',
  /** 时间戳类型 */
  TIMESTAMP = 'TIMESTAMP',
  /** 二进制类型 */
  BLOB = 'BLOB',
  /** 字符大对象类型 */
  CLOB = 'CLOB'
}

/**
 * <p>
 * 断言类型枚举
 * </p>
 */
export enum AssertionType {
  /** 状态码断言 */
  STATUS = 'STATUS',
  /** 请求头断言 */
  HEADER = 'HEADER',
  /** 响应体断言 */
  BODY = 'BODY',
  /** 响应体大小断言 */
  BODY_SIZE = 'BODY_SIZE',
  /** 响应大小断言 */
  SIZE = 'SIZE',
  /** 持续时间断言 */
  DURATION = 'DURATION'
}

/**
 * <p>
 * 断言条件枚举
 * </p>
 */
export enum AssertionCondition {
  /** 等于 */
  EQUAL = 'EQUAL',
  /** 不等于 */
  NOT_EQUAL = 'NOT_EQUAL',
  /** 为空 */
  IS_EMPTY = 'IS_EMPTY',
  /** 不为空 */
  NOT_EMPTY = 'NOT_EMPTY',
  /** 为null */
  IS_NULL = 'IS_NULL',
  /** 不为null */
  NOT_NULL = 'NOT_NULL',
  /** 大于 */
  GREATER_THAN = 'GREATER_THAN',
  /** 大于等于 */
  GREATER_THAN_EQUAL = 'GREATER_THAN_EQUAL',
  /** 小于 */
  LESS_THAN = 'LESS_THAN',
  /** 小于等于 */
  LESS_THAN_EQUAL = 'LESS_THAN_EQUAL',
  /** 包含 */
  CONTAIN = 'CONTAIN',
  /** 不包含 */
  NOT_CONTAIN = 'NOT_CONTAIN',
  /** 正则匹配 */
  REG_MATCH = 'REG_MATCH',
  /** XPath匹配 */
  XPATH_MATCH = 'XPATH_MATCH',
  /** JSONPath匹配 */
  JSON_PATH_MATCH = 'JSON_PATH_MATCH'
}

/**
 * <p>
 * FTP 文件源枚举
 * </p>
 */
export enum FtpFileSource {
  /** 从远程 FTP 服务器读取文件 */
  REMOTE_FILE = 'REMOTE_FILE',
  /** 基于 URL 下载文件 */
  REMOTE_URL = 'REMOTE_URL',
  /** 从本地读取文件到脚本，文件大小不能超过 1MB */
  LOCAL_FILE = 'LOCAL_FILE'
}

/**
 * <p>
 * LDAP 测试类型枚举
 * </p>
 */
export enum LdapTestType {
  /** 添加操作 */
  ADD = 'ADD',
  /** 修改操作 */
  MODIFY = 'MODIFY',
  /** 删除操作 */
  DELETE = 'DELETE',
  /** 搜索操作 */
  SEARCH = 'SEARCH'
}

/**
 * <p>
 * Mail 协议枚举
 * </p>
 */
export enum MailProtocol {
  /** POP3 协议 */
  POP3 = 'POP3',
  /** IMAP 协议 */
  IMAP = 'IMAP'
}

/**
 * <p>
 * 安全使用枚举
 * </p>
 */
export enum SecurityUse {
  /** 无安全 */
  NONE = 'NONE',
  /** 使用 SSL */
  SSL = 'SSL',
  /** 使用 STARTTLS */
  STARTTLS = 'STARTTLS'
}

/**
 * <p>
 * WebSocket 消息模式枚举
 * </p>
 */
export enum WebSocketMessageMode {
  /** 仅发送自定义消息到服务器 */
  ONLY_SEND = 'ONLY_SEND',
  /** 仅从服务器接收消息 */
  ONLY_RECEIVE = 'ONLY_RECEIVE',
  /** 同时发送和接收消息 */
  SEND_AND_RECEIVE = 'SEND_AND_RECEIVE'
}

/**
 * <p>
 * 完全匹配条件枚举
 * </p>
 */
export enum FullMatchCondition {
  /** 等于 */
  EQUAL = 'EQUAL',
  /** 不等于 */
  NOT_EQUAL = 'NOT_EQUAL',
  /** 为空 */
  IS_EMPTY = 'IS_EMPTY',
  /** 不为空 */
  NOT_EMPTY = 'NOT_EMPTY',
  /** 为null */
  IS_NULL = 'IS_NULL',
  /** 不为null */
  NOT_NULL = 'NOT_NULL',
  /** 大于 */
  GREATER_THAN = 'GREATER_THAN',
  /** 大于等于 */
  GREATER_THAN_EQUAL = 'GREATER_THAN_EQUAL',
  /** 小于 */
  LESS_THAN = 'LESS_THAN',
  /** 小于等于 */
  LESS_THAN_EQUAL = 'LESS_THAN_EQUAL',
  /** 包含 */
  CONTAIN = 'CONTAIN',
  /** 不包含 */
  NOT_CONTAIN = 'NOT_CONTAIN',
  /** 正则匹配 */
  REG_MATCH = 'REG_MATCH',
  /** XPath匹配 */
  XPATH_MATCH = 'XPATH_MATCH',
  /** JSONPath匹配 */
  JSON_PATH_MATCH = 'JSON_PATH_MATCH'
}

/**
 * <p>
 * 匹配参数位置枚举
 * </p>
 */
export enum MatchParameterIn {
  /** 查询参数 */
  QUERY = 'query',
  /** 请求头 */
  HEADER = 'header'
}

/**
 * <p>
 * 响应延迟模式枚举
 * </p>
 */
export enum ResponseDelayMode {
  /** 无延迟 */
  NONE = 'NONE',
  /** 固定延迟 */
  FIXED = 'FIXED',
  /** 随机延迟 */
  RANDOM = 'RANDOM'
}

/**
 * <p>
 * 存储位置枚举
 * </p>
 */
export enum StorageLocation {
  /** 数据空间 */
  DATASPACE = 'DATASPACE',
  /** 数据源 */
  DATASOURCE = 'DATASOURCE',
  /** 本地 */
  LOCAL = 'LOCAL',
  /** 推送第三方 */
  PUSH_THIRD = 'PUSH_THIRD'
}

/**
 * <p>
 * 行结束符类型枚举
 * </p>
 */
export enum LineEndingType {
  /** Unix LF */
  UNIT_LF = 'UNIT_LF',
  /** Windows CRLF */
  WINDOWS_CRLF = 'WINDOWS_CRLF'
}
