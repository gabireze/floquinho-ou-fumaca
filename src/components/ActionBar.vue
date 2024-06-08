<template>
  <div
    class="action-bar flex flex-col sm:flex-row justify-center items-center mt-4 mb-4 gap-2"
  >
    <div class="flex items-center gap-2">
      <font-awesome-icon
        class="btn minus"
        :class="{ 'text-gray-500 cursor-not-allowed': !canZoomOut }"
        icon="minus-circle"
        size="lg"
        @click="zoomOut"
      ></font-awesome-icon>
      <span class="text-lg">Zoom</span>
      <font-awesome-icon
        class="btn plus"
        :class="{ 'text-gray-500 cursor-not-allowed': !canZoomIn }"
        icon="plus-circle"
        size="lg"
        @click="zoomIn"
      ></font-awesome-icon>
    </div>
    <div class="flex items-center gap-2">
      <font-awesome-icon
        class="btn left"
        :class="{ 'text-gray-500 cursor-not-allowed': page === 1 }"
        icon="chevron-circle-left"
        size="lg"
        @click="flipLeft"
      ></font-awesome-icon>
      <span class="font-medium text-lg">
        Página {{ page }} de {{ numPages }}
      </span>
      <font-awesome-icon
        class="btn right"
        :class="{ 'text-gray-500 cursor-not-allowed': page === numPages }"
        icon="chevron-circle-right"
        size="lg"
        @click="flipRight"
      ></font-awesome-icon>
    </div>
    <div class="flex items-center gap-2 hidden lg:flex">
      <button class="btn" @click="flipToStart" :disabled="page === 1">
        Primeira Página
      </button>
      <button class="btn" @click="flipToEnd" :disabled="page === numPages">
        Última Página
      </button>
    </div>
    <div class="flex items-center gap-2 hidden lg:flex">
      <input
        type="number"
        class="p-2 bg-gray-700 text-white rounded"
        min="1"
        :max="numPages"
        v-model.number="goToPageNumber"
        @keydown.enter="flipToPage"
        @change="flipToPage"
      />
      <button class="btn" @click="flipToPage">Ir para Página</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canZoomOut: Boolean,
    canZoomIn: Boolean,
    page: Number,
    numPages: Number,
  },
  data() {
    return {
      goToPageNumber: 1,
    }
  },
  methods: {
    zoomOut() {
      this.$emit('zoom-out')
    },
    zoomIn() {
      this.$emit('zoom-in')
    },
    flipLeft() {
      this.$emit('flip-left')
    },
    flipRight() {
      this.$emit('flip-right')
    },
    flipToStart() {
      this.$emit('flip-to-start')
    },
    flipToEnd() {
      this.$emit('flip-to-end')
    },
    flipToPage() {
      if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.numPages) {
        this.$emit('flip-to-page', this.goToPageNumber)
      }
    },
  },
}
</script>

<style scoped>
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
</style>
