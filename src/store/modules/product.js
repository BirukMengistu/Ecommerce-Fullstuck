
import axios from '@/axios'
export default {
  state: {
   products:[] ,
   product: []  
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_PRODUCT: (state, product) => {
      state.product = product
    }
  },
  actions: {
      getProducts : async ({commit}) => {
        const result = await  axios.get('products')
        console.log(result)
        commit('SET_PRODUCTS', result.data)
      },
      getProductById: async ({commit}, id) => {
        const res = await axios.get('products/' + id)
        console.log(res)
        commit('SET_PRODUCT', res.data)
      }
      
  }, 
  getters: {
     products: state=>state.products,
     product: state=>state.product
      },
  modules: {
  },
 
}
