import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex2';

  lista!: any[];

  constructor(private pokemon: PokemonService) {
    
  }

  ngOnInit () {
    this.pokemon.getPokemons()
      .subscribe(data => {
        this.lista = data.results;
      });
  }
}
