import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmissionInfoTablePage } from './admission-info-table.page';

describe('AdmissionInfoTablePage', () => {
  let component: AdmissionInfoTablePage;
  let fixture: ComponentFixture<AdmissionInfoTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionInfoTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmissionInfoTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
