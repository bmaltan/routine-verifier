import { Injectable } from '@angular/core';
import { Muscle, MuscleGroup } from '../models/muscle';
import { Exercise } from '../models/exercise';

@Injectable({
    providedIn: 'root'
})
export class ExerciseMuscleService {

    private muscles: Muscle[] = [
        { name: 'Latissimus Dorsi & Teres Major', id: 1, muscleGroup: MuscleGroup.back },
        { name: 'Trapezius, Upper', id: 2, muscleGroup: MuscleGroup.back },
        { name: 'Trapezius, Middle', id: 3, muscleGroup: MuscleGroup.back },
        { name: 'Trapezius, Lower', id: 4, muscleGroup: MuscleGroup.back },
        { name: 'Levator Scapulae', id: 5, muscleGroup: MuscleGroup.back },
        { name: 'Rhomboids', id: 6, muscleGroup: MuscleGroup.back },
        { name: 'Infraspinatus & Teres Minor', id: 7, muscleGroup: MuscleGroup.back },
        { name: 'Subscapularis', id: 8, muscleGroup: MuscleGroup.back },

        { name: 'Gastrocnemius', id: 9, muscleGroup: MuscleGroup.calves },
        { name: 'Soleus', id: 10, muscleGroup: MuscleGroup.calves },
        { name: 'Tibialis Anterior', id: 11, muscleGroup: MuscleGroup.calves },
        { name: 'Popliteus', id: 12, muscleGroup: MuscleGroup.calves },

        { name: 'Pectoralis Major, Sternal', id: 13, muscleGroup: MuscleGroup.chest },
        { name: 'Pectoralis Major, Clavicular', id: 14, muscleGroup: MuscleGroup.chest },
        { name: 'Pectoralis Minor', id: 15, muscleGroup: MuscleGroup.chest },
        { name: 'Serratus Anterior', id: 16, muscleGroup: MuscleGroup.chest },

        { name: 'Brachioradialis', id: 17, muscleGroup: MuscleGroup.forearms },
        { name: 'Wrist, Flexors', id: 18, muscleGroup: MuscleGroup.forearms },
        { name: 'Wrist, Extensors', id: 19, muscleGroup: MuscleGroup.forearms },
        { name: 'Pronators', id: 20, muscleGroup: MuscleGroup.forearms },
        { name: 'Supinators', id: 21, muscleGroup: MuscleGroup.forearms },

        { name: 'Gluteus Maximus', id: 22, muscleGroup: MuscleGroup.hips },
        { name: 'Abductors', id: 23, muscleGroup: MuscleGroup.hips },
        { name: 'Flexors', id: 24, muscleGroup: MuscleGroup.hips },
        { name: 'Deep External Rotators', id: 25, muscleGroup: MuscleGroup.hips },

        { name: 'Sternocleidomastoid', id: 26, muscleGroup: MuscleGroup.neck },
        { name: 'Splenius', id: 27, muscleGroup: MuscleGroup.neck },

        { name: 'Deltoid, Anterior', id: 28, muscleGroup: MuscleGroup.shoulders },
        { name: 'Deltoid, Lateral', id: 29, muscleGroup: MuscleGroup.shoulders },
        { name: 'Deltoid, Posterior', id: 30, muscleGroup: MuscleGroup.shoulders },
        { name: 'Supraspinatus', id: 31, muscleGroup: MuscleGroup.shoulders },

        { name: 'Quadriceps', id: 32, muscleGroup: MuscleGroup.thighs },
        { name: 'Hamstrings', id: 33, muscleGroup: MuscleGroup.thighs },
        { name: 'Hip Adductors', id: 34, muscleGroup: MuscleGroup.thighs },

        { name: 'Triceps Brachii', id: 35, muscleGroup: MuscleGroup.upperArms },
        { name: 'Biceps Brachii', id: 36, muscleGroup: MuscleGroup.upperArms },
        { name: 'Brachialis', id: 37, muscleGroup: MuscleGroup.upperArms },

        { name: 'Rectus Abdominis', id: 38, muscleGroup: MuscleGroup.waist },
        { name: 'Transverse Abdominus', id: 39, muscleGroup: MuscleGroup.waist },
        { name: 'Obliques', id: 40, muscleGroup: MuscleGroup.waist },
        { name: 'Quadratus Lumborum', id: 41, muscleGroup: MuscleGroup.waist },
        { name: 'Erector Spinae', id: 42, muscleGroup: MuscleGroup.waist }
    ];

