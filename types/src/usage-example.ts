/**
 * Angus Script 使用示例
 * 展示如何使用命名空间访问所有类型和枚举
 */

import AngusScript from './namespace.js';
import type { 
  AngusScript as ScriptType, 
  Configuration, 
  Task, 
  Variable,
  DefaultExtraction,
  FileExtraction,
  HttpExtraction,
  JdbcExtraction,
  Request,
  Parameter,
  RequestBody,
  Server,
  Security,
  NodeSelectorStrategy,
  MockData,
  MockApis,
  SampleExtensionResult,
  SampleHttpResult,
  SampleJdbcResult,
  AnySampleResult,
  TestTargetType,
  Http,
  Response,
  Request0,
  JdbcArgument,
  TimeLine,
  JdbcResponse,
  JdbcRequest0,
  Jdbc,
  AssertionResult,
  Assertion,
  DatasetParameter,
  Dataset,
  FtpServer,
  FtpResponse,
  FtpRequest0,
  Ftp,
  FtpBuilder,
  LdapServer,
  LdapResponse,
  LdapRequest0,
  Ldap,
  LdapBuilder,
  MailServerSecurity,
  MailServer,
  MailBoxSetting,
  MailResponse,
  MailResponses,
  MailRequest0,
  Mail,
  MailBuilder,
  SmtpMail,
  SmtpMailContent,
  SmtpResponse,
  Smtp,
  SmtpBuilder,
  TcpServer,
  TcpSetting,
  TcpResponse,
  TcpRequest0,
  Tcp,
  TcpBuilder,
  WebSocketSetting,
  WebSocketResponse,
  WebSocketRequest0,
  WebSocket,
  WebSocketBuilder,
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
} from './types.js';
import { 
  ExtractionMethod, 
  ExtractionSource, 
  ExtractionFileType, 
  HttpExtractionLocation,
  HttpMethod,
  SecurityType,
  SecurityIn,
  ApisCaseType,
  CaseTestMethod,
  ActionOnEOF,
  SharingMode,
  PipelineElementKind,
  QueryType,
  InputOutputType,
  ColumnType,
  AssertionType,
  AssertionCondition,
  FtpFileSource,
  LdapTestType,
  MailProtocol,
  SecurityUse,
  WebSocketMessageMode,
  ParameterIn
} from './enums.js';
import { TestTargetConstants } from './types.js';

// 使用命名空间访问枚举
const scriptType = AngusScript.ScriptType.TEST_PERFORMANCE;
const errorAction = AngusScript.ActionWhenError.CONTINUE;
const startMode = AngusScript.StartMode.IMMEDIATELY;
const language = AngusScript.Languages.zh_CN;

// 使用命名空间访问常量
const defaults = AngusScript.Defaults;

// 创建节点选择策略示例
const nodeSelectorStrategy: NodeSelectorStrategy = {
  enabled: true,
  maxTaskNum: 5,
  lastExecuted: false,
  specEnabled: true,
  cpuSpec: 4,
  memorySpec: '8GB',
  diskSpec: '100GB',
  idleRateEnabled: true,
  cpuIdleRate: '80%',
  memoryIdleRate: '70%',
  diskIdleRate: '60%'
};


// 创建断言示例
const statusAssertion: Assertion = {
  name: 'status-assertion',
  description: '验证响应状态码为200',
  enabled: true,
  type: AssertionType.STATUS,
  assertionCondition: AssertionCondition.EQUAL,
  expected: '200'
};

const bodyAssertion: Assertion = {
  name: 'body-assertion',
  description: '验证响应体包含特定内容',
  enabled: true,
  type: AssertionType.BODY,
  assertionCondition: AssertionCondition.CONTAIN,
  expression: '$.data.message',
  expected: 'success'
};

const headerAssertion: Assertion = {
  name: 'header-assertion',
  description: '验证响应头Content-Type',
  enabled: true,
  type: AssertionType.HEADER,
  parameterName: 'Content-Type',
  assertionCondition: AssertionCondition.EQUAL,
  expected: 'application/json'
};

