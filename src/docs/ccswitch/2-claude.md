---
title: Claude Code配置
icon: material-icon-theme:claude
order: 2
date: 2026-06-27
---

1. 打开你下载的CC Switch软件，你会看到如下图的初始界面

![](/assets/image/CC-Switch/003.webp)

2. 在分组条中，将分组选择至“Claude”

![](/assets/image/CC-Switch/004.webp)

3. 可以在后台选择ccs自动导入,或者自己手动添加(自动导入失败就手动添加一下)

![](/assets/image/CC-Switch/005.webp)

4. 回顾 [创建API密钥](/docs/register/4-token.html)，在 TIMI CC 中创建 **CC** 分组的密钥，点击复制按钮，复制API密钥到剪切板

![](/assets/image/Cli/025.webp)

5. 下拉模态框，找到“API Key”配置项，填入你刚才复制的API密钥，再点击右下角“添加”按钮

![](/assets/image/CC-Switch/006.webp)

6. 添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成

![](/assets/image/CC-Switch/007.webp)

7. 点击左上角“设置”按钮，在通用页面下拉找到 `跳过 Claude Code初次安装确认` ，务必勾选

![](/assets/image/CC-Switch/017.webp)

8. 在终端运行 `claude`，看到对话界面并能正常回复即表示配置完成

![](/assets/image/Cli/016.webp)

::: warning 使用提醒
如果你使用的是 CC官转分组，请注意该分组**不支持第三方接入**，因此无法在 CC Switch 中完成完整的调用测试。

这类配置是否生效，请直接以 Claude Code 内的实际对话结果为准，并在 Claude Code 中完成最终测试。
:::
