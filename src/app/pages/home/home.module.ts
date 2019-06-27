import { NgModule } from '@angular/core';
import { ToasterModule } from 'angular2-toaster';
import { ThemeModule } from '../../@theme/theme.module';

// components
import { HomeComponent } from './home.component';

const COMPONENTS = [
  HomeComponent,
];

const SERVICES = [
];

const MODULES = [
  ThemeModule,
  ToasterModule.forRoot(),
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class HomeModule { }
