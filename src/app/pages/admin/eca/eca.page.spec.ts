import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ECAPage } from './eca.page';

describe('ECAPage', () => {
  let component: ECAPage;
  let fixture: ComponentFixture<ECAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ECAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
