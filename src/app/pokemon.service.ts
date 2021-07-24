import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  
}
