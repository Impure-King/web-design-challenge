import { Component, Input } from '@angular/core';
import { NavbarListItems } from '../navbar-list-items';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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
  resize_fn:Function = function Resize(font_size:number, height:number){
    document.getElementById('')
  };

}
