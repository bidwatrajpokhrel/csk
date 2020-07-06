import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecognitionGuestPage } from './recognition-guest.page';

describe('RecognitionGuestPage', () => {
  let component: RecognitionGuestPage;
  let fixture: ComponentFixture<RecognitionGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognitionGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecognitionGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
