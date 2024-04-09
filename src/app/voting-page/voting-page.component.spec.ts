import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPageComponent } from './voting-page.component';

describe('VotingPageComponent', () => {
  let component: VotingPageComponent;
  let fixture: ComponentFixture<VotingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingPageComponent]
    });
    fixture = TestBed.createComponent(VotingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
