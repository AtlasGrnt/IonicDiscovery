import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatFinnPage } from './chat-finn.page';

describe('ChatFinnPage', () => {
  let component: ChatFinnPage;
  let fixture: ComponentFixture<ChatFinnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFinnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatFinnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
