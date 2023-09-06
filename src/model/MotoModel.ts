export class MotoModel {
    #marca: string
    #modelo: string
    #km: string
    #documentation: string
    #licensing: string

    constructor(
        marca: string,
        modelo: string,
        km: string,
        documentation: string,
        licensing: string,
    ) {
        this.#marca = marca
        this.#modelo = modelo
        this.#km = km
        this.#documentation = documentation
        this.#licensing = licensing
    }

    get marca() {
        return this.#marca
    }

    get modelo() {
        return this.#modelo
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
