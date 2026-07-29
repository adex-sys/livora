export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  tag: string;
  description: string;
  accent: string;
  images?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Velora Lounge Chair',
    price: 1240,
    category: 'Seating',
    tag: 'New Arrival',
    description: 'Soft curves and sculptural comfort for your reading nook.',
    accent: 'linear-gradient(135deg, #f3e0c5 0%, #dfcfb5 100%)',
    images: ['https://res.cloudinary.com/ejmg0vku/image/upload/v1784153785/Parkrose_Chair_Watson_Velvet_Moss_jgj17h.jpg']
  },
  {
    id: 2,
    name: 'Aurora Sideboard',
    price: 2180,
    category: 'Storage',
    tag: 'Best Seller',
    description: 'A signature storage piece with warm walnut detailing.',
    accent: 'linear-gradient(135deg, #e8d4b5 0%, #d3c19a 100%)',
    images:[ 'https://res.cloudinary.com/ejmg0vku/image/upload/v1784155327/Fairmont_Park_Aurora_Kaszmir_4S1D_sideboard_with_drawers___Wayfair_co_osijur.jpg' ]
  },
  {
    id: 3,
    name: 'Soleil Dining Table',
    price: 3490,
    category: 'Dining',
    tag: 'Limited Edition',
    description: 'Rounded edges and bold proportions for expressive hosting.',
    accent: 'linear-gradient(135deg, #f0ddc4 0%, #e5caab 100%)',
    images: ['https://res.cloudinary.com/ejmg0vku/image/upload/v1784155636/DCWe%CC%81ditions_dcw_editions___Profil_Instagram_tatzol.jpg']
  },
  {
    id: 4,
    name: 'Monaco Sofa',
    price: 4980,
    category: 'Seating',
    tag: 'Signature',
    description: 'Plush cushions and a sculptural silhouette for lounge-worthy evenings.',
    accent: 'linear-gradient(135deg, #e9d8c4 0%, #d6c0a2 100%)',
    images:[ 'https://res.cloudinary.com/ejmg0vku/image/upload/v1784155875/Modern_Bohemian_Monaco_Collection_Distressed_Area_Rug_Indoor_Outdoor_Floral_Multicolor_lbuxsl.jpg' ]
  },
  {
    id: 5,
    name: 'Sculpted Armchair',
    price: 1680,
    category: 'Accent',
    tag: 'Editor’s Pick',
    description: 'Artful arm support with a softly upholstered profile.',
    accent: 'linear-gradient(135deg, #f5e3c9 0%, #e3d0b1 100%)',
    images:[ 'https://res.cloudinary.com/ejmg0vku/image/upload/v1784156424/LIVORA_Lounge_Chair_bgiofj.png' ]
  },
  {
    id: 6,
    name: 'Oak Console',
    price: 2420,
    category: 'Storage',
    tag: 'Signature',
    description: 'Soft brass detailing and a grounded oak structure.',
    accent: 'linear-gradient(135deg, #ebd6b4 0%, #d9c79d 100%)',
    images:[ 'https://res.cloudinary.com/ejmg0vku/image/upload/v1784156574/Elegant_Contemporary_Living_Room_with_Modern_Wooden_Furniture___Interior_Design_btpxqy.jpg' ]
  },
];
