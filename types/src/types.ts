/**
 * Angus Script TypeScript 类型声明
 * 基于 Java 模型类生成的严格对应的 TypeScript 类型定义
 * 
 * 此文件重新导出所有分类的类型定义，便于统一访问
 */

// 重新导出核心基础类型
export type {
  ExtensionArgument,
  TimeValue,
  Arguments,
  TestTargetType,
  SampleResult
} from './core/common.js';

export {
  TestTargetConstants,
  SampleResultConstants
} from './core/common.js';

// 重新导出脚本配置类型
export type {
  AngusScript,
  AngusScriptBuilder,
  Configuration,
  Task,
  Info,
  Contact,
  License,
  Threads,
  OnError,
  NodeSelector,
  NodeSelectorStrategy,
  Setup,
  TearDown
} from './core/script.js';

// 重新导出变量和提取类型
export type {
  Variable
} from './core/parameterization.js';

export type {
  Extraction,
  DefaultExtraction,
  FileExtraction,
  HttpExtraction,
  HttpSamplingExtraction,
  JdbcExtraction
} from './core/extraction.js';

// 重新导出HTTP相关类型
export type {
  Request,
  Parameter,
  FormParameter,
  RequestBody,
  Server,
  ServerVariable,
  Security,
  ApiKey,
  OAuth2Flow,
  OAuth2Flows,
  HttpSetting,
  Response,
  Request0,
  Http,
  HttpBuilder,
  PostRequest,
  PostRequestBuilder
} from './protocols/http.js';

// 重新导出JDBC相关类型
export type {
  JdbcArgument,
  TimeLine,
  JdbcResponse,
  JdbcRequest0,
  Jdbc,
  JdbcBuilder
} from './protocols/jdbc.js';

// 重新导出断言相关类型
export type {
  AssertionResult,
  Assertion,
  AssertionBuilder
} from './core/assertion.js';

// 重新导出 FTP 类型
export type {
  FtpServer,
  FtpResponse,
  FtpRequest0,
  Ftp,
  FtpBuilder
} from './protocols/ftp.js';

// 重新导出 LDAP 类型
export type {
  LdapServer,
  LdapResponse,
  LdapRequest0,
  Ldap,
  LdapBuilder
} from './protocols/ldap.js';

// 重新导出 Mail 类型
export type {
  MailServerSecurity,
  MailServer,
  MailBoxSetting,
  MailResponse,
  MailResponses,
  MailRequest0,
  Mail,
  MailBuilder
} from './protocols/mail.js';

// 重新导出 SMTP 类型
export type {
  SmtpMail,
  SmtpMailContent,
  SmtpResponse,
  Smtp,
  SmtpBuilder
} from './protocols/smtp.js';

// 重新导出 TCP 类型
export type {
  TcpServer,
  TcpSetting,
  TcpResponse,
  TcpRequest0,
  Tcp,
  TcpBuilder
} from './protocols/tcp.js';

// 重新导出 WebSocket 类型
export type {
  WebSocketSetting,
  WebSocketResponse,
  WebSocketRequest0,
  WebSocket,
  WebSocketBuilder
} from './protocols/websocket.js';

// 重新导出 Pipeline 元素类型
export type {
  PipelineElement,
  PipelineTransactionElement,
  TransStartElement,
  TransEndElement,
  RendezvousElement,
  ThroughputElement,
  WaitingTimeElement,
  TransStartElementBuilder,
  TransEndElementBuilder,
  RendezvousElementBuilder,
  ThroughputElementBuilder,
  WaitingTimeElementBuilder
} from './core/element.js';

export {
  AssertionResultConstants
} from './core/assertion.js';


// 重新导出数据源和模拟类型
export type {
  Datasource,
  DatasetParameter,
  Dataset
} from './core/parameterization.js';

export type {
  MockData,
  MockDataBuilder,
  MockField,
  MockFieldBuilder,
  MockSetting,
  CsvSetting,
  CsvSettingBuilder,
  JsonSetting,
  JsonSettingBuilder,
  ExcelSetting,
  SqlSetting,
  XmlSetting,
  TabSetting,
  CustomSetting,
  ExtSetting
} from './mock/data.js';

export type {
  MockApis,
  MockApisBuilder,
  MockResponse,
  MockResponseBuilder,
  MockResponseContent,
  MockResponseContentBuilder,
  MockResponsePushback,
  MatchRequest,
  MatchRequestBuilder,
  MatchPath,
  MatchParameter,
  MatchBody,
  ResponseDelay
} from './mock/apis.js';

// 重新导出测试结果类型
export type {
  SampleExtensionResult,
  SampleHttpResult,
  SampleJdbcResult,
  SampleFtpResult,
  SampleWebSocketResult,
  SampleTcpResult,
  SampleSmtpResult,
  SampleMailResult,
  SampleLdapResult,
  AnySampleResult
} from './core/result.js';

// 重新导出枚举类型
export {
  ScriptType,
  ActionWhenError,
  StartMode,
  Languages,
  ExtractionMethod,
  ExtractionSource,
  ExtractionFileType,
  HttpExtractionLocation,
  HttpMethod,
  ParameterIn,
  SecurityType,
  SecurityIn,
  ClientIn,
  FullMatchCondition,
  MatchParameterIn,
  ResponseDelayMode,
  StorageLocation,
  LineEndingType
} from './core/enums.js';

// 默认值常量
export const AngusScriptDefaults = {
  specification: '1.0.0',
  apiVersion: '1.0.0',
  type: 'TEST_PERFORMANCE' as const,
  languages: 'zh_CN' as const,
  action: 'CONTINUE' as const,
  startMode: 'IMMEDIATELY' as const
} as const;