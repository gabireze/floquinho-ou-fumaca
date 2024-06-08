<template>
  <div
    id="app"
    class="min-h-screen flex flex-col items-center bg-gray-800 text-gray-200 overflow-hidden"
  >
    <Loader v-if="isLoading" />
    <FlipbookComponent v-else :pages="pages" :pagesHiRes="pagesHiRes" />
  </div>
</template>

<script>
import FlipbookComponent from '@/components/FlipbookComponent.vue'
import Loader from '@/components/Loader.vue'

async function importAllImages() {
  const images = [null]
  for (let i = 1; i <= 22; i++) {
    const image = await import(`@/assets/images/${i}.png`)
    images.push(image.default)
  }
  return images
}

export default {
  name: 'App',
  components: {
    Loader,
    FlipbookComponent,
  },
  data() {
    return {
      pages: [],
      pagesHiRes: [],
      isLoading: true,
    }
  },
  async created() {
    const images = await importAllImages()
    this.pages = images
    this.pagesHiRes = images
    this.isLoading = false
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
