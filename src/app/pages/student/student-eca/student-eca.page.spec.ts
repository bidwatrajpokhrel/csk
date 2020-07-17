import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentEcaPage } from './student-eca.page';

describe('StudentEcaPage', () => {
  let component: StudentEcaPage;
  let fixture: ComponentFixture<StudentEcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentEcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
