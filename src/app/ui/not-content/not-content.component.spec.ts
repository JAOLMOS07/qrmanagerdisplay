import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotContentComponent } from './not-content.component';

describe('NotContentComponent', () => {
  let component: NotContentComponent;
  let fixture: ComponentFixture<NotContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
