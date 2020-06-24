import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ECACreateComponent } from './ecacreate.component';

describe('ECACreateComponent', () => {
  let component: ECACreateComponent;
  let fixture: ComponentFixture<ECACreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECACreateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ECACreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
