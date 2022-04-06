<template>
  <section>
    <Renderer resize="window" orbit-ctrl ref="renderer" alpha>
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Sphere ref="sphere" :position="{x:0, y:0, z:0}" :radius="sphereData.radius">
          <StandardMaterial :props="{ displacementScale: 0.01 }">
          </StandardMaterial>
        </Sphere >
      </Scene>
    </Renderer>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Sphere, Camera, StandardMaterial, PointLight, Renderer, Scene} from 'troisjs'
export default {
  name: 'trois',
  components: {
    Sphere, Camera, StandardMaterial, PointLight, Renderer, Scene
  },
  data() {
    return {
      sphereData: {
        radius: 1
      }
    }
  },
  setup() {
    const renderer = ref(null)
    const sphere = ref(null)
    
    const speed = 0.05
    const keyStates = {}

    //keydown event
    document.addEventListener('keydown', event => {
      keyStates[event.key] = true
    })
    //keyup event
    document.addEventListener('keyup', event => {
      keyStates[event.key] = false
    })
    
    onMounted(()=> {
      renderer?.value?.onBeforeRender(() => {
        if(keyStates['a']){
          sphere.value.mesh.position.x -= speed
          sphere.value.mesh.rotation.z += speed
        }
        if(keyStates['d']){
          sphere.value.mesh.position.x += speed
          sphere.value.mesh.rotation.z -= speed
        }
        if(keyStates['w']){
          sphere.value.mesh.position.y += speed
          sphere.value.mesh.rotation.x -= speed
        }
        if(keyStates['s']){
          sphere.value.mesh.position.y -= speed
          sphere.value.mesh.rotation.x += speed
        }
    })
    })
    return { renderer, sphere, keyStates }
  },
  methods: {
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
