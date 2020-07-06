import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScholarshipGuestPage } from './scholarship-guest.page';

describe('ScholarshipGuestPage', () => {
  let component: ScholarshipGuestPage;
  let fixture: ComponentFixture<ScholarshipGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScholarshipGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