const durationAssertion: Assertion = {
  name: 'duration-assertion',
  description: '验证响应时间小于1秒',
  enabled: true,
  type: AssertionType.DURATION,
  assertionCondition: AssertionCondition.LESS_THAN,
  expected: '1000'
};

// 创建数据集示例
const userDataset: Dataset = {
  name: 'user-dataset',
  description: '用户数据集',
  parameters: [
    {
      name: 'userId',
      value: '123'
    },
    {
      name: 'username',
      value: 'john_doe'
    },
    {
      name: 'email',
      value: 'john@example.com'
    },
    {
      name: 'status',
      value: 'active'
    }
  ],
  extraction: {
    name: 'userExtraction',
    method: ExtractionMethod.JSON_PATH,
    source: ExtractionSource.JDBC,
    expression: '$.data[*]'
  }
};

const productDataset: Dataset = {
  name: 'product-dataset',
  description: '产品数据集',
  parameters: [
    {
      name: 'productId',
      value: '${productId}'
    },
    {
      name: 'category',
      value: 'electronics'
    },
    {
      name: 'price',
      value: '${price}'
    }
  ]
};

// 创建 FTP 服务器配置示例
const ftpServer: FtpServer = {
  server: 'ftp.example.com',
  port: 21,
  username: 'ftpuser',
  password: 'ftppass',
  readTimeout: {
    value: 60,
    unit: 's'
  },
  connectTimeout: {
    value: 6,
    unit: 's'
  }
};

// 创建 FTP 测试目标示例
const ftpTestTarget: Ftp = {
  target: 'FTP',
  name: 'ftp-download-test',
  description: 'FTP 文件下载测试',
  enabled: true,
  server: ftpServer,
  uploadFile: false, // 下载文件
  uploadFileSource: FtpFileSource.REMOTE_FILE,
  remoteFileName: 'test-file.txt',
  localFileName: 'downloaded-file.txt',
  binaryMode: false
};

const ftpUploadTestTarget: Ftp = {
  target: 'FTP',
  name: 'ftp-upload-test',
  description: 'FTP 文件上传测试',
  enabled: true,
  server: ftpServer,
  uploadFile: true, // 上传文件
  uploadFileSource: FtpFileSource.LOCAL_FILE,
  localFileName: 'upload-file.txt',
  localFileContent: 'Hello, FTP World!',
  localFileContentEncoding: 'none',
  binaryMode: false
};

// 创建 LDAP 服务器配置示例
const ldapServer: LdapServer = {
  server: 'ldap.example.com',
  port: 389,
  username: 'cn=admin,dc=example,dc=com',
  password: 'adminpass',
  rootDn: 'dc=example,dc=com'
};

// 创建 LDAP 测试目标示例
const ldapSearchTest: Ldap = {
  target: 'LDAP',
  name: 'ldap-search-test',
  description: 'LDAP 搜索测试',
  enabled: true,
  server: ldapServer,
  testType: LdapTestType.SEARCH,
  userDefined: false,
  searchBase: 'ou=users,dc=example,dc=com',
  searchFilter: '(objectClass=person)'
};

const ldapAddTest: Ldap = {
  target: 'LDAP',
  name: 'ldap-add-test',
  description: 'LDAP 添加用户测试',
  enabled: true,
  server: ldapServer,
  testType: LdapTestType.ADD,
  userDefined: true,
  entryDn: 'cn=john.doe,ou=users,dc=example,dc=com',
  arguments: {
    'objectClass': 'person',
    'cn': 'john.doe',
    'sn': 'Doe',
    'mail': 'john.doe@example.com',
    'userPassword': 'password123'
  }
};

const ldapModifyTest: Ldap = {
  target: 'LDAP',
  name: 'ldap-modify-test',
  description: 'LDAP 修改用户测试',
  enabled: true,
  server: ldapServer,
  testType: LdapTestType.MODIFY,
  userDefined: true,
  entryDn: 'cn=john.doe,ou=users,dc=example,dc=com',
  arguments: {
    'mail': 'john.doe.updated@example.com',
    'telephoneNumber': '+1-555-123-4567'
  }
};

