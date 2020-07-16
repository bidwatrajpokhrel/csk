import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyBanksGuestPage } from './nearby-banks-guest.page';

describe('NearbyBanksGuestPage', () => {
  let component: NearbyBanksGuestPage;
  let fixture: ComponentFixture<NearbyBanksGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyBanksGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyBanksGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
