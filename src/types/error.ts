export interface ErrorExplanationResponse {
    summary: string;

    possibleCauses: string[];

    solution: string[];

    example: {
        before: string;
        after: string;
    };
}