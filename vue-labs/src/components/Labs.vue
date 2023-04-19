<template>
  <div class="labs">
    <h1>Laboratório de Projetos</h1>
    <div class="labs-container">
        <Thumb :href="item.route ? item.route : ''" v-for="item in labsList" :key="item.id" :item="item" />     
    </div>
    
    <Parcel :config="parcelConfig" :mountParcel="mountParcel" :parcelProps="getParcelProps()" />
  </div>
</template>

<script>
import axios from 'axios'
import { mountParcel } from '../main.js'
// import Parcel from 'single-spa-vue/dist/esm/parcel';
import Parcel from 'single-spa-vue/parcel'
import { mountRootParcel } from 'single-spa';

import Thumb from './Thumb'
export default {
  name: 'LabsApp',
  props: {
    msg: String
  },
  components: {
    Parcel,
    Thumb
  },
  data() {
    return {
      parcelConfig: window.System.import("@rg/react-notification-bar-parcel"),
      mountParcel: mountRootParcel,
      labsList: []
    }
  },
  async mounted() {
      // this.loadParcel()
      // let toolsModule = await window.System.import("@rg/react-notification-bar-parcel")
      // toolsModule.sharedSubject.subscribe(console.log)
       await this.fetchLabs()
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
        parcelUpdated() {},
        async fetchLabs() {
            const labs = await axios.get('https://gist.githubusercontent.com/ehurafa/4987d7be9fa2db874e07dab0a60c0a23/raw/fddc9cfeeb98b618055a7a2b97ae3dfb3d849eeb/mfe-labs')
            this.labsList = labs.data
        },
  }
}
</script>
<style>
.labs {
  float: right;
  width: calc(100% - 290px);
  min-height: 100vh;
  background: #f3f3f3;
  padding: 40px 20px 30px 20px;
}
.labs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 30px;
}
@media (max-width: 576px) {
    .labs {
      width: calc(100% - 10vw);
    }
  }
</style>
