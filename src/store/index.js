import { createStore } from 'vuex'
const store = createStore({
    state: {
        forms: {
            voters: {
                city: "", municipality: "", barangay: "", purok: "",
                house_number: "", fname: "", mname: "", lname: "", suffix: "",
                birthdate: null, gender: "", status: "", mark: "undecided",
                isHead: false
            }
        },
        filter: {
            city: "Sorsogon",
            municipality: "",
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
            city: "Sorsogon",
            municipality: "",
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
        voters: [
            {
                "check": false,
                "id": "lr5r3p150oo1s9xtjj3",
                "house_number": "1",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "CHARLENE",
                "mname": "",
                "lname": "MERCULIO",
                "suffix": "",
                "gender": "",
                "mark": "Leader",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p18nz1cc3o52li",
                "house_number": "1",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "CHERIE ROSE",
                "mname": "",
                "lname": "LOPEZ",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p183qao1mycfp5",
                "house_number": "2",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "RACHEL",
                "mname": "",
                "lname": "HIBON",
                "suffix": "",
                "gender": "",
                "mark": "Left",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p18mdqesu90tup",
                "house_number": "3",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DANILO",
                "mname": "",
                "lname": "LLUNAR",
                "suffix": "",
                "gender": "",
                "mark": "Left",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p18q8y4i8cwhrc",
                "house_number": "3",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MELONIE",
                "mname": "",
                "lname": "LLUNAR",
                "suffix": "",
                "gender": "",
                "mark": "Left",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p18c4qzp76j8n",
                "house_number": "3",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DAN MARK",
                "mname": "",
                "lname": "LLUNAR",
                "suffix": "",
                "gender": "",
                "mark": "Left",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p18agb5sk49qd6",
                "house_number": "4",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "EDWIN",
                "mname": "",
                "lname": "LOVERIA",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p1bck738r7xdf9",
                "house_number": "5",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "ALLAN",
                "mname": "",
                "lname": "BALLESTEROS",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bclaj1r5g2af",
                "house_number": "5",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MARY ANN",
                "mname": "",
                "lname": "LOVERIA",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1boucnu4ykmvm",
                "house_number": "6",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "LYDIA",
                "mname": "",
                "lname": "HABIL",
                "suffix": "",
                "gender": "",
                "mark": "Undecided",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p1bfreeaycmyo",
                "house_number": "6",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MICHAEL",
                "mname": "",
                "lname": "APOLINAR",
                "suffix": "",
                "gender": "",
                "mark": "Undecided",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bwjrsfyo15d",
                "house_number": "6",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "VERNA",
                "mname": "",
                "lname": "HABEL",
                "suffix": "",
                "gender": "",
                "mark": "Undecided",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1blgg4x6wzet",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "EVELYN",
                "mname": "",
                "lname": "QUAREN",
                "suffix": "",
                "gender": "",
                "mark": "Undecided",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bht6bfbbm2s",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "CHRISTINE",
                "mname": "",
                "lname": "HABIL",
                "suffix": "",
                "gender": "",
                "mark": "Undecided",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bv7fmeh2v33s",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DOMINADOR",
                "mname": "",
                "lname": "HAGOS",
                "suffix": "JR",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p1bq9jsk1tk229",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MARIA LORENA",
                "mname": "",
                "lname": "HAGOS",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bz8u0takumf",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DESIREE NICOLE",
                "mname": "",
                "lname": "HAGOS",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bjqpd0l5pp6i",
                "house_number": "1",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "ROLANDO",
                "mname": "",
                "lname": "GONZALES",
                "suffix": "",
                "gender": "",
                "mark": "Leader",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p1bz1jhccilzb",
                "house_number": "1",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JANET",
                "mname": "",
                "lname": "GONZALES",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bkbdpuxxal4b",
                "house_number": "1",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JOSEPH",
                "mname": "",
                "lname": "GONZALES",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1b1f7wy3hx6mf",
                "house_number": "2",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "EDEN",
                "mname": "",
                "lname": "GUARDACASA",
                "suffix": "",
                "gender": "",
                "mark": "Undecided",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p1br1hk8tvgk0n",
                "house_number": "3",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "ELIJA",
                "mname": "",
                "lname": "GRINO",
                "suffix": "",
                "gender": "",
                "mark": "Undecided",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p1bot0a8ao6yz",
                "house_number": "3",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "NILO",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": "TRUE"
            },
            {
                "check": false,
                "id": "lr5r3p1b56bees99l2i",
                "house_number": "3",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JOVELYN",
                "mname": "",
                "lname": "COSINO",
                "suffix": "",
                "gender": "",
                "mark": "Right",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1bffxi7q5a2i",
                "house_number": "1",
                "purok": "4",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "NEIL MARK",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "Left",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1b2mfwpx8fu8s",
                "house_number": "1",
                "purok": "4",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JOHN PUAL",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "Left",
                "status": "",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lr5r3p1cp4cbgommdi",
                "house_number": "1",
                "purok": "4",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JUDIT",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "Left",
                "status": "",
                "isHead": ""
            }
        ],
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
                bar: {
                    data: {
                        labels: ["Barangay 1", "Barangay 1", "Barangay 1", "Barangay 1"],
                        datasets: [
                            { data: [40, 20, 10, 40], backgroundColor: 'lime', label: 'Right'},
                            { data: [10, 30, 60, 40], backgroundColor: 'red', label: 'Left'},
                            { data: [20, 20, 0, 5], backgroundColor: 'gray', label: 'Undicided'}
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
                    }
                }
            }
        },
    },
    getters: {
        // #region voters
        get_voters (state){
            let list = state.voters.filter(v => {
                if(v.city.toLowerCase() == state.filter.city.toLowerCase() && 
                    v.municipality.toLowerCase() == state.filter.municipality.toLowerCase())
                {
                    if(state.filter.city == "") return false
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
                list = list.filter(v=> v.isHead)
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
                list = list.filter(v=> v.isHead)
            }

            list = list.filter(v => {
                if(
                    v.fname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.mname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.lname.toLowerCase().includes(state.filter2.search.toLowerCase())
                ) return true
                else return false
            })

            return list
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
            }))];
        },
        get_brgy_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase()){
                    return obj.barangay
                }
            }))];
        },
        get_purok_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase()){
                    return obj.purok
                }
            }))];
        },
        get_house_houses (state) {
            var list = [...new Set(state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase() &&
                obj.purok.toLowerCase() == state.house_filter.purok.toLowerCase()){
                    return obj
                }
            }))];
            list = list.filter(v => v != undefined)
            if (list[0] == undefined) return []
            //var list3 = [...new Set(list.map(v => { return v.house_number }))]
            var list2 = list.filter(v => v.isHead )
            return [...new Set(list2.map(o => {
                return {
                    check: false,
                    hn: o.house_number,
                    hh: o.fname + ' ' + o.mname + ' ' + o.lname,
                    hm: list.filter(v => v.house_number ==  o.house_number).length
                }
            }))]
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
                }))];
            }
        },
        get_barangay_2 (state) {
            return (city, municipality) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase() &&
                    obj.municipality.toLowerCase() == municipality.toLowerCase()){
                        return obj.barangay
                    }
                }))];
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
                }))];
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
        get_bar_chart_report_data (state) {
            let labels = []
            let datasets = [
                { data: [], backgroundColor: 'lime', label: 'Right'},
                { data: [], backgroundColor: 'red', label: 'Left'},
                { data: [], backgroundColor: 'gray', label: 'Undecided'}
            ]
            //all
            if(state.report_filter.city == "all"){
                labels = [...new Set( state.voters.map(obj => {
                    return obj.city
                }))];
                labels.forEach(l => {
                    var right = state.voters.filter(v => v.city.toLowerCase() == l.toLowerCase() && (v.mark.toLowerCase() == 'right' || v.mark.toLowerCase() == 'leader')).length
                    var left = state.voters.filter(v => v.city.toLowerCase() == l.toLowerCase() && (v.mark.toLowerCase() == 'left')).length                   
                    var undecided = state.voters.filter(v => v.city.toLowerCase() == l.toLowerCase() && (v.mark.toLowerCase() == 'undecided')).length
                    datasets[0].data.push(right)
                    datasets[1].data.push(left)
                    datasets[2].data.push(undecided)
                })
            }
            //all in city
            if(state.report_filter.city !== 'all' && state.report_filter.municipality == 'all'){
                labels = [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == state.report_filter.city.toLowerCase()){
                        return obj.municipality
                    }
                }))];
                
                labels.forEach(l => {
                    var right = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'right' || v.mark.toLowerCase() == 'leader') return true
                        }
                    }).length
                    var left = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'left') return true
                        }
                    }).length                   
                    var undecided = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'undecided') return true
                        }
                    }).length
                    datasets[0].data.push(right)
                    datasets[1].data.push(left)
                    datasets[2].data.push(undecided)
                    console.log(l, right, left, undecided)
                })
            }
            //all in municipality
            if(state.report_filter.city !== 'all' && state.report_filter.municipality !== 'all' && state.report_filter.barangay == 'all'){
                labels = [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == state.report_filter.city.toLowerCase() &&
                    obj.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase()){
                        return obj.barangay
                    }
                }))];
                
                labels.forEach(l => {
                    var right = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'right' || v.mark.toLowerCase() == 'leader') return true
                        }
                    }).length
                    var left = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'left') return true
                        }
                    }).length                   
                    var undecided = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'undecided') return true
                        }
                    }).length
                    datasets[0].data.push(right)
                    datasets[1].data.push(left)
                    datasets[2].data.push(undecided)
                    console.log(l, right, left, undecided)
                })
            }
            //all in barangay
            if(state.report_filter.city !== 'all' && state.report_filter.municipality !== 'all' && state.report_filter.barangay !== 'all' && state.report_filter.purok == 'all'){
                labels = [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == state.report_filter.city.toLowerCase() &&
                    obj.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() &&
                    obj.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase()){
                        return obj.purok
                    }
                }))];
                
                labels.forEach(l => {
                    var right = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase() && v.purok.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'right' || v.mark.toLowerCase() == 'leader') return true
                        }
                    }).length
                    var left = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase() && v.purok.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'left') return true
                        }
                    }).length                   
                    var undecided = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase() && v.purok.toLowerCase() == l.toLowerCase()){
                            if(v.mark.toLowerCase() == 'undecided') return true
                        }
                    }).length
                    datasets[0].data.push(right)
                    datasets[1].data.push(left)
                    datasets[2].data.push(undecided)
                    console.log(l, right, left, undecided)
                })

                labels = [...new Set(labels.map(l => {
                    return "Purok " + l
                }))]
            }
            //all in purok
            if(state.report_filter.city !== 'all' && state.report_filter.municipality !== 'all' && state.report_filter.barangay !== 'all' && state.report_filter.purok !== 'all'){
                labels = [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == state.report_filter.city.toLowerCase() &&
                    obj.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() &&
                    obj.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase() &&
                    obj.purok.toLowerCase() == state.report_filter.purok.toLowerCase()){
                        return obj.purok
                    }
                }))].filter(l => l !== undefined);
                
                labels.forEach(l => {
                    console.log(labels, l)
                    var right = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase() && v.purok.toLowerCase() == l){
                            if(v.mark.toLowerCase() == 'right' || v.mark.toLowerCase() == 'leader') return true
                        }
                    }).length
                    var left = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase() && v.purok.toLowerCase() == l){
                            if(v.mark.toLowerCase() == 'left') return true
                        }
                    }).length                   
                    var undecided = state.voters.filter(v => {
                        if(v.city.toLowerCase() == state.report_filter.city.toLowerCase() && v.municipality.toLowerCase() == state.report_filter.municipality.toLowerCase() && v.barangay.toLowerCase() == state.report_filter.barangay.toLowerCase() && v.purok.toLowerCase() == l){
                            if(v.mark.toLowerCase() == 'undecided') return true
                        }
                    }).length
                    datasets[0].data.push(right)
                    datasets[1].data.push(left)
                    datasets[2].data.push(undecided)
        
                    console.log(l, right, left, undecided)
                })

                labels = [...new Set(labels.map(l => {
                    return "Purok " + l
                }))]
            }
            
            return {
                labels: labels,
                datasets: datasets
            }
        },
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
        // #endregion


    },
    mutations: {},
    actions: {
        // #region voters
        clearBrgySelected ({state}){
            state.filter.barangay = "all"
            state.filter.purok = "all"
            state.filter.house_number = "all"
        },
        clearPurokSelected ({state}){
            state.filter.purok = "all"
            state.filter.house_number = "all"
        },
        clearHouseNoSelected2 ({state}){
            state.filter.house_number = "all"
        },
        onSelectAllFilter ({state}){
            if(state.filter.show.all){
                state.filter.show.leader = true
                state.filter.show.right = true
                state.filter.show.left = true
                state.filter.show.undecided = true
            }
        },
        selectAllVoters ({state}, data) {
            data.voters.forEach(v => {
                let find = state.voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    if(data.check) state.voters[find].check = true
                    else state.voters[find].check = false
                }
            });
        },
        markVoters ({state, getters}, data) {
            data.voters.forEach(v => {
                let find = state.voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    state.voters[find].mark = data.type.toUpperCase()
                }
            });
        },
        setSelectedHouseNumber ({state}, hn){
            state.filter.view_member_id = hn
        },
        delVoters ({state}, voters) {
            console.log(voters, state.voters)
            voters.forEach(v => {
                state.voters = state.voters.filter(vv => vv.id != v.id)
            })
        },
        nextPage({state}, i) {
            state.filter.current_page += i
        },
        // #endregion
        // #region import data
        setImportedVoters ({state}, data) {
            data.forEach(d => {
                d.id = Date.now().toString(36) + Math.random().toString(36).substr(2)
                d.check = false
                state.imported_voters.push(d)
            })
        },
        clearBrgySelected2 ({state}){
            state.filter2.barangay = "all"
            state.filter2.purok = "all"
            state.filter2.house_number = "all"
        },
        clearPurokSelected2 ({state}){
            state.filter2.purok = "all"
            state.filter2.house_number = "all"
        },
        clearHouseNoSelected2 ({state}){
            state.filter2.house_number = "all"
        },
        selectAllVoters2 ({state}, data) {
            data.voters.forEach(v => {
                let find = state.imported_voters.findIndex(v1 => v1.id == v.id)
               
                if(find != -1) {
                    if(data.check) state.imported_voters[find].check = true
                    else state.imported_voters[find].check = false
                }
            });
        },
        markVoters2 ({state}, data) {
            data.voters.forEach(v => {
                let find = state.imported_voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    state.imported_voters[find].mark = data.type.toUpperCase()
                }
            });
        },
        markVoters22 ({state}, data) {
            let find = state.imported_voters.findIndex(v1 => v1.id == data.id)
            if(find != -1) {
                state.imported_voters[find].mark = data.type.toUpperCase()
            }
        },
        // #endregion

        // #region Houses
        setSelectedHouse ({state}, hn) {
            state.house_filter.house_number = hn
        },
        // #endregion

        // #region Report
        reportReset ({state}) {
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
        },
        // #endregion
    }
})

export default store