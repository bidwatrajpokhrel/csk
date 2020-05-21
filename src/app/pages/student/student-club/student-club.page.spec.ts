import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentClubPage } from './student-club.page';

describe('StudentClubPage', () => {
  let component: StudentClubPage;
  let fixture: ComponentFixture<StudentClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentClubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
