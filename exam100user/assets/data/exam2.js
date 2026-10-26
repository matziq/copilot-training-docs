window.AP_DATA = window.AP_DATA || {};

window.AP_DATA.exam2 = {
  id: "exam2",
  name: "AB-100 \u2014 Practice Exam 2",
  timeMinutes: 100,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>Fabrikam has completed several successful AI pilots and is moving agents into production. Leadership now asks who will monitor model performance, manage model and agent versions, and handle incidents over time. In the Cloud Adoption Framework AI adoption process, which area addresses these needs?</p>",
      choices: ["AI strategy", "Manage AI", "AI plan", "AI ready"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>Manage AI covers operating AI workloads after deployment: monitoring performance and quality, managing model and agent lifecycles, handling incidents, and keeping operations sustainable.</p><p>AI strategy defines use cases, outcomes, and priorities. AI plan covers skills, resources, and roadmap for delivery. AI ready prepares the environment and landing zone. These come earlier in the journey and do not focus on ongoing operations.</p>"
    },
    {
      n: 2,
      prompt: "<p>Contoso plans to deploy dozens of autonomous agents that access business systems. The security team wants each agent to have its own identity so it can apply Conditional Access, track sign-ins, and assign sponsors and lifecycle policies, rather than sharing service accounts. What should the architect recommend?</p>",
      choices: ["A single shared service account with a strong password for all agents", "The maker's personal account for each agent's connections", "Anonymous access with IP address restrictions", "Microsoft Entra Agent ID to give each agent a distinct, governed identity"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>Microsoft Entra Agent ID provides agents with their own identities in Microsoft Entra so organizations can discover them, apply Conditional Access and access policies, assign owners or sponsors, audit sign-ins, and govern their lifecycle, just as they do for users and workloads.</p><p>A shared service account removes accountability and makes it impossible to tell which agent performed an action. Using a maker's personal account ties agent access to an individual who may leave and grants the agent the maker's permissions. Anonymous access eliminates identity-based controls altogether.</p>"
    },
    {
      n: 3,
      prompt: "<p>Woodgrove Bank already maintains a conversational language understanding (CLU) project in Azure AI Language with more than 150 intents and custom entities that are tuned for banking terminology and used by other applications. The bank now wants a Copilot Studio agent that recognizes the same intents. What should the architect recommend?</p>",
      choices: ["Integrate the existing CLU model with the Copilot Studio agent and map its intents to topics", "Re-create all intents as standard NLU trigger phrases in Copilot Studio", "Rely on generative answers only and remove all topics", "Train a new custom language model in Foundry from scratch"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Copilot Studio can use an Azure AI Language CLU model as its natural language understanding provider. Topics and entities are mapped to the CLU intents and entities, so the bank reuses its tuned, domain-specific model and keeps a single source of intent definitions across applications.</p><p>Re-creating intents as trigger phrases duplicates work and loses the CLU model's tuning. Relying only on generative answers drops structured intent handling the bank depends on. Training a new model from scratch wastes the existing investment and adds maintenance.</p>"
    },
    {
      n: 4,
      prompt: "<p>Tailspin Toys builds an agent for its European sales team. The knowledge library contains pricing and promotion documents for every region, and testers find that answers often quote North American prices. Which grounding data quality issue should the architect address, and how?</p>",
      choices: ["Timeliness; re-index the library every hour", "Availability; move the library to a different SharePoint tenant", "Relevance; scope the knowledge to European content or filter on region metadata", "Accuracy; ask the model to double-check its prices"],
      answer: 2,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "medium",
      explanation: "<p>The documents are accurate for their own region, but many are not relevant to this agent's audience. Scoping the knowledge source to European content, or tagging documents with region metadata and filtering on it, keeps retrieval focused on relevant material.</p><p>More frequent indexing does not change which documents are retrieved. Moving the library does nothing for relevance. Asking the model to double-check cannot fix the fact that the retrieved content is for the wrong region.</p>"
    },
    {
      n: 5,
      prompt: "<p>The product owner of Litware's customer support agent in Copilot Studio wants to know which topics most often lead to escalations or abandoned sessions so the team can prioritize fixes. Where should the owner look FIRST?</p>",
      choices: ["The Copilot Studio analytics page, reviewing session outcomes by topic", "The Azure subscription's cost analysis", "The Microsoft 365 admin center usage reports for Teams", "The Dataverse table storage report"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "easy",
      explanation: "<p>Copilot Studio analytics reports conversation outcomes such as resolved, escalated, and abandoned, along with topic-level details. This makes it the quickest place to see which topics drive escalations and abandonment.</p><p>Cost analysis shows spending, not conversation outcomes. Teams usage reports show app activity rather than agent topic performance. Dataverse storage reports show capacity use.</p>"
    },
    {
      n: 6,
      prompt: "<p>Contoso has a declarative agent in Microsoft 365 Copilot that answers IT questions from SharePoint. Users now want the agent to create and update tickets in the company's IT service management system, which exposes a documented REST API. What should the architect add?</p>",
      choices: ["A second SharePoint knowledge source containing ticket templates", "An API plugin action based on the ITSM system's OpenAPI description", "Computer Use to operate the ITSM web interface", "A fine-tuned model trained on historical tickets"],
      answer: 1,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Declarative agents can include actions, such as API plugins defined from an OpenAPI description, so Copilot can call the ITSM REST API to create and update tickets with proper authentication.</p><p>Another knowledge source only adds content to read and cannot perform updates. Computer Use is intended for systems without APIs and would be slower and more brittle when a documented API exists. A fine-tuned model may learn ticket language but cannot create tickets in the system.</p>"
    },
    {
      n: 7,
      prompt: "<p>Northwind Traders deploys Copilot Studio agents to production by importing unmanaged solutions. Makers sometimes edit agents directly in production, and changes are lost or conflict with later deployments. What should the architect require?</p>",
      choices: ["Export production changes back to development every night", "Give only one maker access to production", "Disable solution imports and build agents directly in production", "Deploy managed solutions to production and make all changes in development"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "easy",
      explanation: "<p>Managed solutions are intended for test and production environments. They prevent unmanaged customization drift, support clean upgrades and uninstalls, and enforce the practice of making changes in development and promoting them through ALM.</p><p>Nightly exports from production reverse the flow of change and risk importing untested edits. Limiting access to one maker still allows direct edits. Building in production eliminates testing entirely.</p>"
    },
    {
      n: 8,
      prompt: "<p>Adventure Works has a proprietary bike-fitting process that differentiates it from competitors. No prebuilt Microsoft or partner agent supports it, and the process relies on in-house measurement data and algorithms. Which approach should the architect recommend?</p>",
      choices: ["Build a custom agent that uses the in-house data and algorithms", "Buy a generic customer service agent and use it as is", "Extend Microsoft 365 Copilot with a SharePoint knowledge source only", "Wait until a vendor releases a bike-fitting agent"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "easy",
      explanation: "<p>Building is justified when a capability is differentiating, no prebuilt option exists, and it depends on proprietary data and logic. A custom agent (for example, built in Copilot Studio or Foundry with tools that call the fitting algorithms) captures that unique value.</p><p>A generic customer service agent would not perform bike fitting. Adding SharePoint knowledge to Copilot gives document answers but cannot run the measurement algorithms. Waiting for a vendor gives up a competitive advantage and may never pay off.</p>"
    },
    {
      n: 9,
      prompt: "<p>A project team at Fabrikam holds many Teams meetings and wants an agent that helps manage the agenda, takes live notes, and tracks action items during the meeting. Which Microsoft 365 agent should the architect propose?</p>",
      choices: ["Researcher agent", "Analyst agent", "Facilitator agent", "Skills agent"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>The Facilitator agent in Teams helps run meetings by keeping the agenda on track, taking collaborative notes, and capturing action items during the conversation.</p><p>Researcher performs multi-step research and produces reports. Analyst analyzes data with reasoning and code. A skills-focused agent helps find people with expertise. None of them run meetings.</p>"
    },
    {
      n: 10,
      prompt: "<p>Tailspin Toys updates its Copilot Studio agent every two weeks. After one release, several previously working questions began failing, and nobody noticed for days. Which testing practice should the architect introduce?</p>",
      choices: ["Ask a single tester to try a few questions after each release", "Rely on user thumbs-down reactions to find regressions", "Test only the new topics added in each release", "Maintain a test set of utterances with expected outcomes and run it automatically as a regression suite before each release"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "medium",
      explanation: "<p>A curated test set of representative utterances and expected results, run automatically before each release (for example, with Copilot Studio agent evaluation or the Copilot Studio Kit), catches regressions in existing behavior before users see them.</p><p>Ad hoc manual checks miss most cases. User feedback detects problems only after they reach production. Testing only new topics ignores the most common cause of regressions: changes that affect existing behavior.</p>"
    },
    {
      n: 11,
      prompt: "<p>Woodgrove Bank wants employees to start in Microsoft 365 Copilot and ask for loan pricing scenarios. A low-code team owns policy topics in Copilot Studio, and a pro-code team has a Foundry agent that runs complex pricing calculations. Which design BEST combines these into a multi-agent solution?</p>",
      choices: ["Rebuild the pricing logic as Copilot Studio topics and retire the Foundry agent", "Publish a Copilot Studio agent to Microsoft 365 Copilot that delegates pricing work to the Foundry agent", "Ask users to switch between three separate apps for each request", "Embed the Foundry agent's code into a SharePoint page"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "hard",
      explanation: "<p>A Copilot Studio agent published to Microsoft 365 Copilot can act as the orchestrating agent, handle policy topics itself, and delegate specialized pricing work to the Foundry agent (for example, as a connected agent). Each team keeps its own technology while users get one entry point.</p><p>Rebuilding complex calculations in low-code topics discards the pro-code investment. Switching between apps creates a poor experience. Embedding code in a SharePoint page is not an agent integration pattern and offers no orchestration.</p>"
    },
    {
      n: 12,
      prompt: "<p>Sellers at Contoso ask Copilot in Dynamics 365 Sales questions such as 'Which deals have a large deal size?' The company stores this value in a custom column named cr_estvalue on the opportunity table, and Copilot gives poor answers. What should the architect configure?</p>",
      choices: ["Rename the column in Dataverse to Deal Size and rebuild all forms", "Create a new canvas app that shows deal size", "Add glossary terms and synonyms in Copilot Studio that map business terms to the column", "Train a custom AI Builder prediction model on opportunity data"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Copilot in Dynamics 365 Sales supports glossary terms and synonyms, configured in Copilot Studio on the Copilot in Dynamics 365 Sales agent, to map organization-specific business language to tables and columns. Adding 'deal size' as a synonym or glossary term for the custom column helps Copilot answer correctly.</p><p>Renaming columns is disruptive and still may not cover every term sellers use. A canvas app does not improve Copilot's understanding. A prediction model forecasts outcomes but does not teach Copilot what business terms mean.</p>"
    },
    {
      n: 13,
      prompt: "<p>Northwind Traders managers want an agent that answers questions such as 'What was total revenue by region last quarter compared with the prior year?' The data is in structured tables. Which requirement should drive the agent design?</p>",
      choices: ["Uploading monthly sales reports as PDF knowledge files", "Using web search so the agent can find industry revenue figures", "Writing many topics with fixed answers for each region", "Giving the agent a tool that queries the structured data so it can aggregate and compare values accurately"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "medium",
      explanation: "<p>Analytical questions require filtering, aggregating, and comparing data. An agent that queries the structured source through a tool or data agent (for example, Dataverse or a Fabric data source) can compute accurate answers instead of guessing from text snippets.</p><p>PDF reports only contain the cuts someone already produced and retrieval cannot reliably compute new aggregates. Web search returns external information, not Northwind's revenue. Fixed-answer topics become outdated immediately and cannot handle ad hoc questions.</p>"
    },
    {
      n: 14,
      prompt: "<p>Litware's makers have started building Copilot Studio agents that call arbitrary HTTP endpoints and are published to public websites without review. The governance team wants to restrict which connectors, knowledge sources, and channels makers can use. What should the administrator configure FIRST?</p>",
      choices: ["Data policies (DLP) in the Power Platform admin center for the relevant environments", "A Teams app permission policy only", "A content filter on a Foundry model deployment", "A sensitivity label on each agent's description"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>Power Platform data policies apply to Copilot Studio agents and can block or classify connectors (including HTTP requests), knowledge sources, and channels such as public websites. They are the primary governance control for what makers can build into agents.</p><p>Teams app policies control which apps users can install in Teams but do not govern connectors or other channels. Foundry content filters apply to model outputs in Foundry deployments. Sensitivity labels on descriptions do not restrict what an agent can connect to.</p>"
    },
    {
      n: 15,
      prompt: "<p>Adventure Works builds a Copilot Studio agent that helps planners compare supplier proposals using multiple weighted criteria. Answers to these multi-step analytical requests are shallow. What should the architect recommend?</p>",
      choices: ["Enable voice mode so planners can speak their requests", "Add more trigger phrases to the comparison topic", "Enable deep reasoning so complex requests use a reasoning model", "Lower the content moderation level to allow longer responses"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Copilot Studio supports reasoning capabilities that let the agent use a reasoning model for complex, multi-step tasks such as weighing several criteria and explaining tradeoffs. This improves the depth and logic of answers to analytical requests.</p><p>Voice mode changes how users interact but not the quality of reasoning. Trigger phrases affect topic matching, not analytical depth. Content moderation controls filtering of harmful or low-confidence content, not reasoning ability.</p>"
    },
    {
      n: 16,
      prompt: "<p>Contoso's production agent answers thousands of questions per day. The team cannot manually review enough conversations to notice gradual declines in quality. Which approach should the architect recommend?</p>",
      choices: ["Review ten random conversations per quarter", "Run AI-assisted evaluators on sampled production traces on a schedule and alert on drops in quality scores", "Turn off logging to improve performance", "Wait for the help desk to report complaints"],
      answer: 1,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "medium",
      explanation: "<p>AI-assisted evaluators (for example, Foundry evaluators that score groundedness, relevance, and safety) can run continuously on sampled production traces. Tracking scores over time and alerting on declines detects drift that manual review would miss.</p><p>Ten conversations per quarter is not a meaningful sample at this volume. Turning off logging removes the data needed to detect problems. Waiting for complaints means users experience issues long before the team reacts.</p>"
    },
    {
      n: 17,
      prompt: "<p>Fabrikam wants to justify a customer self-service agent to its CFO. Which benefit metric BEST connects agent performance to financial value?</p>",
      choices: ["Containment rate converted to avoided cost per contact handled by human representatives", "The total number of chat sessions started", "The number of topics authored", "The average length of agent responses"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>Containment (conversations resolved without human handoff) multiplied by the cost of a human-handled contact quantifies avoided cost, which ties agent performance directly to financial value. It should be paired with quality measures such as customer satisfaction.</p><p>Session counts show activity but not value, because a session can fail. The number of topics measures build effort. Response length has no direct link to outcomes or savings.</p>"
    },
    {
      n: 18,
      prompt: "<p>Collections specialists at Woodgrove Bank's subsidiary use Dynamics 365 Finance. They spend significant time reviewing customer payment history before contacting customers and writing reminder emails. Which prebuilt capability should the architect propose?</p>",
      choices: ["Supplier Communications Agent", "Workload insights with Copilot", "Demand planning analysis with Copilot", "Collections coordinator summary"],
      answer: 3,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>Collections coordinator summary in Dynamics 365 Finance shows an AI-generated summary of a customer's collections situation in the Collections coordinator workspace and can generate reminder communications, saving specialists research and writing time.</p><p>The Supplier Communications Agent handles vendor purchase order communications. Workload insights and demand planning analysis are Supply Chain Management features for warehouse work and forecasting.</p>"
    },
    {
      n: 19,
      prompt: "<p>Tailspin Toys has a new version of a fine-tuned model in Microsoft Foundry that scored better in offline evaluation. The team wants to promote it safely to production. Which ALM approach is BEST?</p>",
      choices: ["Replace the production deployment immediately and delete the previous version", "Ask users to test the new version in production and report problems", "Register the version, validate it in a staging environment, shift traffic gradually while monitoring, and keep the previous version available for rollback", "Keep both versions in production and let the application choose randomly forever"],
      answer: 2,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Safe promotion of custom models uses versioning, staging validation, a gradual or controlled rollout with monitoring, and a retained previous version for quick rollback if production behavior differs from offline results.</p><p>Immediate replacement with deletion removes the safety net. Using production users as testers exposes customers to unvalidated changes. Permanent random selection is not a controlled rollout and makes results hard to interpret.</p>"
    },
    {
      n: 20,
      prompt: "<p>Litware processes a proprietary equipment inspection form that prebuilt document models cannot interpret correctly. The forms have a consistent structure, and the company has hundreds of labeled samples. What should the architect recommend?</p>",
      choices: ["Continue using the prebuilt general document model and correct errors manually", "Train a custom extraction model on the labeled inspection forms", "Fine-tune a large language model to write new forms", "Ask inspectors to retype the forms into email"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>Custom models are justified when prebuilt models cannot meet accuracy needs for specialized content and good labeled data exists. A custom extraction model (for example, in Document Intelligence or AI Builder) trained on consistent forms delivers reliable field extraction.</p><p>Manual correction keeps the cost the solution should remove. Fine-tuning an LLM to generate forms solves a different problem. Retyping into email adds work and errors.</p>"
    },
    {
      n: 21,
      prompt: "<p>Contoso uses Dynamics 365 Contact Center. It wants a Copilot Studio agent to answer calls on the voice channel, handle common requests, and transfer complex calls to a human representative with the conversation context. What should the architect design?</p>",
      choices: ["Connect the Copilot Studio agent to the Contact Center voice workstream and use the escalation handoff to pass context to the representative", "Publish the agent to a website and give callers the URL", "Build a separate IVR system and email transcripts to representatives", "Use a declarative agent in Microsoft 365 Copilot for callers"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Copilot Studio agents can be integrated with Dynamics 365 Contact Center workstreams, including voice. When the agent escalates, the conversation is routed to a representative along with context variables and transcript so the customer does not have to repeat information.</p><p>Giving callers a website URL abandons the voice channel. A separate IVR with emailed transcripts breaks the real-time handoff. Declarative agents run inside Microsoft 365 Copilot for employees, not for external callers.</p>"
    },
    {
      n: 22,
      prompt: "<p>Adventure Works uploaded its price list as a file to a Copilot Studio agent. Prices change daily in the source system, and customers have received outdated quotes. Which action BEST addresses the grounding data issue?</p>",
      choices: ["Add instructions telling the agent that prices may be outdated", "Upload the file again once per quarter", "Remove pricing from the agent's scope entirely", "Ground the agent on the live source, such as a Dataverse table or a tool that queries current prices"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "easy",
      explanation: "<p>The issue is timeliness. A static uploaded file becomes stale as soon as prices change. Grounding on the live system of record, through a Dataverse knowledge source or a tool that queries current prices, keeps answers current.</p><p>Disclaimers do not fix wrong quotes. Quarterly uploads are far slower than daily changes. Removing pricing eliminates the business value the agent is supposed to provide.</p>"
    },
    {
      n: 23,
      prompt: "<p>Fabrikam's testers use Microsoft 365 Copilot to generate test data and review agent transcripts, but their prompts produce vague results. Which prompt practice should the architect recommend?</p>",
      choices: ["Use one-word prompts so Copilot can be creative", "Include the goal, relevant context, the source to use, and the expected output format", "Avoid referencing specific files to protect privacy", "Ask the same vague question repeatedly until the answer improves"],
      answer: 1,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "easy",
      explanation: "<p>Effective Copilot prompts state the goal, provide context, point to specific sources (for example, a file or transcript), and describe the expected output, such as a table with defined columns. This produces precise, usable results.</p><p>One-word prompts are ambiguous. Avoiding file references removes the grounding testers need, and Copilot already respects the user's permissions. Repeating vague prompts rarely improves the output.</p>"
    },
    {
      n: 24,
      prompt: "<p>Northwind Traders built a Copilot Studio agent for warehouse supervisors. Supervisors want to use it inside Teams chats and from Microsoft 365 Copilot without learning a new app. What should the architect recommend?</p>",
      choices: ["Embed the agent in a public website and pin the site in Teams", "Rebuild the agent as a custom engine agent", "Publish the agent to the Teams and Microsoft 365 Copilot channel", "Export the agent's topics to a SharePoint list"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "easy",
      explanation: "<p>Copilot Studio agents can be published to the Teams and Microsoft 365 Copilot channel, making them available in Teams chats and within Microsoft 365 Copilot where supervisors already work.</p><p>Embedding a public website exposes the agent externally and is not the native experience. Rebuilding as a custom engine agent adds development without benefit. Exporting topics to a list does not create a usable agent.</p>"
    },
    {
      n: 25,
      prompt: "<p>An auditor at Woodgrove Bank asks who changed a Copilot Studio agent's instructions last month and when a Foundry model deployment was modified. Which sources should the architect use to provide this audit trail?</p>",
      choices: ["User satisfaction surveys and Teams chat history", "The agent's knowledge source files", "The Copilot Studio test pane history", "Microsoft Purview audit logs for agent activities and the Azure activity log for Foundry resource changes"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>Copilot Studio administrative and maker activities are captured in Microsoft Purview audit logs, and changes to Azure resources such as Foundry model deployments are recorded in the Azure activity log. Together they provide who, what, and when for model and agent changes.</p><p>Surveys and chats are not authoritative audit records. Knowledge files do not record configuration changes. The test pane is a maker tool for testing and does not keep a durable change history.</p>"
    },
    {
      n: 26,
      prompt: "<p>Contoso is piloting a Copilot Studio agent and has no reliable estimate of message volume for the first few months. Finance wants to avoid paying for unused capacity. Which billing approach should the architect evaluate?</p>",
      choices: ["Pay-as-you-go billing linked to an Azure subscription during the pilot", "A three-year prepaid capacity commitment sized for peak volume", "Buying a Microsoft 365 Copilot license for every customer", "Purchasing additional Dataverse database capacity"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>Pay-as-you-go billing for Copilot Studio, linked through an Azure subscription billing policy, charges for actual consumption. It fits pilots with uncertain volume; once usage stabilizes, the organization can compare it with prepaid capacity.</p><p>A long prepaid commitment sized for peak risks paying for unused capacity. Customers do not need Microsoft 365 Copilot licenses to use an external agent. Dataverse database capacity is storage and does not cover agent messages.</p>"
    },
    {
      n: 27,
      prompt: "<p>Fabrikam uses Copilot for Sales with Dynamics 365. Sellers want to see a custom 'Partner tier' field on account details in the Outlook experience. What should the administrator do?</p>",
      choices: ["Build a custom Outlook add-in that queries Dataverse", "Ask sellers to open Dynamics 365 in a browser tab", "Add the field to the account form in the Copilot for Sales admin settings", "Create a Power BI report and pin it in Outlook"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "medium",
      explanation: "<p>Copilot for Sales admin settings let administrators customize which CRM fields appear on record details, including custom fields, so sellers see Partner tier directly in the Outlook experience.</p><p>A custom add-in duplicates built-in functionality. Switching to a browser tab defeats the purpose of in-context insights. A Power BI report does not add a field to record details.</p>"
    },
    {
      n: 28,
      prompt: "<p>Litware's teams share hundreds of prompts in a common library, but some contain customer data, others are untested, and nobody knows which version is current. Which guideline should the architect add to the prompt library?</p>",
      choices: ["Allow anyone to edit any prompt without tracking changes", "Assign each prompt an owner, version, test status, and tags, and prohibit sensitive data in prompts", "Store prompts only in personal OneNote notebooks", "Delete prompts after each use to prevent reuse"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>A governed prompt library treats prompts as reusable assets: each has an owner, version history, test or approval status, and descriptive tags, and the library prohibits embedding sensitive data. This makes prompts discoverable, trustworthy, and safe to reuse.</p><p>Uncontrolled editing causes the confusion described. Personal notebooks prevent sharing. Deleting prompts after use eliminates the value of a library.</p>"
    },
    {
      n: 29,
      prompt: "<p>Tailspin Toys grounds several agents on a SharePoint library of product guides. Authors sometimes upload drafts that agents immediately start using. What should the ALM process for this grounding data include?</p>",
      choices: ["Separate draft and approved locations, with agents grounded only on the approved library after review", "Letting agents read drafts so they always have the newest information", "Asking agents to ignore any document with 'draft' in the name", "Removing version history to save storage"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Grounding content needs its own lifecycle: authoring in a draft location, review and approval, and publication to an approved location that agents use. This prevents unreviewed changes from reaching users, much like code promotion.</p><p>Grounding on drafts is the problem. Name-based instructions are unreliable and easy to bypass. Version history supports auditing and rollback of content and should be kept.</p>"
    },
    {
      n: 30,
      prompt: "<p>Woodgrove Bank's model-driven app runs several autonomous agents that update records. Operations staff want one place inside the app to see what agents did, review items that need attention, and collaborate with the agents. Which capability should the architect propose?</p>",
      choices: ["A Power BI dashboard refreshed weekly", "A daily email digest from Power Automate", "The Dataverse audit history on each record", "Agent feed in the app"],
      answer: 3,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Agent feed makes the app a central place for human-agent collaboration by showing a complete activity feed of what agents do, surfacing items that need human review, and letting users act on them in context.</p><p>A weekly dashboard and a daily email are delayed and outside the app. Audit history is per record and designed for compliance, not for supervising agent work across the app.</p>"
    },
    {
      n: 31,
      prompt: "<p>Traces for Adventure Works' Foundry agent show that 80 percent of response time is spent waiting on a single inventory lookup tool, which is called sequentially for each item in an order. Which tuning action should the architect recommend?</p>",
      choices: ["Switch to a larger language model", "Optimize the tool to accept multiple items in one call or run lookups in parallel", "Add more instructions telling the agent to respond faster", "Increase the maximum output tokens"],
      answer: 1,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "hard",
      explanation: "<p>The telemetry shows the bottleneck is the tool, not the model. Allowing batch lookups or parallel calls reduces the number of sequential round trips and directly cuts latency.</p><p>A larger model typically increases latency and does not speed up the tool. Instructions cannot make an external call faster. More output tokens lengthen responses and add time.</p>"
    },
    {
      n: 32,
      prompt: "<p>Northwind Traders wants a sales agent to answer questions about customers, but the CRM contains duplicate accounts, inconsistent country names, and missing industries. What should the architect recommend before launch?</p>",
      choices: ["Run data cleansing and deduplication with standardization rules, and assign data owners", "Let the agent decide which duplicate record is correct", "Hide the account table from the agent", "Launch now and fix issues reported by users"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "easy",
      explanation: "<p>Grounding data must be clean. Deduplicating accounts, standardizing values such as country names, filling key fields, and assigning ownership improves answer quality and keeps it from degrading again.</p><p>Letting the agent guess between duplicates produces inconsistent answers. Hiding the account table removes the data the agent needs. Launching with known data problems damages trust and adoption.</p>"
    },
    {
      n: 33,
      prompt: "<p>Contoso wants a Foundry-based assistant to answer questions about its product catalog, which changes daily. A developer proposes fine-tuning a model on the catalog every month. What should the architect recommend instead?</p>",
      choices: ["Fine-tune every day instead of every month", "Use a larger base model with no grounding", "Use retrieval-augmented generation over an index of the current catalog", "Train a small language model from scratch on the catalog"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Retrieval-augmented generation grounds responses in current data at query time, for example with Azure AI Search, so answers reflect daily changes without retraining. Fine-tuning is better for teaching style, format, or specialized behavior than for keeping facts current.</p><p>Daily fine-tuning is costly and still lags behind changes. A larger model without grounding cannot know Contoso's current catalog. Training a model from scratch is expensive and has the same staleness problem.</p>"
    },
    {
      n: 34,
      prompt: "<p>Fabrikam is preparing to launch an employee benefits agent. Stakeholders ask how the team will decide that the agent is ready. What should the test plan define?</p>",
      choices: ["A date by which the agent will launch regardless of results", "The number of topics the agent contains", "The number of developers who reviewed the agent", "Measurable acceptance thresholds, such as answer accuracy and correct escalation rate, against a labeled test set"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "easy",
      explanation: "<p>A sound testing process defines measurable criteria (for example, a target percentage of correct and grounded answers and correct escalations) evaluated against a representative labeled test set. Launch readiness is then an objective decision.</p><p>A fixed launch date ignores quality. Topic count and reviewer count describe effort, not whether the agent behaves correctly.</p>"
    },
    {
      n: 35,
      prompt: "<p>Woodgrove Bank wants Microsoft 365 Copilot to answer questions using articles stored in its third-party IT knowledge base. Users should get answers in Copilot Chat with existing permissions honored. What is the MOST efficient approach?</p>",
      choices: ["Build a custom engine agent that scrapes the knowledge base", "Use a Microsoft 365 Copilot connector to index the knowledge base content", "Copy every article into Word documents in OneDrive", "Train a custom model on the knowledge base articles"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>Microsoft 365 Copilot connectors bring external content into Microsoft Graph with access control lists, so Copilot can ground answers in that content while honoring permissions. This extends Copilot with minimal build effort.</p><p>A custom scraping agent is costly and fragile. Copying articles into Word creates stale duplicates and loses permissions. Training a model does not respect per-user permissions and goes stale quickly.</p>"
    },
    {
      n: 36,
      prompt: "<p>Business users at Tailspin Toys want to create Power Automate cloud flows by describing what they need in natural language, then refine the flow conversationally. Which Power Platform AI feature meets this need?</p>",
      choices: ["AI Builder sentiment analysis", "Copilot Studio analytics", "Copilot in Power Automate", "Dataverse search"],
      answer: 2,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "easy",
      explanation: "<p>Copilot in Power Automate lets makers describe a flow in natural language, generates it, and supports refining the flow through conversation.</p><p>AI Builder sentiment analysis is a model used inside flows, not a flow-building assistant. Copilot Studio analytics reports on agents. Dataverse search finds records across tables.</p>"
    },
    {
      n: 37,
      prompt: "<p>Litware uses Dynamics 365 Customer Service and Dynamics 365 Field Service. When a case needs an onsite visit, the technician must understand the case history before arriving. Which design BEST uses AI across both apps?</p>",
      choices: ["Ask technicians to read every case email before each visit", "Deploy each app in a separate Dataverse environment and export cases nightly", "Train a separate custom model for each app", "Keep both apps on the same Dataverse environment so the work order is created from the case and Copilot summaries draw on shared case and work order data"],
      answer: 3,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "hard",
      explanation: "<p>Customer Service and Field Service share Dataverse. Running them in the same environment lets work orders link directly to cases, and Copilot capabilities such as record summaries can draw on that connected data so technicians arrive informed.</p><p>Manual reading wastes time. Separate environments with nightly exports break relationships and add latency. Separate custom models add cost and still do not connect the data.</p>"
    },
    {
      n: 38,
      prompt: "<p>Contoso's security team wants to reduce the attack surface of its Microsoft Foundry model deployments used by internal agents. Which set of controls is MOST appropriate?</p>",
      choices: ["Private endpoints, managed identities with role-based access, and disabling key-based authentication where possible", "Publishing API keys in a shared wiki for developers", "Allowing public network access from all IP addresses", "Using a single owner role assignment for every developer"],
      answer: 0,
      topic: "Deploy AI-powered business solutions",
      objective: "3.4",
      difficulty: "medium",
      explanation: "<p>Model security includes network isolation with private endpoints, identity-based access with managed identities and least-privilege RBAC, and removing shared keys where possible. These reduce exposure and make access auditable.</p><p>Sharing keys in a wiki leaks credentials. Allowing public access from anywhere increases exposure. Giving every developer the owner role violates least privilege.</p>"
    },
    {
      n: 39,
      prompt: "<p>During a conversation, Adventure Works' Copilot Studio agent must start a deterministic process that creates a return authorization, requests manager approval, and updates the ERP system in a fixed order. What should the maker use?</p>",
      choices: ["A knowledge source containing return policy documents", "An agent flow called from the agent", "A Fallback topic with generative answers", "Web search to find the approval steps"],
      answer: 1,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Agent flows in Copilot Studio run deterministic, multi-step automation such as approvals and system updates in a defined order, and can be called by the agent as a tool. This combines conversational flexibility with predictable process execution.</p><p>Knowledge sources only answer questions. The Fallback topic handles unrecognized input. Web search retrieves public information and cannot perform approvals or updates.</p>"
    },
    {
      n: 40,
      prompt: "<p>Northwind Traders added knowledge sources and a custom topic to the Copilot for finance and operations apps agent in Copilot Studio in a development environment. How should these customizations be moved to the production environment linked to Dynamics 365 Supply Chain Management?</p>",
      choices: ["Re-create the knowledge sources manually in production", "Copy the development finance and operations database to production", "Package the agent customizations in a Dataverse solution and import it as managed into the production environment", "Email the knowledge files to production users"],
      answer: 2,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "hard",
      explanation: "<p>Copilot Studio customizations to the Copilot for finance and operations apps agent live in the Dataverse environment linked to the finance and operations environment. Like other Power Platform components, they should be packaged in a solution and promoted as managed to production.</p><p>Manual re-creation is error-prone and unrepeatable. Copying a database over production would overwrite production business data and does not include Dataverse agent components. Emailing files does not configure the agent.</p>"
    },
    {
      n: 41,
      prompt: "<p>Fabrikam wants to automate a process in which structured purchase requests are validated against fixed spending limits and routed to predefined approvers. There are no exceptions or unstructured inputs. What should the architect recommend?</p>",
      choices: ["A standard Power Automate flow with deterministic rules", "An autonomous agent with generative orchestration", "A fine-tuned language model that decides approvals", "A declarative agent in Microsoft 365 Copilot"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.1",
      difficulty: "medium",
      explanation: "<p>When inputs are structured and rules are fixed, deterministic automation is cheaper, faster, more predictable, and easier to audit. AI agents add the most value where inputs are unstructured or judgment is needed.</p><p>An autonomous agent adds cost and nondeterminism without benefit. A fine-tuned model is unnecessary to apply fixed thresholds. A declarative agent is a conversational assistant, not a process automation engine.</p>"
    },
    {
      n: 42,
      prompt: "<p>Woodgrove Bank's Copilot Studio agent must call an internal REST API that has an OpenAPI definition. Each call must run with the signed-in user's permissions. What should the maker configure?</p>",
      choices: ["Computer Use against the API's test page", "A knowledge source that points to the API documentation", "A shared API key embedded in the topic", "A REST API tool or custom connector with OAuth user authentication"],
      answer: 3,
      topic: "Design AI-powered business solutions",
      objective: "2.2",
      difficulty: "medium",
      explanation: "<p>Copilot Studio can add a REST API tool or custom connector from an OpenAPI definition. Configuring OAuth with user authentication ensures each call runs with the signed-in user's identity and permissions.</p><p>Computer Use is meant for user interfaces without APIs. Documentation as knowledge lets the agent describe the API but not call it. A shared key gives every user the same access and is a security risk.</p>"
    },
    {
      n: 43,
      prompt: "<p>Tailspin Toys runs an autonomous Copilot Studio agent that processes vendor emails. Some runs fail silently. Where should the maker look FIRST to review individual runs, see which steps executed, and find failures?</p>",
      choices: ["The Microsoft 365 message center", "The vendor's email server logs", "The agent's activity view in Copilot Studio", "The Power BI service usage metrics"],
      answer: 2,
      topic: "Deploy AI-powered business solutions",
      objective: "3.1",
      difficulty: "easy",
      explanation: "<p>Copilot Studio's activity view shows runs of autonomous agents, including triggers, the steps and tools used, and outcomes, so makers can find and diagnose failed runs.</p><p>The message center announces service changes. Vendor email server logs show delivery, not agent behavior. Power BI usage metrics show report usage.</p>"
    },
    {
      n: 44,
      prompt: "<p>Contoso's ROI model for a new agent assumes full productivity gains from the first month. Which adjustment makes the analysis MORE realistic?</p>",
      choices: ["Remove all costs after the first year", "Model an adoption ramp and include change management and training costs", "Use the most optimistic vendor benchmark", "Count gains for all employees, including those who will not use the agent"],
      answer: 1,
      topic: "Plan AI-powered business solutions",
      objective: "1.3",
      difficulty: "medium",
      explanation: "<p>Benefits arrive as users adopt the solution, so a realistic ROI model includes an adoption curve and the cost of change management and training that drive adoption.</p><p>Removing ongoing costs understates TCO. Optimistic benchmarks inflate benefits. Counting non-users overstates value.</p>"
    },
    {
      n: 45,
      prompt: "<p>Planners at Adventure Works want the Copilot chat in Dynamics 365 Supply Chain Management to answer questions such as 'How much stock of item A100 is available per company?' What should the architect recommend?</p>",
      choices: ["Add the on-hand inventory virtual entity as Dynamics 365 knowledge to the Copilot for finance and operations apps agent", "Upload a weekly inventory export to the agent", "Train a custom forecasting model", "Add Microsoft Learn documentation as a knowledge source"],
      answer: 0,
      topic: "Design AI-powered business solutions",
      objective: "2.3",
      difficulty: "hard",
      explanation: "<p>Finance and operations data can be exposed through Dataverse virtual entities. Adding the on-hand inventory virtual entity as Dynamics 365 knowledge to the Copilot for finance and operations apps agent in Copilot Studio lets Copilot answer inventory questions from live data.</p><p>A weekly export is stale. A forecasting model predicts demand rather than reporting current stock. Microsoft Learn documentation explains product features but contains no company inventory.</p>"
    },
    {
      n: 46,
      prompt: "<p>Litware fine-tuned a new version of its support model. Offline evaluation shows a higher relevance score than the current production model. What should the validation criteria ALSO require before approval?</p>",
      choices: ["That the new model has more parameters", "That training finished faster than the previous version", "That developers prefer the new model's writing style", "Comparison on the same evaluation set with no regression in safety, groundedness, or other key metrics"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.2",
      difficulty: "hard",
      explanation: "<p>A new model version should be compared with the baseline on the same evaluation data, and approval should require that it does not regress on other critical metrics such as safety and groundedness, not just that one metric improved.</p><p>Parameter count and training time do not indicate production quality. Developer preference is subjective and not a validation criterion.</p>"
    },
    {
      n: 47,
      prompt: "<p>Tailspin Toys' agent sometimes invents policy details when the retrieved documents do not cover a question. Which prompt engineering guideline should the architect add to the agent instructions?</p>",
      choices: ["Encourage the agent to answer every question confidently", "Tell the agent to use creative examples to fill gaps", "Instruct the agent to answer only from the provided sources and to say when the information is not available", "Remove all instructions so the model uses its defaults"],
      answer: 2,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "easy",
      explanation: "<p>Grounding instructions that limit answers to provided sources and tell the agent to acknowledge when information is missing reduce fabricated answers and support transparency.</p><p>Encouraging confident answers to everything and filling gaps creatively increase hallucinations. Removing instructions loses control over agent behavior.</p>"
    },
    {
      n: 48,
      prompt: "<p>Woodgrove Bank indexes long policy PDFs for a Foundry agent. Retrieval often returns sections that miss key details because entire documents are stored as single large blocks. What should the architect change in data processing?</p>",
      choices: ["Store each document as a single larger block", "Split documents into semantically meaningful chunks with some overlap and add metadata such as title and section", "Remove all headings to simplify the text", "Convert documents to images before indexing"],
      answer: 1,
      topic: "Design AI-powered business solutions",
      objective: "2.1",
      difficulty: "medium",
      explanation: "<p>Effective grounding pipelines chunk documents into coherent sections, use modest overlap to preserve context across boundaries, and attach metadata for filtering and ranking. This improves the precision of retrieved content.</p><p>Larger blocks make the problem worse. Removing headings removes useful structure. Converting to images removes machine-readable text.</p>"
    },
    {
      n: 49,
      prompt: "<p>Fabrikam wants to introduce the Case Management Agent in Dynamics 365 Customer Service gradually, starting with a few queues and expanding after results are reviewed. What should the architect recommend?</p>",
      choices: ["Enable the agent for all queues at once", "Build a custom copy of the agent for each queue", "Ask representatives to turn the agent on for themselves", "Use rollout manager to create a phased rollout plan for the agent"],
      answer: 3,
      topic: "Deploy AI-powered business solutions",
      objective: "3.3",
      difficulty: "medium",
      explanation: "<p>Rollout manager helps AI administrators and supervisors adopt autonomous AI agents in a phased, guided, and controlled way, for example starting with selected queues and expanding when results are satisfactory.</p><p>Enabling everything at once removes control and increases risk. Custom copies per queue create maintenance overhead. Letting individuals opt in produces inconsistent results and no controlled evaluation.</p>"
    },
    {
      n: 50,
      prompt: "<p>Contoso's pro-code team needs to build an agent with a fine-tuned model, automated evaluation pipelines, network isolation, and custom code-based tools. Which platform BEST fits these constraints?</p>",
      choices: ["Microsoft Foundry with Foundry Agent Service", "A SharePoint agent", "A declarative agent with only knowledge sources", "A Copilot Studio agent built only from topics"],
      answer: 0,
      topic: "Plan AI-powered business solutions",
      objective: "1.2",
      difficulty: "medium",
      explanation: "<p>Microsoft Foundry with Foundry Agent Service targets pro-code teams that need fine-tuned or custom models, code-based tools, evaluation pipelines, and enterprise networking such as private endpoints.</p><p>SharePoint agents and declarative agents are low-code ways to scope Copilot to content and cannot host a fine-tuned model. A topic-only Copilot Studio agent is a low-code design that does not meet the fine-tuning and code-first requirements.</p>"
    }
  ] } ]
};
