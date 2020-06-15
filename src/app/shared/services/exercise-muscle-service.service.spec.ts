import { TestBed } from '@angular/core/testing';

import { ExerciseMuscleService } from './exercise-muscle-service.service';

describe('ExercisesService', () => {
    let service: ExerciseMuscleService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ExerciseMuscleService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
