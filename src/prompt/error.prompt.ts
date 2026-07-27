export const buildErrorPrompt = (
    language: string,
    error: string
) => `
You are a senior software engineer.

Analyze the following ${language} error.

Return ONLY valid JSON.

{
  "summary": "",
  "possibleCauses": [],
  "solution": [],
  "example": {
      "before": "",
      "after": ""
  }
}

Error:

${error}
`;