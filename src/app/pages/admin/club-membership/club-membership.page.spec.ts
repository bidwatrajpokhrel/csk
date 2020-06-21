import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClubMembershipPage } from './club-membership.page';

describe('ClubMembershipPage', () => {
  let component: ClubMembershipPage;
  let fixture: ComponentFixture<ClubMembershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubMembershipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClubMembershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
