import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestHomePage } from './guest-home.page';

describe('GuestHomePage', () => {
  let component: GuestHomePage;
  let fixture: ComponentFixture<GuestHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
