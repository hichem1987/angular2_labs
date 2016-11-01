"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by HP on 30/10/2016.
 */
var core_1 = require('@angular/core');
var client_1 = require('./client');
var ClientFormComponent = (function () {
    function ClientFormComponent() {
        this.Sexes = [{ Code: 'H', Libelle: 'Homme' },
            { Code: 'F', Libelle: 'Femme' }];
        this.client = new client_1.Client();
        this.client.Nom = "CHAABANE";
        this.client.Prenom = "Ramy";
        this.client.Sexe = "H";
        this.client.AdresseMail = "test@gmail.com";
    }
    ClientFormComponent.prototype.onClick_Valider = function (value) {
        console.log(value);
    };
    ClientFormComponent.prototype.onClick_Annuler = function () {
        console.log("Annuler");
    };
    ClientFormComponent = __decorate([
        core_1.Component({
            selector: 'client-form',
            templateUrl: 'app/html/Formulaire.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClientFormComponent);
    return ClientFormComponent;
}());
exports.ClientFormComponent = ClientFormComponent;
//# sourceMappingURL=client.form.component.js.map