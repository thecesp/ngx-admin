import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbMediaBreakpoint, NbThemeService, NbMediaBreakpointsService } from '@nebular/theme';
@Component({
  selector: 'ngx-retrospective',
  templateUrl: 'retrospective.component.html',
  styleUrls: ['retrospective.component.scss'],
})
export class RetrospectiveComponent implements OnInit, OnDestroy {

  tags: any = [];
  items: any = [];
  newItem: any = {};

  tagTitle = 'Title';
  tagText = 'A nebula is an interstellar cloud of dust';
  text = 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. ' +
          'Originally, nebula was a name for any diffuse astronomical object, ' +
          'including galaxies beyond the Milky Way.';

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.tags = [
      { title: this.tagTitle,
        text: this.tagText,
        accent: 'info'},
      { title: this.tagTitle,
        text: this.tagText,
        accent: 'danger'},
      { title: this.tagTitle,
        text: this.tagText,
        accent: 'success'},
      { title: this.tagTitle,
        text: this.tagText,
        accent: 'warning'},
    ];

    this.items = [
      { title: 'title1',
        text: this.text,
        accent: 'info',
        year: '2019',
        month: 'JUNE',
        day: '4',
        topics: []},
      { title: 'title2',
        text: this.text,
        year: '2019',
        month: 'JULy',
        day: '9',
        accent: 'danger',
        topics: []},
      { title: 'title3',
        text: this.text,
        year: '2019',
        month: 'JULy',
        day: '17',
        accent: 'success',
        topics: []},
      { title: 'title4',
        text: this.text,
        year: '2019',
        month: 'JULy',
        day: '29',
        accent: 'warning',
        topics: []},
      { title: null,
        text: this.text,
        year: '2019',
        month: 'JAN',
        day: '13',
        accent: 'warning',
        topics: []},
    ];

    this.newItem = {
      title: 'Title',
      text: 'Text',
      year: '2019',
      month: 'JUL',
      day: '16',
      accent: '',
      topics: [],
    };
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

}
