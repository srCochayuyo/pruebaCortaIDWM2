export interface Character {
    name: string;                       
    url: string;
    id: string;                       
    status: string;          
    species: string;                    
    location: {
      name: string;
      url: string;
    };
    image: string;
  }