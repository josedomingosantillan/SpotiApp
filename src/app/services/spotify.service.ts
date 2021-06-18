import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDs6P0LKEO1XieX_LBssvkllRUEAQ6E-ZzxWu7668U56o2wAKarBxP-tHsD3nsFBhws1On0XU5-7NfzREZ93sHU71TffXJSh6ZuHtUTvVxsml4mA1VLjRJ1rMMaujlvFdmygKS6b0ui8YVTxB7sY4dJejgH4ZXyD-I'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20').pipe(map((response: any) => response['albums'].items))
  };


  getArtista(search: string) {

    return this.getQuery(`search?q=${search}&type=artist&limit=15`).pipe(map((response: any) => response['artists'].items))
  }

  getDetalleArtista(id: string) {
    return this.getQuery(`artists/${id}`);

  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((response:any)=> response['tracks']));

  }


}

