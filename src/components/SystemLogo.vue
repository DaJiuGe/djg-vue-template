<template>
  <div class="flex justify-center items-center my-8 mx-auto">
    <img
      class="inline-block"
      :width="size"
      :height="size"
      :src="Logo"
      alt="logo"
    />
    <span
      class="text-lg font-bold text-gray-600"
      :style="{ marginLeft: gap + 'px' }"
    >
      {{ config.name }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import Logo from '@assets/logo.png'
import VueTypes from 'vue-types'

import config from '../../package.json'

defineProps({
  size: VueTypes.number.def(36),
  gap: VueTypes.number.def(8)
})
</script>
