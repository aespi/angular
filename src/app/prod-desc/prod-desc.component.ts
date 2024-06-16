import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-desc',
  templateUrl: './prod-desc.component.html',
  styleUrls: ['./prod-desc.component.scss']
})
export class ProdDescComponent {
  productData = {
    thumbnails: ['../../assets/shoe1.png', '../../assets/shoe2.png', '../../assets/shoe3.png'],
    title: 'Black + leather + tops',
    desc: {
      main: 'Unleash your potential with the Black & Purple High-Top Performance Leather Shoes',
      detail:
        'Designed for athletes who demand the best, these shoes combine premium materials with cutting edge technology for unmatched Simance on and off the court.',
      bullet: {
        'Dynamic Color Scheme':
          'A striking combination of black and purple that adds a bold look to your athletic wardrobe.',
        'High-Top Design':
          'Provides extra ankle support and stability, perfect for high-impact sports and activities.',
        'Premium Leather Upper':
          'Ensures durability and a luxurious feel, molling to your foot over time.',
        'Breathable Construction':
          'Strategically placed perforations enhance airflow, keeping your feet cool and comfortable.',
        'Advanced Cushioning':
          'High-performance midaole absorbs impact, providing superior comfort and responsiveness.',
        'Durable Rubber Outsole':
          'Offers oxceliant traction and stability on a variety of surfaces.'
      }
    },
    priceRange: { min: 120, max: 150, start: 0, end: 500 },
    tags: ['Alpha', 'Beta', 'Theta'],
    recommendedComponent: { component: 'Material' }
  };
  selected = { thumb: this.productData.thumbnails[0], tag: this.productData.tags[0] };
}
