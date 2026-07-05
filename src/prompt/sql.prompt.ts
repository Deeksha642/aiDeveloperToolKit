export const buildSqlPrompt = (
    database: string,
    query: string
) => `
You are an expert SQL developer.

Generate SQL for ${database}.

Return ONLY JSON.

{
"sql":"",
"explanation":""
}

Request:

${query}
`;