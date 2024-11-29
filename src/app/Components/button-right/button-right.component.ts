import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RickApiService } from '../../Services/rick-api.service';


@Component({
  selector: 'api-button-right',
  standalone: true,
  providers: [RickApiService],
  templateUrl: './button-right.component.html',
  styleUrl: './button-right.component.css'
})
export class ButtonRightComponent {

  @Output() nextPageEvent = new EventEmitter<string>();
  
  paginaSiguiente(): void {

    this.nextPageEvent.emit();

  }
}