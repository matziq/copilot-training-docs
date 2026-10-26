window.AP_DATA=window.AP_DATA||{};const D={S:"Exam Facts \u0026 Strategy",P:"Plan: Strategy \u0026 ROI",C:"Copilot Studio",F:"Microsoft Foundry \u0026 Models",M:"Microsoft 365 Copilot \u0026 Extensibility",D:"Dynamics 365 \u0026 Power Platform AI",A:"ALM \u0026 Monitoring",G:"Security, Governance \u0026 Responsible AI"};const raw=`
S|AB-100 passing score|700|on a scaled range of 1 to 1000. A scaled score is not a percentage of questions correct.|Do not assume 70 percent correct equals a pass.|Scoring
S|Wrong-answer penalty|No penalty|for incorrect answers, so never leave a question blank.|Unanswered questions score the same as wrong ones.|Strategy
S|Weights until Nov 15 2026|Plan 25-30, Design 25-30, Deploy 40-45|percent under the outline in effect through November 15, 2026.|Deploy is the heaviest domain under the current outline.|Weights
S|Weights from Nov 16 2026|Plan 35-40, Design 30-35, Deploy 20-25|percent under the updated outline starting November 16, 2026.|The update flips emphasis toward Plan; check your exam date.|Weights
S|Certification earned|Agentic AI Business Solutions Architect Expert|is earned by passing AB-100 plus holding a qualifying prerequisite associate certification.|Passing AB-100 alone does not grant the Expert credential.|Certification
S|Prerequisite examples|Associate certification|such as PL-200, PL-400, MB-280, MB-230, MB-310, or MB-330 satisfies the Expert prerequisite.|Check Microsoft Learn for the current prerequisite list.|Certification
S|Three skill domains|Plan, Design, Deploy|AI-powered business solutions are the three AB-100 domains.|Objective numbers 1.x, 2.x, and 3.x map to these domains in order.|Domains
S|Question formats|Varied item types|may include case studies, multiple choice, multiple select, drag and drop, and build-list items.|Case studies may lock once you leave them; review before moving on.|Strategy
S|Keyword strategy|BEST, FIRST, MOST cost-effective|signal that several options may work but only one fits the stated priority.|Pick the option that matches the constraint, not the most powerful option.|Strategy
S|Architect mindset|Prebuilt before custom|is the default lens: extend or configure existing features before building new ones.|Build only when requirements clearly exceed prebuilt capability.|Strategy
S|Exam length|No fixed count published|but expert exams are often about 40 to 60 questions in about 100 minutes.|Budget time for case studies early.|Strategy
S|Sub-skill changes Nov 2026|Minor updates|to Design overall AI strategy, Design AI and agents, and Design the ALM process.|Most study content still applies across both outlines.|Weights
P|Cloud Adoption Framework for AI|AI adoption process|covers AI strategy, AI plan, AI ready, govern AI, manage AI, and secure AI.|Strategy comes before platform build-out.|CAF
P|AI strategy step|Use cases and direction|identifies business use cases, technology choices, data strategy, and responsible AI policy.|Do not start by selecting a model.|CAF
P|Grounding data accuracy|Accuracy|means content is correct and not contradictory.|Duplicate conflicting versions are an accuracy and cleanliness issue.|Data quality
P|Grounding data timeliness|Timeliness|means data is refreshed often enough for the questions asked.|Accurate but stale data still fails users.|Data quality
P|Grounding data relevance|Relevance|means sources are scoped to the agent purpose.|Broad sources dilute retrieval and produce vague answers.|Data quality
P|Grounding data availability|Availability|means the agent can reach the data securely at run time through a supported connector.|Data that exists but cannot be reached is unavailable.|Data quality
P|Total cost of ownership|TCO|includes licenses, consumption, build labor, monitoring, evaluation, content upkeep, and governance.|Ongoing operations are the most commonly missed cost.|ROI
P|ROI baseline|Measure before the pilot|so improvements in time, cost, and quality can be compared.|Without a baseline, ROI cannot be proven.|ROI
P|Build vs buy vs extend|Extend first|when a prebuilt product covers most needs and only a data or action gap remains.|Build when the capability is a unique differentiator.|Build vs buy
P|Model router|Model router|is a Foundry model deployment that routes each prompt to the most suitable underlying model to balance cost and quality.|It is deployed as a single model, not a separate gateway service.|Cost
P|Small language models|SLMs|such as Phi suit narrow tasks, low latency, lower cost, and on-device or edge scenarios.|They are not the best fit for broad open-ended reasoning.|Models
P|When to build a custom model|Custom model|is justified when prompting and retrieval cannot meet domain accuracy or format needs.|Fast-changing facts call for retrieval, not retraining.|Models
P|Prompt library|Curated prompts|with owners, tested goals, context, expected output, and versions help scale good practice.|Unreviewed personal prompts do not form a library.|Prompting
P|Prompt engineering basics|Goal, context, source, expectations|make prompts clear and repeatable.|Vague prompts increase output variability.|Prompting
P|AI Center of Excellence|AI CoE|provides governance, enablement, community, reusable assets, and value measurement.|A CoE guides makers; it does not block them.|CoE
P|Multi-agent solution|Multi-agent|coordinates specialized agents across Microsoft 365 Copilot, Copilot Studio, and Foundry.|Use it when one agent would become too complex to manage.|Strategy
P|Qualitative benefits|Soft benefits|include employee satisfaction, customer experience, and reduced errors.|They count in ROI but are harder to monetize.|ROI
C|Generative orchestration|Generative orchestration|uses descriptions of topics, tools, and knowledge to plan and chain responses.|Write clear descriptions; the planner relies on them.|Orchestration
C|Classic NLU|Standard NLU|matches user input to topics through trigger phrases.|It routes to one topic at a time and does not plan across tools.|Orchestration
C|CLU integration|Conversational language understanding|lets an agent reuse an existing Azure CLU model with custom intents and entities.|Choose it when a tuned CLU model already exists.|Orchestration
C|Fallback topic|Fallback|runs when no topic matches user input.|Use it to clarify or call generative answers, not to end the chat.|Topics
C|Escalate topic|Escalate|hands the conversation to a human agent.|High escalation rates signal topics or knowledge to improve.|Topics
C|Topics|Topics|define conversation paths with triggers, nodes, conditions, and variables.|With generative orchestration, topic descriptions matter more than trigger phrases.|Topics
C|Knowledge sources|Knowledge|lets agents ground answers on websites, SharePoint, Dataverse, files, and connectors.|Scope sources tightly to improve relevance.|Knowledge
C|Prompt tool|Prompts|are reusable instructions with inputs that call a model to summarize, classify, or extract.|Prompts are not environment variables or flows.|Tools
C|Agent flows|Agent flows|provide deterministic, connector-based automation that agents call as tools.|Use flows when steps must run the same way every time.|Tools
C|Autonomous agents|Event triggers|let agents act on signals such as a new email or record without a user prompt.|Autonomous agents still need guardrails and monitoring.|Agent types
C|Computer use|Computer use|lets an agent operate websites and desktop apps through the UI.|Prefer an API or connector when one exists.|Tools
C|MCP in Copilot Studio|MCP servers|expose tools and resources that agents discover and call through a standard protocol.|MCP connects tools; it is not a data store.|Extensibility
C|Connected agents|Agent-to-agent|lets one Copilot Studio agent delegate to another agent.|Use it to split large agents into maintainable specialists.|Multi-agent
C|Test pane|Test agent|lets makers chat with the agent and trace triggered topics, tools, and variables.|Interactive testing does not replace a regression test set.|Testing
C|Copilot Studio analytics|Analytics|reports engagement, resolution, escalation, abandonment, and satisfaction.|Read transcripts to learn why a metric is poor.|Monitoring
C|Channels|Publish channels|include Teams, Microsoft 365 Copilot, websites, and custom apps.|Each channel may need its own authentication setup.|Publishing
F|Microsoft Foundry|Foundry|is the platform for building, evaluating, and deploying models and agents, formerly Azure AI Foundry.|Use the current product name on the exam.|Platform
F|Foundry Agent Service|Agent Service|hosts pro-code agents with tools, threads, and orchestration in Foundry.|Pick it when you need full code control.|Agents
F|Foundry Tools|Foundry Tools|are the prebuilt AI services such as Speech, Vision, Language, and Document Intelligence, formerly Azure AI services.|Prefer a prebuilt tool before custom training.|Services
F|Foundry Models|Model catalog|offers models from Microsoft, OpenAI, and partners for deployment.|Compare cost, latency, and quality before choosing.|Models
F|Fine-tuning|Fine-tuning|adapts a base model with labeled examples for domain behavior or format.|It does not keep facts current; use retrieval for that.|Custom models
F|Retrieval-augmented generation|RAG|grounds responses on retrieved enterprise content at run time.|Usually cheaper and fresher than fine-tuning for facts.|Grounding
F|Evaluations|Foundry evaluations|score groundedness, relevance, coherence, fluency, and safety.|Run them before and after every change.|Evaluation
F|Groundedness|Groundedness|measures whether a response is supported by its sources.|Fluent answers can still be ungrounded.|Evaluation
F|Content filters|Content filters|screen prompts and completions for harmful categories.|They do not enforce data permissions.|Safety
F|Tracing|Tracing|records agent steps, tool calls, and latency for debugging.|Pair traces with evaluations to find root causes.|Monitoring
F|Document Intelligence|Document Intelligence|extracts fields, tables, and text from forms and documents.|Use prebuilt models for invoices and receipts first.|Services
F|Held-out validation|Test set|data not used in training reveals how a model generalizes.|Training accuracy alone hides overfitting.|Validation
F|Model versioning|Versioned deployments|enable comparison and rollback of custom models.|Never delete the last known good version.|ALM
M|Declarative agent|Declarative agent|extends Microsoft 365 Copilot with instructions, knowledge, and actions using Copilot's orchestrator and model.|No custom orchestration or model choice.|Agents
M|Custom engine agent|Custom engine agent|uses its own orchestrator and models while surfacing in Microsoft 365 channels.|Choose it for full control, not for simple Q and A.|Agents
M|Agent manifest|Manifest|declares a declarative agent's instructions, capabilities, and actions.|It is configuration, not a deployment pipeline.|Agents
M|SharePoint agents|SharePoint agent|answers questions scoped to selected site content and can be created by site users.|It respects existing SharePoint permissions.|Agents
M|Researcher agent|Researcher|performs multi-step research across work and web data and produces a report.|Use it for deep research, not quick lookups.|Prebuilt agents
M|Analyst agent|Analyst|reasons over data to produce insights and analysis.|It complements, not replaces, governed BI.|Prebuilt agents
M|Copilot connectors|Connectors|bring external content into Microsoft Graph so Copilot can ground on it.|Connector content must respect source permissions.|Extensibility
M|API plugins and actions|Actions|let agents call external APIs to read or change data.|Actions that write data need confirmation and auth.|Extensibility
M|Extend vs build|Extend Copilot|when users work in Microsoft 365 and Copilot's orchestration is sufficient.|Build custom when you need separate UX or orchestration.|Strategy
M|Agents in Teams|Teams agents|can work in chats, channels, and meetings with shared context.|Group agents must handle multiple users carefully.|Channels
M|Permissions model|Permission trimming|means Copilot only shows content the user can already access.|Oversharing in SharePoint leaks through Copilot.|Security
M|Agent2Agent|A2A|is a protocol that lets agents built on different platforms communicate and delegate tasks.|A2A connects agents; MCP connects agents to tools.|Protocols
M|Reasoning behavior|Reasoning|uses a reasoning-capable model to plan through complex problems.|It adds latency and cost for simple questions.|Behaviors
M|Voice mode|Voice|lets users speak with an agent and hear responses.|Design shorter, spoken-friendly answers.|Behaviors
D|Copilot for Sales|Copilot for Sales|brings CRM insights and drafting into Outlook and Teams for Dynamics 365 or Salesforce.|It targets sellers, not service agents.|Sales
D|Copilot for Service|Copilot for Service|brings case context and reply drafting into Microsoft 365 apps for service teams.|It can connect to several CRM systems.|Service
D|Copilot in Customer Service|Built-in Copilot|summarizes cases and conversations and drafts responses inside Dynamics 365 Customer Service.|Use it before building a custom agent.|Service
D|Contact Center channels|Contact Center|integrates agents with voice, chat, and digital messaging channels with handoff to humans.|Plan context transfer on escalation.|Service
D|Business terms|Glossary|teaches Copilot company-specific vocabulary in customer experience and service apps.|Security roles do not teach terminology.|Customization
D|Sales connectors|Connectors for Sales|bring external data into Copilot in Dynamics 365 Sales.|Prefer supported connectors to custom code.|Sales
D|Finance and SCM Copilot|Built-in AI|helps users in Dynamics 365 Finance and Supply Chain Management with insights and summaries.|Start with these before custom builds.|Finance and SCM
D|In-app help knowledge|Additional knowledge|adds company procedures to in-app help and agent chat in finance and operations apps.|It does not change configuration data.|Finance and SCM
D|AI hub|AI hub|is the Power Platform place to discover prompts, document processing, and other AI features.|It is a maker hub, not an admin portal.|Power Platform
D|AI in canvas apps|AI components|add prompts and AI models into a canvas app business process.|Validate outputs before writing to records.|Power Platform
D|Generative pages|Generative pages|let makers create app pages from natural language in model-driven apps.|Review generated code before production.|Power Platform
D|Agent feed|Agent feed|surfaces agent activity and items needing human review inside apps.|Humans stay in the loop for approvals.|Power Platform
D|Well-Architected for Power Platform|WAF pillars|are reliability, security, operational excellence, performance efficiency, and experience optimization.|Reliability covers model and connector failure handling.|Architecture
D|Multiple Dynamics 365 apps|Cross-app design|requires shared data, consistent identity, and end-to-end process testing.|Test hand-offs between apps, not just each app alone.|Architecture
A|Solutions|Solutions|package agents, flows, tables, and connectors for ALM.|Never build production agents outside a solution.|ALM
A|Managed solution|Managed|solutions lock components in test and production.|Develop in unmanaged; deploy managed.|ALM
A|Environment variables|Environment variables|store per-environment values such as URLs and IDs.|Hard-coded values break promotion.|ALM
A|Connection references|Connection references|bind solution components to connections per environment.|They hold a pointer, not credentials in the solution.|ALM
A|Pipelines|Power Platform pipelines|automate solution deployment across dev, test, and production.|Pipelines need a host environment.|ALM
A|Managed environments|Managed environments|add governance features such as sharing limits, usage insights, and pipeline support.|Some ALM features require them.|Governance
A|Foundry ALM|Code-first ALM|stores agent definitions in source control and promotes via CI/CD to separate projects.|Do not edit production projects by hand.|ALM
A|Data ALM|Data lineage|and versioning make grounding and training data changes traceable.|Untracked data changes make results unreproducible.|ALM
A|Application Insights|App Insights|collects agent telemetry for KQL queries, dashboards, and alerts.|Configure it per environment.|Monitoring
A|Resolution rate|Resolution|shows sessions the agent handled without escalation or abandonment.|A high rate with low satisfaction still needs review.|Metrics
A|Feedback loop|User feedback|plus transcripts drives prioritized backlog fixes.|Fix root causes such as stale knowledge.|Tuning
A|Regression testing|Test set|of versioned cases with expected outcomes is rerun before each release.|Random ad hoc questions cannot detect regressions.|Testing
A|Red teaming|Adversarial testing|probes for jailbreaks, prompt injection, and harmful output.|Run it before go-live and after major changes.|Testing
G|Six responsible AI principles|RAI principles|are fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.|Know which principle each scenario tests.|Responsible AI
G|Transparency|Transparency|means people understand what the AI does, its limits, and how it reached a result.|Disclose AI use to users.|Responsible AI
G|Accountability|Accountability|means humans remain responsible for AI outcomes.|Assign owners for every agent.|Responsible AI
G|Prompt injection|Prompt injection|tries to override instructions through user input or embedded content.|Indirect injection hides in documents and web pages.|Threats
G|Prompt Shields|Prompt Shields|detect jailbreak and document-based injection attacks.|They complement, not replace, least privilege.|Defenses
G|Entra Agent ID|Agent identity|gives agents identities for Conditional Access and lifecycle governance.|Shared service accounts hide agent actions.|Identity
G|Microsoft Purview|Purview|provides sensitivity labels, DLP, audit, and compliance for AI interactions.|It governs data, not model hosting.|Data governance
G|Data policies|DLP for connectors|classify connectors as business, non-business, or blocked in Power Platform.|They control connector combinations, not file permissions.|Governance
G|Oversharing|Oversharing|exposes sensitive content because agents respect existing permissions.|Fix permissions; do not blame the model.|Access control
G|Data residency|Residency|addresses where data is stored and processed and whether it crosses regions.|Check cross-geo data movement settings for AI features.|Compliance
G|Audit trails|Audit logs|record who changed models, prompts, and data and when.|Required evidence for regulated industries.|Compliance
G|Least privilege|Least privilege|limits agent tools and data access to what the task needs.|Broad write access magnifies injection impact.|Security
G|Human in the loop|Human review|is required for high-impact or irreversible agent actions.|Autonomy should grow with proven reliability.|Governance
`;window.AP_DATA.flashcards=raw.trim().split(/\n/).map((l,i)=>{const [k,front,strong,desc,trap,tag]=l.split("|");return{id:`fc-${String(i+1).padStart(3,"0")}`,deck:D[k],front,back:`<p><strong>${strong}</strong> ${desc}</p><p>${trap}</p>`,tag};});
