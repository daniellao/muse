import { Component , OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';

import { CollectionService } from './collection.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openCloseSearch', [
      state('openSearch', style({
        height: '100px',
        opacity: 1
      })),
      state('closeSearch', style({
        height: '0px',
        opacity: 0
      })),
      transition('openSearch => closeSearch', [
        animate('300ms ease-in')
      ]),
      transition('closeSearch => openSearch', [
        animate('300ms ease-out'),
      ])
    ]),
    trigger('openCloseMain', [
      state('openMain', style({
        height: '300px',
        width: '100%',
      })),
      state('closeMain', style({
        height: '300px',
        width: '75%'
      })),
      transition('openMain => closeMain', [
        animate('300ms ease-out')
      ]),
      transition('closeMain => openMain', [
        animate('300ms ease-out'),
      ]),
    ]),
    trigger('openCloseSidenav', [
      state('openSidenav', style({
        height: '300px',
        width: '50%',
        opacity: 1
      })),
      state('closeSidenav', style({
        height: '300px',
        width: '0',
        opacity: 0
      })),
      transition('openSidenav => closeSidenav', [
        animate('300ms ease-out')
      ]),
      transition('closeSidenav => openSidenav', [
        animate('300ms ease-out'),
      ])
    ]),
    trigger('pickBackgroundColor', [
      state('black', style({
        background: 'black'
      })),
      state('lightgreen', style({
        background: 'mediumseagreen'
      })),
      state('yellow', style({
        background: 'gold'
      })),
      transition('* => *', [
        animate('100ms ease-in')
      ])
    ]),
  ]
})

export class AppComponent implements OnInit {
  title = 'muse';

  refineSearch = 'closeSearch';
  background = 'black';
  main = 'closeMain';
  sidenav = 'openSidenav';
  toggleSidenav = true;
  toggleAction = 'Sluit';

  constructor(public collection: CollectionService) {}

  ngOnInit(): void {
      this.collection.get()
  }

  toggleRefine() {
    this.refineSearch = (this.refineSearch === 'openSearch' ? 'closeSearch' : 'openSearch')
  }

  toggleView() {
    this.main = (this.main === 'closeMain' ? 'openMain' : 'closeMain')
    this.sidenav = (this.sidenav === 'openSidenav' ? 'closeSidenav' : 'openSidenav')
    this.toggleAction = (this.sidenav === 'openSidenav' ? 'Sluit' : 'Open')
    this.toggleSidenav = !this.toggleSidenav
  }
}
