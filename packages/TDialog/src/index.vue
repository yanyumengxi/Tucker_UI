<template>
  <transition name="t-dialog-utob">
    <div class="t-dialog--wrapper" v-show="visible" @click.self="handlerClose">
      <div class="t-dialog">
        <div class="t-dialog-header" v-if="$slots.header || header">
          <slot name="header">{{ header }}</slot>
        </div>
        <div class="t-dialog-header" v-else>
          <span class="t-dialog-header-title">{{ title }}</span>
          <TButton icon="error" @click="handlerClose" t_link></TButton>
        </div>
        <div class="t-dialog-body" v-if="$slots.body">
          <slot name="body">{{ body }}</slot>
        </div>
        <div class="t-dialog-body" v-else>
          {{ body }}
        </div>
        <div class="t-dialog-footer" v-if="$slots.footer">
          <slot name="footer">{{ footer }}</slot>
        </div>
        <div class="t-dialog-footer" v-else>
          <TButton @click="visible=false">取消</TButton>
          <TButton type="primary" @click="visible=false" t_xs>确定</TButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TButton from "../../TButton/src";

export default {
  name: "index",
  components: {TButton},
  props: {
    title: {
      type: String,
      default: '标题'
    },
    header: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handlerClose(){
      this.$emit('TDialogClose', false)
      // console.log('后')
    }
  }
}
</script>

<style lang="scss">
@import "./scss/t-dialog";
</style>
