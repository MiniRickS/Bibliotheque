import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSiteComponent } from './liste-site.component';

describe('ListeSiteComponent', () => {
  let component: ListeSiteComponent;
  let fixture: ComponentFixture<ListeSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
