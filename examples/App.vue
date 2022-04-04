<template>
  <div id="app">
<!--  <div class="buttons">-->
<!--      基础按钮-->
<!--    <br/>-->
<!--    <TButton>默认按钮</TButton>-->
<!--    <TButton type="primary">百搭按钮</TButton>-->
<!--    <TButton type="danger">错误按钮</TButton>-->
<!--    <TButton type="warning">警告按钮</TButton>-->
<!--    <TButton type="success">成功按钮</TButton>-->
<!--    <TButton type="info">信息按钮</TButton>-->
<!--    <TButton disable type="primary">禁用按钮</TButton>-->
<!--    <br/>-->
<!--    丰富的按钮-->
<!--    <br/>-->
<!--    <TButton type="primary" icon="alarm">带图标的按钮</TButton>-->
<!--    <TButton type="primary" icon="alarm" disable>禁用的带图标的按钮</TButton>-->
<!--    <br/>-->
<!--    按钮事件-->
<!--    <br/>-->
<!--    <TButton type="primary" @click="clicks">带点击事件的按钮</TButton>-->
<!--    <TButton type="primary" @click="clicks" disable>禁用的带点击事件的按钮</TButton>-->
<!--    <br/>-->
<!--    文字按钮-->
<!--    <br/>-->
<!--    <TButton t_link>默认按钮</TButton>-->
<!--    <TButton type="primary" t_link>百搭按钮</TButton>-->
<!--    <TButton type="danger" t_link>错误按钮</TButton>-->
<!--    <TButton type="warning" t_link>警告按钮</TButton>-->
<!--    <TButton type="success" t_link>成功按钮</TButton>-->
<!--    <TButton type="info" t_link>信息按钮</TButton>-->
<!--    <TButton type="primary" t_link disable>禁用按钮</TButton>-->
<!--    <br/>-->
<!--    按钮大小-->
<!--    <br/>-->
<!--    <TButton type="primary" t_xs>最小号按钮</TButton>-->
<!--    <TButton type="primary" t_sx>小号按钮</TButton>-->
<!--    <TButton type="primary" t_sm>中号按钮</TButton>-->
<!--    <TButton type="primary" t_ms>大号按钮</TButton>-->
<!--    <TButton type="primary" t_xm>超大号按钮</TButton>-->
<!--    <TButton type="primary" t_xm disable>禁用的带大小的按钮</TButton>-->
<!--    <br/>-->
<!--    边框按钮-->
<!--    <br/>-->
<!--    <TButton t_border>默认按钮</TButton>-->
<!--    <TButton type="primary" t_border>百搭按钮</TButton>-->
<!--    <TButton type="danger" t_border>错误按钮</TButton>-->
<!--    <TButton type="warning" t_border>警告按钮</TButton>-->
<!--    <TButton type="success" t_border>成功按钮</TButton>-->
<!--    <TButton type="info" t_border>信息按钮</TButton>-->
<!--    <TButton type="primary" t_border disable>禁用的边框按钮</TButton>-->
<!--    <br/>-->
<!--    圆形按钮-->
<!--    <br/>-->
<!--    <TButton t_circuar>默认按钮</TButton>-->
<!--    <TButton type="primary" t_circuar>百搭按钮</TButton>-->
<!--    <TButton type="danger" t_circuar>错误按钮</TButton>-->
<!--    <TButton type="warning" t_circuar>警告按钮</TButton>-->
<!--    <TButton type="success" t_circuar>成功按钮</TButton>-->
<!--    <TButton type="info" t_circuar>信息按钮</TButton>-->
<!--    <TButton type="primary" t_circuar disable>禁用的圆角按钮</TButton>-->
<!--    <br/>-->
<!--    图标按钮-->
<!--    <br/>-->
<!--    <TButton t_circuar icon="direction-down"/>-->
<!--    <TButton type="primary" t_circuar icon="direction-right"/>-->
<!--    <TButton type="danger" t_circuar icon="direction-up"/>-->
<!--    <TButton type="warning" t_circuar icon="download"/>-->
<!--    <TButton type="success" t_circuar icon="drag"/>-->
<!--    <TButton type="info" t_circuar icon="edit"/>-->
<!--    <TButton type="primary" t_circuar icon="edit" disable/>-->
<!--    <br />-->
<!--    </div>-->
    <br />==================================================<br />
    <TCard>
      <template #body>
        Body内容
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
        Body内容<br />
      </template>
      <template #footer>
<!--        Footer内容-->
        <TButton type="success" t_border>确定</TButton>
      </template>
    </TCard>

<!--    <TButton @click="visible=true" t_link>显示Dialog</TButton>-->
<!--    <TDialog :visible="visible" @TDialogClose="TDialogHandlerClose">-->
<!--      <template #body>正文内容</template>-->
<!--    </TDialog>-->
  </div>
</template>

<script>
import TButton from "../packages/TButton/src";
import TCard from "../packages/TCard/src";
import TDialog from "../packages/TDialog";

export default {
  name: 'App',
  components: {TCard, TButton, TDialog},
  data () {
    return {
      visible: false
    }
  },
  methods: {
    clicks () {
      console.log('000')
    },
    TDialogHandlerClose (val) {
      console.log('前')
      this.visible = val
    }
  }
}
</script>

