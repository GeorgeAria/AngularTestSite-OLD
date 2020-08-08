import { Component } from '@angular/core';

//The @ symbol means that this is a decorator, which tells Angular that this is a component.
//Without this "Component Decorator", this is not a component.

@Component({

  //The value given to the "selector" value is the component's name in the index.html code at the root of the project.
  //It is not needed if the component is not used in ANY HTML.
  //This value is known as a "directive", which is a custom HTML element/attribute.
  //There are Angular-based directives as well, like ngIf and ngFor.

  selector: 'pm-root',

   //"template" and "templateUrl" can define the view's HTML.
   //"template" should probably not be used, unless this is a short template. 
   //"templateUrl" may be more useful here for longer templates.

 /*template: `
    <nav class='navbar navbar-expand navbar-dark bg-dark'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/tradeShift']">Trade Shift</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,*/
  templateUrl: './app.component.html',

  //"stylesUrls" defines an array of stylesheet paths, so multiple stylesheets can be used.
  
  styleUrls: ['./app.component.css']
})

//PascalCasing is used for the Component name
//"Component" should be appended to the end of the class name
export class AppComponent {

  //Any logic/methods, for things like hiding/showing an image, should be in this class

  pageTitle = 'George\'s Test Application';
}
