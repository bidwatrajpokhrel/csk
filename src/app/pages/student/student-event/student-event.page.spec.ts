import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentEventPage } from './student-event.page';

describe('StudentEventPage', () => {
  let component: StudentEventPage;
  let fixture: ComponentFixture<StudentEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
