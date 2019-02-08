import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey:string = "65282b1664cd1f307a5e4cd65cc41b72";

  url:string="https://api.themoviedb.org/3/discover/movie?api_key="+this.apiKey+
             "&language=es&sort_by=popularity.desc";

      
  

  
 constructor( private http:HttpClient) { }


    getPopulares(){

      return this.http.get(this.url);

    }

    getPopularesKids(){
            
      return this.http.get(this.url+"&certification_country=US&certification.lte=G");

      }

    getCartelera(){
    
       return this.http.get(this.url + "&primary_release_date.gte="+this.getFecha())
    }



    getSearch(termino:string){
      let url="https://api.themoviedb.org/3/search/movie?api_key="+this.apiKey+"&language=es&query="+termino
      return this.http.get(url);

    }
    

    getPelicula(id:string ){
   
      let urlpelicula = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+this.apiKey+"&language=es";
      return this.http.get(urlpelicula);

    }

    getFecha(){

      let fecha = new Date();
      let dia:any = fecha.getDate();
      let mes:any = fecha.getMonth() + 1;
      let anio = fecha.getFullYear();
      
      if( dia < 10){
        dia = "0"+dia;
      }

      if( mes < 10){
        mes = "0"+mes;
      }
      return anio+"-"+mes+"-"+dia;

    }


}
