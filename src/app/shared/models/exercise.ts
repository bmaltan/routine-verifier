export interface Exercise {
    id: number;
    name: string;
    primaryMusclesHit: number[];
    secondaryMusclesHit?: number[];
    isSelected: boolean;
    details: {
        noEquipment: boolean;
    }
}
