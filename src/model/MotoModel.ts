export class MotoModel {
    #marca: string
    #model: string
    #color: string
    #km: string
    #documentation: string
    #licensing: string

    constructor(
        marca: string,
        model: string,
        color: string,
        km: string,
        documentation: string,
        licensing: string,
    ) {
        this.#marca = marca
        this.#model = model
        this.#color = color
        this.#km = km
        this.#documentation = documentation
        this.#licensing = licensing
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
}
