import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
  titre: String = "Apprendre la databinding Dans Angular 13";
  status: Boolean = true;
  nom: string = "Yassine Ben Jeddou";
  changerTitre() {
    this.titre = "Mon nouveau titre";
  }


  constructor() { }

  ngOnInit(): void {
  }

}
