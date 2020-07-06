import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeeStructureGuestPage } from './fee-structure-guest.page';

describe('FeeStructureGuestPage', () => {
  let component: FeeStructureGuestPage;
  let fixture: ComponentFixture<FeeStructureGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeStructureGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeeStructureGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
