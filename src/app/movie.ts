export class MovieThumbnail {
    id: string;
    title :string;
    image: string;
    releaseDate: Date;
}

export class Movie extends MovieThumbnail {
    adult: boolean;
    budget: number;
    homepage: string;
    popularity: number;
    genres: string[];
}