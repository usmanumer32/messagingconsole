import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'messagingconsole'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('messagingconsole');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to messagingconsole!');
  });

  it('should return 0 if input is negative', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const result = fixture.debugElement.componentInstance;
    const res = result.compute(-1);
    expect(res).toBe(0);
  });

  it('should increment the input if input is positive', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const result = fixture.debugElement.componentInstance;
    const res = result.compute(1);
    expect(res).toBe(2);
  });

  it('should include mosh', () => {
    let router: Router;
    let component = new AppComponent(router);
    const result = component.greet('Mosh');
    expect(result).toContain('Mosh');    
  });

  // testing html element
  it('should render title in h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('h1').textContent).toContain('Welcome');
  })
  
  // call fake
  //const spy2 = spyOn(component, 'ngOnInit').and.callFake(function () {return 'called'});
});
