<template>
   <!-- Navbar -->
<nav class="navbar navbar-expand-lg  navbar-light bg-Main">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

          <!-- Collapsible wrapper -->
          <div 
            class="collapse navbar-collapse" 
             id="navbarSupportedContent">
            <!-- Navbar brand -->
            <a class="navbar-brand mt-2 mt-lg-0" to="#">
              <i class=" fa-solid fa-store "></i>
                 Birdev.com
            </a>
            
            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Product</a>
              </li>
            
              <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
              </li>
            </ul>
            <!-- Left links -->
          </div>
          <!-- Collapsible wrapper -->

          <!-- Right elements -->
          <div class="d-flex align-items-center " >
          <div class="dropdown">
            <!-- Icon -->
                <a 
                    class="align-items-center drowpdown-toggle me-3 text-reset  hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role='button'
                    data-mdb-toggle='dropdown'
                    aria-expanded="false">
                  <i class="fas fa-shopping-cart "></i>
                     <!-- Notifications -->
                  <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink">
                   Cart
                </div>
          </div>
         
           
            <!-- Avatar -->
            <div class="dropdown">
          
              <a
                class="dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                  <i class="fa-solid fa-user-plus"></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>  
          <!-- Right elements -->
        </div>
        <!-- Container wrapper -->
      </nav>
<!-- Navbar -->
</template>
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.bg-Main{
background: #f7c211;
}
a {
  color: #42b983;
}
</style>
