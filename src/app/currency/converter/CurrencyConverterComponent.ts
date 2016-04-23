import IComponentOptions = angular.IComponentOptions;
import {CurrenciesDataService} from "../CurrenciesDataService";
import {Currency} from "../common/Currency";
var accounting:IAccountingStatic = require('accounting');

export class CurrencyConverterComponent implements IComponentOptions {
    static NAME:string = "currencyConverter";

    template:string = require('./currency-converter-template.html');
    controller:Function = CurrencyConverterComponentController;
}
export class CurrencyConverterComponentController {

    static $inject = [CurrenciesDataService.NAME];

    selectedFromCurrency:Currency;
    selectedToCurrency:Currency;
    result:number;
    amount:number;

    fromCurrencies:Currency[];
    toCurrencies:Currency[];

    constructor(private currencyDataService:CurrenciesDataService) {
    }

    convert(from:number, to:number):void {
        this.result = (this.amount / from) * to;
    }

    fromSelected(currency:Currency):void {
        if(this.selectedToCurrency){
            this.convert(currency.rate, this.selectedToCurrency.rate);
        }
        this.selectedFromCurrency = currency;
    }

    toSelected(currency:Currency):void {
        if(this.selectedFromCurrency){
            this.convert(this.selectedFromCurrency.rate, currency.rate);
        }
        this.selectedToCurrency = currency;
    }

    $onInit():void {
        this.fromCurrencies = this.toCurrencies = this.currencyDataService.getCurrenciesByYear(2016);
    }
}