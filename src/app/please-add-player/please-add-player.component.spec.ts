import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseAddPlayerComponent } from './please-add-player.component';

describe('PleaseAddPlayerComponent', () => {
  let component: PleaseAddPlayerComponent;
  let fixture: ComponentFixture<PleaseAddPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleaseAddPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleaseAddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
