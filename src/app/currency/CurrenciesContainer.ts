import IComponentOptions = angular.IComponentOptions;
import RouteDefinition = angular.RouteDefinition;
import {CurrencyConverterComponent} from "./converter/CurrencyConverterComponent";
import {CurrencyHistoricContainer} from "./historic/CurrencyHistoricContainer";
export class CurrenciesContainer implements IComponentOptions {
    static NAME:string = 'currenciesConverter';

    $routeConfig:RouteDefinition[] = [
        CurrenciesContainerRoutes.ROUTE_CONVERTER,
        CurrenciesContainerRoutes.ROUTE_HISTORY
    ];

    template:string = `
        <div layout="column" layout-align="center center">
            <a ng-link="['Converter']">Converter</a>
            <a ng-link="['History']">History of currencies</a>
        </div>
        <ng-outlet></ng-outlet>
    `
}
export class CurrenciesContainerRoutes {
    static CONVERTER:string = 'Converter';
    static HISTORY:string = 'History';

    static ROUTE_CONVERTER:RouteDefinition = {
        path: '/converter',
        name: CurrenciesContainerRoutes.CONVERTER,
        component: CurrencyConverterComponent.NAME,
    };

    static ROUTE_HISTORY:RouteDefinition = {
        path: '/history',
        name: CurrenciesContainerRoutes.HISTORY,
        component: CurrencyHistoricContainer.NAME,
    }
}