import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsContComponent } from './tabs-cont.component';

describe('TabsContComponent', () => {
  let component: TabsContComponent;
  let fixture: ComponentFixture<TabsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
