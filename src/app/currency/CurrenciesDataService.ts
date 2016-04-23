import {Currency} from "./common/CurrencyComponent";

export class CurrenciesDataService {
    static NAME:string = "currenciesDataService";

    public getLatestCurrencies():Currency[] {
        return this.getCurrenciesByYear(2016);
    }

    public getCurrenciesByYear(year:number):Currency[] {
        var currencies:any = require('./data/currencies.json');
        var rates:any = require(`./data/${year}.json`);

        var result:Currency[] = [];
        for (var key in currencies) {
            if (currencies.hasOwnProperty(key)) {
                if (rates[key]) {
                    var currency:Currency = {
                        abbreviation: key,
                        country: currencies[key],
                        rate: rates[key]
                    };
                    result.push(currency);
                }
            }
        }
        return result;
    }
}