const ldapDeleteTest: Ldap = {
  target: 'LDAP',
  name: 'ldap-delete-test',
  description: 'LDAP 删除用户测试',
  enabled: true,
  server: ldapServer,
  testType: LdapTestType.DELETE,
  userDefined: true,
  deleteEntry: 'cn=john.doe,ou=users,dc=example,dc=com'
};

// 创建 Mail 服务器安全配置示例
const mailServerSecurity: MailServerSecurity = {
  use: SecurityUse.SSL,
  trustAllCerts: false,
  enforceStartTLS: true,
  useLocalTrustStore: true,
  trustStorePath: '/path/to/truststore.jks',
  tlsProtocols: 'TLSv1.2,TLSv1.3'
};

// 创建 Mail 服务器配置示例
const mailServer: MailServer = {
  server: 'mail.example.com',
  port: 993,
  security: mailServerSecurity,
  useAuth: true,
  username: 'test@example.com',
  password: 'mailpass',
  serverTimeout: {
    value: 60,
    unit: 's'
  },
  serverConnectionTimeout: {
    value: 6,
    unit: 's'
  }
};

// 创建 Mail 邮箱设置示例
const mailBoxSetting: MailBoxSetting = {
  folder: 'INBOX',
  deleteMessage: false,
  storeMimeMessage: true,
  numMessages: 10,
  headerOnly: false
};

// 创建 Mail 测试目标示例
const mailPop3Test: Mail = {
  target: 'MAIL',
  name: 'mail-pop3-test',
  description: 'Mail POP3 协议测试',
  enabled: true,
  protocol: MailProtocol.POP3,
  server: mailServer,
  mail: mailBoxSetting
};

const mailImapTest: Mail = {
  target: 'MAIL',
  name: 'mail-imap-test',
  description: 'Mail IMAP 协议测试',
  enabled: true,
  protocol: MailProtocol.IMAP,
  server: {
    server: 'imap.example.com',
    port: 993,
    security: {
      use: SecurityUse.SSL,
      trustAllCerts: false
    },
    useAuth: true,
    username: 'test@example.com',
    password: 'mailpass'
  },
  mail: {
    folder: 'INBOX',
    deleteMessage: false,
    storeMimeMessage: true,
    numMessages: 5,
    headerOnly: false
  }
};

// 创建 SMTP 邮件内容配置示例
const smtpMailContent: SmtpMailContent = {
  subject: '测试邮件主题',
  suppressSubject: false,
  message: '<h1>这是一封测试邮件</h1><p>邮件内容包含 HTML 格式。</p>',
  plainBody: false,
  includeTimestamp: true,
  localAttachFiles: ['/path/to/attachment1.pdf', '/path/to/attachment2.txt'],
  messageSizeStatistics: true,
  headerFields: {
    'X-Priority': '1',
    'X-Mailer': 'AngusMeter Test',
    'X-Custom-Header': 'Custom Value'
  },
  sendEmlMessage: false,
  enableDebugLogging: true
};

// 创建 SMTP 邮件配置示例
const smtpMail: SmtpMail = {
  mailFrom: 'sender@example.com',
  replyTo: 'noreply@example.com',
  receiverTo: 'recipient@example.com',
  receiverCC: 'cc@example.com',
  receiverBCC: 'bcc@example.com',
  content: smtpMailContent
};

// 创建 SMTP 测试目标示例
const smtpTest: Smtp = {
  target: 'SMTP',
  name: 'smtp-test',
  description: 'SMTP 邮件发送测试',
  enabled: true,
  server: {
    server: 'smtp.example.com',
    port: 587,
    security: {
      use: SecurityUse.STARTTLS,
      trustAllCerts: false,
      enforceStartTLS: true
    },
    useAuth: true,
    username: 'sender@example.com',
    password: 'smtppass',
    serverTimeout: {
      value: 60,
      unit: 's'
    },
    serverConnectionTimeout: {
      value: 6,
      unit: 's'
    }
  },
  mail: smtpMail
};

