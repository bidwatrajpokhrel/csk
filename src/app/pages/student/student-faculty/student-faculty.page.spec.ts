import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentFacultyPage } from './student-faculty.page';

describe('StudentFacultyPage', () => {
  let component: StudentFacultyPage;
  let fixture: ComponentFixture<StudentFacultyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFacultyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentFacultyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
