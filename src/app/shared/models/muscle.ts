export interface Muscle {
    id: number;
    name: string;
    muscleGroup: MuscleGroup;
}

export enum MuscleGroup {
    unassigned, back, calves, chest, forearms, hips, neck, shoulders, thighs, upperArms, waist
}
