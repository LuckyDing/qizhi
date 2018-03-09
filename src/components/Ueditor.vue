<template>
  <div>
    <script id="editor" ref="editor" type="text/plain"></script>
  </div>
</template>
<script>
// UEditor
/* eslint-disable */
import '../../static/ueditor/ueditor.config'
import '../../static/ueditor/ueditor.all'
import '../../static/ueditor/lang/zh-cn/zh-cn'
import '../../static/ueditor/ueditor.parse.min.js'
export default{
  name: 'UEditor',
  data () {
    return {
      editor: null,
      id: Math.random().toString(16).substring(2) + 'ueditorId',
      UE: window.UE || null
    }
  },
  props: {
    defaultMsg: {
      default: '',
      type: String
    },
    config: {
      default: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      type: Object
    }
  },
  mounted () {
    const vm = this
    this.$refs.editor.id = this.id
    this.editor = this.UE.getEditor(this.id, this.config)
    this.editor.addListener('ready', function () {
      vm.editor.setContent(vm.defaultMsg) // 确保UE加载完成后，放入内容。
    })
  },
  methods: {
    getUEContent () {
      return this.editor.getContent()
    }
  },
  destroyed () {
    this.editor.removeListener('ready')
    this.editor.destroy()
    delete this.UE.instants[this.id]
    this.editor = null
    document.getElementById("edui_fixedlayer").remove()
  }
}
</script>
