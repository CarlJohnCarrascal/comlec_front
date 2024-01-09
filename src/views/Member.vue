<template>
    <div class="p-2">
        <div v-if="store.state.filter.view_member_id" class="row m-1">
            <div class="card p-2 fw-bold">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item active" aria-current="page">
                            {{ store.state.filter.view_member_id.municipality }}</li>
                        <li class="breadcrumb-item active" aria-current="page">
                            {{ store.state.filter.view_member_id.barangay }}</li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Purok {{ store.state.filter.view_member_id.purok }}</li>
                        <li class="breadcrumb-item active"
                            aria-current="page">House No. {{ store.state.filter.view_member_id.house_number }}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div v-else class="row text-center mt-5 text-muted">
            <span class="" style="font-size:xx-large;">No Record</span>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()
</script>

<style scoped></style>