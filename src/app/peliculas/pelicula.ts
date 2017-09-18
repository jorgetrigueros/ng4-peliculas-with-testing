export class Pelicula {
    private id: number;
    private original_title: string;
    private title: string;
    private overview: string;
    private backdrop_path: string;

    constructor(id: number, original_title: string, title: string, descripcion: string, photo: string) {
        this.id = id;
        this.original_title = original_title;
        this.title = title;
        this.overview = descripcion;
        this.backdrop_path = photo;
    }
}
