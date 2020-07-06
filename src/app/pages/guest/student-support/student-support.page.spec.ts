import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentSupportPage } from './student-support.page';

describe('StudentSupportPage', () => {
  let component: StudentSupportPage;
  let fixture: ComponentFixture<StudentSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
