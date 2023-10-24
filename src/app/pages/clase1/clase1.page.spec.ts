import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Clase1Page } from './clase1.page';
import { IonicModule } from '@ionic/angular';


describe('Clase1Page', () => {
  let component: Clase1Page;
  let fixture: ComponentFixture<Clase1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Clase1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Clase1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
