<template>

<div class="row">
  <div class="col-75">
              <div  v-if="shoppingCart.length > 0 " class="container ">
              
              
                <div class='d-block border-2 justify-content-center mt-5 mb-4'>
                  <div v-for="(item,index) in shoppingCart" :key='index' >
                      <div class='d-flex align-content-center m-2'>
                      <img  class='check-out-image shadow-1-soft' :src="item.product.image" alt="" srcset="">
                        <p class='item-quantity'>{{item.product.price}}</p>
                        <p class='item-quantity'>x</p>
                        <p class='item-quantity'>{{item.quantity}}</p>
                      </div>
                      <hr>
                  
                  </div>
                  <p>Total <span class="price" ><b>${{shoppingCartTotal}}</b></span></p>
              </div>
              </div>
  </div>           
    <div v-if="shoppingCart.length > 0 " class="col-75">
      <div class="container">
        <form >
        
          <div class="row">
            <div class="col-50">
              <h3>Billing Address</h3>
              <label for="fname"><i class="fa fa-user"></i> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input type="text" id="email" name="email" placeholder="john@example.com">
              <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
              <label for="city"><i class="fa fa-institution"></i> City</label>
              <input type="text" id="city" name="city" placeholder="New York">

              <div class="row">
                <div class="col-50">
                  <label for="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY">
                </div>
                <div class="col-50">
                  <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001">
                </div>
              </div>
            </div>

            <div class="col-50">
              <h3>Payment</h3>
              <label for="fname">Accepted Cards</label>
              <div class="icon-container ">
                <i class="fab fa-cc-visa fa-2x m-1 p-1" style="color:navy;"></i>
                <i class="fab fa-cc-amex fa-2x m-1 p-1" style="color:blue;"></i>
                <i class="fab fa-cc-mastercard fa-2x m-1 p-1" style="color:red;"></i>
                <i class="fab fa-cc-discover fa-2x m-1 p-1" style="color:orange;"></i>
              </div>
              <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe">
              <label for="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
              <label for="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September">
              <div class="row">
                <div class="col-50">
                  <label for="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018">
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352">
                </div>
              </div>
            </div>
            
          </div>
          <label>
            <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
          </label>
          <input type="submit" value="Continue to checkout" class="btn">
        </form>
      </div>
    </div>   
              
              
              
              
              
              
          <div  v-if="shoppingCart.length < 1 " class="container">
            <h3 class="text-danger justify-content-center mt-5">The Cart is empty now, please add some items on the cart
            <i class='fas fa-shopping-cart fa-rotate-90  fa-3x'></i>
            </h3>
        </div>
  
  </div>       
      
        
    
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    
    computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
     }
     }
     
    
</script>
<style>
    .check-out-image{
    width:120px;
    height:100px;
    margin-left: 2px;
    }
    .item-quantity{
    font-size: 1.2rem;
    color: rgb(206, 22, 22);
    padding: 1rem 2rem;
    }
    .price{
       font-size: 2rem;
       padding: 1rem 2rem;
       margin: 2rem;
       color: rgb(206, 22, 22);
    }
    
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {

  padding: 5px 20px 15px 20px;

  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}



.btn:hover {
  background-color: #8b7e06;
}

a {
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>