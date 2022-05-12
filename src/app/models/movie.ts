export class Movie{
    id : string;
    name : string;
    duration : number;
    imgUrl : string;

    constructor(id:string, name:string, duration:number, imgUrl:string)
    {
        this.id = id;
        this.name=name;
        this.duration=duration;
        this.imgUrl=imgUrl;
    }
}