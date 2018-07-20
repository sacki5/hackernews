import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        transform: 'translateX(100%)',
        opacity: 0
      })),

      transition('show => hide', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)',  offset: 0.3}),
          style({opacity: 0, transform: 'translateX(100%)',     offset: 1.0})
        ]))
      ]),
      transition('hide => show', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)',  offset: 0.7}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Hackernews';
  state = 'hide';

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }
}
