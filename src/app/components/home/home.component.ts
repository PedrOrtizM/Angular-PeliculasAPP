import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas:any[] = [];

  constructor(private mdb:MovieService) {

    this.mdb.getPopulares().subscribe((data:any[])=>{
      this.peliculas = data["results"];
      console.log( this.peliculas );
      console.log(data);
      
           
    })
    

   }

  ngOnInit() {
  }
 
  

}
