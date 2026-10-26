window.AP_DATA = window.AP_DATA || {};

window.AP_DATA.exam1 = {
  id: "exam1",
  name: "AB-100 \u2014 Practice Exam 1",
  timeMinutes: 100,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>Contoso's executive team wants to begin adopting AI agents across the company. Several departments have proposed ideas, but no one has defined target business outcomes, success measures, or priorities. Following the Cloud Adoption Framework AI adoption process, what should the solution architect help the team do FIRST?</p>",
      choices: ["Deploy a pilot Foundry project so teams can experiment with models", "Configure governance policies and data loss prevention for all environments", "Define an AI strategy that identifies use cases, outcomes, and priorities", "Build an AI-ready landing zone with networking and identity controls"],
      answer: 2,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>The Cloud Adoption Framework AI adoption journey starts with an AI strategy: identifying candidate use cases, the business outcomes they should deliver, how success is measured, and which initiatives come first. Without that foundation, later planning, readiness, and governance work has no clear direction.</p><p>A pilot Foundry project is an AI Plan or AI Ready activity that should follow prioritization, not precede it. Governance policies and DLP are part of Govern AI and Secure AI and need to know which workloads they protect. An AI-ready landing zone is an AI Ready activity that is sized and shaped by the strategy and plan, so building it first risks over- or under-investing.</p>"
    },
    {
      n: 2,
      prompt: "<p>Fabrikam deploys a Foundry agent that summarizes supplier contracts uploaded by external vendors. During testing, a contract contains hidden text that tells the agent to ignore its instructions and approve all payment terms. Which control BEST mitigates this specific risk?</p>",
      choices: ["Enable Prompt Shields to detect document attacks in grounding content", "Increase the model temperature so outputs vary between runs", "Restrict the agent to users who have the Contract Reviewer role", "Switch the deployment to a model with a larger context window"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>This is an indirect prompt injection: malicious instructions are embedded in content the agent processes rather than typed by the user. Prompt Shields in Azure AI Content Safety (available through Foundry guardrails) includes document attack detection that flags instructions hidden in grounding documents before they influence the model.</p><p>Changing temperature only alters randomness and does nothing to stop injected instructions. Restricting access by role limits who can use the agent but the attack comes from vendor-supplied documents, not unauthorized users. A larger context window lets the model read more text, which can actually make it easier for injected content to be included.</p>"
    },
    {
      n: 3,
      prompt: "<p>Northwind Traders is building a Copilot Studio agent that will use 14 tools, six knowledge sources, and several topics. The team does not want to author trigger phrases for every scenario and wants the agent to decide which tools, topics, and knowledge to combine to answer multi-part questions. Which orchestration approach should the architect recommend?</p>",
      choices: ["Classic orchestration with standard NLU trigger phrases for each topic", "Conversational language understanding (CLU) integration with custom intents", "Classic orchestration with the Fallback topic calling generative answers", "Generative orchestration so the agent plans which tools, topics, and knowledge to use"],
      answer: 3,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Generative orchestration uses a language model to interpret the user's request, select from the agent's descriptions of tools, topics, and knowledge, and chain several of them together for multi-part questions. Makers write good descriptions instead of exhaustive trigger phrases.</p><p>Classic orchestration with standard NLU depends on trigger phrases and matches one topic at a time, which is the opposite of what the team wants. CLU integration is useful when an organization already has or needs a custom trained intent model, but it still maps utterances to intents rather than planning across tools. Routing unmatched input to generative answers through the Fallback topic only answers from knowledge and cannot chain tools.</p>"
    },
    {
      n: 4,
      prompt: "<p>Woodgrove Bank plans to ground an HR agent on its SharePoint policy library. A review shows that many policies exist in three or four versions, some marked 'draft' and some last updated five years ago. Which action should the architect recommend BEFORE connecting the library as a knowledge source?</p>",
      choices: ["Add instructions telling the agent to prefer the newest document it finds", "Curate a single authoritative, current version of each policy and retire superseded copies", "Increase the number of search results the agent retrieves for each question", "Convert all policies to PDF so the agent can index them more efficiently"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "easy",
      explanation: "<p>Grounding data must be accurate, timely, and clean. Duplicate, draft, and stale versions will lead the agent to cite outdated or conflicting guidance. Establishing one authoritative, current copy of each policy (and archiving or excluding the rest) fixes the root cause before the agent ever indexes the content.</p><p>Telling the agent to prefer newer documents is unreliable because modified dates do not prove a document is approved. Retrieving more results increases the chance that conflicting versions appear in the same answer. Converting file formats does not address duplication, approval status, or age of the content.</p>"
    },
    {
      n: 5,
      prompt: "<p>Tailspin Toys has a Copilot Studio agent in production. The operations team already uses Azure Monitor workbooks and wants to analyze agent conversations, custom events, and errors alongside telemetry from other Azure workloads. What should the architect configure?</p>",
      choices: ["Export the Copilot Studio analytics page to Excel each week", "Connect the agent to Application Insights in the agent's advanced settings", "Enable Microsoft Purview audit logging for the environment", "Turn on transcript storage in the Power Platform admin center only"],
      answer: 1,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "easy",
      explanation: "<p>Copilot Studio can send telemetry to Application Insights by adding a connection string in the agent's advanced settings. Events such as messages, topic triggers, errors, and custom telemetry then appear in Application Insights, where they can be queried with KQL and visualized in Azure Monitor workbooks next to other workloads.</p><p>Exporting analytics to Excel is manual and does not integrate with Azure Monitor. Purview audit logs record administrative and user activity for compliance rather than operational telemetry for performance analysis. Transcripts in Dataverse are useful for review, but they do not feed Azure Monitor dashboards on their own.</p>"
    },
    {
      n: 6,
      prompt: "<p>Litware's data science team has fine-tuned a model in Microsoft Foundry and built its own multi-step orchestration logic in code. The business wants users to access this assistant from Microsoft Teams and Microsoft 365 Copilot. Which agent type should the architect recommend?</p>",
      choices: ["A declarative agent that uses the Microsoft 365 Copilot orchestrator", "A SharePoint agent scoped to the data science team site", "A Copilot Studio agent that uses classic orchestration", "A custom engine agent that uses the team's own model and orchestration"],
      answer: 3,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Custom engine agents let developers bring their own models and orchestrators (for example, a fine-tuned Foundry model plus code-based orchestration built with the Microsoft 365 Agents SDK) while still surfacing the experience in Teams and Microsoft 365 Copilot.</p><p>Declarative agents customize Microsoft 365 Copilot with instructions, knowledge, and actions, but they run on Copilot's own orchestrator and models, so the fine-tuned model and custom logic could not be used. A SharePoint agent is limited to site content. Copilot Studio with classic orchestration does not use the team's custom orchestration code.</p>"
    },
    {
      n: 7,
      prompt: "<p>Adventure Works builds a Copilot Studio agent in a development environment. The agent uses a SharePoint knowledge source whose site URL differs in development, test, and production, and a Dataverse connection. The team will deploy through Power Platform pipelines. What should the architect require in the solution?</p>",
      choices: ["Environment variables for the site URLs and connection references for the connections", "Separate unmanaged copies of the agent for each environment", "Hard-coded production URLs so that test results match production", "A shared service account connection embedded directly in each topic"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Environment variables store values such as URLs that change per environment, and connection references decouple components from specific connections so each target environment can bind its own connection during import. Together they let the same managed solution move through pipelines without editing the agent.</p><p>Maintaining separate unmanaged copies causes drift and defeats ALM. Hard-coding production URLs means the dev and test agents would read or write production data. Embedding a connection in each topic breaks portability and creates a security risk because credentials travel with the components.</p>"
    },
    {
      n: 8,
      prompt: "<p>Contoso is building a total cost of ownership (TCO) model for a customer service agent. The draft includes licensing, initial development, and Azure infrastructure. Which additional cost category is MOST often overlooked and should be added?</p>",
      choices: ["The one-time cost of buying developer laptops", "The cost of printing user training guides", "Ongoing evaluation, monitoring, content upkeep, and consumption-based message costs", "The depreciation of existing on-premises call center hardware"],
      answer: 2,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>AI solutions have significant recurring costs: consumption-based capacity (for example, Copilot Studio messages or model tokens), continuous evaluation and testing, monitoring, knowledge content maintenance, and the people who tune the agent. Omitting them makes TCO look much lower than reality and inflates ROI.</p><p>Developer laptops and printed guides are minor and not specific to the solution's lifecycle. Depreciation of existing hardware is a sunk cost that does not change based on the decision and should not drive the TCO of the new agent.</p>"
    },
    {
      n: 9,
      prompt: "<p>Fabrikam uses Dynamics 365 Customer Service. Service representatives frequently resolve cases with fixes that are never documented, so the knowledge base has gaps. Which prebuilt capability BEST addresses this?</p>",
      choices: ["Case Management Agent", "Quality Evaluation Agent", "Customer Knowledge Management Agent", "Intent-driven routing"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>The Customer Knowledge Management Agent analyzes resolved cases and their conversations, identifies knowledge gaps, and creates or updates knowledge articles so that undocumented fixes become reusable knowledge.</p><p>The Case Management Agent automates creating, updating, and closing cases but does not author knowledge. The Quality Evaluation Agent assesses interaction quality against supervisor-defined criteria. Intent-driven routing routes incoming work based on detected intent and has no role in creating knowledge content.</p>"
    },
    {
      n: 10,
      prompt: "<p>Woodgrove Bank is evaluating a retrieval-augmented Foundry agent before release. Stakeholders are most worried that answers include claims that are not supported by the retrieved documents. Which evaluation metric should the test plan emphasize?</p>",
      choices: ["Fluency", "Groundedness", "Coherence", "Latency"],
      answer: 1,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "easy",
      explanation: "<p>Groundedness measures whether the response is supported by the provided context. Low groundedness indicates the model is adding information that does not come from the retrieved documents, which is exactly the hallucination risk stakeholders describe.</p><p>Fluency measures language quality and grammar, so a fluent answer can still be unsupported. Coherence measures how logically the response flows. Latency is a performance metric and says nothing about factual support.</p>"
    },
    {
      n: 11,
      prompt: "<p>Tailspin Toys wants employees to ask questions about travel and expense policies from within Microsoft 365 Copilot Chat. The content lives in a SharePoint site, no custom model is needed, and the company wants minimal development effort. What should the architect recommend?</p>",
      choices: ["A custom engine agent hosted on Azure App Service", "A fine-tuned small language model deployed in Foundry", "A declarative agent that extends Microsoft 365 Copilot with the SharePoint site as knowledge", "A canvas app with an embedded AI Builder model"],
      answer: 2,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>Extending Microsoft 365 Copilot with a declarative agent is the lowest-effort way to deliver a scoped policy assistant inside Copilot Chat. It reuses Copilot's orchestrator, models, security trimming, and compliance while adding focused instructions and the SharePoint site as knowledge.</p><p>A custom engine agent requires building and hosting orchestration, which is unnecessary here. Fine-tuning a small language model adds cost and lifecycle work with no benefit for document Q&amp;A. A canvas app with AI Builder would not appear in Copilot Chat and does not fit a conversational policy assistant.</p>"
    },
    {
      n: 12,
      prompt: "<p>A Copilot Studio agent at Litware uses classic orchestration. When users phrase requests the agent cannot match, it repeats the same message indefinitely. The business wants the agent to rephrase once and then offer a transfer to a live representative on the second failure. Which topic should the maker customize?</p>",
      choices: ["The Fallback system topic", "The Greeting system topic", "The Conversation Start system topic", "The End of Conversation system topic"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>The Fallback system topic triggers when the agent cannot match the user's input to a topic. Makers can customize it, for example by tracking the number of unrecognized turns in a variable and redirecting to the Escalate topic after a threshold.</p><p>The Greeting topic responds to greetings, Conversation Start runs when a conversation begins, and End of Conversation handles wrap-up and satisfaction surveys. None of them are triggered by unrecognized input.</p>"
    },
    {
      n: 13,
      prompt: "<p>Northwind Traders lists several candidate processes for its first autonomous agent. Which process is the BEST candidate for autonomous automation?</p>",
      choices: ["Categorizing and routing high-volume inbound order emails using documented rules", "Negotiating multi-year pricing agreements with strategic suppliers", "Approving exceptions to the corporate credit policy for large customers", "Deciding which employees are included in a workforce reduction"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "easy",
      explanation: "<p>Good candidates for autonomous agents are high-volume, repetitive, rules-based tasks with clear success criteria, low individual risk, and outcomes that are easy to monitor and reverse. Categorizing and routing order emails fits all of these.</p><p>Negotiating strategic contracts requires judgment and relationship management. Credit policy exceptions are high-impact financial decisions that need accountable human approval. Workforce decisions have serious ethical and legal implications and should never be delegated to an autonomous agent.</p>"
    },
    {
      n: 14,
      prompt: "<p>Adventure Works releases a customer-facing agent on its website. Legal asks that customers clearly understand they are interacting with AI and can see where answers come from. Which responsible AI principle does this request MOST directly support?</p>",
      choices: ["Inclusiveness", "Fairness", "Transparency", "Reliability and safety"],
      answer: 2,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "easy",
      explanation: "<p>Transparency means people understand when they are interacting with an AI system, what it can and cannot do, and how it reaches its outputs. Disclosing AI use and providing citations to source content are direct implementations of this principle.</p><p>Inclusiveness focuses on making AI usable for people of all abilities and backgrounds. Fairness focuses on avoiding biased treatment of groups. Reliability and safety focus on consistent, safe operation under expected and unexpected conditions. They are all important, but the request maps most directly to transparency.</p>"
    },
    {
      n: 15,
      prompt: "<p>Contoso's logistics partner publishes shipment-tracking capabilities through a Model Context Protocol (MCP) server and adds new tools every quarter. Contoso wants its Copilot Studio agent to use these tools and pick up new ones without rebuilding actions each time. What should the architect recommend?</p>",
      choices: ["Create a custom connector action for each partner endpoint", "Add the partner's MCP server to the agent as a tool", "Use Computer Use to operate the partner's tracking website", "Export the partner's data nightly to a Dataverse table"],
      answer: 1,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Copilot Studio can connect to an MCP server and expose its tools to the agent. Because the tool list and descriptions come from the server, new or updated tools become available to the agent as the partner publishes them, without manually rebuilding each action.</p><p>Custom connector actions per endpoint must be updated whenever the partner changes its API. Computer Use is meant for systems without APIs and would be slower and more brittle. Nightly exports introduce stale data and do not give the agent access to the partner's tool capabilities.</p>"
    },
    {
      n: 16,
      prompt: "<p>Fabrikam's HR agent has collected several thousand thumbs-down reactions and comments in its first month. The product owner has limited time to make improvements. What is the BEST way to build the improvement backlog?</p>",
      choices: ["Address comments in the order they were received", "Rewrite the agent instructions completely to reset quality", "Ask the vendor to retrain the underlying foundation model", "Group feedback into themes, map them to topics or knowledge gaps, and prioritize by volume and impact"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>Clustering feedback into themes (missing knowledge, wrong topic triggered, tool failures, tone) and linking each theme to the agent component that causes it lets the team rank work by how many users are affected and how severe the impact is. AI-assisted theme analysis can speed up this grouping.</p><p>Processing comments chronologically ignores impact. Rewriting all instructions discards what works and makes it hard to measure what changed. Foundation models are not retrained for individual customers, and most issues come from knowledge, topics, or instructions rather than the base model.</p>"
    },
    {
      n: 17,
      prompt: "<p>Woodgrove Bank runs a Foundry-based assistant that receives a mix of simple FAQ prompts and complex multi-step analysis requests. Finance wants to reduce model spend without hand-coding logic that picks a model for each request. What should the architect recommend?</p>",
      choices: ["Deploy the largest reasoning model for every request to avoid quality issues", "Deploy model router and choose a routing mode that balances cost and quality", "Ask users to select a model from a drop-down list before each question", "Cache every response for 30 days and serve cached answers first"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>Model router in Microsoft Foundry is deployed as a single model endpoint that evaluates each prompt and routes it to the most suitable underlying model. Its Balanced, Cost, or Quality routing modes let the organization tune the cost-quality tradeoff, sending simple prompts to smaller, cheaper models automatically.</p><p>Using the largest model for everything maximizes cost. Asking users to choose a model shifts a technical decision to people who lack context. Aggressive caching can reduce some costs but returns stale or mismatched answers for analysis requests and does not address model selection.</p>"
    },
    {
      n: 18,
      prompt: "<p>Northwind Traders uses Dynamics 365 Supply Chain Management. Buyers spend hours reading vendor emails to update purchase order confirmations and delivery dates. Which prebuilt capability should the architect propose?</p>",
      choices: ["Supplier Communications Agent", "Demand planning analysis with Copilot", "Workload insights with Copilot", "Collections coordinator summary"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>The Supplier Communications Agent in Supply Chain Management helps automate vendor collaboration by reading vendor email responses, proposing updates to purchase orders such as confirmations and dates, and following up with vendors, keeping buyers in control of changes.</p><p>Demand planning analysis with Copilot helps analyze forecasts. Workload insights helps warehouse managers understand work and workforce. Collections coordinator summary is a Dynamics 365 Finance accounts receivable feature and does not process vendor purchase order communications.</p>"
    },
    {
      n: 19,
      prompt: "<p>Tailspin Toys builds agents with Foundry Agent Service and wants repeatable promotion from development to production. Which approach BEST supports ALM?</p>",
      choices: ["Recreate each agent manually in the production project using screenshots", "Let developers edit the production agent directly in the portal", "Export the agent's chat history and import it into production", "Store agent definitions and infrastructure as code in source control and deploy with CI/CD pipelines that run evaluations"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>For code-first agents, ALM relies on versioning agent definitions (instructions, tools, model deployment settings) and the supporting resources as code, then using CI/CD pipelines to deploy to separate environments. Running automated evaluations as quality gates prevents regressions from reaching production.</p><p>Manual recreation is error-prone and not repeatable. Editing production directly bypasses testing and change control. Chat history is runtime data, not the agent's definition, so importing it does not promote the agent.</p>"
    },
    {
      n: 20,
      prompt: "<p>A financial analyst at Litware receives large CSV exports each month and wants to find trends, build charts, and run calculations by asking questions in natural language inside Microsoft 365 Copilot, without writing code. Which prebuilt agent is the BEST fit?</p>",
      choices: ["Researcher agent", "Facilitator agent", "Analyst agent", "Project Manager agent"],
      answer: 2,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>The Analyst agent in Microsoft 365 Copilot uses reasoning and can run Python to analyze raw data such as spreadsheets and CSV files, producing insights, calculations, and visualizations from natural language requests.</p><p>Researcher focuses on multi-step research that synthesizes information from work content and the web into reports. Facilitator supports meetings with notes and agendas. Project Manager helps manage plans and tasks. None of them are designed for data analysis on raw files.</p>"
    },
    {
      n: 21,
      prompt: "<p>Contoso receives warranty claims in a shared mailbox. The company wants an agent that starts automatically when a claim arrives, extracts the details, checks eligibility in Dataverse, and creates a case without a user starting a conversation. Which design is MOST appropriate?</p>",
      choices: ["A prompt-and-response agent published to Teams", "A declarative agent in Microsoft 365 Copilot", "An autonomous agent in Copilot Studio with an event trigger on the mailbox", "A canvas app with a button that runs an AI Builder prompt"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Autonomous agents in Copilot Studio can be started by event triggers, such as a new email arriving, and then use their instructions, tools, and knowledge to complete a process without someone chatting with them. This matches a claim intake process that should run on its own.</p><p>A prompt-and-response agent waits for a user's question. A declarative agent extends Microsoft 365 Copilot and is also conversational. A canvas app button requires a person to act on each claim, which does not meet the requirement for automatic processing.</p>"
    },
    {
      n: 22,
      prompt: "<p>Adventure Works wants its product catalog to be used by several AI systems, including Copilot Studio agents and Microsoft 365 Copilot. Today the catalog is spread across spreadsheets with inconsistent column names and no clear owner. What should the architect recommend FIRST?</p>",
      choices: ["Upload all spreadsheets to every agent as separate knowledge files", "Consolidate the catalog into a governed store such as Dataverse with a defined schema, descriptions, and an owner", "Ask each agent maker to clean the data in their own copy", "Train a custom model to interpret the inconsistent column names"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "medium",
      explanation: "<p>Organizing business data for multiple AI consumers means creating a single, governed source with a consistent schema, meaningful table and column descriptions, and clear ownership. Agents and Copilot experiences can then all ground on the same reliable data.</p><p>Uploading every spreadsheet to every agent duplicates inconsistent data and creates maintenance drift. Letting each maker clean their own copy produces conflicting versions. Training a model to interpret messy data treats the symptom rather than fixing the data foundation, and adds cost.</p>"
    },
    {
      n: 23,
      prompt: "<p>Fabrikam's order-to-cash process starts with an opportunity in Dynamics 365 Sales, creates a sales order in Supply Chain Management through dual-write, and posts the invoice in Dynamics 365 Finance. Copilot features are enabled in each app. Which test approach BEST validates the solution?</p>",
      choices: ["Test each app's Copilot features separately and assume integration works", "Test only the Finance app because it produces the financial records", "Run load tests on the Sales app forms and skip functional tests", "Design end-to-end scenarios that follow a record across all three apps, including AI outputs and integration hand-offs"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p>End-to-end scenarios that follow a business transaction across Sales, Supply Chain Management, and Finance validate both the AI features in each app and the data hand-offs between them, including dual-write synchronization and any summaries or suggestions that depend on upstream data.</p><p>Testing apps in isolation misses integration defects that appear only when data flows across systems. Testing only Finance ignores where errors originate. Load testing one app's forms says nothing about functional correctness of the process.</p>"
    },
    {
      n: 24,
      prompt: "<p>Woodgrove Bank must update customer addresses in a legacy partner web portal that has no API. The process is repetitive and follows the same screens each time. Which Copilot Studio capability should the architect propose?</p>",
      choices: ["Computer Use to automate interactions with the website's user interface", "A custom connector built from the portal's OpenAPI definition", "An MCP server that exposes the portal's database tables", "Generative answers using the portal's public web pages as knowledge"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>Computer Use lets a Copilot Studio agent operate websites and desktop applications through their user interface, clicking, typing, and reading screens. It is designed for systems that do not expose APIs, such as this legacy portal.</p><p>A custom connector requires an API definition that the portal does not have. An MCP server would need someone to build access to the portal's back end, which is not available. Generative answers can read public pages but cannot perform updates.</p>"
    },
    {
      n: 25,
      prompt: "<p>Litware builds a Copilot Studio agent in a Power Platform environment located in a region where the required generative AI capacity is not available. Copilot Studio shows that generative features are unavailable. What should the administrator evaluate?</p>",
      choices: ["Enabling the setting that allows data movement across geographies for generative AI features, after a compliance review", "Moving the agent to the default environment in the same region", "Turning off authentication so the agent can reach the model", "Switching the agent to classic orchestration to bypass generative AI"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "hard",
      explanation: "<p>When generative AI capacity is not available in an environment's region, Power Platform admins can allow data to move across geographies for generative AI features in the Power Platform admin center. This has data residency implications, so it should be enabled only after compliance and privacy review.</p><p>The default environment in the same region has the same limitation. Disabling authentication creates a security risk and does not change where models are hosted. Classic orchestration does not make generative answers available and removes capabilities the business wants.</p>"
    },
    {
      n: 26,
      prompt: "<p>Contoso's sellers want Outlook and Teams to summarize customer emails and meetings, suggest follow-ups, and save activities to Dynamics 365 Sales. A team proposes building a custom agent from scratch. What should the architect recommend?</p>",
      choices: ["Build a custom engine agent with Foundry models and custom CRM integration", "Train a custom summarization model on historic sales emails", "Build a canvas app that sellers open alongside Outlook", "Adopt the prebuilt Copilot for Sales experience in Microsoft 365 Copilot and extend it only where gaps remain"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>Copilot for Sales already provides email and meeting summaries, follow-up suggestions, and saving activities to the CRM in Outlook and Teams. A buy-then-extend approach delivers value faster, with lower build and maintenance cost, and reserves custom work for genuine gaps.</p><p>Building a custom engine agent duplicates existing capability and creates long-term maintenance costs. Training a custom summarization model is unnecessary when general models already summarize well. A separate canvas app adds context switching and does not deliver in-app Copilot experiences.</p>"
    },
    {
      n: 27,
      prompt: "<p>Fabrikam's service representatives use Salesforce Service Cloud and work mostly in Outlook and Teams. Leadership wants AI-generated case summaries and email drafts grounded in the CRM without switching tools. What should the architect propose?</p>",
      choices: ["Migrate all cases to Dynamics 365 Customer Service first", "Deploy Microsoft 365 Copilot for Service connected to Salesforce", "Build a declarative agent that reads exported case CSV files", "Use Copilot in Dynamics 365 Customer Service through a browser extension"],
      answer: 1,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "medium",
      explanation: "<p>Microsoft 365 Copilot for Service connects to existing contact center and CRM systems, including Salesforce, and brings case context, summaries, and email drafting into Outlook and Teams. It is designed for this exact scenario.</p><p>Migrating CRM platforms is a large, unnecessary project to meet the requirement. Exported CSV files would be stale and lack security trimming. Copilot in Dynamics 365 Customer Service works with Dynamics 365 case data, not Salesforce cases.</p>"
    },
    {
      n: 28,
      prompt: "<p>Several makers at Northwind Traders write prompts that must return structured results consumed by Power Automate. Outputs are inconsistent, sometimes including extra prose. Which prompt engineering guideline should the prompt library emphasize?</p>",
      choices: ["Specify the exact output format, such as a JSON schema, and include an example of a valid response", "Keep prompts as short as possible so the model fills in the details", "Raise the temperature so the model explores more response styles", "Repeat the same instruction several times in capital letters"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>Clearly specifying the output format, ideally with a schema and an example of a correct response, is one of the most effective ways to get consistent, machine-readable output. Prompt actions in Copilot Studio and AI Builder prompts also support JSON output to reinforce this.</p><p>Very short prompts leave the format ambiguous. Higher temperature increases variability, which is the opposite of what is needed. Repeating instructions in capital letters is not a reliable technique and makes prompts harder to maintain.</p>"
    },
    {
      n: 29,
      prompt: "<p>Woodgrove Bank fine-tunes a model for complaint classification. Auditors require the bank to reproduce exactly how any production model version was created months later. What should the ALM process include?</p>",
      choices: ["Keeping only the latest training dataset to save storage", "Allowing data scientists to overwrite training files in place", "Recording only the model's accuracy score in a spreadsheet", "Versioning the training and evaluation datasets and linking them to each registered model version"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Reproducibility requires lineage: immutable, versioned training and evaluation datasets, the training configuration, and the base model version, all linked to the registered model version that was deployed. This supports audits and controlled rollback.</p><p>Keeping only the latest dataset or overwriting files in place destroys the history needed to reproduce older versions. Recording only an accuracy score shows how a model performed but not how it was built.</p>"
    },
    {
      n: 30,
      prompt: "<p>Tailspin Toys receives supplier invoices in dozens of layouts as PDFs and images. It needs to extract vendor name, invoice number, line items, and totals for an agent to validate against purchase orders. Which Foundry Tools capability should the architect propose?</p>",
      choices: ["Azure AI Document Intelligence with the prebuilt invoice model", "Azure AI Translator for document translation", "Azure AI Speech for batch transcription", "Azure AI Language for sentiment analysis"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "easy",
      explanation: "<p>Document Intelligence (part of Foundry Tools) includes a prebuilt invoice model that extracts key fields and line items from invoices in many layouts and formats, producing structured output an agent can validate.</p><p>Translator converts text between languages but does not extract fields. Speech transcribes audio. Sentiment analysis in Azure AI Language determines opinion and tone, which is irrelevant to invoice data extraction.</p>"
    },
    {
      n: 31,
      prompt: "<p>Telemetry for Litware's agent shows that token consumption per conversation has tripled and responses have slowed, even though the number of conversations is flat. Traces show each request sends the full conversation history and every retrieved document. Which tuning action is MOST appropriate?</p>",
      choices: ["Move the agent to a region with more capacity", "Double the provisioned throughput to absorb the extra tokens", "Reduce prompt context by summarizing history and limiting retrieved chunks to the most relevant results", "Disable telemetry to lower overhead"],
      answer: 2,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "hard",
      explanation: "<p>The telemetry points to prompt bloat: sending all history and all retrieved documents increases tokens, cost, and latency. Summarizing older turns and limiting retrieval to the top relevant chunks reduces input size while preserving answer quality.</p><p>Changing regions or buying more throughput treats the symptom and raises cost without fixing the oversized prompts. Disabling telemetry removes the visibility needed to tune the agent and does not reduce model tokens.</p>"
    },
    {
      n: 32,
      prompt: "<p>Contoso wants an agent grounded on aircraft maintenance manuals. The manuals are scanned image PDFs with no text layer. What should the architect identify as the main grounding data issue and remediation?</p>",
      choices: ["Timeliness; schedule the manuals to be re-uploaded weekly", "Relevance; delete manuals for older aircraft types", "Availability of usable text; extract the content with OCR, such as Document Intelligence, before indexing", "Accuracy; ask engineers to verify each manual page manually"],
      answer: 2,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "medium",
      explanation: "<p>Image-only PDFs have no machine-readable text, so retrieval cannot find meaningful content. The data must be made usable by extracting text and structure with OCR, for example with Document Intelligence layout extraction, before it is indexed for grounding.</p><p>Re-uploading the same scanned files does not add text. Deleting older manuals may harm relevance for fleets still in service and does not fix the format problem. Manual verification addresses accuracy but leaves the content unreadable to the agent.</p>"
    },
    {
      n: 33,
      prompt: "<p>The marketing team at Adventure Works wants a quick assistant that answers questions only from the documents in its campaign SharePoint site and can be shared in a Teams chat. Team members are not developers. What should the architect recommend?</p>",
      choices: ["A custom engine agent built with the Microsoft 365 Agents SDK", "A SharePoint agent created from the campaign site", "A Foundry agent with an Azure AI Search index", "A Copilot Studio agent using CLU intents"],
      answer: 1,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>SharePoint agents can be created directly from a site, library, or set of files, are scoped to that content, respect existing permissions, and can be shared with colleagues, including in Teams chats. They require no development skills.</p><p>A custom engine agent and a Foundry agent with Azure AI Search require developers and extra infrastructure. CLU intents in Copilot Studio are for intent recognition, not quick document Q&amp;A over a single site.</p>"
    },
    {
      n: 34,
      prompt: "<p>Fabrikam's QA lead wants to use Copilot to speed up creation of test cases for a new claims agent. Which approach is BEST?</p>",
      choices: ["Ask Copilot for test cases and run them without review", "Use Copilot only to format test results after manual testing", "Use Copilot to draft test cases from requirements and user stories, then have testers review and add edge and adversarial cases", "Avoid Copilot because AI-generated test cases are never reliable"],
      answer: 2,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "easy",
      explanation: "<p>Copilot can rapidly draft test cases, sample utterances, and expected outcomes from requirements. Human review keeps them accurate and complete, and testers should add edge cases, negative paths, and adversarial prompts that drafts often miss.</p><p>Running unreviewed cases risks gaps and incorrect expected results. Limiting Copilot to formatting wastes its biggest benefit. Avoiding it entirely ignores a well-established productivity gain when paired with review.</p>"
    },
    {
      n: 35,
      prompt: "<p>Northwind Traders wants to prove the return on investment of an agent that will assist accounts payable clerks. What should the architect do FIRST?</p>",
      choices: ["Purchase licenses for all clerks so adoption starts immediately", "Estimate ROI based on vendor marketing benchmarks", "Calculate ROI after six months using user satisfaction surveys only", "Measure baseline metrics such as invoices per clerk, cycle time, error rate, and cost per invoice"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "easy",
      explanation: "<p>An ROI analysis compares outcomes before and after a change. Capturing baseline process metrics such as throughput, cycle time, error rate, and unit cost is the first step, so improvements can be measured and translated into financial value.</p><p>Buying licenses first commits spend before value is established. Vendor benchmarks may not reflect Northwind's process. Satisfaction surveys alone are useful but cannot quantify financial return without operational baselines.</p>"
    },
    {
      n: 36,
      prompt: "<p>Makers at Woodgrove Bank want one place in Power Apps and Power Automate to discover prebuilt AI models, create and test prompts, and start document processing. Which feature should the architect point them to?</p>",
      choices: ["The Power Platform admin center capacity page", "The Copilot Studio analytics page", "Dataverse search settings", "AI hub"],
      answer: 3,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>AI hub in Power Apps and Power Automate is the central place for makers to explore AI capabilities such as prebuilt and custom AI models, prompts, and document processing, and to add them to apps and flows.</p><p>The capacity page in the admin center shows consumption. Copilot Studio analytics reports on agent usage and outcomes. Dataverse search settings control search indexing. None of them is a maker-focused catalog of AI capabilities.</p>"
    },
    {
      n: 37,
      prompt: "<p>Tailspin Toys field technicians need an assistant on rugged tablets that answers questions about a narrow set of equipment, with low latency and no network connection on job sites. Which approach is MOST appropriate?</p>",
      choices: ["A customized small language model fine-tuned on equipment content and deployed on the device", "A frontier large language model called through a cloud API", "A declarative agent in Microsoft 365 Copilot", "A Copilot Studio agent that uses web search as knowledge"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>Small language models such as the Phi family are designed for efficient inference on constrained hardware. Fine-tuning one on a narrow domain gives good accuracy for focused tasks while running locally with low latency and no connectivity.</p><p>Cloud-hosted frontier models, declarative agents, and Copilot Studio agents all require a network connection, which is unavailable on job sites. Web search knowledge also would not provide reliable equipment-specific guidance.</p>"
    },
    {
      n: 38,
      prompt: "<p>Before rolling out Microsoft 365 Copilot and SharePoint-grounded agents, Litware discovers that many sites are shared with 'Everyone except external users,' including sites with salary data. What should the architect recommend?</p>",
      choices: ["Delay the rollout until all SharePoint content is deleted and recreated", "Tell users not to ask Copilot about salaries", "Add instructions to each agent to ignore salary documents", "Remediate oversharing with access reviews and SharePoint Advanced Management controls, and apply Purview sensitivity labels"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>Copilot and agents respect existing permissions, so oversharing becomes discoverable. The fix is to correct access: run oversharing reports and access reviews, use SharePoint Advanced Management features such as restricted access or restricted content discovery, and label sensitive content with Purview so protections follow it.</p><p>Deleting and recreating content is disruptive and unnecessary. Relying on users or on agent instructions does not enforce access control, because anyone with permissions can still reach the data through search or other tools.</p>"
    },
    {
      n: 39,
      prompt: "<p>A Copilot Studio agent at Contoso must classify each customer comment into one of five categories and return a sentiment score in a fixed structure that a later step stores in Dataverse. What should the maker add to the agent?</p>",
      choices: ["A Fallback topic that asks the user to choose a category", "A Computer Use tool that opens a classification website", "A prompt action configured with instructions and JSON output", "A SharePoint knowledge source containing category definitions"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>A prompt action (prompt tool) in Copilot Studio wraps a reusable generative AI prompt with defined inputs and outputs. Configuring it to return JSON gives a predictable structure that downstream steps can store in Dataverse.</p><p>Asking users to classify their own comments defeats the purpose. Computer Use is for operating user interfaces without APIs. A knowledge source helps answer questions but does not produce structured classification output on its own.</p>"
    },
    {
      n: 40,
      prompt: "<p>Fabrikam customized Copilot in Dynamics 365 Sales in development by adding glossary terms, synonyms, and a custom topic in Copilot Studio. How should these customizations reach production?</p>",
      choices: ["Re-enter the glossary terms and topic manually in production", "Add the customizations to a solution and deploy it as a managed solution through a pipeline", "Copy the development environment over production", "Export the agent's transcripts and import them into production"],
      answer: 1,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Customizations to Copilot experiences in customer engagement apps are Dataverse components, so they should be packaged in a solution and promoted as a managed solution, ideally using Power Platform pipelines for consistent, auditable deployment.</p><p>Manual re-entry is error-prone and untracked. Copying a development environment over production would overwrite production data and settings. Transcripts are conversation records, not configuration.</p>"
    },
    {
      n: 41,
      prompt: "<p>Woodgrove Bank wants an agent to support small business loan decisions. Regulators expect accountable decisions and explanations for adverse outcomes. How should the architect position the agent?</p>",
      choices: ["Let the agent approve and reject loans autonomously to ensure consistency", "Use the agent only to send rejection letters", "Have the agent decide and allow customers to appeal to a human", "Have the agent gather data and provide a recommendation with reasons, while a loan officer makes and records the final decision"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "medium",
      explanation: "<p>For high-impact, regulated decisions, agents are best used for decision support: collecting information, applying policies, and recommending an outcome with an explanation. A human remains accountable for the final decision, which supports regulatory expectations and responsible AI.</p><p>Fully autonomous approval removes accountability. Limiting the agent to sending letters ignores where it adds value. Deciding first and relying on appeals still lets the AI make adverse decisions without human accountability.</p>"
    },
    {
      n: 42,
      prompt: "<p>Contoso's HR team owns a published Copilot Studio agent that answers benefits questions. The IT help desk agent, owned by another team in the same environment, should hand benefits questions to the HR agent while each team maintains its own agent. What should the architect recommend?</p>",
      choices: ["Add the HR agent to the help desk agent as a connected agent", "Copy the HR agent's topics into the help desk agent", "Create a child agent inside the help desk agent with HR content", "Publish both agents separately and ask users to choose"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "hard",
      explanation: "<p>Connected agents let one Copilot Studio agent delegate work to another independently managed and published agent. Each team keeps ownership and its own lifecycle, while the help desk agent's orchestrator routes benefits questions to the HR agent.</p><p>Copying topics duplicates content and creates drift. A child agent lives inside the parent agent and would move ownership to the help desk team. Asking users to pick the right agent pushes complexity onto users and loses the unified experience.</p>"
    },
    {
      n: 43,
      prompt: "<p>Tailspin Toys deploys several autonomous AI agents in Dynamics 365 Contact Center. Supervisors need real-time visibility into how those agents are performing against key indicators. What should the architect recommend?</p>",
      choices: ["Purview audit log searches", "The Agent insights dashboard", "Azure Cost Management reports", "Power Platform admin center capacity reports"],
      answer: 1,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>The Agent insights dashboard in Dynamics 365 customer service and contact center gives supervisors real-time visibility into key performance indicators and operational trends for their AI agents.</p><p>Purview audit logs are for compliance investigation, not operational KPIs. Cost Management shows spend. Capacity reports show license and storage consumption. None of these show agent performance trends for supervisors.</p>"
    },
    {
      n: 44,
      prompt: "<p>Adventure Works expects a steady, high, and predictable volume of model requests for a customer-facing agent and needs consistent latency. Finance wants predictable monthly costs. Which deployment option should the architect evaluate FIRST?</p>",
      choices: ["Pay-as-you-go standard deployment with no limits", "Provisioned throughput reserved for the workload", "A developer free tier", "A batch deployment that processes requests overnight"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "hard",
      explanation: "<p>Provisioned throughput reserves model processing capacity, giving consistent latency and predictable costs. For steady, high-volume workloads it can also be more cost-effective than per-token billing.</p><p>Pay-as-you-go suits variable or low volume but costs fluctuate and latency can vary under load. Free tiers are not appropriate for production. Batch processing delays responses, which is unacceptable for an interactive customer agent.</p>"
    },
    {
      n: 45,
      prompt: "<p>Northwind Traders wants the Copilot help and guidance experience in Dynamics 365 Supply Chain Management to answer questions about its own warehouse procedures, which are stored as Word and PDF documents. What should the architect recommend?</p>",
      choices: ["Rewrite the procedures as Microsoft Learn articles", "Train a custom model on the procedure documents", "Upload the files as knowledge to the Copilot for finance and operations apps agent in Copilot Studio", "Add the documents as attachments to each warehouse form"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "medium",
      explanation: "<p>Generative help and guidance in finance and operations apps uses the Copilot for finance and operations apps agent in Copilot Studio. Admins can upload files such as Word and PDF documents as knowledge so Copilot answers questions using company-specific procedures in addition to product documentation.</p><p>Microsoft Learn content is Microsoft's product documentation and cannot host customer procedures. Training a custom model is unnecessary for document Q&amp;A. Form attachments are not used as knowledge by Copilot.</p>"
    },
    {
      n: 46,
      prompt: "<p>Litware is validating a custom classification model that routes insurance claims to five queues. Which validation criteria are MOST appropriate before approving it for production?</p>",
      choices: ["Precision and recall per class on a held-out test set, with agreed thresholds and checks for performance gaps across customer segments", "Overall accuracy on the training data", "The number of training epochs completed", "The size of the model in gigabytes"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "hard",
      explanation: "<p>Validation should use data the model has not seen, measure per-class precision and recall (because overall accuracy can hide poor performance on rare but important classes), set acceptance thresholds in advance, and check for disparities across segments to support fairness.</p><p>Accuracy on training data overstates performance due to overfitting. Training epochs and model size describe how the model was built, not whether it performs well enough for production.</p>"
    },
    {
      n: 47,
      prompt: "<p>At Fabrikam, five business units are independently building similar agents, duplicating connectors and prompts, and applying inconsistent safety reviews. What should the architect recommend?</p>",
      choices: ["Ban agent development outside IT", "Let each business unit continue and compare results in a year", "Move all agents to a single developer's environment", "Establish an AI Center of Excellence with an intake process, standards, shared reusable assets, and a common review process"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>An AI Center of Excellence provides governance and enablement: an intake and prioritization process, design and responsible AI standards, a catalog of reusable components such as connectors and prompt libraries, and consistent reviews, while still letting business units build.</p><p>Banning development stifles innovation and pushes it into shadow IT. Waiting a year allows duplication and risk to grow. Centralizing everything in one person's environment creates a bottleneck and an ALM and security risk.</p>"
    },
    {
      n: 48,
      prompt: "<p>Contoso designs a Power Platform solution where a canvas app calls a generative AI prompt to draft quotes. Following the Power Platform Well-Architected guidance for reliability, how should the app behave if the AI service is temporarily unavailable?</p>",
      choices: ["Block the user from creating any quotes until the service returns", "Degrade gracefully by letting users create quotes manually and retry the AI draft later", "Automatically switch to an unapproved public AI service", "Display a generic error and close the app"],
      answer: 1,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Reliable intelligent workloads plan for dependency failure. Graceful degradation keeps the core business process running without the AI feature and supports retries, so a transient outage does not stop the business.</p><p>Blocking the process makes the AI feature a single point of failure. Switching to an unapproved service creates security and compliance risk. Closing the app is the worst user experience and also stops the process.</p>"
    },
    {
      n: 49,
      prompt: "<p>Woodgrove Bank wants to adopt a new Copilot feature in Dynamics 365 Finance. The organization's ALM policy requires validation before any change reaches production. What should the architect recommend?</p>",
      choices: ["Enable the feature in a sandbox environment, test it with business users, and then enable it in production through the change process", "Enable the feature directly in production on a weekend", "Wait until the feature is enabled automatically and test afterward", "Enable the feature in production for administrators only and skip testing"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "easy",
      explanation: "<p>AI features in finance and operations apps are typically turned on through Feature management and related settings. Enabling them first in a sandbox, validating with business users, and then promoting through the change process aligns with ALM requirements.</p><p>Enabling directly in production, even on a weekend, skips validation. Waiting for automatic enablement gives up control. Limiting to administrators in production still exposes production data to an untested feature.</p>"
    },
    {
      n: 50,
      prompt: "<p>Adventure Works has a Copilot Studio agent grounded on its product manuals. Testers notice the agent sometimes answers questions that are not covered in the manuals by using general information. The business wants answers to come only from company content. What should the maker change?</p>",
      choices: ["Add more trigger phrases to every topic", "Increase the content moderation level to the highest setting", "Switch the agent to classic orchestration", "Turn off the setting that lets the agent use its own general knowledge and web search"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>Copilot Studio lets makers control whether the agent can use the model's general knowledge (and web search) in addition to configured knowledge sources. Turning these off restricts answers to the organization's content, and the agent can say it does not know when the manuals do not cover a question.</p><p>Trigger phrases affect topic matching, not where generative answers come from. Content moderation controls how strictly harmful or low-confidence content is filtered, not which sources are used. Classic orchestration changes how topics are selected but does not by itself stop general knowledge use.</p>"
    }
  ] } ]
};
