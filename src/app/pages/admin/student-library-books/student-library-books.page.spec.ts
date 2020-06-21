import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentLibraryBooksPage } from './student-library-books.page';

describe('StudentLibraryBooksPage', () => {
  let component: StudentLibraryBooksPage;
  let fixture: ComponentFixture<StudentLibraryBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLibraryBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentLibraryBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
