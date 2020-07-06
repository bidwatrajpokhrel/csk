import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyActivityPage } from './nearby-activity.page';

describe('NearbyActivityPage', () => {
  let component: NearbyActivityPage;
  let fixture: ComponentFixture<NearbyActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
