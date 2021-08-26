<template>
  <div>
    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      ...
    </nav>
    <!-- Header -->
    <div class="container mt-4">
      <router-view/>
    </div>
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted mt-4">
      <div class="text-center p-4" style="background-color: gainsboro;">
        © 2021 Copyright -
        <a class="text-reset fw-bold text-decoration-none" 
          target="_blank" href="https://twitter.com/greglim81"
        >
          Greg Lim
        </a> -
        <a class="text-reset fw-bold text-decoration-none" 
          target="_blank" href="https://twitter.com/danielgarax"
        >
          Daniel Correa
        </a>
      </div>
    </footer>
    <!-- Footer -->
  </div>
</template>