---
title: Gemini配置
icon: vscode-icons:file-type-gemini
order: 4
date: 2026-10-24
---

手动修改 `~/.gemini/.env` 只能保留一份当前配置。如果要在多个密钥或模型之间切换，请改用 [CC Switch 的 Gemini 配置](/docs/ccswitch/4-gemini.html)。

开始前请先完成 [环境检查](/docs/cli/1-env.html)，并确认 `gemini` 命令可以运行。

::: tabs

@tab Windows

1. 按下 `Win+R`，输入以下内容后回车，打开 Gemini CLI 配置目录

```bash
%userprofile%\.gemini
```

![](/assets/image/Cli/019.webp)

2. 如果目录下没有 `.env`，新建一个 `.env`。这个文件用来设置自定义端点、API 密钥和模型

![](/assets/image/Cli/020.webp)

```bash
GOOGLE_GEMINI_BASE_URL=https://timicc.com
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-3.8-flash
```

3. 回顾 [创建 API 密钥](/docs/register/4-token.html)，在 TIMI CC 中创建 **Gemini** 分组的密钥，把复制到的密钥填进 `xxx`。`GEMINI_MODEL` 请改成该分组实际可用的模型名

4. 打开终端执行 `gemini`。能进入对话并收到回复，即表示配置成功

![](/assets/image/Cli/022.webp)

@tab MacOS

1. 按下 `Command+Shift+G`，输入以下路径后回车，打开配置目录

```bash
~/.gemini
```

![](/assets/image/Cli/023.webp)

2. 若目录中没有 `.env`，创建并写入以下内容

![](/assets/image/Cli/024.webp)

```bash
GOOGLE_GEMINI_BASE_URL=https://timicc.com
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-3.8-flash
```

3. 回顾 [创建 API 密钥](/docs/register/4-token.html)，在 TIMI CC 中创建 **Gemini** 分组的密钥，把复制到的密钥填进 `xxx`。`GEMINI_MODEL` 请改成该分组实际可用的模型名

4. 在终端运行 `gemini`。能进入对话并收到回复，即表示配置完成

![](/assets/image/Cli/022.webp)

:::
