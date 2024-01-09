<template>
    <div class="m-2">
        <div class="row m-2 mt-3 ms-0">
            <div class="d-flex gap-2">
                <button class="btn btn-sm" v-on:click="$router.go(-1)"><i class="fa fa-chevron-left"></i></button>
                <h5 class="m-1">Add Member</h5>
            </div>
        </div>
        <div v-if="store.getters.check_house_add_member" class="row m-0 mb-2">
        </div>
        <div v-else class="row text-center">
            <h5 class="text-danger">
                Please select location first!
            </h5>
        </div>
        <div v-if="store.getters.check_house_add_member" class="row m-0">
            <div class="card p-2">
                <div class="row m-0">
                    <div class="mb-3 row pe-0">
                        <label class="col col-form-label">Address</label>
                        <div class="col-sm-8">
                            <input type="text" readonly class="form-control-plaintext" :value="store.state.house_filter.city
                                + ', ' + store.state.house_filter.municipality
                                + ', ' + store.state.house_filter.barangay
                                + ', Purok ' + store.state.house_filter.purok
                                ">
                        </div>
                    </div>
                    <div class="mb-3 row pe-0">
                        <label for="inputHouseNumber" class="col col-form-label">House Number</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control-plaintext" id="inputHouseNumber"
                                :value="store.state.house_filter.house_number">
                        </div>
                    </div>
                    <div class="mb-3 row pe-0">
                        <label for="inputFirstname" class="col col-form-label">First Name</label>
                        <div class="col-sm-8">
                            <input v-model="data.firstname" type="text" class="form-control" id="inputFirstname">
                        </div>
                    </div>
                    <div class="mb-3 row pe-0">
                        <label for="inputMiddlename" class="col col-form-label">Middle Name</label>
                        <div class="col-sm-8">
                            <input v-model="data.middlename" type="text" class="form-control" id="inputMiddlename">
                        </div>
                    </div>
                    <div class="mb-3 row pe-0">
                        <label for="inputLastname" class="col col-form-label">Last Name</label>
                        <div class="col-sm-8">
                            <input v-model="data.lastname" type="text" class="form-control" id="inputLastname">
                        </div>
                    </div>
                    <div class="mb-3 row pe-0">
                        <label for="inputSuffix" class="col col-form-label">Suffix</label>
                        <div class="col-sm-8">
                            <input v-model="data.suffix" type="text" class="form-control" id="inputSuffix">
                        </div>
                    </div>
                    <div class="mb-3 row pe-0">
                        <label for="inputBirthdate" class="col col-form-label">Birth Date</label>
                        <div class="col-sm-8">
                            <input v-model="data.birthdate" type="date" class="form-control" id="inputBirthdate">
                        </div>
                    </div>
                    <div class="mb-3 row pe-0">
                        <label for="inputGender" class="col col-form-label">Gender</label>
                        <div class="col-sm-8">
                            <select v-model="data.gender" class="form-control" id="inputGender">
                                <option value="" selected disabled>Choose Gender</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card p-2 mt-2">
                <div class="d-flex gap-2 justify-content-end">
                    <button v-on:click="$router.go(-1)" type="button" class="btn btn-secondary">Go Back</button>
                    <button v-on:click="save" type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>

        <!-- add member modal -->
        <!-- <AddMember /> -->
    </div>
</template>
<script setup>
// import AddMember from './AddMember.vue'
import { useStore, ref } from 'vuex';
const store = useStore()

const data = ref({
    firstname: "",
    middlename: "",
    lastname: "",
    suffix: "",
    birthdate: "",
    gender: ""
})

function save() {
    if(!data.value.firstname) return
    if(!data.value.firstname) return
    if(!data.value.lastname) return
    if(!data.value.gender) return
    if(!data.value.birthdate) return
    store.dispatch("AddNewMember", data)
}

</script>
<style scoped></style>