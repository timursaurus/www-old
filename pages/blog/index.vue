<template>
  <div>
    <content-navigation v-slot="{ navigation }">
      <ul>
        <li v-for="(link, _) of navigation" :key="_">
          {{ link }}
        </li>
      </ul>
    </content-navigation>
    <div class="dark:bg-blue-200 bg-red-200">
      <button @click="toggleDark()">toggle theme</button>
      {{ isDark }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToggle, useDark } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
