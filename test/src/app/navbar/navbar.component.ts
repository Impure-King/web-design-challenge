import { Component, Input } from '@angular/core';
import { NavbarListItems } from '../navbar-list-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() color!: string;
  navbarItemsList:NavbarListItems[] = [
    {
      listName: "Home Page",
      itemURL: "home",
    },
    {
      listName: "Projects",
      itemURL: "#projects",
    }
  ];

  resize_fn = (height:number, font_size: number) => {
    const navbar: HTMLElement = document.getElementById("first-navbar")!;
    console.log(navbar);
    navbar.style.height = `${height}px`;
    const navbarElements = document.getElementsByClassName("navbar-list-item");
    for (let navbarElement of navbarElements){
      navbarElement.style.padding = ``;
    }
  }
}
