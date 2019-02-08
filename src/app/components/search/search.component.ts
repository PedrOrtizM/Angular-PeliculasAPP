import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

   peliculas:any[] =[];
   termino:string = "";



   
  constructor(public mdb:MovieService, public route:ActivatedRoute) {
    
    this.route.params
        .subscribe(parametros=>{

        if(parametros['term']){ 
          this.termino = parametros['term']
          this.getResultado(this.termino);
        }
        else{
          this.getResultado("a");

        }
    })
   }


   buscar(){

      if(this.termino === "") this.getResultado("a");
    
      else this.getResultado(this.termino);

   }
 
   getResultado(param:string){

    this.mdb.getSearch(param)
            .subscribe(data=>{

            this.peliculas = data['results'];
    })
  }




}
