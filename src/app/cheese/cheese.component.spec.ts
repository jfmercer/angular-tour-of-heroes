import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseComponent } from './cheese.component';
import { CheeseDetailComponent } from '../cheese-detail/cheese-detail.component';

describe('CheeseComponent', () => {
  let component: CheeseComponent;
  let fixture: ComponentFixture<CheeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheeseComponent,
        CheeseDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
