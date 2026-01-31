
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Mains' | 'Desserts' | 'Drinks';
  image: string;
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'Interior' | 'Food' | 'Events';
}

export interface ReservationDetails {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
