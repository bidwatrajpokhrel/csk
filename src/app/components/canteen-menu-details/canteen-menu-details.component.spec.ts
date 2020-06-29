import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanteenMenuDetailsComponent } from './canteen-menu-details.component';

describe('CanteenMenuDetailsComponent', () => {
  let component: CanteenMenuDetailsComponent;
  let fixture: ComponentFixture<CanteenMenuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenMenuDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanteenMenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
