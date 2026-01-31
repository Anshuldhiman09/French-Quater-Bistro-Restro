
import { MenuItem, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Bourbon Street Shrimp',
    description: 'Jumbo gulf shrimp sautéed in a spicy bourbon-infused butter sauce with garlic and scallions.',
    price: '$16',
    category: 'Appetizers',
    image: 'https://picsum.photos/id/488/600/400',
    featured: true
  },
  {
    id: '2',
    name: 'Gumbo Yaya',
    description: 'A dark, rich roux base with chicken, smoked andouille sausage, and the "holy trinity" of vegetables.',
    price: '$12',
    category: 'Appetizers',
    featured: true,
    image: 'https://picsum.photos/id/292/600/400'
  },
  {
    id: '3',
    name: 'Jambalaya Royale',
    description: 'Classic Creole rice dish with chicken, andouille sausage, ham, and bayou shrimp in a spicy tomato base.',
    price: '$28',
    category: 'Mains',
    image: 'https://picsum.photos/id/493/600/400',
    featured: true
  },
  {
    id: '4',
    name: 'Blackened Catfish',
    description: 'Fresh catfish fillet rubbed with Caribbean spices and seared in a cast iron skillet. Served with dirty rice.',
    price: '$26',
    category: 'Mains',
    image: 'https://picsum.photos/id/674/600/400'
  },
  {
    id: '5',
    name: 'Etouffée de Langouste',
    description: 'Succulent crawfish tails smothered in a rich, buttery blonde roux with authentic NOLA spices.',
    price: '$32',
    category: 'Mains',
    image: 'https://picsum.photos/id/625/600/400'
  },
  {
    id: '6',
    name: 'Bananas Foster',
    description: 'Bananas sautéed in brown sugar, cinnamon, and dark rum, flamed tableside and served over vanilla bean ice cream.',
    price: '$14',
    category: 'Desserts',
    image: 'https://picsum.photos/id/431/600/400'
  },
  {
    id: '7',
    name: 'Beignets',
    description: 'Puffy deep-fried pastries dusted with a mountain of powdered sugar. A French Quarter essential.',
    price: '$9',
    category: 'Desserts',
    image: 'https://picsum.photos/id/1060/600/400'
  },
  {
    id: '8',
    name: 'Hurricane Cocktail',
    description: 'A potent mix of light and dark rums, passion fruit juice, orange juice, and a splash of grenadine.',
    price: '$15',
    category: 'Drinks',
    image: 'https://picsum.photos/id/453/600/400'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: 'https://picsum.photos/id/42/800/600', alt: 'Elegant dining room', category: 'Interior' },
  { id: 'g2', url: 'https://picsum.photos/id/163/800/600', alt: 'Signature Jambalaya', category: 'Food' },
  { id: 'g3', url: 'https://picsum.photos/id/225/800/600', alt: 'Live jazz event', category: 'Events' },
  { id: 'g4', url: 'https://picsum.photos/id/326/800/600', alt: 'Chef Andre plating', category: 'Events' },
  { id: 'g5', url: 'https://picsum.photos/id/429/800/600', alt: 'Gumbo appetizer', category: 'Food' },
  { id: 'g6', url: 'https://picsum.photos/id/431/800/600', alt: 'Bar area', category: 'Interior' },
];

export const CONTACT_INFO = {
  address: '123 Royal Street, New Orleans, LA 70130',
  phone: '(504) 555-0123',
  email: 'bonjour@fqbistro.com',
  hours: [
    { days: 'Mon - Thu', hours: '11:00 AM - 10:00 PM' },
    { days: 'Fri - Sat', hours: '11:00 AM - 11:30 PM' },
    { days: 'Sunday', hours: '10:00 AM - 9:00 PM (Brunch until 3 PM)' }
  ],
  socials: {
    facebook: '#',
    instagram: '#',
    twitter: '#'
  }
};
