---
title: Codex配置
icon: hugeicons:chat-gpt
order: 3
date: 2026-06-27
---

::: tabs

@tab Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开你的codex配置目录

```bash
%userprofile%\.codex
```

![](/assets/image/Cli/006.webp)

2. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个

![](/assets/image/Cli/007.webp)

  - **config.toml**：Codex的**核心配置**文件，中转服务与MCP等都在此文件配置

  - **auth.json**：用来配置你在中转站获取的ApiKey秘钥

  - **AGENTS.md**：用来设置codex全局工作的提示词

> [!important]
> **很多人刚安装可能没有这三个文件，你需要手动去创建这三个文件，然后写入内容**

3. 配置 Config.toml

将以下配置文本复制到你的 config.toml文件中保存
```toml
model_provider = "OpenAI"
model = "gpt-5.5"
review_model = "gpt-5.5"
model_reasoning_effort = "xhigh"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://timicc.com"
wire_api = "responses"
requires_openai_auth = true

[features]
goals = true
```

4. 配置API密钥

将以下配置文本复制到你的 auth.json文件中

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

![](/assets/image/Cli/008.webp)

回顾 [创建API密钥](/docs/register/4-token.html) 这一步教程，我们需要在TIMI CC中创建 **Codex** 分组的令牌，然后点击右侧的复制按钮，将key填入“xxx”部分后保存

![](/assets/image/Cli/009.webp)

5. 测试对话

在windows终端输入以下命令，出现图示内容，进行对话测试，如果有回复，则配置成功，开始你的Codex使用之旅~

```bash
codex
```

![](/assets/image/Cli/010.webp)

@tab MacOS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径并回车，打开 Codex 配置目录

```bash
~/.codex
```

![](/assets/image/Cli/011.webp)

2. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个，其它文件可忽略

![](/assets/image/Cli/012.webp)

  - **config.toml**：Codex 的核心配置文件，中转服务与 MCP 等都在此文件配置

  - **auth.json**：存放中转站获取的API 秘钥

  - **AGENTS.md**：Codex 全局工作的提示词

> [!important]
> 初次安装若未自动生成，需要手动创建上述三个文件并写入内容

3. 配置 Config.toml

将以下内容保存到 `config.toml`

```toml
model_provider = "OpenAI"
model = "gpt-5.5"
review_model = "gpt-5.5"
model_reasoning_effort = "xhigh"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://timicc.com"
wire_api = "responses"
requires_openai_auth = true

[features]
goals = true
```

4. 配置 API密钥

将以下配置文本复制到你的 auth.json文件中

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

![](/assets/image/Cli/008.webp)

回顾 [创建API密钥](/docs/register/4-token.html) 这一步教程，我们需要在TIMI CC中创建 **Codex** 分组的令牌，然后点击右侧的复制按钮，将key填入“xxx”部分后保存

![](/assets/image/Cli/009.webp)

5. 测试对话

在 MacOS 终端执行以下命令，出现对话界面并能收到回复即表示配置成功

```bash
codex
```

![](/assets/image/Cli/010.webp)

:::
