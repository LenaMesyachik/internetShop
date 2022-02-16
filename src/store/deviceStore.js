import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'холодильники'},
            {id: 2, name: 'смартфоны'}
        ],

            this._brands = [
                {id: 1, name: 'sumsung'},
                {id: 2, name: 'apple'}
            ],
            this._devices = [
                {id: 1, name: 'iphone12pro', price: 25000, rating: 5, img: ''},
                {id: 2, name: 'iphone11pro', price: 20000, rating: 5, img: ''}
            ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }

}