import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  sidebarVisible: boolean = false; 

  constructor(private router: Router) {}

  //Funcionalidad para ver el Sidemenu

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }


  //Funcionalidad para ir a una liga y desaparecer el menu una vez que se le da click
  

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.sidebarVisible = false; 
  }
}
