<template>
  <div>
      {{json}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      json: ''
    }
  },
  mounted () {
    var state = this.$route.params.state
    var pub = this.$route.params.public
    var upload = this.$route.params.upload
    var images = this.$route.params.images
    var date = this.$route.params.date
    var img = this.$route.params.img
    var url = '/' + pub + '/' + upload + '/' + images + '/' + date + '/' + img
    this.json = '{"state":"' + state + '","url":"' + url + '"}'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
