<script setup>
const quickLinks = [
  { title: '快速开始', desc: '注册、充值、创建密钥，6 步完成接入', icon: '🚀', link: '/docs/register/' },
  { title: 'CC-Switch', desc: '图形化切换 Claude / Codex 配置', icon: '🔀', link: '/docs/ccswitch/' },
  { title: 'CLI 配置', desc: 'Claude Code、Codex 命令行配置教程', icon: '⌨️', link: '/docs/cli/' },
  { title: '第三方接入', desc: 'OpenCode、Hermes、Claude Desktop 等', icon: '🔌', link: '/docs/advanced/ClaudeDesktop.html' },
];

const cliBadges = ['Claude Code', 'Codex', 'Gemini', 'CC-Switch', 'OpenCode'];
</script>

<template>
  <div class="home-extra">
    <section class="quick-nav">
      <h2 class="section-title">文档导航</h2>
      <div class="quick-grid">
        <a v-for="item in quickLinks" :key="item.title" :href="item.link" class="quick-card">
          <span class="quick-icon">{{ item.icon }}</span>
          <div class="quick-body">
            <h3>{{ item.title }}</h3>
            <span class="quick-desc">{{ item.desc }}</span>
          </div>
          <span class="quick-arrow">→</span>
        </a>
      </div>
    </section>

    <section class="cli-section">
      <div class="cli-label">支持接入</div>
      <div class="cli-badges">
        <span v-for="b in cliBadges" :key="b" class="cli-badge">{{ b }}</span>
      </div>
    </section>

    <section class="support-section">
      <div class="notice-card">
        <div class="notice-icon">💡</div>
        <div class="notice-body">
          <div class="notice-text">请按文档步骤逐步操作，配置与使用基本不会出现问题。</div>
          <div class="notice-text">如遇问题，请截图当前步骤与报错信息，联系客服获取帮助。</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-extra { max-width: 960px; margin: 0 auto; padding: 0 24px 48px; }
.section-title { text-align: center; font-size: 1.35rem; font-weight: 700; color: var(--vp-c-text-1); margin: 0 0 24px; }
.quick-nav { margin-top: 8px; }
.quick-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.quick-card { display: flex; align-items: center; gap: 14px; padding: 18px 20px; border-radius: 14px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); text-decoration: none; color: inherit; transition: border-color .2s, box-shadow .2s, transform .2s; }
.quick-card:hover { border-color: #c9a962; box-shadow: 0 8px 24px -8px rgba(201,169,98,.25); transform: translateY(-2px); }
.quick-icon { font-size: 1.6rem; flex-shrink: 0; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: rgba(201,169,98,.12); border-radius: 10px; }
.quick-body h3 { margin: 0 0 4px; font-size: .95rem; font-weight: 700; color: var(--vp-c-text-1); }
.quick-desc { display: block; font-size: .8rem; color: var(--vp-c-text-2); line-height: 1.4; }
.quick-arrow { margin-left: auto; color: var(--vp-c-text-3); font-size: 1.1rem; transition: transform .2s, color .2s; }
.quick-card:hover .quick-arrow { transform: translateX(4px); color: #c9a962; }
.cli-section { margin: 40px 0; text-align: center; }
.cli-label { font-size: .8rem; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--vp-c-text-3); margin: 0 0 12px; }
.cli-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.cli-badge { padding: 6px 16px; border-radius: 999px; font-size: .85rem; font-weight: 600; color: var(--vp-c-text-2); background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }
.support-section { margin-top: 16px; }
.notice-card { display: flex; gap: 14px; padding: 16px 20px; border-radius: 14px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); }
.notice-icon { font-size: 1.4rem; flex-shrink: 0; line-height: 1; margin-top: 2px; }
.notice-text { font-size: .875rem; line-height: 1.65; color: var(--vp-c-text-2); }
.notice-text + .notice-text { margin-top: 6px; }
@media (max-width: 640px) { .quick-grid { grid-template-columns: 1fr; } }
</style>
