import axios from 'axios';

export default class ReviewService {
  static async createReview(data) {
    const res = await axios.post('https://gentle-plains-15226.herokuapp.com/api/v1/movies/review', data);
    return res;
  }

  static async deleteReview(data) {
    const res = await axios.delete('https://gentle-plains-15226.herokuapp.com/api/v1/movies/review', { data });
    return res;
  }

  static async updateReview(data) {
    const res = await axios.put('https://gentle-plains-15226.herokuapp.com/api/v1/movies/review', data);
    return res;
  }
}
