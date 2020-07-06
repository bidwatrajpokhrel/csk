import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmissionProcedureGuestPage } from './admission-procedure-guest.page';

describe('AdmissionProcedureGuestPage', () => {
  let component: AdmissionProcedureGuestPage;
  let fixture: ComponentFixture<AdmissionProcedureGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionProcedureGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmissionProcedureGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
