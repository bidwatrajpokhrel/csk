import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClubGuestPage } from './club-guest.page';

describe('ClubGuestPage', () => {
  let component: ClubGuestPage;
  let fixture: ComponentFixture<ClubGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClubGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
