import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/docs/": [
        {
            text: "快速开始",
            icon: "rocket",
            prefix: "register/",
            link: "register/",
            collapsible: false,
            children: [
                {
                    text: "（1）注册账号",
                    icon: "material-symbols:person-add",
                    link: "1-register.md",
                },
                {
                    text: "（2）登录账号",
                    icon: "material-symbols:login",
                    link: "2-login.md",
                },
                {
                    text: "（3）购买额度",
                    icon: "mdi:credit-card-outline",
                    link: "3-quota.md",
                },
                {
                    text: "（4）创建 API 密钥",
                    icon: "mdi:key-variant",
                    link: "4-token.md",
                },
                {
                    text: "（5）环境检查",
                    icon: "mdi:tools",
                    link: "5-env.md",
                },
                {
                    text: "（6）配置 CLI 工具",
                    icon: "mdi:console",
                    link: "6-cli.md",
                },
            ],
        },
        {
            text: "CC-Switch使用",
            icon: "fluent:table-switch-16-filled",
            prefix: "ccswitch/",
            link: "ccswitch/",
            collapsible: false,
            children: [
                {
                    text: "通用步骤",
                    icon: "fluent:table-switch-16-filled",
                    link: "1-common.md",
                },
                {
                    text: "Claude Code配置",
                    icon: "material-icon-theme:claude",
                    link: "2-claude.md",
                },
                {
                    text: "Codex配置",
                    icon: "hugeicons:chat-gpt",
                    link: "3-codex.md",
                },
                {
                    text: "Gemini配置",
                    icon: "vscode-icons:file-type-gemini",
                    link: "4-gemini.md",
                },
            ],
        },
        {
            text: "CLI配置教程",
            icon: "heroicons:command-line-20-solid",
            prefix: "cli/",
            link: "cli/",
            collapsible: false,
            children: [
                {
                    text: "环境检查（通用步骤）",
                    icon: "mdi:tools",
                    link: "1-env.md",
                },
                {
                    text: "Claude Code配置",
                    icon: "material-icon-theme:claude",
                    link: "2-claude.md",
                },
                {
                    text: "Codex配置",
                    icon: "hugeicons:chat-gpt",
                    link: "3-codex.md",
                },
                {
                    text: "Gemini配置",
                    icon: "vscode-icons:file-type-gemini",
                    link: "4-gemini.md",
                },
            ],
        },
        {
            text: "第三方接入",
            icon: "noto:fire",
            prefix: "advanced/",
            collapsible: false,
            children: [
                {
                    text: "Claude Desktop",
                    icon: "material-icon-theme:claude",
                    link: "ClaudeDesktop.md",
                },
                {
                    text: "OpenCode",
                    icon: "mynaui:code-hexagon-solid",
                    link: "OpenCode.md",
                },
                {
                    text: "Hermes",
                    icon: "game-icons:caduceus",
                    link: "Hermes.md",
                },
                {
                    text: "GPT接入CC",
                    icon: "hugeicons:chat-gpt",
                    link: "ChatGPTClaudeCode.md",
                },
            ],
        },
        {
            text: "常见问题",
            icon: "mingcute:question-fill",
            prefix: "faq/",
            collapsible: false,
            children: [
                {
                    text: "Claude Code",
                    icon: "material-icon-theme:claude",
                    link: "CC.md",
                },
                {
                    text: "Codex",
                    icon: "hugeicons:chat-gpt",
                    link: "Codex.md",
                },
            ],
        },
    ],
    "/": [""],
});
