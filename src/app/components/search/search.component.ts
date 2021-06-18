import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  cargando: boolean = false;

  constructor(private spotifisearch: SpotifyService) { }

  buscar(search: string) {
    this.cargando = true;
    this.spotifisearch.getArtista(search).subscribe((response: any) => {

      this.artistas = response;
      this.cargando = false;
    })
  }



}
