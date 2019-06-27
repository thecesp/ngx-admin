import { NgModule } from '@angular/core';
import { ToasterModule } from 'angular2-toaster';
import { ThemeModule } from '../../@theme/theme.module';

// components
import { BlogComponent } from './blog.component';
import { CourseComponent } from './course/course.component';

const COMPONENTS = [
  BlogComponent,
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
export class BlogModule { }
