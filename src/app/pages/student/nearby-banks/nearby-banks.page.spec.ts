import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyBanksPage } from './nearby-banks.page';

describe('NearbyBanksPage', () => {
  let component: NearbyBanksPage;
  let fixture: ComponentFixture<NearbyBanksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyBanksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyBanksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
