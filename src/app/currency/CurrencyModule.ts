import {CurrenciesDataService} from "./CurrenciesDataService";
import {CurrencySelectComponent} from "./common/CurrencySelectComponent";
import {CurrencyConverterComponent} from "./converter/CurrencyConverterComponent";
import {CurrenciesContainer} from "./CurrenciesContainer";
import {CurrencyHistoricContainer} from "./historic/CurrencyHistoricContainer";
export const CURRENCY_MODULE = "currencyModule";

angular
    .module(CURRENCY_MODULE, [
        'ngMaterial'
    ])
    .service(CurrenciesDataService.NAME, CurrenciesDataService)
    .component(CurrencySelectComponent.NAME, new CurrencySelectComponent())
    .component(CurrencyConverterComponent.NAME, new CurrencyConverterComponent())
    .component(CurrencyHistoricContainer.NAME, new CurrencyHistoricContainer())
    .component(CurrenciesContainer.NAME, new CurrenciesContainer());

