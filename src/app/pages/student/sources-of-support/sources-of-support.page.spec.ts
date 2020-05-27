import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SourcesOfSupportPage } from './sources-of-support.page';

describe('SourcesOfSupportPage', () => {
  let component: SourcesOfSupportPage;
  let fixture: ComponentFixture<SourcesOfSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesOfSupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SourcesOfSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
