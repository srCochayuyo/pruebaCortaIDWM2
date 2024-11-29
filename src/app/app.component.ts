import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Character } from './Interface/character';
import { RickApiService } from './Services/rick-api.service';
import { FlowbiteService } from './Services/flowbite.service';
import { responseRickApi } from './Interface/responseRickApi';
import { TitleCasePipe } from '@angular/common';
import { ButtonLeftComponent } from './Components/button-left/button-left.component';
import { ButtonRightComponent } from './Components/button-right/button-right.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleCasePipe, ButtonLeftComponent,RouterOutlet,ButtonRightComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  characterDetails: Character[] = [];
  queryName: string = '';
  nextUrl: string | null = null;
  prevUrl: string | null = null;
  
  constructor(
    private flowbiteService: FlowbiteService,
    private rickService: RickApiService

  ){}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(() => {});

    this.getCharacters();
    
  }

  getCharacters(url?: string, name?: string): void {
    const observer = {
      next: (characterData: responseRickApi) => {
        this.characters = characterData.results;
        this.nextUrl = characterData.info.next;
        this.prevUrl = characterData.info.prev;
      },
      error: (error: any) => {
        console.error('Error fetching characters:', error);
      },

    };

    if(url)
    {
      this.rickService.getCharactersByUrl(url).subscribe(observer);
    } else if (name) {

      this.rickService.getCharacterByName(name).subscribe(observer);
      
    } else {
      this.rickService.getCharacters().subscribe(observer);
      
    }
  
  }

  toNextPage(): void {  
 
    if(this.nextUrl){
      this.getCharacters(this.nextUrl);
    }
  }

  toPreviousPage(): void {

    if(this.prevUrl){
      this.getCharacters(this.prevUrl);
    }
  }

  

}