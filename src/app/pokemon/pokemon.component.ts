import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonInfo!: any;

  constructor(
    private pokemonService: PokemonService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      this.pokemonService.getPokemonById(+id)
        .subscribe(data => {
          this.pokemonInfo = data;
          console.log(data);
        })
    }
  }

}
