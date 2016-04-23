import IComponentOptions = angular.IComponentOptions;
import {CurrenciesDataService} from "../CurrenciesDataService";
import {Currency} from "../common/Currency";
export class CurrencyHistoricContainer implements IComponentOptions {
    static NAME:string = "currencyHistoric";

    template:string = `
        <h1 layout="row" layout-align="center">Currencies of the world, base currency is 1 USD</h1>
        <div layout="row"> 
            <currencies-select flex="50"
                show-selected="true"
                currencies="$ctrl.latest" 
                title="Latest rates">
            </currencies-select>
            <currencies-select flex="50"
                show-values-as-rates="true"
                currencies="$ctrl.currenciesFrom2001" 
                title="Rates from 2001">
            </currencies-select> 
        </div>
    `;
    controller:Function = CurrencyHistoricController;
}
export class CurrencyHistoricController {

    public latest:Currency[];
    public currenciesFrom2001:Currency[];

    static $inject = [CurrenciesDataService.NAME];
    constructor(private currenciesDataService:CurrenciesDataService){}

    $onInit():void{
        this.latest = this.currenciesDataService.getLatestCurrencies();
        this.currenciesFrom2001 = this.currenciesDataService.getCurrenciesByYear(2001);
    }
}