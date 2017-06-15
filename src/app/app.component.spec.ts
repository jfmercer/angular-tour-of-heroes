import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheeseDetailComponent } from './cheese-detail/cheese-detail.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        CheeseDetailComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tour of Cheeses'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Cheeses');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Cheeses');
  }));
});
