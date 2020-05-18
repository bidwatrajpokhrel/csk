import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestMenuPage } from './guest-menu.page';

describe('GuestMenuPage', () => {
  let component: GuestMenuPage;
  let fixture: ComponentFixture<GuestMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
