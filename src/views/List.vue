<template>
    <div class="m-2">
        <div class="row m-0 mb-2 d-none">
            <div class="card p-2">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item fw-bold"><a >Voters</a></li>
                </ol>
            </nav>
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
                                    <li v-if="store.state.filter.municipality != 'all'" class="breadcrumb-item active" aria-current="page">{{store.state.filter.municipality}}</li>
                                    <li v-if="store.state.filter.barangay != 'all'" class="breadcrumb-item active" aria-current="page">{{store.state.filter.barangay}}</li>
                                    <li v-if="store.state.filter.purok != 'all'" class="breadcrumb-item active" aria-current="page">Purok {{store.state.filter.purok}}</li>
                                    <li v-if="store.state.filter.house_number != 'all'" class="breadcrumb-item active" aria-current="page">House No. {{store.state.filter.house_number}}</li>
                                </ol>
                            </nav>
                        </caption>
                        <thead>
                            <tr class="" style="font-size: small;">
                                <th colspan="13">

                                    <div class="d-flex justify-content-between gap-1 form-group mb-1">
                                       
                                        <input v-model="store.state.filter.search" type="text" class="form-control"
                                            placeholder="Search first, last or middle name"
                                            style="height: 31px; min-width: 100px; max-width: 500px;">
                                        <!-- <a class="btn btn-sm btn-secondary"  style="height: 32px;">Search</a> -->
                                    </div>
                                    <div class="d-flex justify-content-start gap-1 form-group ">
                                        <button v-on:click="onMarkVoters('leader')"  data-bs-toggle="modal" data-bs-target="#confirm-mark-modal" class="btn btn-sm btn-primary">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Leader
                                        </button>
                                        <button v-on:click="onMarkVoters('right')"  data-bs-toggle="modal" data-bs-target="#confirm-mark-modal"  class="btn btn-sm btn-success">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Right
                                        </button>
                                        <button v-on:click="onMarkVoters('left')"  data-bs-toggle="modal" data-bs-target="#confirm-mark-modal"  class="btn btn-sm btn-danger">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Left
                                        </button>
                                        
                                        <button v-on:click="onMarkVoters('undecided')"  data-bs-toggle="modal" data-bs-target="#confirm-mark-modal"  class="btn btn-sm btn-info">
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
                                <th scope="col"><span v-if="store.state.filter.city == 'all'">City</span></th>
                                <th scope="col"><span v-if="store.state.filter.municipality == 'all'">Municipality</span></th>
                                <th scope="col"><span v-if="store.state.filter.barangay == 'all'">Barangay</span></th>
                                <th scope="col"><span v-if="store.state.filter.purok == 'all'">Purok</span></th>
                                <th scope="col" class="text-center"><span v-if="store.state.filter.house_number == 'all'">House No.</span></th>
                                <th scope="col"></th>
                                <th scope="col">Status</th>
                                <th scope="col">Mark</th>
                                <th scope="col" class="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody class=" border">
                            <tr v-for="(record, i = 1) in store.state.voters2.data">
                                <td>
                                    <input v-model="record.check" class="voters-check" type="checkbox" :id="'voters-' + i" :data-id="record.id">
                                </td>
                                <th :for="'voters-'+ i" scope="row">{{ i + 1 }}</th>
                                <td><label class="w-100" :for="'voters-'+ i">{{ record.fname }}</label></td>
                                <td><label class="w-100" :for="'voters-'+ i">{{ record.mname }}</label></td>
                                <td><label class="w-100" :for="'voters-'+ i">{{ record.lname }}</label></td>
                                <td><label v-if="store.state.filter.city == 'all'" class="w-100 " :for="'voters-'+ i">{{ record.city }}</label></td>
                                <td><label v-if="store.state.filter.municipality == 'all'" class="w-100 " :for="'voters-'+ i">{{ record.municipality }}</label></td>
                                <td><label v-if="store.state.filter.barangay == 'all'" class="w-100 " :for="'voters-'+ i">{{ record.barangay }}</label></td>
                                <td><label v-if="store.state.filter.purok == 'all'" class="w-100" :for="'voters-'+ i">{{ record.purok }}</label></td>
                                <td class="text-center"><label v-if="store.state.filter.house_number == 'all'" class="w-100" :for="'voters-'+ i">{{ record.house_number }}</label></td>
                                <td class="fs-8 text-nowrap" style="font-size: xx-small;"><label v-if="record.isHead" class="w-100" :for="'voters-'+ i">House Head</label></td>
                                <td><label class="w-100" :for="'voters-'+ i"></label></td>
                                <td><label class="w-100" :for="'voters-'+ i">{{ record.mark}}</label></td>
                                <td class="" style="min-width: 200px;">
                                    <div class="d-flex gap-1 justify-content-end">
                                        <button v-on:click="$router.push('/house/member'), store.dispatch('setSelectedHouse', record.house_number)" type="button" class="btn btn-sm btn-info">View</button>
                                        <!-- <button type="button" v-on:click="showMember(record)" class="btn btn-sm btn-info">Member's</button> -->
                                        <div class="dropdown">
                                            <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Mark
                                            </button>
                                            <ul class="dropdown-menu py-0">
                                                <li><a v-on:click="onConfirmMarkVoters2('leader',record)" class="dropdown-item bg-primary1" href="#">Leader</a></li>
                                                <li><a v-on:click="onConfirmMarkVoters2('right',record)" class="dropdown-item bg-success1" href="#">Right</a></li>
                                                <li><a v-on:click="onConfirmMarkVoters2('left',record)" class="dropdown-item bg-danger1" href="#">Left</a></li>
                                                <li><a v-on:click="onConfirmMarkVoters2('undecided',record)" class="dropdown-item bg-info1" href="#">50/50</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="d-nones py-2" v-if="store.state.voters2.total <= 0">
                                <td colspan="15" class="text-center fw-bold py-2" style="font-size: xx-small;">No Record Found</td>
                            </tr>
                            <tr  v-if="store.state.voters2.from" class="border-none user-select-none" role="button">
                                <td colspan="5"> Showing {{ store.state.voters2.from + '-' + store.state.voters2.to }} of 
                                    <span class="fw-bolds">{{ store.state.voters2.total }} </span> 
                                    item, 
                                    <span v-if="store.state.voters2.total > 0" class="fw-bolds">{{ store.state.voters2.last_page }} </span>
                                    <span v-else class="fw-bolds">0 </span>
                                    page's 
                                </td>
                                <td colspan="20" class="text-end">
                                    <div class="row m-0 p-0">
                                        <nav aria-label="Page navigation example" class="text-end mt-2">
                                        <ul class="pagination pagination-sm float-end mb-2">
                                            <template v-for="link in store.state.voters2.links">
                                                <li v-if="link.url == null" class="page-item">
                                                    <a v-if="link.label == '...'" class="page-link disabled">
                                                        <span aria-hidden="true">{{ link.label }}</span>
                                                    </a>
                                                    <a v-if="link.label.includes('Previous')" class="page-link disabled">
                                                        <span aria-hidden="true">Previous</span>
                                                    </a>
                                                    <a v-if="link.label.includes('Next')" class="page-link disabled">
                                                        <span aria-hidden="true">Previous</span>
                                                    </a>
                                                </li>
                                                <li v-else class="page-item">
                                                    <template v-if="link.label.includes('Previous')">
                                                        <a v-on:click="store.dispatch('nextPage', link.url)" class="page-link">
                                                            <span aria-hidden="true">Previous</span>
                                                        </a>
                                                    </template>
                                                    <template v-else-if="link.label.includes('Next')">
                                                        <a v-on:click="store.dispatch('nextPage', link.url)" class="page-link">
                                                            <span aria-hidden="true">Next</span>
                                                        </a>
                                                    </template>
                                                    <template v-else>
                                                        <a v-if="link.active" v-on:click="store.dispatch('nextPage', link.url)" class="page-link active">
                                                            <span aria-hidden="true">{{ link.label }}</span>
                                                        </a>
                                                        <a v-else v-on:click="store.dispatch('nextPage', link.url)" class="page-link">
                                                            <span aria-hidden="true">{{ link.label }}</span>
                                                        </a>
                                                    </template>
                                                </li>
                                            </template>
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
        <!-- Modals -->
        <div class="modal fade" tabindex="-1" id="confirm-mark-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Mark as {{ markType.toString().toUpperCase() }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="min-width: auto;"></button>
                </div>
                <div class="modal-body overflow-auto" style="max-height: 200px;">
                    <p>Please click confirm to mark: </p>
                    <p class="mb-1" v-for="sv in store.getters.get_voters">{{ sv.fname + " " + sv.mname + " " + sv.lname }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="onConfirmMarkVoters" type="button" class="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
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
import FilterView from './../components/List/Filter.vue'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const selectedAll = ref(false)
const markType = ref("")

onMounted(()=>{
    $(document).on("change", "input[type='checkbox']", function() {
        if(this.checked && !$(this).hasClass("select-all")){
            $(this).parent().parent().children().addClass("selected")
        }
        else if(!this.checked && !$(this).hasClass("select-all")) {
            $(this).parent().parent().children().removeClass("selected")
            selectedAll.value = false
        }
    });
})



function onSelectAll(){
    let data = {
        check: selectedAll.value,
        voters: store.getters.get_voters
    }
    store.dispatch("selectAllVoters", data)
    if(selectedAll.value) {
        $('.voters-check:checkbox').each(function () {
            this.checked = true
            $(this).parent().parent().children().addClass("selected")
        });
    }
    else {
        $('.voters-check:checkbox').each(function () {
            this.checked = false
            $(this).parent().parent().children().removeClass("selected")
        });
    }
}

function onMarkVoters(type){
    markType.value = type
}
function onConfirmMarkVoters(){
    let data = {
        type: markType.value,
        voters: store.getters.get_voters.filter(v=>v.check)
    }
    store.dispatch("markVoters", data)
}

function onConfirmMarkVoters2(type,voter){
    let data = {
        type: type,
        voters: []
    }
    data.voters.push(voter)
    store.dispatch("markVoters", data)
}

function showMember(hn){
    store.dispatch("setSelectedHouseNumber", hn)
    router.push('/voters/members')
}


</script>

<style scoped>
tbody tr td {
    padding: .1rem .5rem;
    vertical-align: middle;
    font-size: small;
}
tr td label{
    cursor: pointer;
}

button {
    min-width: 150px;
}
td button {
    min-width: auto;
}

.selected {
    background-color: rgb(218, 218, 218);
}
.selected td {
    border: none;
}

select option {
    max-height: 300px;
}

</style>