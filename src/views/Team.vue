<template>
<div class='container d-flex  mt-5 '>
 <div class="card m-2">
  <img src="https://media.bonnierforlagen.se/forfattarfotonstandard/b/24371b.jpg?timestamp=20201014054737" alt="John" style="width:100%">
  <h1>Barak Obama</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div style="margin: 24px 0;">
   <a href="#"><i class="fab fa-twitter"></i></a>  
    <a href="#"><i class="fab fa-linkedin"></i></a>  
    <a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>
<div class="card  m-2">
  <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEF-rxxJbLANg/profile-displayphoto-shrink_200_200/0/1523297827776?e=1654128000&v=beta&t=dJJRC3m4x8DCjim1it0N_O8dmoIt_9VjxCEmaR3xkro" alt="John" style="width:100%">
  <h1>Bir Dev</h1>
  <p class="title">CEO & Founder, Developer</p>
  <p>EC-Utbuliding</p>
  <p>KTH</p>
  <div style="margin: 24px 0;">
    
    <a href="#"><i class="fab fa-twitter"></i></a>  
    <a href="#"><i class="fab fa-linkedin"></i></a>  
    <a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a> 
  </div>
  <p><button class='btn bg-Main'>Contact</button></p>
</div>
</div>
</template>
<style scoped>
.card {

  box-shadow: 0 4px 8px 0 rgb(97, 116, 46);
  max-width: 40%;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #f7c211;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

@media (min-width:  600px) {

}

</style>