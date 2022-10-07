import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles:[
  ]
})

export class BindingComponent implements OnInit {
  titre: string="Apprendre le Data binding dans Angular 10";

  status : boolean= false;

  nom : string="Nada El Kamel";
  constructor() { }

  ngOnInit(): void {
  }

  changerTitre(){
    this.titre= "New title";
  }

}
