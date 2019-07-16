import { NgModule } from '@angular/core';
import { ToasterModule } from 'angular2-toaster';
import { ThemeModule } from '../../@theme/theme.module';

// components
import { RetrospectiveComponent } from './retrospective.component';
import { CourseComponent } from './course/course.component';

const COMPONENTS = [
  RetrospectiveComponent,
  CourseComponent,
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
export class RetrospectiveModule { }
