import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfrastructureGuestPage } from './infrastructure-guest.page';

describe('InfrastructureGuestPage', () => {
  let component: InfrastructureGuestPage;
  let fixture: ComponentFixture<InfrastructureGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructureGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfrastructureGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
