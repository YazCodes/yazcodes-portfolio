import React from "react";

function Blog({ goBack }) {
  return (
    <div className="container">
      <button onClick={goBack}>← Back to Homepage</button>
      <h1>AI Engineering Journal: Why AI Evals Matter</h1>
      <p>

                          I’ve been learning and building out eval pipelines in my current project and I've come to realise how critical evals are when it comes to building reliable AI systems.
                  Typically, AI evals are often overlooked and the focus is more on the development of the tool. However, both are just as important as each other. As I’m the first to say, AI systems are problematic, that’s the reality of it. The same input can produce slightly different outputs depending on the model, prompt, or context.
                  Because of this, manual testing isn’t enough. We need evaluation pipelines that allow us to test changes against real data and detect regressions automatically.
                  Typical questions AI evals help answer include:
                  Are the responses appropriate and relevant?


                  Are content filters blocking valid outputs?


                  Are responses too long or too short?


                  Has the quality degraded after a prompt or model change?


                  Did anything break structurally in the output?


                  Problem
                  Before making any changes to prompts or models, we need a reliable way to sense-check outputs using real historical data for our speech-to-text tool.
                  Specifically, we want to validate:
                  Output quality


                  Output structure


                  Content filtering behaviour


                  Response length


                  Pipeline stability


                  Manually reviewing outputs does not scale, so the goal is to automate this process using historical interaction data.
                  Ideally, it would be great to build a golden dataset of high-quality data examples that future models can be evaluated against. It’s also important to remember that these golden datasets should be continuously updated to ensure that any updates in the model or changes in user or business needs don’t negatively affect the quality of the generated output.

                  Extract, Transform, and Load (ta da!)
                  I’ve currently been learning and building how we can get data ready for testing.
                  ETL (Extract, Transform, Load) scripts are used to move data from a source system into a structured format that can be analysed or tested.
                  In AI evaluation pipelines, ETL scripts typically:
                  extract raw interaction data (for example traces, prompts, and model outputs from tools like Langfuse)


                  transform it into a clean and consistent schema


                  load it into datasets such as JSONL or CSV that can be used for testing


                  This process is important because real production data is often messy, nested, or inconsistent. ETL scripts standardise the data so it can be reliably used in automated evaluations, allowing engineers to run tests across thousands of historical examples.
                  Basically, this means teams can compare new prompts or model versions against real user interactions, detect regressions, and measure whether changes actually improve the quality of the AI system.

                  Tech Stack I'm Working With
                  Most of this work has been focused on building evaluation tooling using:
                  Python 3.12


                  Polars for data analysis


                  Regex for pattern validation


                  Pytest for deterministic tests


                  JSON / JSONL datasets



                  Deterministic AI Tests
                  The first layer of evaluation involves deterministic checks, similar to traditional unit tests.
                  These tests verify structural and formatting requirements, which are important for both user and business needs.
                  For example:
                  All relevant headings are present


                  Each section contains content


                  Required formatting patterns exist


                  These checks are implemented using regex and Python assertions inside Pytest.
                  Deterministic checks ensure the output is structurally valid before evaluating quality.

                  LLM-Based Evaluations
                  This part hasn’t been tackled yet, but it’s definitely on my radar. Some qualities are harder to validate programmatically, such as:
                  accuracy


                  completeness


                  readability


                  usefulness


                  This creates a second evaluation layer focused on quality rather than structure.

                  Using Polars for Evaluation Metrics
                  Another tool I’ve been learning is Polars, a DataFrame library.
                  We use it to:
                  Load JSONL evaluation datasets


                  Inspect dataset shape


                  Check data types


                  Identify missing values


                  View sample records


                  Example insights we can extract include:
                  How many records we have


                  Which columns contain null values


                  Whether data types match expectations


                  This helps ensure our evaluation datasets are clean and reliable.
                  Here we can start getting the real information from the data.

       
      </p>
    </div>
  );
}

export default Blog;