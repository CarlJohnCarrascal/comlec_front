<template>
    <div class="m-2">
        <div class="row m-2 mt-3 ms-0">
            <h5>Houses</h5>
        </div>
        <div class="row m-0 mb-2">
            <div class="card px-0">
                <div class="card-header">
                    <div class="w-100 d-flex gap-2 justify-content-end">
                        <button v-on:click="$router.push('/house/new')" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-add me-2"></i> New House</button>
                        <!-- <button v-on:click="addNewMember" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addMemberModal"><i class="fa fa-add me-2"></i> Add Member</button> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-0 mb-2">
            <div class="card px-0">
                <div class="card-header">
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item fw-bold"><a>Choose location</a></li>
                        <li class="breadcrumb-item fw-bold">
                            <select v-model="store.state.house_filter.city">
                                <option value="" selected disabled>Choose City</option>
                                <option v-for="c in store.getters.get_city" :value="c">{{ c }}</option>
                            </select>
                        </li>
                        <li v-if="store.state.house_filter.city != ''" class="breadcrumb-item fw-bold">
                            <select v-model="store.state.house_filter.municipality">
                                <option value="" selected disabled>Choose Municipality</option>
                                <option v-for="c in store.getters.get_municipality_houses" :value="c">{{ c }}</option>
                            </select>
                        </li>
                        <li v-if="store.state.house_filter.municipality != ''" class="breadcrumb-item fw-bold">
                            <select v-model="store.state.house_filter.barangay">
                                <option value="" selected disabled>Choose Barangay</option>
                                <option v-for="c in store.getters.get_brgy_houses" :value="c">{{ c }}</option>
                            </select>
                        </li>
                        <li v-if="store.state.house_filter.barangay != ''" class="breadcrumb-item fw-bold">
                            <select v-model="store.state.house_filter.purok">
                                <option value="" selected disabled>Choose Purok</option>
                                <option v-for="c in store.getters.get_purok_houses" :value="c">Purok {{ c }}</option>
                            </select>
                        </li>
                    </ol>
                </nav>
                </div>
            </div>
        </div>

        <div class="row m-0">
            <div class="card p-2">
                <div class="table-responsive">
                    <table class="table caption-top px-2">
                        <thead class=" border">
                            <tr class="" style="font-size: small;">
                                <th scope="col">
                                    <input type="checkbox" class="select-all" v-model="selectedAll" v-on:change="onSelectAll">
                                </th>
                                <th class="text-center" scope="col">House No.</th>
                                <th scope="col">Family Head</th>
                                <th class="text-center" scope="col">Member</th>
                                <th scope="col" class="text-end"></th>
                            </tr>
                        </thead>
                        <tbody class=" border">
                            <tr class="voters-item" v-for="(record, i = 1) in store.getters.get_house_houses" :itemid="record.hn" :ischeck="record.check.toString()">
                                <td class="input">
                                    <input v-model="record.check" class="voters-check" type="checkbox" :id="'voters-' + i" :data-id="record.hn">
                                </td>
                                <th class="text-center" scope="row">{{ record.hn }}</th>
                                <td>{{ record.hh }}</td>
                                <td class="text-center">{{ record.hm }}</td>
                                <td class="" style="min-width: 200px;">
                                    <div class="item-action d-flex gap-1 justify-content-end">
                                        <button v-on:click="$router.push('/house/member'), store.dispatch('setSelectedHouse', record.hn)" type="button" class="btn btn-sm btn-info">View</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="d-nones py-2" v-if="store.getters.get_house_houses.length <= 0">
                                <td colspan="15" class="text-center fw-bold py-2" style="font-size: xx-small;">No Record Found</td>
                            </tr>
                            <tr class="border-none">
                                <td></td>
                                <!-- <th colspan="1">{{ store.getters.get_imported_voters.length }}</th> -->
                                <td colspan="11" class="text-end">
                                    <div class="row m-0 p-0">
                                        <nav aria-label="Page navigation example" class="text-end mt-2">
                                        <ul class="pagination pagination-sm float-end mb-2">
                                            <li class="page-item">
                                                <a class="page-link" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <!-- <span class="sr-only">Previous</span> -->
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link">1</a></li>
                                            <li class="page-item">
                                                <a class="page-link" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <!-- <span class="sr-only">Next</span> -->
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    </div>
                                    <div class="row d-flex justify-content-end m-0 p-0 text-muted d-none">
                                        <span style="color: #0d6efd;">of 12</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import $ from 'jquery'
import { useStore } from 'vuex';

const store = useStore()

const selectedAll = ref(false)
const markType = ref("")


function loadEvent(){
    $('tr.voters-item td, tr.voters-item th').off("click")
    $('tr.voters-item td, tr.voters-item th').on("click",function () {
        console.log($(this).parent().attr('itemid'))
    })
}

function onChooseFile() {
    $('#import-file').click()
}


function onSelectAll(){
    let data = {
        check: selectedAll.value,
        voters: store.getters.get_imported_voters
    }
    store.dispatch("selectAllVoters2", data)
}

function onConfirmMarkVoters(type = ""){
    let data = {
        type: type,
        voters: store.getters.get_imported_voters.filter(v=>v.check)
    }
    store.dispatch("markVoters2", data)
}

function onConfirmMarkVoters2(type, voter){
    let data = {
        type: type,
        id: voter
    }
    store.dispatch("markVoters22", data)
}

function addNewHouse(){
    store.dispatch("addNewHouse")
}


</script>

<style scoped>
tbody tr td {
    padding: .1rem .5rem;
    vertical-align: middle;
    font-size: small;
}
tr td{
    cursor: pointer;
}
.voters-item td,.voters-item th {
    background-color: transparent;
}

tr[ischeck="true"]{
    background-color: rgb(196, 196, 196);
}

button {
    min-width: 150px;
}
td button {
    min-width: auto;
}

select {
    height: auto;
}
</style>