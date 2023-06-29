import { makeAutoObservable } from "mobx";
import Service from "../service";
import { Article } from "../models/models";

class Store {

    searchResult: Article[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setResult(articles: Article[]) {
        this.searchResult = articles
    }

    async search(value: string) {

        try {
            if (value === '') {
                this.setResult([]);
            } else {
                const response = await Service.search(value);
                const articles = response.data.query.search;
                this.setResult(articles);
            }
        } catch (e) {
            console.log(e);
        }
    }

}

const store = new Store();

export default store;