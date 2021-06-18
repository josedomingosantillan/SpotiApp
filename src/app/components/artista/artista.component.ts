import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  datos_artista: any = {};
  loading: boolean = false;
  TopTracks: any[]=[];

  constructor(private router: ActivatedRoute, private servicio: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string) {

    this.servicio.getDetalleArtista(id).subscribe((artista: any) => {
      this.datos_artista = artista;
      this.loading = false;
    })
  }

  getTopTracks(id: string){
    this.servicio.getTopTracks(id).subscribe(response=>{
      this.TopTracks = response;
    })
  }

  ngOnInit(): void {
  }

}
