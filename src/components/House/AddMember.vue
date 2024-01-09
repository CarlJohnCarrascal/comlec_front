<template>
    <div class="modal fade" id="addMemberModal" tabindex="-1" aria-labelledby="addNewMember" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="addNewMember">Add New Member</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="!store.getters.check_house_add_member" class="row text-center">
                        <h5 class="text-danger">
                            Please select location first!
                        </h5>
                    </div>
                    <div v-else class="row m-0">
                        <div class="mb-3 row pe-0">
                            <label class="col col-form-label">Address</label>
                            <div class="col-sm-8">
                                <input type="text" readonly class="form-control-plaintext" :value="
                                store.state.house_filter.city 
                                + ', ' + store.state.house_filter.municipality
                                + ', ' + store.state.house_filter.barangay
                                + ', Purok ' + store.state.house_filter.purok
                                ">
                            </div>
                        </div>
                        <div class="mb-3 row pe-0">
                            <label for="inputHouseNumber" class="col col-form-label">House Number</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control-plaintext" id="inputHouseNumber" :value="store.state.house_filter.house_number">
                            </div>
                        </div>
                        <div class="mb-3 row pe-0">
                            <label for="inputFirstname" class="col col-form-label">First Name</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputFirstname">
                            </div>
                        </div>
                        <div class="mb-3 row pe-0">
                            <label for="inputMiddlename" class="col col-form-label">Middle Name</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputMiddlename">
                            </div>
                        </div>
                        <div class="mb-3 row pe-0">
                            <label for="inputLastname" class="col col-form-label">Last Name</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputLastname">
                            </div>
                        </div>
                        <div class="mb-3 row pe-0">
                            <label for="inputSuffix" class="col col-form-label">Suffix</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputSuffix">
                            </div>
                        </div>
                        <div class="mb-3 row pe-0">
                            <label for="inputBirthdate" class="col col-form-label">Birth Date</label>
                            <div class="col-sm-8">
                                <input type="date" class="form-control" id="inputBirthdate">
                            </div>
                        </div>
                        <div class="mb-3 row pe-0">
                            <label for="inputGender" class="col col-form-label">Gender</label>
                            <div class="col-sm-8">
                                <select class="form-control" id="inputGender">
                                <option value="" selected disabled>Choose Gender</option>
                                <option value="" >Male</option>
                                <option value="" >Female</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore()
</script>
<style scoped>
</style>