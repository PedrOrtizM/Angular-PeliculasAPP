import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey:string = "api_key=65282b1664cd1f307a5e4cd65cc41b72";
  
  url:string="https://api.themoviedb.org/3/discover/movie?"+this.apiKey+
              "&language=es&sort_by=popularity.desc";
  
  ulrImage:string = "https://image.tmdb.org/t/p/w200/"
  
 constructor( private http:HttpClient) { }


    getPopulares(){
            
    return this.http.get(this.url);
    }


}
