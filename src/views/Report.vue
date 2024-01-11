<template>
    <div class="container-fluid d-nones">
        <div class="row m-2 mt-4 d-nones">
            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border border-4 border-end-0 border-top-0 border-bottom-0 border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">


                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Voters</div>


                                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ store.state.report_filter.chart.total.voters }}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-users fa-2x text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border border-4 border-end-0 border-top-0 border-bottom-0 border-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Right Side
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ store.state.report_filter.chart.total.right }}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-users fa-2x text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border border-4 border-end-0 border-top-0 border-bottom-0 border-danger shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Left Side
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ store.state.report_filter.chart.total.left }}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-users fa-2x text-danger"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border border-4 border-end-0 border-top-0 border-bottom-0 border-secondary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">Undecided
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ store.state.report_filter.chart.total.undecided }}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-users fa-2x text-secondary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-4 mt-2">
            <div class="card p-0">
                <div class="card-header m-1 bg-white d-flex gap-2">
                    <select v-on:change="store.dispatch('reportReset')" v-model="store.state.report_filter.city" class="border-01 bg-white1">
                        <option value="" disabled>Choose City</option>
                        <option value="all" selected>All</option>
                        <option v-for="c in store.getters.get_city" :value="c">{{ c }}</option>
                    </select>
                    <select v-on:change="store.dispatch('reportReset')" v-if="store.state.report_filter.city !== 'all'" v-model="store.state.report_filter.municipality" class="border-01 bg-white1">
                        <option value="" disabled>Choose Municipality</option>
                        <option value="all" selected>All</option>
                        <option v-for="c in store.getters.get_municipality_2(store.state.report_filter.city)" :value="c">{{ c }}</option>
                    </select>
                    <select v-on:change="store.dispatch('reportReset')" v-if="store.state.report_filter.municipality !== 'all'" v-model="store.state.report_filter.barangay" class="border-01 bg-white1">
                        <option value="" disabled>Choose Barangay</option>
                        <option value="all" selected>All</option>
                        <option v-for="c in store.getters.get_barangay_2(store.state.report_filter.city, store.state.report_filter.municipality)" :value="c">{{ c }}</option>
                    </select>
                    <select v-on:change="store.dispatch('reportReset')" v-if="store.state.report_filter.barangay !== 'all'" v-model="store.state.report_filter.purok" class="border-01 bg-white1">
                        <option value="" disabled>Choose Purok</option>
                        <option value="all" selected>All</option>
                        <option v-for="c in store.getters.get_purok_2(store.state.report_filter.city, store.state.report_filter.municipality, store.state.report_filter.barangay)" :value="c">Purok {{ c }}</option>
                    </select>
                </div>
                <div class="card-body">
                    <Bar />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Bar from '../components/Chart/Bar.vue';
import { useStore } from 'vuex';
const store = useStore()

onMounted(async()=>{
    store.dispatch('get_bar_chart_report_data')
})

</script>

<style lang="scss" scoped></style>