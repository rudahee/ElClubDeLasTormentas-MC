import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDescriptionsComponent } from './mod-descriptions.component';

describe('ModDescriptionsComponent', () => {
  let component: ModDescriptionsComponent;
  let fixture: ComponentFixture<ModDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModDescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
