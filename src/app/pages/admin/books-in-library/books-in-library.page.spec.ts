import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BooksInLibraryPage } from './books-in-library.page';

describe('BooksInLibraryPage', () => {
  let component: BooksInLibraryPage;
  let fixture: ComponentFixture<BooksInLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksInLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksInLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
