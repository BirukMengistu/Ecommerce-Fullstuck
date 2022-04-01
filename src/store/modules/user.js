import axios from '@/axios'
export default {
    state: {
        userToken:null,
        loggedIn:false
    },
    getters: {
        loggedIn: state=>state.loggedIn
    },
    mutations: {
        SET_USER:(state , token)=>{
            console.log(token)
            state.userToken=token
            state.loggedIn=true
        },
        SET_USER_NOT:(state , token)=>{
          console.log(token)
          state.userToken=token
          state.loggedIn=false
      },
        
    },
    actions: {
        register : async ({commit} , payload)=>{
          console.log(payload.data)
          let response = await axios.post('users/register', payload.user)
         console.log(response.data.token)
          if(response.status === 201){
            localStorage.setItem('token', response.data.token)
            commit('SET_USER', response.data.token)
    
            if(payload.route) {
              router.push(payload.route)
            } else {
              router.push({ name: 'Home' })
            }  
    
         }
        },
        
        login:async ({commit}, payload)=>{
            const response = await axios.post('users/login' , payload.user)
           
             if(response.status === 200){
                localStorage.setItem('token', response.data.token)
                commit('SET_USER', response.data.token)
                
                if(payload.route) {
                  router.push(payload.route)
                } else {
                  router.push({ name: 'Home' })
                } 
        
             }
        },
        logout: ({commit}) => {
            try {
              localStorage.removeItem('token')
              commit('SET_USER_NOT', null)
            } catch {
              console.log('not logged in')
            }
          }
    }
  }