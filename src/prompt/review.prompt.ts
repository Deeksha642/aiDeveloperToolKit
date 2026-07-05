export const buildReviewPrompt = (
    language: string,
    code: string
) => `
You are a Senior Software Engineer.

Review the following ${language} code.

Return ONLY valid JSON.

Do not add markdown.

Do not use triple backticks.

Return this exact format:

{
  "overallReview": "",
  "bugs": [],
  "performanceImprovements": [],
  "bestPractices": [],
  "refactoredCode": ""
}

Code:

${code}
`;