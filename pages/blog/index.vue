<template>
  <div>
    <content-navigation v-slot="{ navigation }">
      <ul>
        <li class="block" v-for="link of navigation.blog" :key="link.title">
          <nuxt-link :to="link._path"> {{ link.title }} </nuxt-link>
        </li>
      </ul>
      <!-- {{ navigation }} -->
      <content-list path="/blog" v-slot="{ list }">
        <ul>
          <li v-for="link in list">
            <nuxt-link :to="link._path"> {{ link.title }} </nuxt-link>
          </li>
        </ul>
        <!-- {{ list }} -->
      </content-list>
    </content-navigation>
    <!-- <div class="dark:bg-blue-200 bg-red-200">
      <button @click="toggleDark()">toggle theme</button>
      {{ isDark }}
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useToggle, useDark } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
