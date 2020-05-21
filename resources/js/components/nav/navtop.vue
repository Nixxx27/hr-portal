<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="app#/">
                   <img src="public/images/assets/personiv/hr-portal-full-logo.png" alt="" style="height: 40px; width: auto">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>
            
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->

                        <!-- <li>
                            <a class="top-nav-label" href="app#/employee">Site Map</a>
                        </li>
                          <li class="">
                            <a class="nav-link" href="app#/employee">HR Team</a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link" href="app#/employee">Contact Us</a>
                        </li> -->

                        <li class="hr-portal-top-nav-label">
                            <router-link to="/site" ><i class="fas fa-map"></i> Site Map</router-link>
                        </li>
                        <li  class="hr-portal-top-nav-label">
                            <router-link to="/hrteam" ><i class="fas fa-users"></i> HR Team</router-link>
                        </li>
                        <li  class="hr-portal-top-nav-label">
                            <router-link to="/contact" ><i class="fas fa-phone-alt"></i> Contact Us</router-link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
</template>