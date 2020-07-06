import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurTeamGuestPage } from './our-team-guest.page';

describe('OurTeamGuestPage', () => {
  let component: OurTeamGuestPage;
  let fixture: ComponentFixture<OurTeamGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTeamGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurTeamGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
