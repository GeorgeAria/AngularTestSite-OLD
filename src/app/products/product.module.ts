import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    //"RouterModule.forChild()" is used since we are calling RouterModule from a feature array.
    
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },

      //Parameters can be used to view a specific object/product.
      //In the "path" variable, a parameter value is preceded by "/:". Multiple parameters are defined this way.

      {
        path: 'products/:id',

        //"ProductDetailGuard" is used to guard the product detail route. It is added after "canActivate:".
        //"canActivate" is the method from the "product-detail.guard.ts" file.

        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
