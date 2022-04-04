<template>
  <div class="t-card" :style="{ width: width }">
    <div class="t-card-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="t-card-header" v-else>
        <span class="t-card-title">{{ title }}</span>
        <TButton type="primary" t_link>more</TButton>
    </div>
    <div class="t-card-body" v-if="$slots.body">
      <slot name="body">{{ body }}</slot>
    </div>
    <div class="t-card-footer" v-if="$slots.footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script>
import TButton from "../../TButton/src";
export default {
  name: "TCard",
  components: {TButton},
  props: {
    header: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    body: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    },
    width: String
  }
}
</script>

<style lang="scss">
@import "./scss/t-card";
</style>
