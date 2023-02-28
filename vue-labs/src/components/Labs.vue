<template>
  <div class="labs">
    <h1>Labs</h1>
    <div id="parcel"></div>
    <p>
      <Parcel :config="parcelConfig" :mountParcel="mountParcel" :parcelProps="getParcelProps()" />
    </p>
  </div>
</template>

<script>
import { mountParcel } from '../main.js'
// import Parcel from 'single-spa-vue/dist/esm/parcel';
import Parcel from 'single-spa-vue/parcel'
import { mountRootParcel } from 'single-spa';
export default {
  name: 'LabsApp',
  props: {
    msg: String
  },
  components: {
    Parcel
  },
  data() {
    return {
      parcelConfig: window.System.import("@rg/react-notification-bar-parcel"),
      mountParcel: mountRootParcel
    }
  },
  async mounted() {
      // this.loadParcel()
      // let toolsModule = await window.System.import("@rg/react-notification-bar-parcel")
      // toolsModule.sharedSubject.subscribe(console.log)
  },
  methods: {
       loadParcel() {
         var domElement = document.getElementById('parcel')
         mountParcel(() => window.System.import("@rg/react-notification-bar-parcel"), { domElement } )
       },
       getParcelProps() {
          return {
            notification: {
              message: 'Aplicação Vue',
              background: 'bar--bg-green1',
              icon: 'fab fa-vuejs',
              iconAnimation: 'bar--animation-flip'
            }
          }
        },
        parcelMounted() {},
        parcelUpdated() {}
  }
}
</script>
