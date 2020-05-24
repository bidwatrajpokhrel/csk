import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentEventDetailPage } from './student-event-detail.page';

describe('StudentEventDetailPage', () => {
  let component: StudentEventDetailPage;
  let fixture: ComponentFixture<StudentEventDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEventDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentEventDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
