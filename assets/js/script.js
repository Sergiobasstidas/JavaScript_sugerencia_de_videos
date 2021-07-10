"use strict"

const publicFunction = function (url, id) {
    const setVideoData = (videoUrl, videoId) => {
        const elemento = document.getElementById(videoId); 
        if (elemento) {
            elemento.setAttribute("src", videoUrl)
        }
    }
    setVideoData (url, id);
};


class Multimedia {
    #url;
    constructor(url) {
        this.#url = url;
    }

    getUrl() {
        return this.#url;
    }

    setUrl(value){
        this.#url = value;
    }
    setInicio() {
        return `Este metodo es para realizar un cambio en la URL del video`;
    }
}

class Reproductor extends Multimedia {
    #id;
    constructor(url, id) {
        super(url)

        this.#id = id
    }

    playMultimedia() {
        publicFunction(this.getUrl(), this.#id)
    }
    setInicio(tiempoDeIncio) {
        this.setUrl (`${this.getUrl()}?start=${tiempoDeIncio}`)
    }
}

const Series = new Reproductor(
    "https://www.youtube.com/embed/FOqVpb-rvyw",
    "series"
);
const Peliculas = new Reproductor(
    "https://www.youtube.com/embed/-AwLMRgcEoA",
    "peliculas"
);
const Musica = new Reproductor(
    "https://www.youtube.com/embed/6XFWDxqXG3U",
    "musica"
);
Series.setInicio(20)
Series.playMultimedia()
Peliculas.playMultimedia()
Musica.playMultimedia()