// 创建简单的 SMTP 测试示例
const simpleSmtpTest: Smtp = {
  target: 'SMTP',
  name: 'simple-smtp-test',
  description: '简单 SMTP 邮件发送测试',
  enabled: true,
  server: {
    server: 'smtp.gmail.com',
    port: 587,
    security: {
      use: SecurityUse.STARTTLS
    },
    useAuth: true,
    username: 'user@gmail.com',
    password: 'apppassword'
  },
  mail: {
    mailFrom: 'user@gmail.com',
    receiverTo: 'recipient@gmail.com',
    content: {
      subject: '简单测试邮件',
      message: '这是一封简单的测试邮件。',
      plainBody: true
    }
  }
};

// 创建 TCP 服务器配置示例
const tcpServer: TcpServer = {
  server: 'tcp.example.com',
  port: 8080,
  connectTimeout: {
    value: 6,
    unit: 's'
  },
  responseTimeout: {
    value: 60,
    unit: 's'
  }
};

// 创建 TCP 协议配置示例
const tcpSetting: TcpSetting = {
  tcpClientImplClass: 'TcpClientImpl',
  reUseConnection: true,
  setNoDelay: true,
  soLinger: -1,
  eolByte: 10, // \n
  eomByte: 13, // \r
  binaryPrefixLength: 0
};

// 创建 TCP 测试目标示例
const tcpTest: Tcp = {
  target: 'TCP',
  name: 'tcp-test',
  description: 'TCP 协议测试',
  enabled: true,
  server: tcpServer,
  data: 'Hello, TCP Server!',
  dataEncoding: 'none',
  setting: tcpSetting
};

// 创建二进制 TCP 测试示例
const binaryTcpTest: Tcp = {
  target: 'TCP',
  name: 'binary-tcp-test',
  description: '二进制 TCP 协议测试',
  enabled: true,
  server: {
    server: 'binary.example.com',
    port: 9090,
    connectTimeout: {
      value: 10,
      unit: 's'
    },
    responseTimeout: {
      value: 30,
      unit: 's'
    }
  },
  data: 'SGVsbG8sIEJpbmFyeSBUQ1AgU2VydmVyIQ==', // Base64 编码的 "Hello, Binary TCP Server!"
  dataEncoding: 'base64',
  setting: {
    tcpClientImplClass: 'BinaryTcpClientImpl',
    reUseConnection: true,
    setNoDelay: true,
    soLinger: 0,
    eomByte: 0, // 无消息结束字节
    binaryPrefixLength: 4 // 4 字节长度前缀
  }
};

// 创建长度前缀二进制 TCP 测试示例
const lengthPrefixedTcpTest: Tcp = {
  target: 'TCP',
  name: 'length-prefixed-tcp-test',
  description: '长度前缀二进制 TCP 协议测试',
  enabled: true,
  server: {
    server: 'length.example.com',
    port: 7070,
    connectTimeout: {
      value: 5,
      unit: 's'
    },
    responseTimeout: {
      value: 45,
      unit: 's'
    }
  },
  data: 'SGVsbG8sIExlbmd0aCBQcmVmaXhlZCBUQ1Ah', // Base64 编码
  dataEncoding: 'base64',
  setting: {
    tcpClientImplClass: 'LengthPrefixedBinaryTcpClientImpl',
    reUseConnection: false,
    setNoDelay: false,
    soLinger: 1,
    binaryPrefixLength: 2 // 2 字节长度前缀
  }
};

// 创建 WebSocket 设置示例
const webSocketSetting: WebSocketSetting = {
  connectTimeout: {
    value: 6,
    unit: 's'
  },
  responseTimeout: {
    value: 60,
    unit: 's'
  },
  maxReconnections: 3,
  reconnectionInterval: {
    value: 200,
    unit: 'ms'
  }
};

