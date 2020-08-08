//"BrowserModule" allows us to use the ngIf and ngFor structural directives in our HTML templates. Should only be imported by AppModule.
//"HttpClientModule" allows us to use the "HttpClient" service in our "product.service.ts" file (or any other class).
//-"RouterModule" registers the router service and declares the router directives (routerLink and router-outlet) 
//that we need to use routing.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { TradeShiftModule } from './trade-shift/trade-shift.module';

//"@NgModule" is a decorator that tells Angular that this is an Angular module.

@NgModule({

//"declarations" allows us to use the values within the Components that we import.
//For example, we could use the "selector" value from another component and use it's HTML template.
//NOTE: Only declare components, directives and pipes.
//They must also only belong to one Angular module.
//They are private by default, so they must be in the "exports" array in an Angular module to use them elsewhere.

  declarations: [
    AppComponent,
    WelcomeComponent 
  ],

  //"imports" allows us to important all types of modules, including Angular modules, 3rd party, etc.
  //Importing a module gives you access to any exported components, directives and pipes from that module.
  //NOTE: Importing a module that does NOT give you access to its imported modules.
  //-For example, imagine if AppModule imported SharedModule. If FormsModule was imported by the SharedModule 
  //but SharedModule didn't export it, AppModule could not use it.

  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    TradeShiftModule,

    //This is where the "routerLink" goes to find the routes it needs via the route objects within the anonymous array below.
    //The "path" variable matches the value that "routerLink" is given.
    //The following variable is the component that will contain the HTML template to load.
    //-"redirectTo" will redirect to a particular path, and "pathMatch" matches the entire client side portion
    //of the path when it is empty.
    //"**" is the wildcard route and is used for "404 Not Found" pages.
    //-NOTE: If you would like to use hash-style routing, after the array argument, you would add the following:
    //{useHash : true}
    //NOTE: Order of the routes matters since the routerLink will go from the first route in the array to the last. 

    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    
  ],
  //"bootstrap" allows the AppComponent to provide the directive used in the index.html file.
  //It defines the starting point of the application and should only be used in the root application module, AppModule.

  bootstrap: [AppComponent]

  //-In older Angular code, you may see a "providers" array that imported service, but this no longer makes sense
  //given how services work.

})
export class AppModule { }
