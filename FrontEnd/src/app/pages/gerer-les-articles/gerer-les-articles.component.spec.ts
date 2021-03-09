import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererLesArticlesComponent } from './gerer-les-articles.component';

describe('GererLesArticlesComponent', () => {
  let component: GererLesArticlesComponent;
  let fixture: ComponentFixture<GererLesArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererLesArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererLesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
