import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeglectedComponent } from './neglected.component';

describe('NeglectedComponent', () => {
    let component: NeglectedComponent;
    let fixture: ComponentFixture<NeglectedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NeglectedComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NeglectedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
