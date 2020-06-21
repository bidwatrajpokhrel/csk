import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibraryServicesPage } from './library-services.page';

describe('LibraryServicesPage', () => {
  let component: LibraryServicesPage;
  let fixture: ComponentFixture<LibraryServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
