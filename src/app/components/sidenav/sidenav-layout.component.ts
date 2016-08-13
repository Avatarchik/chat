import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'sidenav-layout',
  template: `
    <!-- bind multiple events to same handler: https://github.com/angular/angular/issues/6675 -->
    <div
      [ngClass]="{'show-nav': isMenuOpen }"
      (panstart)="handlePan($event)"
      (panleft)="handlePan($event)"
      (panright)="handlePan($event)"
      (panend)="handlePan($event)"
      (pancancel)="handlePan($event)"
      class="site-wrapper">

      <!-- should make ngStyle contents autoprefuxed, maybe with some kind of webpack trickery -->
      <div
        [ngClass]="{'transition': enableTransition}"
        [ngStyle]="{'-webkit-transform': 'translateX('+visibleSideMenuWidth+'px)', 'transform': 'translateX('+visibleSideMenuWidth+'px)'}"
        class="site-canvas">
        <ng-content></ng-content>
        
        <div
          *ngIf="showOverlay"
          [style.opacity]="opacity"
          (click)="toggle()"
          class="site-canvas-overlay"></div>
      </div>
    </div>
  `,
  styles: [require('./sidenav-layout.component.scss')]
})
export class SideNavLayoutComponent implements OnInit, OnDestroy {
  private router: Router;
  onNavigationEnd$: any;

  private isMenuOpen = false;
  private enableTransition = true;
  private sideMenuWidth = 300;
  private panBoundary = .25; // sideMenuWidth * panBoundary = 75px
  private startOffsetX = 0;
  private maxOffsetX = 40; // mennyire a szeletol kell huzigatnia, hogy gerlyedjen a rendszer
  private visibleSideMenuWidth = 0; // eppen mennyi latszik a menunkbol
  private previousDeltaX = 0;
  private currentDeltaX = 0;
  private showOverlay = false;
  private maxOpacity = 0.75;
  private opacity = 0;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.onNavigationEnd$ = this.router.events
      .filter(evt => evt instanceof NavigationEnd)
      .subscribe(() => this.close());
  }

  handlePan(evt) {
    switch (evt.type) {
      case 'panstart':
        this.enableTransition = false;
        this.startOffsetX = evt.center.x;
        this.showOverlay = true;
        break;
      case 'panend':
      case 'pancancel':
        this.enableTransition = true;
        this.previousDeltaX = 0;
        this.currentDeltaX = 0;

        // Ha kihuzta elegge a menut es eddig zarva volt
        if (!this.isMenuOpen && this.visibleSideMenuWidth > this.sideMenuWidth * this.panBoundary) {
          this.open();
        }

        // Ha nem huzta ki elegge a menut es eddig zarva volt
        if (!this.isMenuOpen && this.visibleSideMenuWidth < this.sideMenuWidth * this.panBoundary) {
          this.close();
        }

        // Ha be huzta elegge a menut es eddig nyitva volt
        if (this.isMenuOpen && this.visibleSideMenuWidth < this.sideMenuWidth * (3 * this.panBoundary)) {
          this.close();
        }

        // Ha nem huzta be elegge a menut es eddig nyitva volt
        if (this.isMenuOpen && this.visibleSideMenuWidth > this.sideMenuWidth * (3 * this.panBoundary)) {
          this.open();
        }

        break;

      case 'panright':
        this.previousDeltaX = this.currentDeltaX;
        this.currentDeltaX = evt.deltaX;

        // Ha az indulasi ponttol szamitott tavolsag nagyobb mint a menu szelessege, ne akarjuk tovabb huzni
        if (this.visibleSideMenuWidth >= this.sideMenuWidth) {
          return;
        }

        // Ha nincs nyitva a menu es nem a viewport szeletol kezdi a huzkodast
        if (!this.isMenuOpen && this.startOffsetX > this.maxOffsetX) {
          return;
        }

        // Ha mar biztos hogy huzgalunk
        this.calcOpacity();

        // Ha nyitva van a menu, azaz oda vissza huzogatja a fasz(at)
        if (this.isMenuOpen) {
          this.visibleSideMenuWidth = this.visibleSideMenuWidth + (Math.abs(this.previousDeltaX) + this.currentDeltaX);
          return;
        }

        // Ha nincs nyitva a menu es a viewport szeletol kezdi huzni mint egy normalis emberi leny.
        this.visibleSideMenuWidth = evt.deltaX;
        break;

      case 'panleft':
        this.previousDeltaX = this.currentDeltaX;
        this.currentDeltaX = evt.deltaX;

        // Ha az indulasi ponttol szamitott tavolsag nagyobb mint a menu szelessege, ne akarjuk tovabb huzni
        if (this.visibleSideMenuWidth <= 0) {
          return;
        }

        // Ha mar biztos hogy huzgalunk
        this.calcOpacity();

        // Ha zarva van a menu, azaz oda vissza huzogatja a fasz(at)
        if (!this.isMenuOpen && evt.deltaX > 0) { // ez lehet nem idealis feltetel
          this.visibleSideMenuWidth = this.visibleSideMenuWidth - (this.previousDeltaX - this.currentDeltaX);
          return;
        }

        // Ha nyitva van a menu es egyszeruen vissza huzza mint egy normalis emberi leny
        // Ez a szamitas tulajdonkeppen egyezik az elozovel
        this.visibleSideMenuWidth = this.visibleSideMenuWidth - (this.previousDeltaX - this.currentDeltaX);
        break;
    }
  }

  calcOpacity() {
    this.opacity = this.visibleSideMenuWidth / this.sideMenuWidth * this.maxOpacity;
  }

  toggle(evt?: MouseEvent) {
    if (evt) {
      evt.preventDefault();
    }
    this.isMenuOpen ? this.close() : this.open();
  }

  open() {
    this.isMenuOpen = true;
    this.showOverlay = true;
    this.visibleSideMenuWidth = 300;
    this.calcOpacity();
  }

  close() {
    this.isMenuOpen = false;
    this.showOverlay = false;
    this.visibleSideMenuWidth = 0;
    this.calcOpacity();
  }

  ngOnDestroy() {
    this.onNavigationEnd$.unsubscribe();
  }
}
