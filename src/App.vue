<template>
  <div
    id="app"
    class="min-h-screen flex flex-col items-center bg-gray-800 text-gray-200 overflow-hidden"
  >
    <div
      v-if="isLoading"
      class="flex flex-col items-center justify-center w-full h-full"
    >
      <div class="loader"></div>
      <p>Carregando...</p>
    </div>
    <div v-else class="flex flex-col items-center w-full">
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
          <div
            class="action-bar flex flex-col sm:flex-row justify-center items-center mt-4 mb-4 gap-2"
          >
            <div class="flex items-center gap-2">
              <font-awesome-icon
                class="btn minus"
                :class="{
                  'text-gray-500 cursor-not-allowed': !flipbook.canZoomOut,
                }"
                icon="minus-circle"
                size="lg"
                @click="flipbook.zoomOut"
              ></font-awesome-icon>
              <span class="text-lg">Zoom</span>
              <font-awesome-icon
                class="btn plus"
                :class="{
                  'text-gray-500 cursor-not-allowed': !flipbook.canZoomIn,
                }"
                icon="plus-circle"
                size="lg"
                @click="flipbook.zoomIn"
              ></font-awesome-icon>
            </div>
            <div class="flex items-center gap-2">
              <font-awesome-icon
                class="btn left"
                :class="{
                  'text-gray-500 cursor-not-allowed': flipbook.page === 1,
                }"
                icon="chevron-circle-left"
                size="lg"
                @click="flipbook.flipLeft"
              ></font-awesome-icon>
              <span class="font-medium text-lg">
                Página {{ flipbook.page }} de {{ flipbook.numPages }}
              </span>
              <font-awesome-icon
                class="btn right"
                :class="{
                  'text-gray-500 cursor-not-allowed':
                    flipbook.page === flipbook.numPages,
                }"
                icon="chevron-circle-right"
                size="lg"
                @click="flipbook.flipRight"
              ></font-awesome-icon>
            </div>
            <div class="flex items-center gap-2 hidden lg:flex">
              <button
                class="btn"
                @click="flipToStart"
                :disabled="flipbook.page === 1"
              >
                Primeira Página
              </button>
              <button
                class="btn"
                @click="flipToEnd"
                :disabled="flipbook.page === flipbook.numPages"
              >
                Última Página
              </button>
            </div>
            <div class="flex items-center gap-2 hidden lg:flex">
              <input
                type="number"
                class="p-2 bg-gray-700 text-white rounded"
                min="1"
                :max="flipbook.numPages"
                v-model.number="goToPageNumber"
                @keydown.enter="flipToPage"
                @change="flipToPage"
              />
              <button class="btn" @click="flipToPage">Ir para Página</button>
            </div>
          </div>
        </Flipbook>
      </div>
    </div>
  </div>
</template>

<script>
import Flipbook from "flipbook-vue";

async function importAllImages() {
  const images = [null]; // Primeiro elemento é null
  for (let i = 1; i <= 22; i++) {
    const image = await import(`@/assets/images/${i}.png`);
    images.push(image.default);
  }
  return images;
}

export default {
  name: "App",
  components: {
    Flipbook,
  },
  data() {
    return {
      pages: [],
      pagesHiRes: [],
      goToPageNumber: 1,
      isLoading: true,
    };
  },
  async created() {
    const images = await importAllImages();
    this.pages = images;
    this.pagesHiRes = images; // Pode ser diferente se você tiver resoluções altas separadas
    this.isLoading = false;
  },
  methods: {
    flipToStart() {
      this.$refs.flipbook.goToPage(1);
    },
    flipToEnd() {
      this.$refs.flipbook.goToPage(this.$refs.flipbook.numPages);
    },
    flipToPage() {
      if (
        this.goToPageNumber >= 1 &&
        this.goToPageNumber <= this.$refs.flipbook.numPages
      ) {
        this.$refs.flipbook.goToPage(this.goToPageNumber);
      }
    },
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
  },
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

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #2b004f;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.action-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 16px;
}

.btn {
  background-color: #444;
  color: #ccc;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #666;
  color: #999;
  cursor: not-allowed;
}

.has-mouse .btn:hover {
  background-color: #555;
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.btn:active {
  filter: none !important;
}

.btn.disabled {
  color: #666;
  pointer-events: none;
}

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
