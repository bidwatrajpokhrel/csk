import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterGuestComponent } from './footer-guest.component';

describe('FooterGuestComponent', () => {
  let component: FooterGuestComponent;
  let fixture: ComponentFixture<FooterGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterGuestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
