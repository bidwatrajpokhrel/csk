import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SOSdetailsComponent } from './sosdetails.component';

describe('SOSdetailsComponent', () => {
  let component: SOSdetailsComponent;
  let fixture: ComponentFixture<SOSdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SOSdetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SOSdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
