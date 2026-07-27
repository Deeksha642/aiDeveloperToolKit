import aiService from "./ai.services";
import { buildSqlPrompt } from "../prompt/sql.prompt";

interface SqlResponse {
  sql: string;
  explanation: string;
}

class SqlService {
  async generate(
    database: string,
    query: string
  ): Promise<SqlResponse> {
    const prompt = buildSqlPrompt(database, query);

    return await aiService.generate<SqlResponse>(prompt);
  }
}

export default new SqlService();