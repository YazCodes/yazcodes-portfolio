import React from "react";

function Blog({ goBack }) {
  return (
    <div className="blog">
      <button onClick={goBack}>← Back to Homepage</button>
      <h1> Yaz's AI Engineering Journal</h1>

      <h2>Why Do AI Evals Even Matter?</h2>
      <p>

                  I’ve been learning and building out eval pipelines in my current project and I've come to realise how critical evals are when it comes to building reliable AI systems.
                  Typically, AI evals are often overlooked and the focus is more on the development of the tool. However, both are just as important as each other. As I’m the first to say, AI systems are problematic, that’s the reality of it. The same input can produce slightly different outputs depending on the model, prompt, or context.
                  Because of this, manual testing isn’t enough. We need evaluation pipelines that allow us to test changes against real data and detect regressions automatically.
                  Typical questions AI evals help answer include:
                  
    </p>
    <br>
    </br>

    <ul>
      <li>Are the responses appropriate and relevant?</li>
      <li>Are content filters blocking valid outputs?</li>
      <li>Are responses too long or too short?</li>
      <li>Has the quality degraded after a prompt or model change?</li>
      <li>Did anything break structurally in the output?</li>
    </ul> 

    <h2>How I Started</h2>
    <p>
        Before making any changes to prompts or models, we need a reliable way to sense-check outputs using real historical data for our speech-to-text tool.
        Specifically, we want to validate:
    </p>

     <ul>
      <li>Output quality</li>
      <li>Output structure</li>
      <li>Content filtering behaviour</li>
      <li>Response length</li>
      <li>Pipeline stability</li>
    </ul> 

    <p>
       Manually reviewing outputs does not scale, so the goal is to automate this process using historical interaction data.
       Ideally, it would be great to build a golden dataset of high-quality data examples that future models can be evaluated against. It’s also important to remember that these golden datasets should be continuously updated to ensure that any updates in the model or changes in user or business needs don’t negatively affect the quality of the generated output.
    </p>

    <h2>Extract, Transform, and Load (ta da!)</h2>
    <p> I’ve currently been learning and building how we can get data ready for testing.
        ETL (Extract, Transform, Load) scripts are used to move data from a source system into a structured format that can be analysed or tested.
        In AI evaluation pipelines, ETL scripts typically:
    </p>

    <ul>
      <li>Extract raw interaction data (for example traces, prompts, and model outputs)</li>
      <li>Transform it into a clean and consistent schema</li>
      <li>Load it into datasets such as JSONL or CSV that can be used for testing</li>
    </ul> 

    <p>

                  This process is important because real production data is often messy, nested, or inconsistent. ETL scripts standardise the data so it can be reliably used in automated evaluations, allowing engineers to run tests across thousands of historical examples.
                  Basically, this means teams can compare new prompts or model versions against real user interactions, detect regressions, and measure whether changes actually improve the quality of the AI system.

                  Tech Stack I'm Working With
                  Most of this work has been focused on building evaluation tooling using:

    </p>


    <ul>
      <li>Python 3.12</li>
      <li>Polars for data analysis</li>
      <li>Regex for pattern validation</li>
      <li>Pytest for deterministic tests</li>
      <li>JSON / JSONL datasets</li>
    </ul> 
    
    <h2>Deterministic AI Tests</h2>
    <p>
                  The first layer of evaluation involves deterministic checks, similar to traditional unit tests.
                  These tests verify structural and formatting requirements, which are important for both user and business needs.
                   These checks are implemented using regex and Python assertions inside Pytest.
                  Deterministic checks ensure the output is structurally valid before evaluating quality.
                  For example:
                
    </p>
                  

   <ul>
      <li>All relevant headings are present</li>
      <li>Each section contains content</li>
      <li>Required formatting patterns exist</li>
    </ul> 
                  

    <h2>LLM-Based Evaluations</h2>              
    <p>This part hasn’t been tackled yet, but it’s definitely on my radar. Some qualities are harder to validate programmatically, such as:</p>
    <ul>
      <li>Accuracy</li>
      <li>Completeness</li>
      <li>Readability</li>
      <li>usefulness</li>
    </ul> 
             
    <p>
      This creates a second evaluation layer focused on quality rather than structure.
    </p>

    <h2>Using Polars for Evaluation Metrics</h2>
    <p>

                  Another tool I’ve been learning is Polars, a DataFrame library.
                  I used it to:

    </p>
    <ul>
      <li>Load JSONL evaluation datasets</li>
      <li>Inspect dataset shape</li>
      <li>Check data types</li>
      <li>Identify missing values</li>
      <li>View sample records</li>
    </ul> 
                  

       <p>
                 Example insights we can extract include, how many records we have, which columns contain null values and whether data types match expectations just to name a few!
                  This helps ensure our evaluation datasets are clean and reliable.
                  Here we can start getting the real information from the data!

       
      </p>

      <h2>My Key Takeaway So Far </h2>

      <p>
        
        One of the biggest things I’ve learned is that AI systems need evaluation infrastructure just as much as traditional software needs testing infrastructure.
        Without evaluations it becomes very difficult to:

      </p>

      <ul>
        <li>Safely experiment with prompts and models</li>
        <li>Detect regressions</li>
        <li>Maintain consistent output quality</li>
     </ul> 

     <p>
      A strong evaluation pipeline enables faster iteration while maintaining reliability, which is essential for building production AI systems 🫡
       And that’s exactly what I’m excited to keep learning!
     </p>














    </div>
  );
}

export default Blog;