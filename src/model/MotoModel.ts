export class MotoModel {
    #marca: string
    #model: string
    #color: string
    #km: string
    #documentation: string
    #licensing: string
    #img: string

    constructor(
        marca: string,
        model: string,
        color: string,
        km: string,
        documentation: string,
        licensing: string,
        img: string,
    ) {
        this.#marca = marca
        this.#model = model
        this.#color = color
        this.#km = km
        this.#documentation = documentation
        this.#licensing = licensing
        this.#img = img
    }

    get marca() {
        return this.#marca
    }

    get model() {
        return this.#model
    }

    get color() {
        return this.#color
    }

    get km() {
        return this.#km
    }

    get documentation() {
        return this.#documentation
    }

    get licensing() {
        return this.#licensing
    }

    get img() {
        return this.#img
    }

    toJSON() {
        return {
            marca: this.#marca,
            model: this.#model,
            color: this.#color,
            km: this.#km,
            documentation: this.#documentation,
            licensing: this.#licensing,
            img: this.#img,
        }
    }

    static fromJSON(json: MotoModel) {
        return new MotoModel(
            json.marca,
            json.model,
            json.color,
            json.km,
            json.documentation,
            json.licensing,
            json.img,
        )
    }
}
