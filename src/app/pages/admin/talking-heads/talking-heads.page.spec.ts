import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TalkingHeadsPage } from './talking-heads.page';

describe('TalkingHeadsPage', () => {
  let component: TalkingHeadsPage;
  let fixture: ComponentFixture<TalkingHeadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkingHeadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TalkingHeadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
