import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyExplorePage } from './nearby-explore.page';

describe('NearbyExplorePage', () => {
  let component: NearbyExplorePage;
  let fixture: ComponentFixture<NearbyExplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyExplorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyExplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
