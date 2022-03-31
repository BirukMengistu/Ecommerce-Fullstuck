export default {
    state: {
      cart: []
    },
    getters: {
      shoppingCart: state => state.cart,
      cartItemCount: state => {
        let items = 0
        state.cart.forEach(item => {
          items += item.quantity
        })
        return items
      },
     
      shoppingCartTotal: state => {
        let total = 0
        if(state.cart.length !== 0) {
          state.cart.forEach(item => {
            total += item.product.price * item.quantity
          })
        }
        return total
      }
    },
    mutations: {
      ADD_TO_CART: (state, { product, quantity }) => {
        let exist_item = state.cart.find(item => item.product._id === product._id)
        if(exist_item) {
            exist_item.quantity += quantity
          return
        }
        state.cart.push({ product, quantity })
       },
       removeFromCart(state, {item}) {
         console.log(item.product)
         let index = state.cart.indexOf(item);
         console.log(index)
        if (index > -1) {
            let product = state.cart[index];
            state.cartItemCount -= product.quantity;
    
            state.cart.splice(index, 1);
        } 
    }
    },
     
    actions: {
      addToCart: ({commit}, { product, quantity }) => {
        commit('ADD_TO_CART', { product, quantity })
      },
      RemovedItemfromCart:({commit}, {item}) => {
        commit('removeFromCart', { item })
      }
         
    }
  }
  