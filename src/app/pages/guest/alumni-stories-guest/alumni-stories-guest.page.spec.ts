import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlumniStoriesGuestPage } from './alumni-stories-guest.page';

describe('AlumniStoriesGuestPage', () => {
  let component: AlumniStoriesGuestPage;
  let fixture: ComponentFixture<AlumniStoriesGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniStoriesGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlumniStoriesGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
