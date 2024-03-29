import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section>
      <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
          >
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <img
                src="assets/logo.svg"
                width="100%"
                height="auto"
                alt="logo"
                class="bi me-2 brand-logo"
                aria-hidden="true"
              />
            </a>

            <ul
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
            >
              <li>
                <a href="#" class="nav-link px-2 link-secondary">Home</a>
              </li>
              <li><a href="#" class="nav-link px-2 link-dark">Rent</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Buy</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Contact</a></li>
            </ul>

            <form
              class="d-flex align-items-center col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            >
              <input
                type="text"
                [(ngModel)]="searchTerm"
                [ngModelOptions]="{ standalone: true }"
                placeholder="Filter by city"
                class="form-control"
              />
              <button (click)="applySearch()" class="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </header>
    </section>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private housingService: HousingService) {}

  applySearch(): void {
    this.housingService.setSearchTerm(this.searchTerm);
  }
}
