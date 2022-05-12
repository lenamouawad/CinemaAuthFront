export class ReviewDTO{
    username : string;
    reviewText : string;

    constructor(username:string, reviewText:string)
    {
        this.username=username;
        this.reviewText=reviewText;
    }
}