import llmmeme from "../assets/llm_meme.png";

function Blog4({ goBack }) {
  return (
    <div className="blog">
      <button onClick={goBack}>← Back to Homepage</button>

      <h1>Can your LLM know too much?</h1>
      <h2>(spoiler, yes lol)</h2>

      <p>
        It’s wild how casual chats with ChatGPT over a few weeks end up knowing unique things about you, your morning routine, your goals for the month, your go-to coffee order, and they use all this information to keep engaging in conversations and help make decisions tailored to your habits and personality.
      </p>

      <p>
        Frankly, it’s a little scary and I think they know way too much about us.
      </p>

      <p>
        LLMs are powerful because they know a lot. But that intelligence comes from massive amounts of data and sometimes that can make them a little too nosy for their own good.
      </p>

      <p>
        So how do we balance giving LLMs access to useful information while ensuring sensitive data is not leaked, stored insecurely, or misused?
      </p>

      <p>In this post, I’ll break down:</p>

      <ul>
        <li>How LLMs acquire knowledge</li>
        <li>The security risks that come with it</li>
        <li>The key mitigations developers should use when building secure AI systems</li>
      </ul>

       <img 
            src={llmmeme} 
            alt="LLM meme" 
            className="blog-image"
        />


      <h2>1. Foundation Model Training</h2>

      <p>
        Foundation models are trained on enormous and diverse datasets collected from books, websites, articles, forums, and other public sources.
      </p>

      <p>This training helps the model:</p>

      <ul>
        <li>Recognise patterns</li>
        <li>Understand context</li>
        <li>Generate natural responses</li>
        <li>Generalise across different subjects</li>
      </ul>

      <p>
        Exposing the model to as much information as possible.
      </p>

      <h3>Security Risks</h3>

      <ul>
        <li>Copyrighted or licensed data being included without permission</li>
        <li>Exposure to illegal, harmful, or biased content</li>
        <li>Cultural or religious material being used inappropriately</li>
        <li>Memorisation of sensitive information from training data</li>
      </ul>

      <h3>Mitigations</h3>

      <ul>
        <li>Use licensed and curated datasets</li>
        <li>Filter harmful or illegal content before training</li>
        <li>Remove Personally Identifiable Information (PII)</li>
        <li>Apply data governance and dataset auditing</li>
        <li>Use differential privacy techniques where possible</li>
      </ul>

      <h2>2. Fine-Tuning Models</h2>

      <p>
        Fine-tuning takes a pre-trained model and trains it further on domain-specific data, such as legal documents, healthcare records, or internal company knowledge.
      </p>

      <p>
        <b>
        This wouldn’t be a Yasmin blog post without the mention of evals, currently I’ve been fine-tuning off-the-shelf models in my eval work. 
        </b>
      </p>

      <p>
       <b> Modern fine-tuning can also involve training the model using carefully designed prompts, expected outputs, and evaluation criteria. This helps align the model’s behaviour with specific goals, safety policies, or business requirements.</b>
      </p>

      <p>For example, models may be trained to:</p>

      <ul>
        <li>Refuse harmful requests</li>
        <li>Follow strict formatting rules</li>
        <li>Avoid hallucinations</li>
        <li>Provide responses that meet evaluation benchmarks</li>
      </ul>

      <p>This process is often supported through:</p>

      <ul>
        <li>Instruction tuning</li>
        <li>Reinforcement learning from human feedback (RLHF)</li>
        <li>Automated evaluations (evals)</li>
        <li>Red-team testing</li>
      </ul>

      <h3>Security Risks</h3>

      <ul>
        <li>Direct leakage of confidential training data</li>
        <li>Prompt injection attacks</li>
        <li>Overfitting on sensitive internal information</li>
        <li>Bias introduced through poor evaluation criteria</li>
        <li>Unsafe behaviours reinforced through flawed prompts</li>
      </ul>

      <h3>Mitigations</h3>

      <ul>
        <li>Avoid training on raw PII or confidential data</li>
        <li>Anonymise or redact sensitive information before training</li>
        <li>Use synthetic or minimised datasets where possible</li>
        <li>Continuously test models using security-focused evals</li>
        <li>Use adversarial prompting and red-team exercises</li>
        <li>Apply human review for high-risk outputs</li>
        <li>Restrict training datasets using least-privilege access controls</li>
      </ul>

      <h2>3. Retrieval-Augmented Generation (RAG)</h2>

      <p>
        RAG allows an LLM to retrieve live information from external sources such as:
      </p>

      <ul>
        <li>Websites</li>
        <li>APIs</li>
        <li>Company documents</li>
        <li>Vector databases</li>
      </ul>

      <p>
        Instead of relying only on training data, the model fetches information in real time to answer questions more accurately.
      </p>

      <p>
        However, it’s not always smooth sailing, changes in website layouts can affect the LLM scraping information correctly.
      </p>

      <h3>Security Risks</h3>

      <ul>
        <li>Prompt injection through malicious web content</li>
        <li>Data leakage from connected systems</li>
        <li>Insecure API integrations</li>
        <li>Reliance on manipulated or outdated sources</li>
      </ul>

      <h3>Mitigations</h3>

      <ul>
        <li>Validate and sanitise retrieved content</li>
        <li>Restrict external source access</li>
        <li>Use trusted retrieval pipelines</li>
        <li>Implement source verification and filtering</li>
        <li>Log and monitor retrieval activity</li>
      </ul>

      <h2>4. Database Access</h2>

      <p>
        Modern AI systems often connect directly to databases.
      </p>

      <p>These may include:</p>

      <ul>
        <li>Relational databases</li>
        <li>Vector databases</li>
        <li>Document stores</li>
        <li>Enterprise knowledge bases</li>
      </ul>

      <p>
        While this improves contextual awareness, it also increases the attack surface.
      </p>

      <h3>Security Risks</h3>

      <ul>
        <li>Unauthorised data exposure</li>
        <li>SQL injection or prompt injection attacks</li>
        <li>Excessive permissions</li>
        <li>Sensitive embeddings stored in vector databases</li>
      </ul>

      <h3>Mitigations</h3>

      <ul>
        <li>Role-Based Access Control (RBAC)</li>
        <li>Input sanitisation and validation</li>
        <li>Data masking and redaction</li>
        <li>Encryption at rest and in transit</li>
        <li>Principle of least privilege</li>
      </ul>

      <h2>5. Learning From User Interactions</h2>

      <p>
        Some systems improve through user interactions, feedback, and conversation history.
      </p>

      <p>
        While this creates more personalised experiences, it can also introduce privacy concerns.
      </p>

      <h3>Security Risks</h3>

      <ul>
        <li>Storing sensitive user conversations</li>
        <li>Persistent memory retaining confidential data</li>
        <li>Accidental reuse of private information in future outputs</li>
      </ul>

      <h3>Mitigations</h3>

      <ul>
        <li>Temporary rather than persistent memory</li>
        <li>Data sanitisation before storage</li>
        <li>Clear user consent and transparency</li>
        <li>Configurable memory controls</li>
      </ul>

      <p>
        Maybe in the future we should aim to reduce oversharing to our LLMs and remember this is not a casual chit-chat with friends who will forget 80% of your ramblings.
      </p>

      <p>
        LLMs are nosy and they will remember it all, so maybe just stick to the core facts of your query and avoid the LLM gossip (aka your personal data being leaked lol).
      </p>
    </div>
  );
}

export default Blog4;