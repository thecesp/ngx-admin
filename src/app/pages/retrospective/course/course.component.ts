import { Component, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./course.component.scss'],
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;

  @Input()
  title: string = '';
  @Input()
  image: string = '';
  @Input()
  url: string = '';
  @Input()
  topics: string[] = [];

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
