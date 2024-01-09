import { createRouter, createWebHistory } from 'vue-router'

import List from '../views/List.vue'
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'
import Map from '../views/Map.vue'
import ImportVoter from '../views/ImportVoter.vue'
import MemberView from '../views/Member.vue'
import Houses from '../views/Houses.vue'
import HouseMember from '../components/House/HouseMember.vue'
import AddMember from '../components/House/AddMember2.vue'
import NewHouse from '../components/House/AddHouse.vue'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { 
            path: '/',
            alias: '/home' ,
            component: List,
            meta: {
                title: "Home",
                btn: 'voters'
            }
        },
        { 
            path: '/voters', 
            component: List,
            meta: {
                title: 'List',
                btn: 'voters'
            }
        },
        { 
            path: '/voters/members', 
            component: MemberView,
            meta: {
                title: 'Member',
                btn: 'voters'
            }
        },
        { 
            path: '/voters/members/add', 
            component: AddMember,
            meta: {
                title: 'Member',
                btn: 'voters'
            }
        },
        { 
            path: '/report', 
            component: Report,
            meta: {
                title: 'Report',
                btn: 'report'
            }
        },
        { 
            path: '/map', 
            component: Map,
            meta: {
                title: 'Map',
                btn: 'map'
            }
        },
        { 
            path: '/houses', 
            component: Houses,
            meta: {
                title: 'House',
                btn: 'house'
            }
        },
        { 
            path: '/house/member', 
            component: HouseMember,
            meta: {
                title: 'House',
                btn: 'house'
            }
        },
        { 
            path: '/house/new', 
            component: NewHouse,
            meta: {
                title: 'House',
                btn: 'house'
            }
        },
        { 
            path: '/import-data', 
            component: ImportVoter,
            meta: {
                title: 'Import Data',
                btn: 'import'
            }
        }
      ]
  })

  export default router