<script setup>
import AutoLink from "@theme-hope/components/base/AutoLink";
import EditIcon from "@theme-hope/components/base/EditIcon";
import { useEditLink } from "@theme-hope/composables/info/useEditLink";

const editLink = useEditLink();

const lastUpdatedText = "2026/6/27 17:19";
const lastUpdatedIso = "2026-06-27T17:19:00+08:00";
const contributor = "TIMICC";
</script>

<template>
  <footer class="vp-page-meta">
    <div v-if="editLink" class="vp-meta-item edit-link">
      <AutoLink class="vp-meta-label" :config="editLink">
        <template #before>
          <EditIcon />
        </template>
      </AutoLink>
    </div>
    <div class="vp-meta-item git-info">
      <div class="update-time">
        <span class="vp-meta-label">最近更新: </span>
        <time class="vp-meta-info" :datetime="lastUpdatedIso">
          {{ lastUpdatedText }}
        </time>
      </div>
      <div class="contributors">
        <span class="vp-meta-label">贡献者: </span>
        <span class="vp-meta-info">{{ contributor }}</span>
      </div>
    </div>
  </footer>
</template>
