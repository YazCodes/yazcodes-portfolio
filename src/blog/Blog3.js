import llmDiagram from "../assets/LLM_diagram.jpg";

function Blog3({ goBack }) {
  return (
    <div className="blog">
      <button onClick={goBack}>← Back to Homepage</button>
      <h1>LLM’s have trust issues too 😔💔</h1>

      <h2>LLM Architecture and Trust Boundaries</h2>

      <p>
        A big part of building AI systems isn’t just getting them to work, it’s making sure they’re secure and trustworthy for the people using them.
      </p>

      <p>
        Large Language Models (LLMs) are neural networks designed for language tasks at scale. But that scale and flexibility come with a trade-off: complexity.
      </p>

      <p>
        LLM’s made up of multiple layers and interconnected components. You’ve got user inputs, retrieval systems, APIs, datasets, and the model itself all interacting in a single flow. Each of these moving parts introduces potential vulnerabilities, which makes securing LLM-based systems more challenging than traditional applications.
      </p>

      <p>
        If you look at a typical LLM data flow, each interaction between components crosses a <b>trust boundary; this is a point where data moves from one level of trust to another.</b> 
      </p>

        <img 
            src={llmDiagram} 
            alt="LLM architecture trust boundaries diagram" 
            className="blog-image"
        />

      <p>
        As devs we should treat these boundaries as control points where we actively apply security measures to reduce risk.
      </p>

      <p>At a minimum, that means applying:</p>

      <ul>
        <li><strong>Data validation</strong> – Don’t trust incoming data by default</li>
        <li><strong>Authentication</strong> – Verify who is interacting with your system</li>
        <li><strong>Authorisation</strong> – Control what they’re allowed to do</li>
      </ul>

      <h2>Types of Vulnerabilities and Mitigations</h2>

      <h3>1. User Interactions</h3>

      <p><strong>How vulnerabilities are introduced:</strong></p>
      <p>
        User input is one of the most direct attack vectors. Attackers can craft prompts to manipulate the model (prompt injection), bypass safeguards, or extract sensitive information (prompt leakage). Since LLMs treat input as instructions, malicious users can override system prompts or coerce the model into unintended behavior.
      </p>

      <p><strong>Mitigations:</strong></p>
      <ul>
        <li>Input validation & sanitisation: Filter or constrain user inputs</li>
        <li>Prompt hardening: Separate system instructions from user input</li>
        <li>Output filtering: Apply moderation or validation layers</li>
        <li>Rate limiting & monitoring: Detect abuse patterns</li>
        <li>Use of guardrails: Implement policy checks</li>
      </ul>

      <h3>2. Public Data Sources</h3>

      <p><strong>How vulnerabilities are introduced:</strong></p>
      <p>
        LLMs often retrieve or are trained on publicly available data. This data can be poisoned, misleading, or maliciously crafted to influence outputs. If your system blindly trusts external content, it can propagate false or harmful information.
      </p>

      <p><strong>Mitigations:</strong></p>
      <ul>
        <li>Source validation: Use trusted, curated sources</li>
        <li>Content filtering: Scan retrieved data before use</li>
        <li>Provenance tracking: Track where data came from</li>
        <li>Human-in-the-loop: Validate outputs for sensitive use cases</li>
        <li>Caching & review layers: Avoid blind real-time ingestion</li>
      </ul>

      <h3>3. Secondary Datasets</h3>
      <p>(e.g., fine-tuning data, embeddings, vector databases)</p>

      <p><strong>How vulnerabilities are introduced:</strong></p>
      <p>
        These datasets can introduce data poisoning, bias, or leakage of sensitive information if not properly controlled. For example, embeddings stored in a vector database may contain confidential data that can later be retrieved unintentionally.
      </p>

      <p><strong>Mitigations:</strong></p>
      <ul>
        <li>Data curation: Vet and clean datasets carefully</li>
        <li>Access controls: Restrict who can modify data</li>
        <li>Data minimisation: Avoid storing sensitive data unnecessarily</li>
        <li>Encryption: Protect data at rest and in transit</li>
        <li>Regular audits: Check for poisoning or bias</li>
      </ul>

      <h3>4. Internal Datasets</h3>

      <p><strong>How vulnerabilities are introduced:</strong></p>
      <p>
        Internal data is often highly sensitive. When connected to LLMs, there’s a risk of data leakage through model responses or poor access controls.
      </p>

      <p><strong>Mitigations:</strong></p>
      <ul>
        <li>Strict authorisation controls</li>
        <li>Data segmentation by access level</li>
        <li>Response filtering to prevent leakage</li>
        <li>Audit logging</li>
        <li>Zero-trust principles</li>
      </ul>

      <h3>5. External Services (APIs)</h3>

      <p><strong>How vulnerabilities are introduced:</strong></p>
      <p>
        LLM applications often rely on third-party APIs. These introduce supply chain risks such as compromised APIs, insecure data transmission, or over-permissioned integrations.
      </p>

      <p><strong>Mitigations:</strong></p>
      <ul>
        <li>Authentication & authorisation (API keys, OAuth)</li>
        <li>Input/output validation</li>
        <li>Network security (HTTPS, secure endpoints)</li>
        <li>Timeouts & fallbacks</li>
        <li>Vendor risk assessment</li>
      </ul>

      <p>
        Securing LLM applications isn’t just about the model, it’s about securing every boundary around it.
      </p>
      <p>
        Helping us to build safe AI tools our users can trust ✨
      </p>
    </div>
  );
}

export default Blog3;