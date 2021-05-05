import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DeveloperModule } from './developer/developer.module';
import { DeveloperComponent } from './developer/developer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DeveloperModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fanat-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fanat-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('fanat-frontend app is running!');
  });

  it('show render app-developer', () => {
    const fixture = TestBed.createComponent(DeveloperComponent);
    const appDeveloper = fixture.componentInstance;
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.developer-tools h1').textContent).toContain('Developer Tools');
  });

});
