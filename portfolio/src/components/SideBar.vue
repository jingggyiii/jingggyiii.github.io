<!-- <template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/helloworld">helloworld</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>  
    </div>
  </div>
</nav>
</template> -->


<template>
<div id="nav">
  <nav class="navbar navbar-expand-lg navbar-light bg-dark" style="height:70px">
    <!-- <a class="navbar-brand" href="#">Logo Here</a> -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/HelloWorld" class="nav-item nav-link">About</router-link>
            <!-- <router-link to="/Careers" class="nav-link">Careers</router-link>
            <router-link to="/Contact" class="nav-link">Contact</router-link> -->
        </div>
       
    </div>
</nav>
 </div>
    <router-view/>
  </template>


<style>
#nav {
  padding-bottom: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  /* color: whitesmoke; */
  /* background: crimson; */
  border-radius: .5rem;
}

</style>