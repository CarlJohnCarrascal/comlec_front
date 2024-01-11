<script setup>
import { RouterView } from 'vue-router'
import $ from 'jquery'
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter()
const store = useStore()
onMounted( async ()=>{
  await router.isReady()
  let r = router.currentRoute.value.meta.btn
  onMenuClick(r)
  store.commit('loadLocalState')
  store.dispatch('load_voters')
})

function onMenuClick(e){
  $('a.btn').removeClass('active')
  $('a.btn-'+ e).addClass('active')
}
</script>

<template>
  <header class="d-flex justify-content-between border-rounded p-0">
    <a v-on:click="$router.push('/home')" class="btn p-1"></a>
    <span>
      <!-- <a v-on:click="$router.push('/home')" class="btn">Home</a> -->
      <!-- <a v-on:click="$router.push('/home'); onMenuClick('home')" class="btn btn-home py-2 px-3"><i class="fa fa-house me-2"></i>Home</a> -->
      <a v-on:click="$router.push('/voters'); onMenuClick('voters')" class="btn btn-voters active py-2 px-3"><i class="fa fa-users me-2"></i>Voters</a>
      <a v-on:click="$router.push('/houses'); onMenuClick('house')" class="btn btn-house py-2 px-3"><i class="fa fa-house-user me-2"></i>Houses</a>
      <a v-on:click="$router.push('/report'); onMenuClick('report')" class="btn btn-report py-2 px-3"><i class="fa fa-chart-line me-2"></i>Reports</a>
      <a v-on:click="$router.push('/map'); onMenuClick('map')" class="btn btn-map py-2 px-3"><i class="fa fa-map me-2"></i>Map</a>
      <a v-on:click="$router.push('/import-data'); onMenuClick('import')" class="btn btn-import py-2 px-3"><i class="fa fa-upload me-2"></i>Import Data</a>
    </span>
  </header>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  background-color: rgb(255, 255, 255);
}
main {

}

a {
  border-radius: 0%;
  padding-top: 30px;
  padding-bottom: 30px;
}

a:active {
  border: none;
}

a.active {
  background-color: rgba(153, 153, 153, 0.39);
  border: none;
}

</style>
