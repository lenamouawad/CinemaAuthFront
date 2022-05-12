export class Review{
    id : string;
    movieId : string;
    userId : string;
    reviewText : string;

    constructor(id:string, movieId:string, userId:string, reviewText:string)
    {
        this.id = id;
        this.movieId=movieId;
        this.userId=userId;
        this.reviewText=reviewText;
    }
}