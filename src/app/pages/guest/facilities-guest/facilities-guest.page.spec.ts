import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacilitiesGuestPage } from './facilities-guest.page';

describe('FacilitiesGuestPage', () => {
  let component: FacilitiesGuestPage;
  let fixture: ComponentFixture<FacilitiesGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacilitiesGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
