import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { DetailsComponent } from '../details/details.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, DetailsComponent],
  template: `
    <section>
      <form (submit)="filterResults(filter.value, $event)">
        <input
          type="text"
          placeholder="Filter by city"
          #filter
          (keyup)="filterResults(filter.value, $event)"
        />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value, $event)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  filterResults(text: string, event: Event) {
    event.preventDefault();

    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = this.housingLocationList;
      });
  }
}
