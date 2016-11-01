/**
 * Created by HP on 30/10/2016.
 */
import { Component } from '@angular/core';
import { Client } from './client';
@Component({
    selector: 'client-form',
    templateUrl: 'html/Formulaire.html'
})
export class ClientFormComponent {
    private Sexes = [ { Code: 'H', Libelle: 'Homme' },
        { Code: 'F', Libelle: 'Femme' }];
    public client:Client = new Client();
    constructor(){
    }
    onClick_Valider(value:Client): void {
        console.log(value);
    }
    onClick_Annuler(): void {
        console.log("Annuler");
    }
}