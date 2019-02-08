import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(pelicula: any , tipo:boolean): any {

    let url = "https://image.tmdb.org/t/p/w";

    if(tipo){

      if(pelicula.poster_path){return url+"400"+ pelicula.poster_path;}

      else{
        if(pelicula.backdrop_path){ return url+"400"+ pelicula.backdrop_path;}
        else{ return "assets/noimage.png";}
      }
    }
    else{
      
      if(pelicula.backdrop_path){return url+"300"+ pelicula.backdrop_path ;}
      else{
        if(pelicula.poster_path){return url+"300"+ pelicula.poster_path;}
        else{return "assets/noimage.png";}
      }
    }

  }

}
