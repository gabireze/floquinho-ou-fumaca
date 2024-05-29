<template>
  <div id="app">
    <v-container class="ma-0 pa-0" justify-center>
      <v-layout row>
        <v-flex class="ma-0 pa-0">
          <Flipbook
            class="flipbook"
            :pages="pages"
            :pagesHiRes="pagesHiRes"
            v-slot="flipbook"
            ref="flipbook"
          >
            <v-flex xs12 class="pt-2 action-bar text-xs-center">
              <font-awesome-icon
                class="ma-1 btn left"
                :class="{ disabled: !flipbook.canFlipLeft }"
                icon="chevron-circle-left"
                size="lg"
                @click="flipbook.flipLeft"
              ></font-awesome-icon>
              <font-awesome-icon
                class="ma-1 btn minus"
                :class="{ disabled: !flipbook.canZoomOut }"
                icon="minus-circle"
                size="lg"
                @click="flipbook.zoomOut"
              ></font-awesome-icon>
              <span class="ma-1 font-weight-medium subheading" style="margin-left: 10px; margin-right: 5px;">Page</span>
              <span class="font-weight-medium subheading">{{ flipbook.page }}</span>
              <span class="font-weight-medium subheading">&nbsp;of&nbsp;</span>
              <span class="mr-1 font-weight-medium subheading">{{ flipbook.numPages }}</span>
              <font-awesome-icon
                class="ma-1 btn plus"
                :class="{ disabled: !flipbook.canZoomIn }"
                icon="plus-circle"
                size="lg"
                @click="flipbook.zoomIn"
              ></font-awesome-icon>
              <font-awesome-icon
                class="ma-1 btn right"
                :class="{ disabled: !flipbook.canFlipRight }"
                icon="chevron-circle-right"
                size="lg"
                @click="flipbook.flipRight"
              ></font-awesome-icon>
            </v-flex>
          </Flipbook>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Flipbook from "flipbook-vue";

async function importAllImages() {
  const images = [null]; // Primeiro elemento é null
  for (let i = 1; i <= 18; i++) {
    const image = await import(`@/assets/images/${i}.png`);
    images.push(image.default);
  }
  return images;
}

export default {
  name: "App",
  components: {
    Flipbook
  },
  data() {
    return {
      pages: [],
      pagesHiRes: []
    };
  },
  async created() {
    const images = await importAllImages();
    this.pages = images;
    this.pagesHiRes = images; // Pode ser diferente se você tiver resoluções altas separadas
  },
  mounted() {
    window.addEventListener("keydown", (ev) => {
      let flipbook = this.$refs.flipbook;
      if (ev.keyCode === 37 && flipbook.canFlipLeft) {
        flipbook.flipLeft();
      }
      if (ev.keyCode === 39 && flipbook.canFlipRight) {
        flipbook.flipRight();
      }
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}

.action-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}

.action-bar .btn {
}
.action-bar .btn svg {
  bottom: 0;
}
.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}
.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}
.action-bar .btn:active {
  filter: none !important;
}
.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}
.flipbook {
  width: 90vw;
  height: 90vh;
}

.flipbook .viewport {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}
</style>
