<div class="row row-cols-1 row-cols-md-3 g-4">
  <div v-for="movie in movies" class="col" :key="movie._id">
    <div class="card">
      <img v-if="movie.poster" class="card-img-top"
        :src="movie.poster" />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ movie.title }}</h5>
        <p v-if="movie.rated" class="card-text">
          Rating: {{ movie.rated }}
        </p>
        <p class="card-text">{{ movie.plot }}</p>
        <a class="btn btn-primary">
          View Reviews
        </a>
      </div>
    </div>
  </div>
</div>
