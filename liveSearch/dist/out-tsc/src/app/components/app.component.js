import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = /** @class */ (() => {
    let AppComponent = class AppComponent {
        constructor() {
            this.title = 'liveSearch';
            this.keyword = 'name';
            this.data = [
                {
                    id: 1,
                    name: "Pintores",
                    section: ""
                },
                {
                    id: 2,
                    name: "Pintar Interior de Vivienda",
                    section: " <b> en Pintores</span>"
                },
                {
                    id: 3,
                    name: "Quitar o Poner Gotelé",
                    section: " <span class='ss'> en Pintores</span>"
                },
                {
                    id: 4,
                    name: "PintarExterior de Casa(Unifamiliar)",
                    section: " <span class='ss'> en Pintores</span>"
                }
            ];
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
})();
export { AppComponent };
//# sourceMappingURL=app.component.js.map