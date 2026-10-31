---
title: Claude Code配置
icon: material-icon-theme:claude
order: 2
date: 2026-06-27
---

::: tabs

@tab Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开Claude Code配置目录

```bash
%userprofile%\.claude
```

![](/assets/image/Cli/013.webp)

2. 目录内容如图所示，如果目录中没有 `settings.json`，你需要手动创建后打开

- **settings.json**：Claude主要的配置文件，主要用来配置中转站地址以及ApiKey，以及一些hooks，plugins等

![](/assets/image/Cli/014.webp)

3. 将以下内容写入 `settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://timicc.com",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1"
  }
}
```

![](/assets/image/Cli/015.webp)

4. 回顾 [创建API密钥](/docs/register/4-token.html)，在 TIMI CC 中创建 **CC** 分组的令牌，替换上方 `xxx`部分

![](/assets/image/Cli/025.webp)

5. 在windows终端运行 `claude`，出现对话界面后进行对话测试，能收到回复即表示配置成功

![](/assets/image/Cli/016.webp)

@tab MacOS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径后回车，打开配置目录

```bash
~/.claude
```

![](/assets/image/Cli/017.webp)

2. 若目录不存在 `settings.json`，需要你手动进行创建

- **settings.json**：Claude主要的配置文件，主要用来配置中转站地址以及ApiKey，以及一些hooks，plugins等

![](/assets/image/Cli/018.webp)

3. 将以下内容写入 `settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://timicc.com",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1"
  }
}
```

![](/assets/image/Cli/015.webp)

4. 回顾 [创建API密钥](/docs/register/4-token.html)，在 TIMI CC 中创建 **CC** 分组的令牌，替换上方 `xxx`

![](/assets/image/Cli/025.webp)

5. 在终端运行 `claude`，看到对话界面并能正常回复即表示配置完成

![](/assets/image/Cli/016.webp)

:::

::: important
**注意，如果配置完仍然有报错问题，提示你需要登录，请看如下链接解决**
[claude-code-无法连接到-anthropic-服务](/docs/faq/CC.html#claude-code-无法连接到-anthropic-服务)
:::

## 高级配置

把下面整段写入 `settings.json`，可以替换上面的基础配置。`ANTHROPIC_AUTH_TOKEN` 里的 `xxx` 换成你自己的令牌。

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://timicc.com",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1",
    "CLAUDE_CODE_NEW_INIT": "1",
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1",
    "DISABLE_AUTOUPDATER": "1",
    "DISABLE_TELEMETRY": "1",
    "DISABLE_BUG_COMMAND": "1",
    "DISABLE_ERROR_REPORTING": "1",
    "ENABLE_TOOL_SEARCH": "false",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1",
    "CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS": "1"
  },
  "includeCoAuthoredBy": false,
  "language": "Chinese-simplified"
}
```

### 必填项

| 配置项 | 说明 |
| --- | --- |
| `ANTHROPIC_BASE_URL` | 中转站地址，固定为 `https://timicc.com` |
| `ANTHROPIC_AUTH_TOKEN` | TIMI CC 中 CC 分组的 API 令牌，替换示例中的 `xxx` |

### env 完整说明

| 环境变量 | 推荐值 | 作用 |
| --- | --- | --- |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | `"1"` | 关闭非必要网络请求，降低异常流量 |
| `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` | `"1"` | 禁止修改终端标题 |
| `CLAUDE_CODE_NEW_INIT` | `"1"` | 启用新版初始化流程 |
| `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` | `"1"` | 启用实验性 Agent Teams |
| `DISABLE_AUTOUPDATER` | `"1"` | 关闭自动更新，避免更新检查走官方通道 |
| `DISABLE_TELEMETRY` | `"1"` | 关闭遥测上报 |
| `DISABLE_BUG_COMMAND` | `"1"` | 禁用内置 bug 反馈命令 |
| `DISABLE_ERROR_REPORTING` | `"1"` | 关闭错误自动上报 |
| `ENABLE_TOOL_SEARCH` | `"false"` | 关闭 Tool Search（按需开启可改为 `"true"`） |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` | `"1"` | 关闭实验性 Beta 能力，提升稳定性 |
| `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` | `"1"` | 关闭内置 Git 相关系统指令 |

### 其它常用顶层配置

| 配置项 | 推荐值 | 作用 |
| --- | --- | --- |
| `includeCoAuthoredBy` | `false` | 提交信息中不自动附加 Claude 共同作者标记 |
| `language` | `"Chinese-simplified"` | 界面与回复倾向简体中文 |

### 最小可用配置

如果只想先跑通，至少保留 `ANTHROPIC_BASE_URL` 与 `ANTHROPIC_AUTH_TOKEN` 两项即可；其余项为推荐增强，可按需增减。