// 创建 WebSocket 测试目标示例
const webSocketTest: WebSocket = {
  target: 'WEBSOCKET',
  name: 'websocket-test',
  description: 'WebSocket 协议测试',
  enabled: true,
  url: 'ws://websocket.example.com/chat',
  server: {
    url: 'ws://websocket.example.com',
    description: 'WebSocket 服务器'
  },
  endpoint: '/chat',
  parameters: [
    {
      name: 'token',
      in: ParameterIn.QUERY,
      value: '${authToken}'
    },
    {
      name: 'userId',
      in: ParameterIn.QUERY,
      value: '12345'
    }
  ],
  mode: WebSocketMessageMode.SEND_AND_RECEIVE,
  message: '{"type": "message", "content": "Hello, WebSocket!"}',
  messageEncoding: 'none',
  assertions: [],
  datasets: [],
  actionOnEOF: ActionOnEOF.RECYCLE,
  sharingMode: SharingMode.ALL_THREAD,
  setting: webSocketSetting
};

// 创建仅发送消息的 WebSocket 测试示例
const webSocketSendOnlyTest: WebSocket = {
  target: 'WEBSOCKET',
  name: 'websocket-send-only-test',
  description: 'WebSocket 仅发送消息测试',
  enabled: true,
  url: 'ws://api.example.com/notifications',
  mode: WebSocketMessageMode.ONLY_SEND,
  message: '{"action": "subscribe", "channel": "updates"}',
  messageEncoding: 'none',
  setting: {
    connectTimeout: {
      value: 10,
      unit: 's'
    },
    responseTimeout: {
      value: 30,
      unit: 's'
    },
    maxReconnections: 5,
    reconnectionInterval: {
      value: 1000,
      unit: 'ms'
    }
  }
};

// 创建仅接收消息的 WebSocket 测试示例
const webSocketReceiveOnlyTest: WebSocket = {
  target: 'WEBSOCKET',
  name: 'websocket-receive-only-test',
  description: 'WebSocket 仅接收消息测试',
  enabled: true,
  server: {
    url: 'wss://stream.example.com',
    description: '安全 WebSocket 流'
  },
  endpoint: '/live-data',
  parameters: [
    {
      name: 'Authorization',
      in: ParameterIn.HEADER,
      value: 'Bearer ${accessToken}'
    }
  ],
  mode: WebSocketMessageMode.ONLY_RECEIVE,
  setting: {
    connectTimeout: {
      value: 15,
      unit: 's'
    },
    responseTimeout: {
      value: 300,
      unit: 's'
    },
    maxReconnections: 10,
    reconnectionInterval: {
      value: 5000,
      unit: 'ms'
    }
  }
};

// 创建二进制消息的 WebSocket 测试示例
const webSocketBinaryTest: WebSocket = {
  target: 'WEBSOCKET',
  name: 'websocket-binary-test',
  description: 'WebSocket 二进制消息测试',
  enabled: true,
  url: 'ws://binary.example.com/data-stream',
  mode: WebSocketMessageMode.SEND_AND_RECEIVE,
  message: 'SGVsbG8sIEJpbmFyeSBXZWJTb2NrZXQh', // Base64 编码的 "Hello, Binary WebSocket!"
  messageEncoding: 'base64',
  setting: {
    connectTimeout: {
      value: 8,
      unit: 's'
    },
    responseTimeout: {
      value: 45,
      unit: 's'
    },
    maxReconnections: 2,
    reconnectionInterval: {
      value: 2000,
      unit: 'ms'
    }
  }
};

// 创建开始事务元素示例
const transStartElement: TransStartElement = {
  target: 'START_TRANSACTION',
  name: 'start-transaction',
  description: '开始用户登录事务',
  enabled: true,
  beforeName: 'login-request',
  transactionName: 'user-login-transaction',
  kind: PipelineElementKind.START_TRANSACTION,
  isTarget: () => false,
  isInTransaction: () => true
};

// 创建结束事务元素示例
const transEndElement: TransEndElement = {
  target: 'END_TRANSACTION',
  name: 'end-transaction',
  description: '结束用户登录事务',
  enabled: true,
  beforeName: 'login-response',
  transactionName: 'user-login-transaction',
  kind: PipelineElementKind.END_TRANSACTION,
  isTarget: () => false,
  isInTransaction: () => true
};

