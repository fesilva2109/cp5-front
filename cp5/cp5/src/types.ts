export type MarsPhoto = {
    map(arg0: (photo: any) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    sol: number; 
    camera: {
      id: number;
      name: string;
      rover_id: number;
      full_name: string;
    };
    img_src: string; 
    earth_date: string; 
    rover: {
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
    };
  }
  
 
export type TipoTeoria = {
  id: number;           
  autor: string;       
  titulo: string;      
  tema: string;       
  teoria: string;          
}


  
  export type NEO = {
    id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: number;
        estimated_diameter_max: number;
      };
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: Array<{
      close_approach_date: string;
      relative_velocity: {
        kilometers_per_hour: string;
      };
      miss_distance: {
        astronomical: string;
        lunar: string;
        kilometers: string;
      };
    }>;
  }
  
  export type  EarthImageryResponse = {
    date: string;
    id: string;
    resource: {
      dataset: string;
      planet: string;
    };
    service_version: string;
    url: string; 
  }

  export type urlImg = {
    url:string
  }