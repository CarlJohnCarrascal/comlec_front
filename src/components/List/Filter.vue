<template>
    <div class="card p-2">
        <div class="d-flex justify-content-between flex-wrap">
            
            
            <div class="d-flex gap-1 mb-1">
                <div class="d-none d-md-block">
                    <div class="w-100 d-flex justify-content-between ms-2">
                        <div class="d-flex gap-3 flex-wrap">
                            <div class="form-group">
                                <label for="exampleFormControlSelect11">Select City</label>
                                <select v-on:change="onFilterChanged('city')" v-model="store.state.filter.city"
                                    class="form-control input-sm" id="exampleFormControlSelect1">
                                    <option value="" selected disabled>Choose City</option>
                                    <option value="all" selected>All</option>
                                    <option v-for="c in store.state.cities" :value="c">{{ c.name }}</option>
                                </select>
                            </div>
                            <div v-if="store.state.filter.city != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">Municipality</label>
                                <select v-on:change="onFilterChanged('municipality')" v-model="store.state.filter.municipality"
                                    class="form-control input-sm" id="exampleFormControlSelect1">
                                    <option value=""  disabled>Choose municipality</option>
                                    <option value="all" selected>All</option>
                                    <option v-for="c in store.state.municipalities" :value="c">{{ c.name }}</option>
                                </select>
                            </div>
                            <div v-if="store.state.filter.municipality != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">Barangay</label>
                                <select v-on:change="onFilterChanged('brgy')" v-model="store.state.filter.barangay"
                                    class="form-control" id="exampleFormControlSelect1">
                                    <option value="" disabled>Choose barangay</option>
                                    <option value="all" selected>All</option>      
                                    <option v-for="c in store.state.barangay" :value="c">{{ c.name }}</option>
                                </select>
                            </div>
                            <div v-if="store.state.filter.barangay != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">Purok</label>
                                <select v-on:change="onFilterChanged('purok')" v-model="store.state.filter.purok" class="form-control"
                                    id="exampleFormControlSelect1">
                                    <option value="all" selected>All</option>
                                    <option v-for="c in Number(store.state.filter.barangay.purok)" :value="c">Purok {{ c }}</option>
                                </select>
                            </div>

                            <div v-if="store.state.filter.purok != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">House No.</label>
                                <select v-on:change="onFilterChanged('house_number')" v-model="store.state.filter.house_number"
                                    class="form-control" id="exampleFormControlSelect1">
                                    <option value="all" selected>All</option>
                                    <template v-for="house in store.state.houses2">
                                        <option :value="house">{{ house.house_number }}</option>
                                    </template>
                                </select>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex gap-1 mb-1">
                <!-- <button class="btn btn-sm btn-danger" style="max-height: 32px;">
                    <i class="fa fa-times"></i>
                    Reset Filter
                </button> -->
                <button v-on:click="onFilterCollapse" id="btn-filter-collapse" class="btn btn-sm btn-danger"
                    data-bs-toggle="collapse" data-bs-target="#collapse-filter" aria-expanded="false"
                    aria-controls="collapseExample" style="max-width: 50px;min-width: 50px;max-height: 32px;">
                    <i class="fa fa-chevron-down"></i>
                </button>
            </div>
        </div>
        <div class="row collapse ms-1" id="collapse-filter">
            <div class="d-md-none">
                <!-- <span class="p-3">Filter :</span> -->
                <div class="w-100 d-flex justify-content-between">
                    <div class="d-flex gap-3 flex-wrap">
                            <div class="form-group">
                                <label for="exampleFormControlSelect11">Select City</label>
                                <select v-on:change="onFilterChanged('city')" v-model="store.state.filter.city"
                                    class="form-control input-sm" id="exampleFormControlSelect1">
                                    <option value="" selected disabled>Choose City</option>
                                    <option value="all" selected>All</option>
                                    <option v-for="c in store.state.cities" :value="c">{{ c.name }}</option>
                                </select>
                            </div>
                            <div v-if="store.state.filter.city != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">Municipality</label>
                                <select v-on:change="onFilterChanged('municipality')" v-model="store.state.filter.municipality"
                                    class="form-control input-sm" id="exampleFormControlSelect1">
                                    <option value=""  disabled>Choose municipality</option>
                                    <option value="all" selected>All</option>
                                    <option v-for="c in store.state.municipalities" :value="c">{{ c.name }}</option>
                                </select>
                            </div>
                            <div v-if="store.state.filter.municipality != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">Barangay{{ store.state.filter.barangay.purok }}</label>
                                <select v-on:change="onFilterChanged('brgy')" v-model="store.state.filter.barangay"
                                    class="form-control" id="exampleFormControlSelect1">
                                    <option value="" disabled>Choose barangay</option>
                                    <option value="all" selected>All</option>      
                                    <option v-for="c in store.state.barangay" :value="c">{{ c.name }}</option>
                                </select>
                            </div>
                            <div v-if="store.state.filter.barangay != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">Purok</label>
                                <select v-on:change="onFilterChanged('purok')" v-model="store.state.purok" class="form-control"
                                    id="exampleFormControlSelect1">
                                    <option value="all" selected>All</option>
                                    <option v-for="c in Number(store.state.filter.barangay.purok)" :value="c">Purok {{ c }}</option>
                                </select>
                            </div>

                            <div v-if="store.state.filter.purok != 'all'" class="form-group">
                                <label for="exampleFormControlSelect1">House No.</label>
                                <select v-on:change="onFilterChanged('house_number')" v-model="store.state.filter.house_number"
                                    class="form-control" id="exampleFormControlSelect1">
                                    <option value="all" selected>All</option>
                                    <template v-for="house in store.state.houses2">
                                        <option :value="house">{{ house.house_number }}</option>
                                    </template>
                                </select>
                            </div>


                        </div>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-between mt-4">
                <div class="d-flex gap-3 flex-wrap">
                    <div class="form-group" style="min-width: 200px;">
                        <label class="mb-2">Show</label> <br>
                        <input v-on:change="onSelectAll" v-model="store.state.filter.show.all" checked type="checkbox"
                            id="purok-leader" class="me-2">
                        <label for="purok-leader">All</label> <br>
                        <input v-on:change="onFilterChanged" v-model="store.state.filter.show.leader" checked type="checkbox" id="purok-leader"
                            class="me-2">
                        <label for="purok-leader">Purok Leader</label> <br>
                        <input v-on:change="onFilterChanged" v-model="store.state.filter.show.right" checked type="checkbox" id="voter-right"
                            class="me-2">
                        <label for="voter-right">Right</label> <br>
                        <input v-on:change="onFilterChanged" v-model="store.state.filter.show.left" checked type="checkbox" id="voter-left" class="me-2">
                        <label for="voter-left">Left</label> <br>
                        <input v-on:change="onFilterChanged" v-model="store.state.filter.show.undecided" checked type="checkbox" id="voter-5050"
                            class="me-2">
                        <label for="voter-5050">50 / 50</label> <br>
                        <input v-on:change="onFilterChanged" v-model="store.state.filter.show.unmarked" checked type="checkbox" id="voter-unmarked"
                            class="me-2">
                        <label for="voter-unmarked">Unmarked</label> <br>
                        <input v-on:change="onFilterChanged" v-model="store.state.filter.show.house_head" type="checkbox" id="voter--family-head"
                            class="me-2">
                        <label for="voter-family-head">House Head Only</label>
                    </div>

                    <div class="form-group" style="min-width: 60px;">
                        <label for="exampleFormControlSelect1">Show</label>
                        <select v-on:change="onFilterChanged" v-model="store.state.filter.item_per_page" class="form-control">
                            <option value="10" selected>10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import $ from 'jquery'
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const isFilterShown = ref(false)

function onFilterCollapse() {
    var b = $('#btn-filter-collapse')
    if (isFilterShown.value) {
        isFilterShown.value = false
        $('#btn-filter-collapse i').addClass('fa-chevron-down')
        $('#btn-filter-collapse i').removeClass('fa-chevron-up')
    } else {
        isFilterShown.value = true
        $('#btn-filter-collapse i').removeClass('fa-chevron-down')
        $('#btn-filter-collapse i').addClass('fa-chevron-up')
    }
}

function onFilterChanged(t=""){
    store.dispatch("onVoterAddressFilterChanged", t)
}

function onSelectMinucipality() {
    store.dispatch("clearBrgySelected")
}
function onSelectBrgy() {
    store.dispatch("clearPurokSelected")
}
function onSelectPurok() {
    store.dispatch("clearHouseNoSelected")
}

function onSelectAll() {
    store.dispatch("onSelectAllFilter")
    store.dispatch("onVoterAddressFilterChanged")
}

</script>

<style scoped></style>