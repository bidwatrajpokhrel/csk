import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanteenMenuGuestPage } from './canteen-menu-guest.page';

describe('CanteenMenuGuestPage', () => {
  let component: CanteenMenuGuestPage;
  let fixture: ComponentFixture<CanteenMenuGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenMenuGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanteenMenuGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
