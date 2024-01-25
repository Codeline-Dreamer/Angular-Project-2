import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredHousingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  filteredHousingLocationList: HousingLocation[] = [];

  // Using inject to get an instance of HousingService in a standalone component
  housingService: HousingService = inject(HousingService);

  constructor() {}

  // ngOnInit(): void {
  //   this.fetchHousingLocations();
  //   this.setupSearchSubscription();
  // }

  ngOnInit(): void {
    this.fetchHousingLocations(); // Ensure this is called first to populate the list
    this.housingService.getSearchTerm().subscribe({
      next: (searchTerm) => {
        this.filterLocations(searchTerm);
      },
      error: (error) =>
        console.error('Error with search term subscription:', error),
    });
  }

  // fetchHousingLocations(): void {
  //   this.housingService.getAllHousingLocations().then((housingLocationList) => {
  //     this.housingLocationList = housingLocationList;
  //     this.filteredHousingLocationList = [...this.housingLocationList]; // Initially, show all locations
  //   });
  // }

  fetchHousingLocations(): void {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList) => {
        console.log('Fetched locations:', housingLocationList); // Check fetched data
        this.housingLocationList = housingLocationList;
        this.filteredHousingLocationList = [...this.housingLocationList];
      })
      .catch((error) => console.error('Fetching locations failed:', error)); // Catch and log any error
  }

  setupSearchSubscription(): void {
    this.housingService.getSearchTerm().subscribe((searchTerm) => {
      this.filterLocations(searchTerm);
    });
  }

  // filterLocations(searchTerm: string): void {
  //   if (!searchTerm) {
  //     this.filteredHousingLocationList = [...this.housingLocationList];
  //   } else {
  //     this.filteredHousingLocationList = this.housingLocationList.filter(
  //       (location) =>
  //         location.city.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }
  // }

  filterLocations(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredHousingLocationList = [...this.housingLocationList];
    } else {
      this.filteredHousingLocationList = this.housingLocationList.filter(
        (location) =>
          location.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
