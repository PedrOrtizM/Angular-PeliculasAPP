import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent  {

  pelicula:any;
  regresarA:string;
  term:string ="";

  cargando:boolean = true;

  constructor(public mdb:MovieService,
              private router: Router, 
              private route:ActivatedRoute) {
   

   
  this.route.params
       .subscribe(data=>{
   
        this.regresarA = data['pag'];

        if(data['term']){this.term = data['term'];}

        this.mdb.getPelicula(data['id'])
           .subscribe(data=>{
              this.pelicula = data;
              console.log(this.pelicula);
              this.cargando = false;
        });
  });
 
   }



  regresar(){
    this.router.navigate(['/home']);
  }


}
