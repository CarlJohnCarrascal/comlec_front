import { createStore } from 'vuex'
import axios from 'axios'

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie2('token');
axios.defaults.headers.common['Content-Type'] = 'application/json';
let hostname = location.origin + "/api/";
hostname = "http://127.0.0.1:8000/api/";

axios.defaults.baseURL = hostname;
const store = createStore({
    state: {
        forms: {
            voters: {
                city: "", municipality: "", barangay: "", purok: "",
                house_number: "", fname: "", mname: "", lname: "", suffix: "",
                birthdate: null, gender: "", status: "", mark: "undecided",
                ishead: false
            }
        },
        filter: {
            city: "all",
            municipality: "all",
            barangay: "all",
            purok: "all",
            house_number: "all",
            total_page: 1,
            current_page: 1,
            total_item: 1,
            search: "",
            view_member_id: "",
            item_per_page: 10,
            showing: "1 - 10",
            show: {
                all: true,
                leader: true,
                right: true,
                left: true,
                undecided: true,
                house_head: false
            },
        },
        filter2: {
            city: "all",
            municipality: "all",
            barangay: "all",
            purok: "all",
            house_number: "all",
            total_page: 1,
            current_page: 1,
            total_item: 1,
            search: "",
            item_per_page: 10,
            showing: "1 - 10",
            show: {
                all: true,
                leader: true,
                right: true,
                left: true,
                undecided: true,
                house_head: false
            },
            page: {
                prev: false,
                current: true, 
                next: false,
                total_item: 0,
                current_page_number: 1,
                max_page_number: 1,
                item_per_page: 20
            }
        },
        voters: [],
        imported_voters: [],
        city: ["Sorsogon"],
        municipalities: [
            {
                name:"Bacon",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Barcelona",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Bulan",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Bulusan",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Irosin",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
        ],
        houses: [],
        house_filter: {
            city: "",
            municipality: "",
            barangay: "",
            purok: "",
            house_number: "",
            total_page: 1,
            current_page: 1,
            total_item: 1,
            search: "",
            view_member_id: "",
        },
        new_house: {
            city: "",
            municipality: "",
            barangay: "",
            purok: "",
            house_number: ""
        },
        report_filter: {
            city: "all",
            municipality: "all",
            barangay: "all",
            purok: "all",
            chart: {
                total: {
                    voters: 0,
                    leader: 0,
                    right: 0,
                    left: 0,
                    undecided: 0,
                    unmarked: 0
                },
                bar: {
                    data: {
                        labels: [],
                        datasets: [
                            { data: [], backgroundColor: 'lime', label: 'Right'},
                            { data: [], backgroundColor: 'red', label: 'Left'},
                            { data: [], backgroundColor: 'gray', label: 'Undicided'},
                            { data: [], backgroundColor: 'lightgray', label: 'Unmarked'}
                        ]
                    },
                    options: {
                        responsive: true,
                        scale: {
                            ticks: {
                                precision:0,
                            },
                        },
                        // animation: {
                        //     duration: 1,
                        //     onComplete: function ({ chart }) {
                        //         const ctx = chart.ctx;

                        //         chart.config.data.datasets.forEach(function (dataset, i) {
                        //             const meta = chart.getDatasetMeta(i);

                        //             meta.data.forEach(function (bar, index) {
                        //                 const data = dataset.data[index];

                        //                 ctx.fillText(data, bar.x - 5, bar.y - 10);
                        //             });
                        //         });
                        //     }
                        // }
                    },
                    chartdata: []
                }
            }
        },
    },
    getters: {
        // #region voters
        get_voters (state){
            let list = state.voters.filter(v => {
                if(state.filter.city == "all") return true
                if(state.filter.city.toLowerCase() == v.city.toLowerCase() &&
                state.filter.municipality.toLowerCase() == 'all') return true
                if(v.city.toLowerCase() == state.filter.city.toLowerCase() &&
                    v.municipality.toLowerCase() == state.filter.municipality.toLowerCase())
                {
                    
                    if(state.filter.barangay == "all") return true
                    else if (v.barangay == state.filter.barangay && state.filter.purok == "all") return true
                    else if (v.barangay == state.filter.barangay && v.purok == state.filter.purok && state.filter.house_number == "all") return true
                    else if (v.barangay == state.filter.barangay && v.purok == state.filter.purok && v.house_number == state.filter.house_number) return true
                    else return false
                }
                else return false
            })

            if(!state.filter.show.all){
                list = list.filter(v => {
                    if(!state.filter.show.leader){
                        if(v.mark.toLowerCase() == "leader") return false
                    }
                    if(!state.filter.show.right){
                        if(v.mark.toLowerCase() == "right") return false
                    }
                    if(!state.filter.show.left){
                        if(v.mark.toLowerCase() == "left") return false
                    }
                    if(!state.filter.show.undecided){
                        if(v.mark.toLowerCase() == "undecided") return false
                    }
                    if(!state.filter.show.unmark){
                        if(v.mark == "") return false
                    }
                    return true
                })
            }

            if(state.filter.show.house_head){
                list = list.filter(v=> v.ishead)
            }
            
            list = list.filter(v => {
                if(
                    v.fname.toLowerCase().includes(state.filter.search.toLowerCase()) ||
                    v.mname.toLowerCase().includes(state.filter.search.toLowerCase()) ||
                    v.lname.toLowerCase().includes(state.filter.search.toLowerCase())
                ) return true
                else return false
            })

            state.filter.total_item = list.length
            state.filter.total_page = Math.floor(list.length / state.filter.item_per_page) + 1

            let start = state.filter.item_per_page * (state.filter.current_page - 1)
            let end = Number(state.filter.item_per_page * (state.filter.current_page - 1)) + Number(state.filter.item_per_page)
            let e2 = end
            if(end > state.filter.total_item) e2 = state.filter.total_item
            if(state.filter.total_item == 0){
                start = -1
                end = 0
                e2 = 0
            }
            state.filter.showing = (start + 1) + " - " + e2

            if(start > state.filter.total_item) state.filter.current_page = 1

            return list.slice(start, end)
        },
        get_selected_voters (state){
            return []
        },
        get_city (state){
            return [...new Set( state.voters.map(obj => obj.city)) ];
        },
        get_municipality (state){
            return [...new Set( state.voters.map(obj => obj.municipality)) ];
        },
        get_brgy (state){
            return [...new Set( state.voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter.municipality.toLowerCase()){
                    return obj.barangay
                }
            })) ];
        },
        get_purok (state){
            return [...new Set( state.voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter.barangay.toLowerCase()){
                        return obj.purok
                    }
                }
            })) ];
        },
        get_house_number (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter.barangay.toLowerCase()){
                        if(obj.purok.toLowerCase() == state.filter.purok.toLowerCase()){
                            return obj.house_number
                        }
                    }
                }
            }))];
        },
        get_imported_voters (state){
            if(!state.filter2.municipality) return []
            let list = state.imported_voters.filter(v => {
                if(state.filter2.city == "all") return true
                if(state.filter2.city.toLowerCase() == v.city.toLowerCase() &&
                state.filter2.municipality.toLowerCase() == 'all') return true
                if(v.city.toLowerCase() == state.filter2.city.toLowerCase() && 
                v.municipality.toLowerCase() == state.filter2.municipality.toLowerCase())
                {
                    if(state.filter2.barangay == "all") return true
                    else if (v.barangay == state.filter2.barangay && state.filter2.purok == "all") return true
                    else if (v.barangay == state.filter2.barangay && v.purok == state.filter2.purok && state.filter2.house_number == "all") return true
                    else if (v.barangay == state.filter2.barangay && v.purok == state.filter2.purok && v.house_number == state.filter2.house_number) return true
                    else return false
                }
                else return false
            })

            if(!state.filter2.show.all){
                list = list.filter(v => {
                    if(!state.filter2.show.leader){
                        if(v.mark == "Leader") return false
                    }
                    if(!state.filter2.show.right){
                        if(v.mark == "Right") return false
                    }
                    if(!state.filter2.show.left){
                        if(v.mark == "Left") return false
                    }
                    if(!state.filter2.show.undecided){
                        if(v.mark == "Undecided") return false
                    }
                    return true
                })
            }
            if(state.filter2.show.house_head){
                list = list.filter(v=> v.ishead)
            }

            list = list.filter(v => {
                if(
                    v.fname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.mname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.lname.toLowerCase().includes(state.filter2.search.toLowerCase())
                ) return true
                else return false
            })

            state.filter2.total_item = list.length
            state.filter2.total_page = Math.floor(list.length / state.filter2.item_per_page) + 1

            let start = state.filter2.item_per_page * (state.filter2.current_page - 1)
            let end = Number(state.filter2.item_per_page * (state.filter2.current_page - 1)) + Number(state.filter2.item_per_page)
            let e2 = end
            if(end > state.filter2.total_item) e2 = state.filter2.total_item
            if(state.filter2.total_item == 0){
                start = -1
                end = 0
                e2 = 0
            }
            state.filter2.showing = (start + 1) + " - " + e2
            return list.slice(start, end)
        },
        get_imported_city (state){
            return [...new Set( state.imported_voters.map(obj => obj.city)) ];
        },
        get_imported_municipality (state){
            return [...new Set( state.imported_voters.map(obj => obj.municipality)) ];
        },
        get_imported_brgy (state){
            return [...new Set( state.imported_voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter2.municipality.toLowerCase()){
                    return obj.barangay
                }
            })) ];
        },
        get_imported_purok (state){
            return [...new Set( state.imported_voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter2.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter2.barangay.toLowerCase()){
                        return obj.purok
                    }
                }
            })) ];
        },
        get_imported_house_number (state){
            return [...new Set( state.imported_voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter2.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter2.barangay.toLowerCase()){
                        if(obj.purok.toLowerCase() == state.filter2.purok.toLowerCase()){
                            return obj.house_number
                        }
                    }
                }
            }))];
        },
        // #endregion
        // #region Houses
        get_houses (state) {

        },
        get_municipality_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase()){
                    return obj.municipality
                }
            }))].filter(l => l !== undefined);
        },
        get_brgy_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase()){
                    return obj.barangay
                }
            }))].filter(l => l !== undefined);
        },
        get_purok_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase()){
                    return obj.purok
                }
            }))].filter(l => l !== undefined);
        },
        get_house_houses (state) {
            var list = [...new Set(state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase() &&
                obj.purok.toLowerCase() == state.house_filter.purok.toLowerCase()){
                    return obj
                }
            }))].filter(l => l !== undefined);
            list = list.filter(v => v != undefined)
            if (list[0] == undefined) return []
            //var list3 = [...new Set(list.map(v => { return v.house_number }))]
            var list2 = list.filter(v => v.ishead )
            return [...new Set(list2.map(o => {
                return {
                    check: false,
                    hn: o.house_number,
                    hh: o.fname + ' ' + o.mname + ' ' + o.lname,
                    hm: list.filter(v => v.house_number ==  o.house_number).length
                }
            }))].filter(l => l !== undefined);
        },
        check_house_add_member(state){
            if(state.house_filter.city != "" &&
                state.house_filter.municipality != "" &&
                state.house_filter.barangay != "" &&
                state.house_filter.purok != "") return true
            else return false
        },
        check_house_add_house(state){
            if(state.house_filter.city != "" &&
                state.house_filter.municipality != "" &&
                state.house_filter.barangay != "" &&
                state.house_filter.purok != "") return true
            else return false
        },
        get_municipality_2(state){
            return (city) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase()){
                        return obj.municipality
                    }
                }))].filter(l => l !== undefined);
            }
        },
        get_barangay_2 (state) {
            return (city, municipality) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase() &&
                    obj.municipality.toLowerCase() == municipality.toLowerCase()){
                        return obj.barangay
                    }
                }))].filter(l => l !== undefined);
            }
        },
        get_purok_2 (state) {
            return (city, municipality, barangay) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase() &&
                    obj.municipality.toLowerCase() == municipality.toLowerCase() &&
                    obj.barangay.toLowerCase() == barangay.toLowerCase()){
                        return obj.purok
                    }
                }))].filter(l => l !== undefined);
            }
        },
        get_house_number_2 (state) {
            return (city, municipality, barangay, purok) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase() &&
                    obj.municipality.toLowerCase() == municipality.toLowerCase() &&
                    obj.barangay.toLowerCase() == barangay.toLowerCase() &&
                    obj.purok.toString().toLowerCase() == purok.toString().toLowerCase()){
                        return obj.house_number
                    }
                }))].filter(l => l !== undefined);
            }
        },
        get_house_member (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase() &&
                obj.purok.toLowerCase() == state.house_filter.purok.toLowerCase() &&
                obj.house_number.toLowerCase() == state.house_filter.house_number.toLowerCase()){
                    return obj
                }
            }))].filter(v => v !== undefined);
        },
        // #endregion
        // #region reports
        get_total_report (state) {
            var right = state.voters.filter(v => v.mark.toLowerCase() == 'right' || v.mark.toLowerCase() == 'leader').length
            var left = state.voters.filter(v => v.mark.toLowerCase() == 'left').length                   
            var undecided = state.voters.filter(v => v.mark.toLowerCase() == 'undecided').length
            return {
                right: right,
                left: left,
                undecided: undecided
            }
        },
        get_report_location (state) {
            
        }
        // #endregion
    },
    mutations: {
        loadLocalState () {
            let store = localStorage.getItem('store')
            if(store){
                try {
                    this.replaceState(JSON.parse(store))
                }
                catch(e){
                    console.log('Could not initialize store', e)
                }
            }
        },
        store (state) {
            return
            localStorage.setItem('store', JSON.stringify(state))
        },
    },
    actions: {
        async load_voters ({state}) {
            let totalPage = 0
            let total_item = 0
            let next_page = "/voters?page=1"
            while (next_page) {
                await axios.get(next_page)
                .then((res) => {
                    state.filter.total_item = res.data.total
                    next_page = res.data.next_page_url
                    state.voters = state.voters.concat(res.data.data)
                })
            }
        },
        // #region voters
        clearBrgySelected ({state, commit}){
            state.filter.barangay = "all"
            state.filter.purok = "all"
            state.filter.house_number = "all"
        commit('store')
        },
        clearPurokSelected ({state, commit}){
            state.filter.purok = "all"
            state.filter.house_number = "all"
        commit('store')
        },
        clearHouseNoSelected2 ({state, commit}){
            state.filter.house_number = "all"
        commit('store')
        },
        onSelectAllFilter ({state, commit}){
            if(state.filter.show.all){
                state.filter.show.leader = true
                state.filter.show.right = true
                state.filter.show.left = true
                state.filter.show.undecided = true
            }
            commit('store')
        },
        selectAllVoters ({state, commit}, data) {
            data.voters.forEach(v => {
                let find = state.voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    if(data.check) state.voters[find].check = true
                    else state.voters[find].check = false
                }
            });
            commit('store')
        },
        async markVoters({ state, commit }, data) {
            console.log(data)
            const configHeaders = {
                "content-type": "application/json",
                "Accept": "application/json"
                };
            await axios.post('/voters/mark-selected', { 'voters': JSON.stringify(data.voters), 'markas': data.type }, configHeaders)
                .then((res) => {
                    console.log(res)
                    data.voters.forEach(v => {
                        let find = state.voters.findIndex(v1 => v1.id == v.id)
                        if (find != -1) {
                            state.voters[find].mark = data.type.toUpperCase()
                        }
                    });
                })
                .catch((err) => {
                    console.log(err)
                })

            commit('store')
        },
        setSelectedHouseNumber ({state, commit}, hn){
            state.filter.view_member_id = hn
            commit('store')
        },
        delVoters ({state, commit}, voters) {
            console.log(voters, state.voters)
            voters.forEach(v => {
                state.voters = state.voters.filter(vv => vv.id != v.id)
            })
            commit('store')
        },
        nextPage({state, commit}, i) {
            state.filter.current_page += i
            commit('store')
        },
        // #endregion
        // #region import data
        setImportedVoters ({state, commit}, data) {
            data.forEach(d => {
                d.id = Date.now().toString(36) + Math.random().toString(36).substr(2)
                d.check = false
                state.imported_voters.push(d)
            })
            commit('store')
        },
        onImportFilterChanged ({state, commit}) {
            if(state.filter2.city == 'all'){
                state.filter2.municipality = 'all'
                state.filter2.barangay = 'all'
                state.filter2.purok = 'all'
                state.filter2.house_number = 'all'
            }
            if(state.filter2.municipality == 'all'){
                state.filter2.barangay = 'all'
                state.filter2.purok = 'all'
                state.filter2.house_number = 'all'
            }
            if(state.filter2.barangay == 'all'){
                state.filter2.purok = 'all'
                state.filter2.house_number = 'all'
            }
            if(state.filter2.purok == 'all'){
                state.filter2.house_number = 'all'
            }
            commit('store')
        },
        selectAllVoters2 ({state, commit}, data) {
            data.voters.forEach(v => {
                let find = state.imported_voters.findIndex(v1 => v1.id == v.id)
               
                if(find != -1) {
                    if(data.check) state.imported_voters[find].check = true
                    else state.imported_voters[find].check = false
                }
            });
            commit('store')
        },
        markVoters2 ({state, commit}, data) {
            data.voters.forEach(v => {
                let find = state.imported_voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    state.imported_voters[find].mark = data.type.toUpperCase()
                }
            });
            commit('store')
        },
        markVoters22 ({state, commit}, data) {
            let find = state.imported_voters.findIndex(v1 => v1.id == data.id)
            if(find != -1) {
                state.imported_voters[find].mark = data.type.toUpperCase()
            }
            commit('store')
        },
        nextPage2({state, commit}, i) {
            state.filter2.current_page += i
            commit('store')
        },
        // #endregion

        // #region Houses
        setSelectedHouse ({state, commit}, hn) {
            state.house_filter.house_number = hn
            commit('store')
        },
        AddNewMember ({state, commit}, data){
            console.log(data)
            let v = {
                "check": false,
                "id": Date.now().toString(36) + Math.random().toString(36).substr(2),
                "house_number": state.house_filter.house_number,
                "purok": state.house_filter.purok,
                "barangay": state.house_filter.barangay,
                "municipality": state.house_filter.municipality,
                "city": state.house_filter.city,
                "fname": data.firstname,
                "mname": data.middlename,
                "lname": data.lastname,
                "suffix": data.suffix,
                "gender": data.gender,
                "mark": "",
                "status": "",
                "ishead": false
            }
            state.voters.push(v)
            commit('store')
        },
        markAsHead ({state, commit}, house_id) {
            let list = voters.filter(v => v.house_id == house_id)
            commit('store')
        },
        // #endregion

        // #region Report
        reportReset ({state, commit, dispatch}) {
            if(state.report_filter.city == 'all'){
                state.report_filter.municipality = 'all'
                state.report_filter.barangay = 'all'
                state.report_filter.purok = 'all'
            }
            if(state.report_filter.municipality == 'all'){
                state.report_filter.barangay = 'all'
                state.report_filter.purok = 'all'
            }
            if(state.report_filter.barangay == 'all'){
                state.report_filter.purok = 'all'
            }
            commit('store')
            dispatch('get_bar_chart_report_data')
        },
        async get_bar_chart_report_data ({state}) {
            let labels = []
            let datasets = [
                { data: [], backgroundColor: 'lime', label: 'Right'},
                { data: [], backgroundColor: 'red', label: 'Left'},
                { data: [], backgroundColor: 'gray', label: 'Undecided'},
                { data: [], backgroundColor: 'lightgray', label: 'Unmarked'}
            ]
            
            await axios.post('/voters/bar-chart', {
                "city": state.report_filter.city,
                "municipality": state.report_filter.municipality,
                "barangay": state.report_filter.barangay,
                "purok": state.report_filter.purok,
                "house_number": state.report_filter.house_number,
            })
            .then((res) => {
                console.log(res.data)
                if(!res.data.labels) return
                labels = [...new Set(res.data.labels.map(l => {
                    if(state.report_filter.barangay !== 'all' && state.report_filter.purok == 'all') return "Purok " + l.label
                    else return l.label
                }))].filter(l=> l !== undefined)
                console.log(labels)
                datasets[0].data = res.data.datasets.right
                datasets[1].data = res.data.datasets.left
                datasets[2].data = res.data.datasets.undecided
                datasets[3].data = res.data.datasets.none
                state.report_filter.chart.bar.data = {
                    labels: labels,
                    datasets: datasets
                }

                state.report_filter.chart.total = res.data.total

            })

        },

        // #endregion
    }
})

export default store