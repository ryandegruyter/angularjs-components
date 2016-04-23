import IComponentOptions = angular.IComponentOptions;
import {Currency} from "./Currency";

export class CurrencySelectComponent implements IComponentOptions {
    static NAME:string = 'currenciesSelect';
    bindings:any = {
        title: '@',
        currencies: '<',
        onSelected: '&',
        showSelected: '<',
        showValuesAsRates: '<'
    };

    controller:Function = CurrencySelectComponentController;
    template:string = require('./currency-component-template.html');
}
export class CurrencySelectComponentController {
    public title:string;
    public currencies:Currency[];
    public onSelected:Function;
    public showSelected:boolean;
    public showValuesAsRates:boolean;
    public selected:Currency;

    constructor() {
    }

    onCurrencyClick(currency:Currency) {
        this.selected = currency;
        this.onSelected({selectedCurrency: currency});
    }
}