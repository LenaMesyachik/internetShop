import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'холодильники'},
            {id: 2, name: 'смартфоны'},
            {id: 3, name: 'чайники'},
            {id: 4, name: 'утюги'},
            {id: 5, name: 'духовые шкафы'},
            {id: 6, name: 'ноутбуки'}
        ]

        this._brands = [
            {id: 1, name: 'sumsung'},
            {id: 2, name: 'apple'}
        ]

        this._devices = [
            {id: 1, name: 'iphone12pro', price: 25000, rating: 5, img: ''},
            {id: 2, name: 'iphone11pro', price: 20000, rating: 5, img: ''},
            {id: 3, name: 'iphone10pro', price: 15000, rating: 5, img: ''}
        ]
        this._selectedType = {}

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
    setSelectedType(type) {
       this._selectedType = type
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
    get selectedType() {
        return this._selectedType
    }
}