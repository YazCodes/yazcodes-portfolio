import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Blog2({ goBack }) {
  return (
    <div className="blog">
      <button onClick={goBack}>← Back to Homepage</button>
      <h1>Yaz's AI Engineering Journal</h1>

      <h1>Using LLMs as a Judge ⚖️</h1>

      <p>
        LLMs are lowkey the biggest gossipers. They love information, they love to chat and most importantly they love to judge.
      </p>

      <p>
        As I’ve been building out AI evaluation pipelines in my projects, one concept that keeps coming up is “LLMs as a judge.”
        I started using this because I needed a scalable way to evaluate different models and compare their outputs.
        Instead of manually reviewing everything, I used another LLM to critique each response so I could decide which model was actually best for the job.
      </p>

      <p>
        I also introduced pairwise comparisons like:
        “Which output is better, A or B and why?”
        This gave me a much stronger signal when comparing models.
      </p>

      <p>
        That said, I don’t rely soley on AI. I always keep a human in the loop (me 👀) to sense-check results and make sure the reasoning actually makes sense.
      </p>

      <p>Plus! I do not like to rely soley on just using one metric in my eval pipeline which is why i also used <strong>ROUGE scoring</strong></p>
      <ul>
        <li>ROUGE → "Did the model capture the important phrases?"</li>
        <li>LLM Judge → "Is this actually a good response?"</li>
      </ul>

      <h2>What is “Using LLMs as a Judge”?</h2>
      <p>
        Using an LLM as a judge means leveraging one language model to evaluate the output of another (or even itself).
        You prompt an LLM to score, rank, compare, and critique outputs based on specific criteria.
      </p>

      <h2>Why Do We Use LLMs as a Judge?</h2>
      <p>Traditional evaluation methods don’t scale well for AI systems:</p>

      <ul>
        <li>Humans are slow and expensive</li>
        <li>Rule-based checks are too rigid</li>
        <li>Metrics like BLEU or ROUGE don’t capture meaning well</li>
      </ul>

      <p>LLMs solve this by being:</p>

      <ul>
        <li>Flexible → understand nuance and reasoning</li>
        <li>Scalable → can run thousands of evals</li>
        <li>Context-aware → understand intent, not just keywords</li>
      </ul>

      <h2>Why This Actually Matters</h2>
      <p>
        If you're building AI products, evals are just as important as the model itself.
        Without evals, you’re basically guessing.
      </p>

      <ul>
        <li>Continuously measure quality</li>
        <li>Catch regressions early</li>
        <li>Compare prompts and models objectively</li>
        <li>Build confidence before shipping</li>
      </ul>

      <h2>Where LLM Judges Fit in the Pipeline</h2>
      <p>
        Think of this as your evaluation layer:
      </p>

      <p>
        <strong>User Input → LLM Generation → LLM Judge → Score → Store → Iterate</strong>
      </p>

      <ul>
        <li>Build feature</li>
        <li>Generate outputs</li>
        <li>Evaluate with LLM judge</li>
        <li>Analyse results (human in the loop!)</li>
        <li>Improve prompts/models</li>
        <li>Repeat</li>
      </ul>

      <h2>Writing Good Judge Prompts</h2>

      <ul>
        <li>Be explicit about evaluation criteria</li>
        <li>Tell the model how to think (“first analyse, then score”)</li>
        <li>Use a scoring rubric</li>
        <li>Require structured output (JSON)</li>
        <li>Include full context (task, input, output)</li>
        <li>Keep prompts deterministic</li>
        <li>Constrain the judge (don’t assume missing info)</li>
        <li>Add a reference answer where possible</li>
      </ul>

      <h2>Example: My Evaluation Prompt</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
{`You are an expert evaluator.

TASK:
<task prompt>

USER INPUT:
<user data>

MODEL OUTPUT:
<model response>

EVALUATION CRITERIA AND WEIGHTS:

1. Accuracy (Weight: 0.5)
- 1 = Incorrect or hallucinated
- 3 = Partially correct
- 5 = Fully correct

2. Completeness (Weight: 0.3)
- 1 = Very incomplete
- 3 = Partially complete
- 5 = Fully complete

3. Clarity (Weight: 0.2)
- 1 = Hard to understand
- 3 = Okay but not great
- 5 = Very clear and well structured

INSTRUCTIONS:
- Score each criterion from 1–5
- Multiply each score by its weight
- Calculate weighted final score
- Be strict and consistent

OUTPUT FORMAT (JSON ONLY):
{
"scores": {
  "accuracy": <1-5>,
  "completeness": <1-5>,
  "clarity": <1-5>
},
"weighted_score": <0-5>,
"reasoning": "<brief explanation>"
}`}
      </SyntaxHighlighter>


      <h2>Quick Note on ROUGE</h2>

      <p>
        ROUGE is a metric used to measure how similar a model’s output is to a reference by checking overlap of words or phrases.
        It’s useful as a quick baseline to see if key information is being captured.
      </p>

      <h3>Example</h3>
      <SyntaxHighlighter language="python" style={oneDark}>
{`from rouge_score import rouge_scorer

scorer = rouge_scorer.RougeScorer(['rouge2'], use_stemmer=True)

reference = "The cat sat on the mat and looked at the moon"
prediction = "The cat sat on the mat"

score = scorer.score(reference, prediction)
print(score['rouge2'].fmeasure)`}
      </SyntaxHighlighter>

      <h3>Why I Used ROUGE-2</h3>
      <p>
        I used ROUGE-2 to evaluate how well different AI models captured specific phrases in our speech to text tool.
        Since certain phrases are important to detect accurately, ROUGE-2 helped measure not just whether the words appeared,
        but whether they were captured in the correct sequence.
      </p>

      <h2>Good Practices I’ve Picked Up</h2>

      <ul>
        <li>Separate judge and generator models</li>
        <li>Run multiple evaluations and average results</li>
        <li>Log everything (prompts, outputs, scores, reasoning)</li>
      </ul>

      <h2>Limitations</h2>

      <ul>
        <li>LLMs can hallucinate</li>
        <li>They may favour certain writing styles</li>
        <li>They can be inconsistent</li>
      </ul>

      <h2>Human + LLM = Best Setup</h2>

      <p>
        The best systems combine LLMs for scale and humans for validation.
        This is what I’ve been doing in my own projects and it makes a big difference.
      </p>

      <h2>Choosing the Right Model as a Judge</h2>

      <ul>
        <li>Strong reasoning ability</li>
        <li>Consistency</li>
        <li>Good instruction-following</li>
      </ul>

      <p>
        Stronger models generally make better judges, but there is always a trade-off between cost and performance.
      </p>

      <h2>My Key Takeaway</h2>

      <p>
        Using LLMs as a judge isn’t just a nice-to-have it’s a core part of building reliable AI systems.
        If you’re building with LLMs and not investing in evals, you’re missing half the system.
      </p>
    </div>
  );
}

export default Blog2;