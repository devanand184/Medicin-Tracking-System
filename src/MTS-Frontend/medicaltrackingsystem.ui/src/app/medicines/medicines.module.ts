import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { MedicinesDetailComponent } from './medicines-detail/medicines-detail.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MedicinesAddComponent } from './medicines-add/medicines-add.component';


@NgModule({
  declarations: [MedicinesListComponent, MedicinesDetailComponent, MedicinesAddComponent],
  imports: [
    RouterModule.forChild([
      { path: 'medicines', component: MedicinesListComponent },
      {
        path: 'medicines/:id',
        component: MedicinesDetailComponent
      },
      {
        path: 'add-medicines',
        component: MedicinesAddComponent
      }
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicinesModule { }
