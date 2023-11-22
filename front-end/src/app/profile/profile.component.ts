import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router) {}

  navigateToMyChampionships() {
    this.router.navigate(['/my-championships']);
  }

  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  deleteAccount() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