// 创建集合点元素示例
const rendezvousElement: RendezvousElement = {
  target: 'RENDEZVOUS',
  name: 'login-rendezvous',
  description: '用户登录集合点，等待所有用户同时登录',
  enabled: true,
  beforeName: 'start-transaction',
  transactionName: 'user-login-transaction',
  threads: 100,
  timeoutInMs: 30000,
  kind: PipelineElementKind.RENDEZVOUS,
  isTarget: () => false,
  isInTransaction: () => true
};

// 创建吞吐量元素示例
const throughputElement: ThroughputElement = {
  target: 'THROUGHPUT',
  name: 'api-throughput',
  description: 'API 吞吐量控制，限制每秒请求数',
  enabled: true,
  beforeName: 'rendezvous',
  transactionName: 'api-test-transaction',
  permitsPerSecond: 50,
  timeoutInMs: 60000,
  kind: PipelineElementKind.THROUGHPUT,
  isTarget: () => false,
  isInTransaction: () => true
};

// 创建等待时间元素示例
const waitingTimeElement: WaitingTimeElement = {
  target: 'WAITING_TIME',
  name: 'think-time',
  description: '用户思考时间，模拟真实用户行为',
  enabled: true,
  beforeName: 'api-call',
  transactionName: 'user-behavior-transaction',
  minWaitTimeInMs: 1000,
  maxWaitTimeInMs: 5000,
  kind: PipelineElementKind.WAITING_TIME,
  isTarget: () => false,
  isInTransaction: () => true
};

// 创建完整的HTTP请求示例
const httpRequest: Request = {
  method: HttpMethod.POST,
  url: 'https://api.example.com/users',
  server: {
    url: 'https://api.example.com',
    description: 'API服务器'
  },
  endpoint: '/users',
  authentication: {
    type: SecurityType.HTTP,
    scheme: 'Bearer'
  },
  parameters: [
    {
      name: 'page',
      value: '1',
      in: ParameterIn.QUERY,
      required: false,
      description: '页码'
    }
  ],
  contentType: 'application/json',
  body: {
    format: 'json',
    contentEncoding: 'utf-8',
    rawContent: '{"name": "John Doe", "email": "john@example.com"}'
  },
  setting: {
    connectTimeout: 5000,
    readTimeout: 10000,
    writeTimeout: 5000,
    followRedirects: true,
    maxRedirects: 3
  }
};

// 创建测试目标类型示例
const websocketTestTarget: TestTargetType = {
  target: TestTargetConstants.TYPE_TARGET_WEBSOCKET,
  name: 'websocket-test',
  enabled: true,
  description: 'WebSocket测试目标'
};

// 创建HTTP测试目标示例
const httpTestTarget: Http = {
  target: TestTargetConstants.TYPE_TARGET_HTTP,
  name: 'api-test',
  description: 'API接口测试',
  enabled: true,
  condition: '${env} == "test"',
  beforeName: 'login-test',
  transactionName: 'user-transaction',
  apisId: 12345,
  caseId: 67890,
  caseType: ApisCaseType.FUNCTIONAL,
  caseTestMethod: CaseTestMethod.AUTOMATIC,
  request: httpRequest,
  response: {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{"success": true}',
    responseTime: 150,
    size: 1024,
    encoding: 'UTF-8',
    contentType: 'application/json'
  },
  assertions: [statusAssertion, bodyAssertion, headerAssertion, durationAssertion],
  variables: [],
  datasets: [userDataset],
  actionOnEOF: ActionOnEOF.RECYCLE,
  sharingMode: SharingMode.ALL_THREAD
};

