<template>
  <button class="t-button" ref="t_button" :disabled="disable" :class="[
    't-button--' + buttonType,
    {
      't-button--disable': disable,
      't-button--border': t_border,
      't-button--circuar': t_circuar,
      't-button--icon': icon!=='',
      't-button--link': t_link,
      't-button-size--xs': t_xs,
      't-button-size--sx': t_sx,
      't-button-size--sm': t_sm,
      't-button-size--ms': t_ms,
      't-button-size--xm': t_xm
    }
]" @click="handlerClick">
    <i class="t-button-icon t-icon" v-if="icon" :class="icon"></i>
    <span v-if="!isShowText"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "TButton",
  props: {
    type: String,
    t_link: Boolean,
    t_xs: Boolean,
    t_sx: Boolean,
    t_sm: Boolean,
    t_ms: Boolean,
    t_xm: Boolean,
    icon: {
      type: String,
      default: ''
    },
    disable: {
      type: Boolean,
      default: false
    },
    t_border: {
      type: Boolean,
      default: false
    },
    t_circuar: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    isShowText: true,
      buttonType: ''
    }
  },
  mounted() {
    this.isShowText = this.$slots.default?.toString() === undefined;
    if (this.type === '' || this.type === undefined) {
      this.buttonType = 'default'
    } else {
      this.buttonType = this.type
    }
  },
  methods: {
    handlerClick (e) {
      if (!this.disable) {
        this.$emit('click', e)
      }
    }
  }
}
</script>

<style lang="scss">
@import 'scss/t-button';
</style>
