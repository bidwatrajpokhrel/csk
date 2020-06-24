import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentLibraryBooksCreateComponent } from './student-library-books-create.component';

describe('StudentLibraryBooksCreateComponent', () => {
  let component: StudentLibraryBooksCreateComponent;
  let fixture: ComponentFixture<StudentLibraryBooksCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLibraryBooksCreateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentLibraryBooksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
