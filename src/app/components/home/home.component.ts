import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  

  NuevasCanciones: any[] = [];
  loading: boolean;
  error:boolean;
  message_error:string="";

  constructor(private spotifyapi: SpotifyService) {
    this.loading = true;
    this.error= false;
    this.spotifyapi.getNewReleases().subscribe((response: any) => {
      this.NuevasCanciones = response;
      this.loading = false;
    }, (error)=>{
      this.loading=false;
      this.error=true;
      this.message_error=error.error.error.message
    });
  }

  ngOnInit(): void {
  }

}
