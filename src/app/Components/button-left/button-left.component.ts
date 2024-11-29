import { Component, EventEmitter, inject, Output } from '@angular/core';


@Component({
  selector: 'api-button-left',
  standalone: true,
  templateUrl: './button-left.component.html',
  styleUrl: './button-left.component.css'
})
export class ButtonLeftComponent {

  constructor(){}

  @Output() prevPageEvent = new EventEmitter<string>();

  paginaAnterior(){
  
    this.prevPageEvent.emit();

  }
}
