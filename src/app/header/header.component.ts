import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
                <a href="#" class="nav-link px-2 link-secondary">Overview</a>
              </li>
              <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
            </ul>

            <form
              class="d-flex align-items-center col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            >
              <input
                type="text"
                class="form-control me-2"
                placeholder="Filter by city"
                aria-label="Filter by city"
              />
              <button type="button" class="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      </header>
    </section>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
