<template>
    <div class="m-2">
        <div class="row m-0 mb-2 d-none">
            <div class="card p-2">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item fw-bold"><a>Import Data</a></li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row m-0 mb-2">
            <div class="card px-0">
                <div class="card-header">
                    <div class="w-100 d-flex gap-2 justify-content-end">
                        <!-- <button class="btn btn-sm btn-primary"><i class="fa fa-add me-2"></i> Add</button> -->
                        <button v-on:click="onChooseFile" class="btn btn-sm btn-secondary"><i class="fa fa-upload me-2"></i>
                            Import CSV</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-0 mb-2">
            <FilterView />
        </div>
        <div class="row m-0">
            <div class="card p-2">
                <div class="table-responsive">
                    <table class="table caption-top px-2">
                        <caption class="pt-0 m-2 pb-0 d-none">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0">
                                    <li v-if="store.state.filter2.city != 'all'" class="breadcrumb-item active" aria-current="page">{{store.state.filter2.city}}</li>
                                    <li v-if="store.state.filter2.municipality !== 'all'" class="breadcrumb-item active" aria-current="page">{{store.state.filter2.municipality}}</li>
                                    <li v-if="store.state.filter2.barangay != 'all'" class="breadcrumb-item active" aria-current="page">{{store.state.filter2.barangay}}</li>
                                    <li v-if="store.state.filter2.purok != 'all'" class="breadcrumb-item active" aria-current="page">Purok {{store.state.filter2.purok}}</li>
                                </ol>
                            </nav>
                        </caption>
                        <thead>
                            <tr class="" style="font-size: small;">
                                <th colspan="13">
                                    <div class="d-flex justify-content-between gap-1 form-group mb-1">
                                        <input v-model="store.state.filter2.search" type="text" class="form-control"
                                            placeholder="Search first, last or middle name"
                                            style="height: 31px; min-width: 100px; max-width: 500px;">
                                        <!-- <a class="btn btn-sm btn-secondary"  style="height: 32px;">Search</a> -->
                                    </div>
                                    <div class="d-flex justify-content-start gap-1 form-group ">
                                        <button v-on:click="onConfirmMarkVoters('leader')" class="btn btn-sm btn-primary">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Leader
                                        </button>
                                        <button v-on:click="onConfirmMarkVoters('right')" class="btn btn-sm btn-success">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Right
                                        </button>
                                        <button v-on:click="onConfirmMarkVoters('left')" class="btn btn-sm btn-danger">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Left
                                        </button>
                                        <button v-on:click="onConfirmMarkVoters('undecided')" class="btn btn-sm btn-info">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark 50/50
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <thead class=" border">
                            <tr class="" style="font-size: small;">
                                <th scope="col">
                                    <input type="checkbox" class="select-all" v-model="selectedAll" v-on:change="onSelectAll">
                                </th>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Middle Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col" class="d-none">Municipality</th>
                                <th scope="col" class="d-none">Barangay</th>
                                <th scope="col">Purok</th>
                                <th scope="col" class="text-center">House No.</th>
                                <th scope="col"></th>
                                <th scope="col">Status</th>
                                <th scope="col">Mark</th>
                                <th scope="col" class="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody class=" border">
                            <tr class="voters-item" v-for="(record, i = 1) in store.getters.get_imported_voters" :itemid="record.id" :ischeck="record.check.toString()">
                                <td class="input">
                                    <input v-model="record.check" class="voters-check" type="checkbox" :id="'voters-' + i" :data-id="record.id">
                                </td>
                                <th scope="row">{{ i + 1 }}</th>
                                <td>{{ record.fname }}</td>
                                <td>{{ record.mname }}</td>
                                <td>{{ record.lname }}</td>
                                <td class="d-none">{{ record.municipality }}</td>
                                <td class="d-none">{{ record.barangay }}</td>
                                <td>{{ record.purok }}</td>
                                <td class="text-center">{{ record.house_number }}</td>
                                <td class="fs-8 text-nowrap" style="font-size: xx-small;">
                                    <span v-if="record.isHead">House Head</span>
                                </td>
                                <td></td>
                                <td>{{ record.mark}}</td>
                                <td class="" style="min-width: 200px;">
                                    <div class="item-action d-flex gap-1 justify-content-end">
                                        <button type="button" class="btn btn-sm btn-info">Member's</button>
                                        <div class="dropdown">
                                            <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Mark
                                            </button>
                                            <ul class="dropdown-menu py-0">
                                                <li><a v-on:click="onConfirmMarkVoters2('leader',record.id)" class="dropdown-item bg-primary1" >Leader</a></li>
                                                <li><a v-on:click="onConfirmMarkVoters2('right',record.id)" class="dropdown-item bg-success1">Right</a></li>
                                                <li><a v-on:click="onConfirmMarkVoters2('left',record.id)" class="dropdown-item bg-danger1" >Left</a></li>
                                                <li><a v-on:click="onConfirmMarkVoters2('undecided',record.id)" class="dropdown-item bg-info1">50/50</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="d-nones py-2" v-if="store.getters.get_imported_voters.length <= 0">
                                <td colspan="15" class="text-center fw-bold py-2" style="font-size: xx-small;">No Record Found</td>
                            </tr>
                            <tr class="border-none">
                                <td colspan="5"> Showing {{ store.state.filter2.showing }} of 
                                    <span class="fw-bolds">{{ store.state.filter2.total_item }} </span> 
                                    item, 
                                    <span v-if="store.state.filter2.total_item > 0" class="fw-bolds">{{ store.state.filter2.total_page }} </span>
                                    <span v-else class="fw-bolds">0 </span>
                                    page's 
                                </td>
                                <td colspan="20" class="text-end">
                                    <div class="row m-0 p-0">
                                        <nav aria-label="Page navigation example" class="text-end mt-2">
                                        <ul class="pagination pagination-sm float-end mb-2">
                                            <li class="page-item">
                                                <a v-on:click="store.dispatch('nextPage2', -1)" v-if="store.state.filter2.current_page > 1" class="page-link" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <!-- <span class="sr-only">Previous</span> -->
                                                </a>
                                                <a v-else class="page-link disabled" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <!-- <span class="sr-only">Next</span> -->
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link">{{ store.state.filter2.current_page }} </a></li>
                                            <li class="page-item">
                                                <a v-on:click="store.dispatch('nextPage2', 1)" v-if="store.state.filter2.current_page < store.state.filter2.total_page" class="page-link" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <!-- <span class="sr-only">Next</span> -->
                                                </a>
                                                <a v-else class="page-link disabled" aria-label="Next">
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
        <input class="d-none" type="file" name="importFile" id="import-file" accept=".csv">
    </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import $ from 'jquery'
import csv from 'jquery-csv'
import { useStore } from 'vuex';
import FilterView from '../components/List/Filter2.vue';

const store = useStore()

const selectedAll = ref(false)
const markType = ref("")

onMounted(() => {
    $('input[type=file]').change(function () {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            console.log('The File APIs are not fully supported in this browser.');
            return;
        }

        if (!this.files) {
            console.log("This browser doesn't seem to support the `files` property of file inputs.");
        } else if (!this.files[0]) {
            console.log("No file selected.");
        } else {
            let file = this.files[0];
            let fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(file);

            function receivedText() {
                // Do additional processing here
                let l = csv.toObjects(fr.result);
                console.log(l);
                store.dispatch("setImportedVoters", l)
                this.value = "";
            }
        }
    });

    $(document).on("change", "input[type='checkbox']", function() {
        if(!this.checked && !$(this).hasClass("select-all")) {
            selectedAll.value = false
        }
    });
    loadEvent()
})

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

select option {
    max-height: 300px;
}
</style>