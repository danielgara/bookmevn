    <h3>Reviews</h3>
    <ul class="list-group">
      <li class="list-group-item pb-3 pt-3" v-for="review in movie.reviews" :key="review._id">
        <h5 class="card-title">Review by {{ review.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ review.date }}</h6>
        <p class="card-text">{{ review.review }}</p>
        <a class="btn btn-primary me-3"> Edit </a>
        <a class="btn btn-danger"> Delete </a>
      </li>
    </ul>

        <h6 class="card-subtitle mb-2 text-muted">
          {{ getFormattedDate(review.date) }}
        </h6>
