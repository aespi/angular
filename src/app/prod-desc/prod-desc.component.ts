import { Component, OnInit } from '@angular/core';
interface recomChips {
  color?: string;
  text: string;
}
@Component({
  selector: 'app-prod-desc',
  templateUrl: './prod-desc.component.html',
  styleUrls: ['./prod-desc.component.scss']
})
export class ProdDescComponent implements OnInit {
  recData: any[] = [];
  selectedRed: recomChips[] = [];
  selectedRedIdx: number = 0;
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
    recommendedComponent: [{ component: 'Upper', Material: 'Full Grain Leather, Mesh inserts' }],
    chips: [{ color: [], text: '' }]
  };
  selected = { thumb: this.productData.thumbnails[0], tag: this.productData.tags[0] };

  selectRecom(recom: any): void {
    this.selectedRed = [];
    // {
    //   Recommendation: 'Recommendation 1',
    //   Material: ['suede'],
    //   'Closure Type': ['Buckle'],
    //   'Support Type': ['Speed'],
    //   Color: ['Maroon'],
    //   'Sole Width': ['Wide'],
    //   Sustainability: ['Not available'],
    //   Athleisure: ['Not available'],
    //   'Customization Option': ['Not available'],
    //   'Tech Enhanced': ['Not available'],
    //   Vintage: ['Not available']
    // }
    const selected = { ...recom };
    delete selected['Recommendation'];
    Object.keys(selected).forEach(r => {
      if (selected[r].length) {
        selected[r].forEach((c: any) => {
          if (r === 'Color') {
            this.selectedRed.push({ color: c, text: c });
          } else if (c !== 'Not available') {
            this.selectedRed.push({ text: c });
          }
        });
      }
    });
  }

  getRecomData(): void {
    //YOUR API HERE...
    this.recData = [
      {
        Recommendation: 'Recommendation 1',
        Material: ['suede'],
        'Closure Type': ['Buckle'],
        'Support Type': ['Speed'],
        Color: ['Maroon'],
        'Sole Width': ['Wide'],
        Sustainability: ['Not available'],
        Athleisure: ['Not available'],
        'Customization Option': ['Not available'],
        'Tech Enhanced': ['Not available'],
        Vintage: ['Not available']
      },
      {
        Recommendation: 'Recommendation 2',
        Material: ['Leather'],
        'Closure Type': ['Lace'],
        'Support Type': ['Stability'],
        Color: ['Purple'],
        'Sole Width': ['Wide'],
        Sustainability: ['Not available'],
        Athleisure: ['Not available'],
        'Customization Option': ['Not available'],
        'Tech Enhanced': ['Not available'],
        Vintage: ['Not available']
      },
      {
        Recommendation: 'Recommendation 3',
        Material: ['Leather'],
        'Closure Type': ['Hook and Loop'],
        'Support Type': ['Stability'],
        Color: ['Purple'],
        'Sole Width': ['Wide'],
        Sustainability: ['Not available'],
        Athleisure: ['Not available'],
        'Customization Option': ['Not available'],
        'Tech Enhanced': ['Not available'],
        Vintage: ['Not available']
      }
    ];
    this.selectRecom(this.recData[this.selectedRedIdx]);
  }
  ngOnInit(): void {
    this.getRecomData();
  }
}
