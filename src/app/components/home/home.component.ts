import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas:any[] = [];
  peliculasKids:any[] = [];
  peliculasCar:any[] = [];
  cargando:boolean= true;


  constructor(public mdb:MovieService) {


    this.cargando = true;
    
    this.mdb.getPopulares().subscribe((data:any[])=>{
      this.peliculas = data["results"];
      this.peliculas = this.peliculas.slice(0,8)
      this.cargando = false;
           
    })

    this.mdb.getPopularesKids().subscribe((data:any[])=>{
      this.peliculasKids = data["results"];
      this.peliculasKids = this.peliculasKids.slice(0,8)
      this.cargando = false;
           
    })
    this.mdb.getCartelera().subscribe((data:any[])=>{
      this.peliculasCar = data["results"];
      this.peliculasCar = this.peliculasCar.slice(0,8)
      this.cargando = false;
           
    })



    

   }

  ngOnInit() {
  }
 
  

}
