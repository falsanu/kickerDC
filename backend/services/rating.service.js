const initialRating = 1500;
const KFactor = 32;

class RatingServiceModel {
  constructor() {
    this.rating = initialRating;
  }

  getInitialRating() {
    return this.rating;
  }

  getRatingChange(opponentRating, hasWon) {
    if(typeof hasWon === 'undefined') {
      throw new Error('Rating cannot be calculated');
    }

    let difference = this.rating - opponentRating;
    let percentage = 1 / (1 + Math.pow(10, difference / 400));

    if(hasWon) {
      return Math.round(KFactor * (1 - percentage));
    } else {
      return Math.round(KFactor * (0 - percentage))
    }
  }

}

const RatingService = new RatingServiceModel();

module.exports = RatingService;