    private exercises: Exercise[] = [
        { id: 2, name: 'Arnold Press', primaryMusclesHit: [28], secondaryMusclesHit: [29, 31, 35, 3, 4, 16], isSelected: false },
        { id: 3, name: 'Behind Neck Press', primaryMusclesHit: [28], secondaryMusclesHit: [29, 31, 35, 3, 4, 16], isSelected: false },
        { id: 4, name: 'Bench Dip', primaryMusclesHit: [35], secondaryMusclesHit: [28, 13, 14, 15, 6, 5, 1], isSelected: false },
        { id: 5, name: 'Bench Press', primaryMusclesHit: [13], secondaryMusclesHit: [14, 28, 35], isSelected: false },
        { id: 6, name: 'Bent-over Row', primaryMusclesHit: [1, 6], secondaryMusclesHit: [3, 4, 1, 30, 7, 17, 37, 13], isSelected: false },
        { id: 7, name: 'Bird Dog', primaryMusclesHit: [42], secondaryMusclesHit: [22, 4, 3, 28, 29], isSelected: false },
        { id: 8, name: 'Standing Calf Raise', primaryMusclesHit: [9], secondaryMusclesHit: [10], isSelected: false },
        { id: 9, name: 'Chest Dip', primaryMusclesHit: [13], secondaryMusclesHit: [28, 35, 14, 15, 6, 5, 1], isSelected: false },
        { id: 10, name: 'Chin-up', primaryMusclesHit: [1], secondaryMusclesHit: [17, 37, 30, 6, 5, 3, 4, 13, 15], isSelected: false },
        { id: 11, name: 'Concentration Curl', primaryMusclesHit: [37], secondaryMusclesHit: [36, 17], isSelected: false },
        { id: 12, name: 'Crunch', primaryMusclesHit: [38], secondaryMusclesHit: [40], isSelected: false },
        { id: 14, name: 'Deadlift', primaryMusclesHit: [22], secondaryMusclesHit: [32, 34, 33, 10], isSelected: false },
        { id: 15, name: 'Front Lateral Raise', primaryMusclesHit: [31], secondaryMusclesHit: [29, 28, 16, 3, 4], isSelected: false },
        { id: 16, name: 'Front Neck Bridge', primaryMusclesHit: [26], secondaryMusclesHit: [27, 2, 5, 42], isSelected: false },
        { id: 17, name: 'Good Morning', primaryMusclesHit: [33], secondaryMusclesHit: [22, 34], isSelected: false },
        { id: 18, name: 'Hip Abduction', primaryMusclesHit: [34], secondaryMusclesHit: [22], isSelected: false },
        { id: 19, name: 'Hip Thrust', primaryMusclesHit: [22], secondaryMusclesHit: [32], isSelected: false },
        { id: 20, name: 'Hyperextension', primaryMusclesHit: [42], secondaryMusclesHit: [22, 33, 34], isSelected: false },
        { id: 21, name: 'Incline Bench Press', primaryMusclesHit: [14], secondaryMusclesHit: [28, 35], isSelected: false },
        { id: 22, name: 'Inverted Row', primaryMusclesHit: [1, 2, 3, 4], secondaryMusclesHit: [6, 30, 7, 37, 17, 13], isSelected: false },
        { id: 23, name: 'Kickback', primaryMusclesHit: [35], secondaryMusclesHit: [30, 1, 3, 4, 6], isSelected: false },
        { id: 24, name: 'Lateral Neck Flexion', primaryMusclesHit: [26], secondaryMusclesHit: [27, 2, 5, 42], isSelected: false },
        { id: 25, name: 'Lateral Raise', primaryMusclesHit: [29], secondaryMusclesHit: [28, 31, 3, 4, 16], isSelected: false },
        { id: 26, name: 'Leg Curl', primaryMusclesHit: [33], secondaryMusclesHit: [9, 12], isSelected: false },
        { id: 27, name: 'Leg Hip Raise', primaryMusclesHit: [38], secondaryMusclesHit: [40, 34], isSelected: false },
        { id: 29, name: 'Lunge', primaryMusclesHit: [32], secondaryMusclesHit: [22, 34, 10], isSelected: false },
        { id: 30, name: 'Lying Hip External Rotation', primaryMusclesHit: [25], isSelected: false },
        { id: 31, name: 'Lying Neck Extension', primaryMusclesHit: [26], isSelected: false },
        { id: 33, name: 'Military Press', primaryMusclesHit: [28], secondaryMusclesHit: [14, 35, 29, 3, 4, 16], isSelected: false },
        { id: 34, name: 'Neck Extension', primaryMusclesHit: [27], secondaryMusclesHit: [2, 5, 26, 42], isSelected: false },
        { id: 35, name: 'Neck Flexion', primaryMusclesHit: [26], isSelected: false },
        { id: 36, name: 'Neck Retraction', primaryMusclesHit: [27], secondaryMusclesHit: [2, 5, 42], isSelected: false },
        { id: 37, name: 'Neck Rotation', primaryMusclesHit: [26], secondaryMusclesHit: [27, 42, 5, 2], isSelected: false },
        { id: 38, name: 'Pike Press', primaryMusclesHit: [28], secondaryMusclesHit: [14, 35, 29, 3, 4, 16], isSelected: false },
        { id: 39, name: 'Pronation', primaryMusclesHit: [20], isSelected: false },
        { id: 40, name: 'Pullover', primaryMusclesHit: [13], secondaryMusclesHit: [1, 35, 30, 15, 6, 5], isSelected: false },
        { id: 41, name: 'Pulldown', primaryMusclesHit: [1], secondaryMusclesHit: [3, 4, 5, 6, 7, 15, 17, 36, 37], isSelected: false },
        { id: 42, name: 'Push-up', primaryMusclesHit: [13], secondaryMusclesHit: [14, 28, 35], isSelected: false },
        { id: 43, name: 'Pushdown', primaryMusclesHit: [35], secondaryMusclesHit: [1, 7, 13, 15, 30, 38, 40], isSelected: false },
        { id: 44, name: 'Reverse Fly', primaryMusclesHit: [30], secondaryMusclesHit: [29, 7, 3, 4, 6], isSelected: false },
        { id: 45, name: 'Reverse Curl', primaryMusclesHit: [17], secondaryMusclesHit: [37, 36], isSelected: false },
        { id: 46, name: 'Rear Delt Row', primaryMusclesHit: [30], secondaryMusclesHit: [7, 29, 3, 4, 17, 6, 37], isSelected: false },
        { id: 47, name: 'Rear Lateral Raise', primaryMusclesHit: [30], secondaryMusclesHit: [7, 29, 3, 4, 6], isSelected: false },
        { id: 48, name: 'Rear Neck Bridge', primaryMusclesHit: [27], secondaryMusclesHit: [2, 5, 26, 42, 22, 32], isSelected: false },
        { id: 49, name: 'Reclined Shoulder Press', primaryMusclesHit: [28], secondaryMusclesHit: [29, 31, 35, 3, 4, 16], isSelected: false },
        { id: 50, name: 'Reverse Wrist Curl', primaryMusclesHit: [19], isSelected: false },
        { id: 52, name: 'Seated Twist', primaryMusclesHit: [40], isSelected: false },
        { id: 53, name: 'Shoulder Press', primaryMusclesHit: [28], secondaryMusclesHit: [29, 31, 35, 3, 4, 14, 16], isSelected: false },
        { id: 54, name: 'Shrug', primaryMusclesHit: [2], secondaryMusclesHit: [3, 5], isSelected: false },
        { id: 55, name: 'Sit-up', primaryMusclesHit: [38], secondaryMusclesHit: [24, 40], isSelected: false },
        { id: 56, name: 'Squat', primaryMusclesHit: [32], secondaryMusclesHit: [22, 34, 10], isSelected: false },
        { id: 57, name: 'Supination', primaryMusclesHit: [21], secondaryMusclesHit: [36], isSelected: false },
        { id: 58, name: 'Wrist Curl', primaryMusclesHit: [18], isSelected: false },
        { id: 60, name: 'Wrist Roller', primaryMusclesHit: [18], isSelected: false },
        { id: 61, name: 'V-up', primaryMusclesHit: [38], secondaryMusclesHit: [24, 34], isSelected: false },
        { id: 62, name: 'T-Bar Row', primaryMusclesHit: [1, 3, 4, 7, 30], isSelected: false },
        { id: 63, name: 'Dip', primaryMusclesHit: [13], secondaryMusclesHit: [14, 28, 35, 15, 6, 5, 1], isSelected: false },
        { id: 64, name: 'Triceps Extension', primaryMusclesHit: [35], isSelected: false },
        { id: 68, name: 'Upright Row', primaryMusclesHit: [29], secondaryMusclesHit: [31, 28, 37, 17, 36, 3, 4, 7, 16], isSelected: false },
        { id: 69, name: 'Y Raise', primaryMusclesHit: [29], secondaryMusclesHit: [31, 7, 3, 4, 16, 28, 30], isSelected: false }
    ];

    constructor() { }

    getMuscles(muscleGroup?: MuscleGroup): Muscle[] {
        if (muscleGroup) {
            return this.muscles;
        } else {
            return this.muscles;
        }
    }

    getExercises(): Exercise[] {
        return this.exercises;
    }
}
