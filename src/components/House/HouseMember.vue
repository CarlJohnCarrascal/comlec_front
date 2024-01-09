<template>
    <div class="m-2">
    <div class="row m-2 mt-3 ms-0" >
        <div class="d-flex gap-2">
            <button class="btn btn-sm" v-on:click="$router.go(-1)"><i class="fa fa-chevron-left"></i></button>
            <h5 class="m-1">House Member</h5>
        </div>
    </div>
    <div v-if="store.getters.check_house_add_member" class="row m-0 mb-2">
        <div class="card px-0">
            <div class="card-header">
                <div class="w-100 d-flex gap-2 justify-content-end">
                    <button v-on:click="$router.push('/voters/members/add')" class="btn btn-sm btn-primary"><i class="fa fa-add me-2"></i> Add Member</button>
                    <!-- <button v-on:click="addNewMember" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addMemberModal"><i class="fa fa-add me-2"></i> Add Member</button> -->
                </div>
            </div>
        </div>
    </div>
    <div v-if="store.getters.check_house_add_member" class="row m-0 mb-2">
        <div class="card px-0">
            <div class="card-header">
                <span>House: {{ 
                                store.state.house_filter.city 
                                + ', ' + store.state.house_filter.municipality
                                + ', ' + store.state.house_filter.barangay
                                + ', Purok ' + store.state.house_filter.purok
                                + ', House No. ' + store.state.house_filter.house_number
                            }}
                </span>
            </div>
        </div>
    </div>
    <div v-else class="row text-center">
        <h5 class="text-danger">
            Please select location first!
        </h5>
    </div>
    <div v-if="store.getters.check_house_add_member" class="row m-0">
        <div class="card p-2">
            <div class="table-responsive">
                <table class="table caption-top px-2">
                    <thead class=" border">
                        <tr class="" style="font-size: small;">
                            <th scope="col">
                                <input type="checkbox" class="select-all" v-on:change="onSelectAll">
                            </th>
                            <th class="text-start" scope="col">Name</th>
                            <th scope="col"></th>
                            <th scope="col" class="text-end"></th>
                        </tr>
                    </thead>
                    <tbody class=" border">
                        <tr class="voters-item" v-for="(record, i = 1) in store.getters.get_house_member"
                            :itemid="record.house_number" :ischeck="record.check.toString()">
                            <td class="input">
                                <input v-model="record.check" class="voters-check" type="checkbox" :id="'voters-' + i"
                                    :data-id="record.house_number">
                            </td>
                            <th class="text-start" scope="row">{{ record.fname + ' ' + record.mname + ' ' + record.lname }}</th>
                            <td v-if="record.isHead"><span>House Head</span></td>
                            <td v-else></td>
                            <td class="" style="min-width: 200px;">
                                <div class="item-action d-flex gap-1 justify-content-end">
                                    <button v-if="!record.isHead" type="button" class="btn btn-sm btn-primary me-3">Mark as Head</button> 
                                    <button type="button" class="btn btn-sm btn-info">View</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- add member modal -->
    <AddMember />
</div>
</template>
<script setup>
import AddMember from './AddMember.vue'
import { useStore } from 'vuex';
const store = useStore()
</script>
<style scoped></style>