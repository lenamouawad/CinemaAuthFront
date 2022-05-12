import { Cinema } from "./cinema";
import { Movie } from "./movie";
import { Room } from "./room";

export class Screening{
    id : string;
    dateTime : string;
    movieId : string;
    movie : Movie;
    cinemaId : string;
    cinema : Cinema;
    roomId : string;
    room: Room;
}