// 创建JDBC测试目标示例
const jdbcTestTarget: Jdbc = {
  target: TestTargetConstants.TYPE_TARGET_JDBC,
  name: 'db-test',
  description: '数据库测试',
  enabled: true,
  condition: '${env} == "test"',
  beforeName: 'setup-test',
  transactionName: 'db-transaction',
  type: QueryType.SELECT,
  sql: 'SELECT * FROM users WHERE id = ? AND status = ?',
  maxResultRows: 1000,
  timeoutInSecond: 30,
  arguments: [
    {
      type: ColumnType.INTEGER,
      inout: InputOutputType.IN,
      value: '123'
    },
    {
      type: ColumnType.VARCHAR,
      inout: InputOutputType.IN,
      value: 'active'
    }
  ],
  response: {
    success: true,
    updateCount: 0,
    rows: [
      { id: 123, name: 'John Doe', email: 'john@example.com', status: 'active' }
    ],
    columnLabels: ['id', 'name', 'email', 'status'],
    size: 1024,
    timeline: {
      startTime: 1640995200000,
      endTime: 1640995201000,
      duration: 1000
    }
  },
  assertions: [statusAssertion, bodyAssertion],
  variables: [],
  datasets: [productDataset],
  actionOnEOF: ActionOnEOF.RECYCLE,
  sharingMode: SharingMode.ALL_THREAD
};

// 创建默认提取配置示例
const defaultExtraction: DefaultExtraction = {
  name: 'tokenExtraction',
  method: ExtractionMethod.REGEX,
  source: ExtractionSource.VALUE,
  expression: 'token=([^&]+)',
  matchItem: 0,
  defaultValue: 'default-token'
};

// 创建文件提取配置示例
const fileExtraction: FileExtraction = {
  name: 'csvExtraction',
  method: ExtractionMethod.EXACT_VALUE,
  source: ExtractionSource.FILE,
  fileType: ExtractionFileType.CSV,
  path: '/data/users.csv',
  encoding: 'UTF-8',
  quoteChar: '"',
  escapeChar: '\\',
  separatorChar: ',',
  rowIndex: 1,
  columnIndex: 0
  // 注意：value, failureMessage, finalValue 等只读字段在运行时由系统设置
};


// 创建HTTP提取配置示例
const httpExtraction: HttpExtraction = {
  name: 'responseExtraction',
  method: ExtractionMethod.JSON_PATH,
  source: ExtractionSource.HTTP,
  expression: '$.data.token',
  location: HttpExtractionLocation.RESPONSE_BODY,
  request: httpRequest
  // 注意：value, failureMessage, finalValue 等只读字段在运行时由系统设置
};

// 创建JDBC提取配置示例
const jdbcExtraction: JdbcExtraction = {
  name: 'dbExtraction',
  method: ExtractionMethod.EXACT_VALUE,
  source: ExtractionSource.JDBC,
  datasource: {
    name: 'testDB',
    url: 'jdbc:mysql://localhost:3306/test',
    config: {
      username: 'user',
      password: 'password',
      driverClassName: 'com.mysql.cj.jdbc.Driver'
    }
  },
  select: 'SELECT token FROM users WHERE id = ?',
  rowIndex: 0,
  columnIndex: 0
  // 注意：value, failureMessage, finalValue 等只读字段在运行时由系统设置
};

// 创建变量示例 - 使用默认提取
const variable1: Variable = {
  name: 'apiUrl',
  description: 'API 基础URL',
  value: 'https://api.example.com',
  passwordValue: false,
  extraction: defaultExtraction
};

// 创建变量示例 - 使用文件提取
const variable2: Variable = {
  name: 'userToken',
  description: '用户令牌',
  passwordValue: true,
  extraction: fileExtraction
};

// 创建变量示例 - 使用HTTP提取
const variable3: Variable = {
  name: 'sessionId',
  description: '会话ID',
  passwordValue: false,
  extraction: httpExtraction
};

// 创建变量示例 - 使用JDBC提取
const variable4: Variable = {
  name: 'dbConfig',
  description: '数据库配置',
  passwordValue: true,
  extraction: jdbcExtraction
};

