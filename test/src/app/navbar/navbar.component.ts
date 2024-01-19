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
    // Getting the navbar element:
    const navbar: HTMLElement = document.getElementById("first-navbar")!;
    navbar.style.height = `${height}px`; // Setting its height

    // Getting the tags
    const navbarElements:HTMLCollectionOf<Element> = document.getElementsByClassName("navbar-list-item")!;

    // Looping and Resizing:
    for (let i = 0; i < navbarElements.length; ++i) {
      let element:HTMLElement = navbarElements.item(i) as HTMLElement;
      element.style.fontSize = `${font_size}px`;
      element.style.paddingTop = `${(height - font_size)/2}px`;
      element.style.paddingBottom = `${(height - font_size)/2}px`;
    }
  }
}
