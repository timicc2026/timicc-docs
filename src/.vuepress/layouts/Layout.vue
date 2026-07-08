<script setup>
import { Layout } from 'vuepress-theme-hope/client';
import { useRoutePath } from 'vuepress/client';
import HomeExtra from '../components/HomeExtra.vue';

const routePath = useRoutePath();
</script>

<template>
  <Layout>
    <template v-if="routePath === '/'" #contentAfter>
      <HomeExtra />
    </template>
  </Layout>
</template>
