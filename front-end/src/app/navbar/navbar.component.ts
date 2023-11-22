import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor() { }

  limparLocalStorage(): void {
    localStorage.clear(); // Isso limpará todos os dados do Local Storage
    console.log('Local Storage foi limpo!');
    window.location.reload();
  }
}
