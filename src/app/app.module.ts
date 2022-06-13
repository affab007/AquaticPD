import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AquaticFoodsComponent } from './aquatic-foods/aquatic-foods.component';
import { DistributionEditComponent } from './distribution-list/distribution-edit/distribution-edit.component';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import { AquaticFoodListComponent } from './aquatic-foods/aquatic-food-list/aquatic-food-list.component';
import { AquaticFoodDetailComponent } from './aquatic-foods/aquatic-food-detail/aquatic-food-detail.component';
import { AquaticFoodItemComponent } from './aquatic-foods/aquatic-food-item/aquatic-food-item.component';
import { DropdownDirective } from './aquatic-foods/aquatic-food-detail/dropdown.directive';
import { Aquatics } from './Service/aquatics.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AquaticFoodsComponent,
    DistributionEditComponent,
    DistributionListComponent,
    AquaticFoodListComponent,
    AquaticFoodDetailComponent,
    AquaticFoodItemComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Aquatics],
  bootstrap: [AppComponent]
})
export class AppModule { }
