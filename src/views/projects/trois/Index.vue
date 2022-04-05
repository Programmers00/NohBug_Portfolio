<template>
  <section>
    <Renderer resize="window" orbit-ctrl ref="renderer" alpha>
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <StandardMaterial :props="{ displacementScale: 0.1 }">
            <Texture :src="src"/>
          </StandardMaterial>
        </Box>
        <Sphere ref="sphere" :position="{ x: -10, y: 0, z: -20}" :radius="radius">
          <StandardMaterial :props="{ displacementScale: 0.1 }">
            <!-- <Texture src="ink.jpg" />
            <Texture src="ink.jpg" />
            <Texture src="ink.jpg" />
            <Texture src="ink.jpg" />
            <Texture src="ink.jpg" /> -->
          </StandardMaterial>
        </Sphere >
      </Scene>
    </Renderer>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Box, Sphere, Camera, StandardMaterial, PointLight, Renderer, Scene } from 'troisjs'
export default {
  name: 'trois',
  data() {
    return {
      radius: 5,
      src: '@/assets/ink.jpg'
    }
  },
  components: {
    Box, Sphere, Camera, StandardMaterial, PointLight, Renderer, Scene
  },
  setup() {
    const renderer = ref(null)
    const box = ref(null)
    const sphere = ref(null)
    
    onMounted(()=> {
      renderer?.value?.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01;
        sphere.value.mesh.rotation.x += 0.02;
        // console.log("sphere.value", sphere.value)
    })
    })
    return { renderer, box, sphere}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-image: url(../../../assets/space.png);
  /* background-repeat: no-repeat; */
  background-size: contain;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* padding: 96px 24px 24px; */
  /* gap: 10px; */
}
</style>
