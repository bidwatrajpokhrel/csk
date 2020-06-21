import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestLecturesPage } from './guest-lectures.page';

describe('GuestLecturesPage', () => {
  let component: GuestLecturesPage;
  let fixture: ComponentFixture<GuestLecturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestLecturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestLecturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
