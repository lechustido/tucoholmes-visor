import { CommonModule,  } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoDisplayComponent } from "./info-display.component";
import { RouterModule } from "@angular/router";
import { InfoDisplayRoutingModule } from "./info-display.routing.module";
import { IesaTcCommonAngularCompleteTableComponent} from 'iesa-tc-common-angular-complete-table-17';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { DetailComponent } from "./detail/detail.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InfoDisplayRoutingModule,
  ],
  declarations: [
    InfoDisplayComponent,
  ],
  providers: [
   
  ]
})
export class InfoDisplayModule {
}
