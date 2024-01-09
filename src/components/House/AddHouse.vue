<template>
    <div class="row m-2">
        <div class="row m-2 mt-3 ms-0">
            <div class="d-flex gap-2">
                <button class="btn btn-sm" v-on:click="$router.go(-1)"><i class="fa fa-chevron-left"></i></button>

                <h5 class="m-1">Add New House</h5>
            </div>
        </div>
        <div class="row m-0 mb-2">
            <div class="card p-2">
                <div class="mb-3 row pe-0 mx-2 mt-2">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <label for="inputCity" class="col col-form-label">City</label>
                        <div class="col">
                            <select v-model="store.state.new_house.city" class="form-control" id="inputCity">
                                <option value="" selected disabled>Choose City</option>
                                <option v-for="c in store.getters.get_city" :value="c">{{ c }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <label for="inputMunicipal" class="col col-form-label">Municipality</label>
                        <div class="col">
                            <select v-model="store.state.new_house.municipality" class="form-control" id="inputMunicipal">
                                <option value="" selected disabled>Choose Municipality</option>
                                <option v-for="c in store.getters.get_municipality_2(store.state.new_house.city)" :value="c">{{ c }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <label for="inputBarangay" class="col col-form-label">Barangay</label>
                        <div class="col">
                            <select v-model="store.state.new_house.barangay" class="form-control" id="inputBarangay">
                                <option value="" selected disabled>Choose Barangay</option>
                                <option v-for="c in store.getters.get_barangay_2(store.state.new_house.city, store.state.new_house.municipality)" :value="c">{{ c }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <label for="inputPurok" class="col col-form-label">Purok</label>
                        <div class="col">
                            <select v-model="store.state.new_house.purok" class="form-control" id="inputPurok">
                                <option value="" selected disabled>Choose Purok</option>
                                <option v-for="c in store.getters.get_purok_2(store.state.new_house.city, store.state.new_house.municipality, store.state.new_house.barangay)" :value="c">{{ c }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="mb-3 row pe-0 ms-2 mt-2">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <label for="inputHouseNumber" class="col col-form-label">House Number</label>
                        <div class="col">
                            <input type="number" class="form-control" id="inputHouseNumber">
                        </div>
                    </div>
                </div>

                <div class="mb-3 row mx-2 mt-2">
                    <button class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<style scoped></style>