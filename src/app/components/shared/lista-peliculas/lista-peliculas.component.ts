import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent  {

  constructor(private router: Router) { }


  @Input() public peliculas: any[];
  @Input() public titulo: string;



  navegar(id:string){
    this.router.createUrlTree(['pelicula', id]);
  }


}
