import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
  <div *ngIf="cargando" style="text-align: center; margin-top: 100px">
  <i class="fas fa-sync fa-spin fa-5x"></i>
  </div>
  `})
export class LoadingComponent {

  @Input() cargando: boolean;


  constructor() { }
 
 

}
