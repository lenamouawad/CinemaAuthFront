export class ReviewDTO2{
    username : string;
    movieId : string;
    reviewText : string;

    constructor(username:string, movieId : string, reviewText:string)
    {
        this.username=username;
        this.movieId = movieId;
        this.reviewText=reviewText;
    }
}