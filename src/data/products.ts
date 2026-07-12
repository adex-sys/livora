export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  tag: string;
  description: string;
  accent: string;
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
  },
  {
    id: 2,
    name: 'Aurora Sideboard',
    price: 2180,
    category: 'Storage',
    tag: 'Best Seller',
    description: 'A signature storage piece with warm walnut detailing.',
    accent: 'linear-gradient(135deg, #e8d4b5 0%, #d3c19a 100%)',
  },
  {
    id: 3,
    name: 'Soleil Dining Table',
    price: 3490,
    category: 'Dining',
    tag: 'Limited Edition',
    description: 'Rounded edges and bold proportions for expressive hosting.',
    accent: 'linear-gradient(135deg, #f0ddc4 0%, #e5caab 100%)',
  },
  {
    id: 4,
    name: 'Monaco Sofa',
    price: 4980,
    category: 'Seating',
    tag: 'Signature',
    description: 'Plush cushions and a sculptural silhouette for lounge-worthy evenings.',
    accent: 'linear-gradient(135deg, #e9d8c4 0%, #d6c0a2 100%)',
  },
  {
    id: 5,
    name: 'Sculpted Armchair',
    price: 1680,
    category: 'Accent',
    tag: 'Editor’s Pick',
    description: 'Artful arm support with a softly upholstered profile.',
    accent: 'linear-gradient(135deg, #f5e3c9 0%, #e3d0b1 100%)',
  },
  {
    id: 6,
    name: 'Oak Console',
    price: 2420,
    category: 'Storage',
    tag: 'Signature',
    description: 'Soft brass detailing and a grounded oak structure.',
    accent: 'linear-gradient(135deg, #ebd6b4 0%, #d9c79d 100%)',
  },
];
