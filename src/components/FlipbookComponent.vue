<template>
  <div class="w-full flex justify-center items-center">
    <Flipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :flipDuration="1000"
      :zoomDuration="500"
      :zooms="[1, 2, 4]"
      :ambient="0.4"
      :gloss="0.6"
      :perspective="2400"
      :nPolygons="10"
      :singlePage="false"
      :forwardDirection="'right'"
      :centering="true"
      :startPage="1"
      :loadingImage="null"
      :clickToZoom="true"
      :dragToFlip="true"
      :wheel="'zoom'"
      v-slot="flipbook"
      ref="flipbook"
    >
      <action-bar
        :can-zoom-out="flipbook.canZoomOut"
        :can-zoom-in="flipbook.canZoomIn"
        :page="flipbook.page"
        :num-pages="flipbook.numPages"
        @zoom-out="flipbook.zoomOut"
        @zoom-in="flipbook.zoomIn"
        @flip-left="flipbook.flipLeft"
        @flip-right="flipbook.flipRight"
        @flip-to-start="flipToStart"
        @flip-to-end="flipToEnd"
        @flip-to-page="flipToPage"
      />
    </Flipbook>
  </div>
</template>

<script>
import Flipbook from 'flipbook-vue'
import ActionBar from './ActionBar.vue'

export default {
  name: 'FlipbookComponent',
  components: {
    Flipbook,
    ActionBar,
  },
  props: {
    pages: Array,
    pagesHiRes: Array,
  },
  methods: {
    flipToStart() {
      this.$refs.flipbook.goToPage(1)
    },
    flipToEnd() {
      this.$refs.flipbook.goToPage(this.$refs.flipbook.numPages)
    },
    flipToPage(pageNumber) {
      this.$refs.flipbook.goToPage(pageNumber)
    },
  },
}
</script>

<style scoped>
.flipbook {
  width: 90vw;
  height: 80vh;
}

.flipbook .viewport {
  width: 90vw;
  height: 90vh;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}
</style>
