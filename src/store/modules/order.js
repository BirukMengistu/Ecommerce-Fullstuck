import { createStore } from 'vuex'

export default{
  state: {
      orders:[],
      order:[]
  },
  getters: {
    orders: state=>state.orders,
    oder: state=>state.order  
  },
  mutations: {
      
    SET_ORDERS: (state, orders) => {
        state.orders = orders
      },
      SET_ORDER: (state, order) => {
        state.order = order
      }
  },
  actions: {
    save_order : async ({commit} , payload)=>{
        console.log(payload.order)
        let response = await axios.post('orders/', payload.order)
        if(response.status === 201){
          localStorage.setItem('token', response.order)
          commit('SET_ORDERS', response.order) 
       }
      },
    getOrders : async ({commit}) => {
        const result = await  axios.get('orders')
        console.log(result)
        commit('SET_ORDERS', result.data)
      },
      getOrderById: async ({commit}, id) => {
        const res = await axios.get('orders/' + id)
        console.log(res)
        commit('SET_ORDER', res.data)
      }
  },
 
}
