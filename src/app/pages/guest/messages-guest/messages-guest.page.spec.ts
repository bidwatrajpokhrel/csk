import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagesGuestPage } from './messages-guest.page';

describe('MessagesGuestPage', () => {
  let component: MessagesGuestPage;
  let fixture: ComponentFixture<MessagesGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