// 创建脚本示例
const script: ScriptType = {
  specification: AngusScript.Defaults.specification,
  type: AngusScript.ScriptType.TEST_PERFORMANCE,
  plugin: 'http',
  configuration: {
    threads: {
      max: 10,
      min: 1,
      step: 1,
      stepTime: { value: 1, unit: 's' },
      holdTime: { value: 30, unit: 's' }
    },
    onError: {
      action: AngusScript.ActionWhenError.CONTINUE,
      sampleError: true,
      sampleErrorNum: 20
    },
    variables: [variable1, variable2, variable3, variable4]
  },
  task: {
    arguments: {
      'http.setting': {
        connectTimeout: 5000,
        readTimeout: 10000
      }
    },
    setup: {
      name: 'setup',
      description: '测试前准备',
      script: 'console.log("开始测试")'
    },
    pipelines: [httpTestTarget, jdbcTestTarget],
    mockData: {
      name: 'test-data',
      description: '测试数据',
      fields: [{
        name: 'id',
        type: 'string',
        value: '{{random.uuid}}'
      }, {
        name: 'name',
        type: 'string',
        value: '{{name.firstName}}'
      }],
      settings: {
        format: 'JSON' as const,
        rows: 100,
        batchRows: 50,
        location: 'DATASPACE' as any,
        lineEnding: 'UNIT_LF' as any,
        includeNull: false,
        rowsToArray: true
      } as any
    },
    mockApis: [{
      name: 'mock-api',
      description: '模拟API',
      method: 'GET' as any,
      endpoint: '/api/test',
      responses: []
    }],
    tearDown: {
      name: 'cleanup',
      description: '测试后清理',
      script: 'console.log("测试完成")'
    }
  }
};

// 导出示例
export { 
  script, 
  scriptType, 
  errorAction, 
  startMode, 
  language, 
  defaults,
  nodeSelectorStrategy,
  httpTestTarget,
  jdbcTestTarget,
  statusAssertion,
  bodyAssertion,
  headerAssertion,
  durationAssertion,
  userDataset,
  productDataset,
  ftpServer,
  ftpTestTarget,
  ftpUploadTestTarget,
  ldapServer,
  ldapSearchTest,
  ldapAddTest,
  ldapModifyTest,
  ldapDeleteTest,
  mailServerSecurity,
  mailServer,
  mailBoxSetting,
  mailPop3Test,
  mailImapTest,
  smtpMailContent,
  smtpMail,
  smtpTest,
  simpleSmtpTest,
  tcpServer,
  tcpSetting,
  tcpTest,
  binaryTcpTest,
  lengthPrefixedTcpTest,
  webSocketSetting,
  webSocketTest,
  webSocketSendOnlyTest,
  webSocketReceiveOnlyTest,
  webSocketBinaryTest,
  transStartElement,
  transEndElement,
  rendezvousElement,
  throughputElement,
  waitingTimeElement,
  variable1,
  variable2,
  variable3,
  variable4,
  defaultExtraction,
  fileExtraction,
  httpRequest,
  httpExtraction,
  jdbcExtraction
};

// ===== 测试结果示例 =====

// 扩展协议测试结果
const sampleExtensionResult: SampleExtensionResult = {
  name: 'extension-test',
  success: true,
  failMessage: undefined,
  result: {
    status: 'success',
    data: { message: 'Extension test completed' }
  },
  assertions: [],
  target: 'EXTENSION'
};

// HTTP协议测试结果
const sampleHttpResult: SampleHttpResult = {
  name: 'http-test',
  success: true,
  failMessage: undefined,
  request0: {
    method: 'GET',
    url: 'https://api.example.com/test',
    headers: { 'Content-Type': 'application/json' }
  },
  response: {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: '{"message": "success"}'
  },
  assertions: [],
  target: 'HTTP'
};

// JDBC协议测试结果
const sampleJdbcResult: SampleJdbcResult = {
  name: 'jdbc-test',
  success: true,
  failMessage: undefined,
  request0: {
    sql: 'SELECT * FROM users WHERE id = ?',
    parameters: [1]
  },
  response: {
    rows: [{ id: 1, name: 'John Doe', email: 'john@example.com' }],
    rowCount: 1
  },
  assertions: [],
  target: 'JDBC'
};

// 测试结果联合类型示例
const anySampleResult: AnySampleResult = sampleExtensionResult;
