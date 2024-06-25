import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
export interface Item {
  attribute: string;
  flag: boolean;
  value: string;
}
type GroupedData = Record<string, Item[]>;

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  groupedData: GroupedData = {};
  ngOnInit(): void {
    this.apiService.getData().subscribe((data: Item[]) => {
      this.groupedData = this.groupByAttribute(data);
    });
  }
  groupByAttribute(data: Item[]): GroupedData {
    return data.reduce((acc: any, item: any) => {
      if (!acc[item.attribute]) {
        acc[item.attribute] = [];
      }
      acc[item.attribute].push(item);
      return acc;
    }, {} as GroupedData);
  }
  updateFlag(event: any, attribute: string): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement as unknown as Item;
    const group: Item[] = this.groupedData[attribute];
    const item: Item | undefined = group.find(g => g.value === selectedValue.value);
    if (item) {
      item.flag = true;
    }
    this.updatePipe();
  }

  updatePipe(): void {
    this.groupedData = JSON.parse(JSON.stringify(this.groupedData));
  }
}
