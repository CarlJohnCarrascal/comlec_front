<template>
    <div class="w-100" style="min-height: 300px;">
        <Bar class="w-100" id="my-bar-chart-id" 
        :data="store.state.report_filter.chart.bar.data" 
        :options="store.state.report_filter.chart.bar.options" />
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const store = useStore()

const chartData = ref({
    labels: ["Barangay 1", "Barangay 1", "Barangay 1", "Barangay 1"],
    datasets: [
        { data: [40, 20, 10, 40], backgroundColor: 'lime', label: 'Right'},
        { data: [10, 30, 60, 40], backgroundColor: 'red', label: 'Left'},
        { data: [20, 20, 0, 5], backgroundColor: 'gray', label: 'Undicided'}
    ]
})
const chartOption = {
    responsive: true
}

computed(()=>{

})

</script>

<style scoped>

</style>