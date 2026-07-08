import { defineClientConfig } from 'vuepress/client';
import Layout from './layouts/Layout.vue';
import 'vuepress-theme-hope/styles/info/page-meta.scss';

export default defineClientConfig({
  layouts: {
    Layout,
  },
});
