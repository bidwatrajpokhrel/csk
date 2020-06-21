import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanteenMenuPage } from './canteen-menu.page';

describe('CanteenMenuPage', () => {
  let component: CanteenMenuPage;
  let fixture: ComponentFixture<CanteenMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanteenMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanteenMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
