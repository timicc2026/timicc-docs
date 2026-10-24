---
title: Gemini配置
icon: vscode-icons:file-type-gemini
order: 4
date: 2026-10-24
---

CC Switch 可以同时保存多份 Gemini 供应商配置，之后在列表里一键切换。切换后需要完全退出并重新打开 Gemini CLI，新配置才会生效。

1. 打开你下载的 CC Switch，初始界面如下

![](/assets/image/CC-Switch/018.webp)

2. 在顶部分组条中，将分组选择至 **Gemini**

![](/assets/image/CC-Switch/012.webp)

3. 点击右上角 **添加供应商**。预设里如果有 **TIMI CC**，直接选中；没有预设就手动添加：

    - **供应商名称**：`TIMI CC`
    - **官网链接**：`https://timicc.com`
    - **请求地址**：`https://timicc.com`

4. 回顾 [创建 API 密钥](/docs/register/4-token.html)，在 TIMI CC 中创建 **Gemini** 分组的密钥，点击复制按钮，把 API 密钥复制到剪切板

5. 在供应商配置里找到 **API Key**，填入刚才复制的密钥，再点击右下角 **添加**

6. 回到供应商列表，在刚添加的卡片右侧点击 **启用**。状态变成「使用中」后，这一份配置就生效了。需要多份配置时，重复第 3 步继续添加，再在列表里切换即可

7. 完全退出正在运行的 Gemini CLI，然后在终端重新执行 `gemini`。能进入对话并收到回复，就说明当前这份配置可用

![](/assets/image/Cli/022.webp)

::: warning 切换后要重启
Gemini CLI 不会热加载 CC Switch 写入的配置。每次切换供应商后，都要先退出当前 `gemini` 进程，再重新打开。
:::
