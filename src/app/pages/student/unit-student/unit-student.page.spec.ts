import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnitStudentPage } from './unit-student.page';

describe('UnitStudentPage', () => {
  let component: UnitStudentPage;
  let fixture: ComponentFixture<UnitStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
