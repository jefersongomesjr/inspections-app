export interface Infraction {
    id: string;
    description: string;
    severity: string;
    immediateInterdiction: boolean;
    inspectionId?: string;
}

export interface Inspection {
    id?: string;
    location: string;
    inspector: string;
    date: string;
    initial_state: boolean;
    status: string;
    infractions?: Infraction[];
}