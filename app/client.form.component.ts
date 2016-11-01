/**
 * Created by HP on 30/10/2016.
 */
import { Component } from '@angular/core';
import { Client } from './client';
@Component({
    selector: 'client-form',
    templateUrl: 'app/html/Formulaire.html'
})
export class ClientFormComponent {
    private Sexes = [ { Code: 'H', Libelle: 'Homme' },
        { Code: 'F', Libelle: 'Femme' }];
    public client:Client = new Client();
    constructor(){
        this.client.Nom = "CHAABANE";
        this.client.Prenom = "Ramy";
        this.client.Sexe="H";
        this.client.AdresseMail="test@gmail.com"
    }
    onClick_Valider(value:Client): void {
        console.log(value);
    }
    onClick_Annuler(): void {
        console.log("Annuler");
    }
}