<template>
    ...
    <h6 class="card-subtitle mb-2 text-muted">
      {{ getFormattedDate(review.date) }}
    </h6>
    <p v-if="!review.editing" class="card-text">{{ review.review }}</p>
    <p v-if="review.editing" class="card-text">
      <input v-model="newReviewMessage" type="text" class="form-control" />
    </p>
    <a v-if="verifyAuthorship(review.user_id)"
      v-on:click="editReview(review)"
      class="btn btn-primary me-3"
    >
      Edit
    </a>
    <a class="btn btn-danger"> Delete </a>
    ...
</template>

<script>
import * as moment from 'moment';
import MovieService from '../services/MovieService';
import AddReview from '../components/AddReview.vue';
import ReviewService from '../services/ReviewService';

...
  data() {
    return {
      movie: {
        poster: '',
        title: '',
        rated: '',
        plot: '',
        _id: '',
        reviews: [],
      },
      newReviewMessage: '',
    };
  },
  ...
  methods: {
    async getMovie() {
      const movieData = await MovieService.getMovie(
        this.$route.params.id,
      );
      const modifiedReviews = movieData.reviews.map(
        (v) => ({ ...v, editing: false })
      );
      movieData.reviews = modifiedReviews;
      this.movie = movieData;
    },
    getFormattedDate(date) {
      return moment(date).format('Do MMMM YYYY');
    },
    verifyAuthorship(reviewUserId) {
      if (this.$store.state.user.id && 
        this.$store.state.user.id === reviewUserId) {
        return true;
      }
      return false;
    },
    editReview(review) {
      if (review.editing) {
        review.review = this.newReviewMessage;
        this.saveUpdatedReview(review);
        review.editing = false;
      } else {
        this.newReviewMessage = review.review;
        review.editing = true;
      }
    },
    async saveUpdatedReview(newReview) {
      const data = {
        review: newReview.review,
        name: newReview.name,
        user_id: newReview.user_id,
        movie_id: newReview.movie_id,
        review_id: newReview._id,
      };
      await ReviewService.updateReview(data);
    },
  },
};
</script>