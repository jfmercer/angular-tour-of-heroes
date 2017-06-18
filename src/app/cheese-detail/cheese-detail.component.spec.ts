import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheeseDetailComponent } from './cheese-detail.component';
import { CheeseService } from '../services/cheese.service';

describe('CheeseDetailComponent', () => {
  let component: CheeseDetailComponent;
  let fixture: ComponentFixture<CheeseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheeseDetailComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        CheeseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
