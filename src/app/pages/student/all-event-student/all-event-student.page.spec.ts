import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllEventStudentPage } from './all-event-student.page';

describe('AllEventStudentPage', () => {
  let component: AllEventStudentPage;
  let fixture: ComponentFixture<AllEventStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEventStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllEventStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
