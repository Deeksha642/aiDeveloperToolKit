import fs from "fs";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const candidates = [
  path.resolve(process.cwd(), "src", "docs", "swagger.yaml"),
  path.resolve(process.cwd(), "docs", "swagger.yaml"),
];

const swaggerPath =
  candidates.find((candidate) => fs.existsSync(candidate)) || candidates[0];

const swaggerDocument = YAML.load(swaggerPath);

export { swaggerUi, swaggerDocument };