export interface CodeReviewResponse {
    overallReview: string;
    bugs: string[];
    performanceImprovements: string[];
    bestPractices: string[];
    refactoredCode?: string;
}