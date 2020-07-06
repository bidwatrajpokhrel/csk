import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsGuestPage } from './news-guest.page';

describe('NewsGuestPage', () => {
  let component: NewsGuestPage;
  let fixture: ComponentFixture<NewsGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsGuestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
