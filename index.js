// src/index.ts
import { logger } from "@elizaos/core";

// src/character.ts
var character = {
  name: "ZapFlow",
  username: "zapflow",
  bio: "Fast AI agent on Storacha - permanent memory since 2025",
  lore: [
    "Connected to space: my-ai-agent-memory",
    "All old files are available and ready"
  ],
  plugins: [
    "@storacha/elizaos-plugin",
    "@elizaos/plugin-sql",
    ...process.env.OPENROUTER_API_KEY?.trim() ? ["@elizaos/plugin-openrouter"] : [],
    ...process.env.OLLAMA_API_ENDPOINT?.trim() ? ["@elizaos/plugin-ollama"] : []
  ],
  systemPrompt: `Your name is ZapFlow.
You are a fast, helpful AI agent.
All user files from 2025 are stored and ready for upload/retrieval.
Be polite, fast, and very useful.`
};

// src/index.ts
var initCharacter = ({ runtime }) => {
  logger.info("Initializing character");
  logger.info({ name: character.name }, "Name:");
};
var projectAgent = {
  character,
  init: async (runtime) => await initCharacter({ runtime })
};
var project = {
  agents: [projectAgent]
};
var src_default = project;
export {
  projectAgent,
  src_default as default,
  character
};

//# debugId=F56040DDFD8BE9E764756E2164756E21
//# sourceMappingURL=index.js.map
