<h1> AI Health Insurance Assistant</h1>

An end-to-end full stack generative AI application that helps users understand complex health insurance policy documents by asking questions in plain English. The system uses an AI agent built with Pydantic AI to analyze uploaded policy PDFs and extract accurate, contextual answers.

 <h2>Features</h2>

 - Upload health insurance policy PDFs

 - Ask natural language questions about coverage, exclusions, waiting periods, etc.

 - AI agent parses and reasons over policy content

 - Fast, real-time responses

 - Clean, modern, premium UI

 - Fully deployed and usable end-to-end

<h2>How It Works</h2>

 - The user uploads a health insurance policy PDF (or uses the provided sample).

 - The backend extracts text from the PDF.

 - A Pydantic AI agent analyzes the document and the user’s question.

 - The agent generates a clear, grounded answer based on the policy content.

 - The response is displayed instantly in the frontend.

<h2>Tech Stack</h2>
 - Frontend

 - Next.js (App Router)

 - TypeScript

 - Tailwind CSS

- Deployed on Vercel

 - Backend

 - FastAPI

 - Pydantic AI (agent orchestration, validation, retries)

 - PDF text extraction service

 - LLM via API

 - Deployed on Render

<h2>Live Demo</h2>

Frontend (Live App):
 https://ai-health-insurance-frontend.vercel.app

Backend API:
 https://ai-health-insurance-backend.onrender.com

<h2>Sample Policy</h2>

For easy testing, the application includes a sample health insurance policy PDF that can be downloaded directly from the UI.
This allows evaluators and users to test the app instantly without needing an external document.


<h2>Running Locally</h2>
Backend
# Clone the repository
git clone <backend-repo-url>
cd backend

<h3>Create virtual environment</h3>
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

<h3>Install dependencies</h3>
pip install -r requirements.txt

<h3>Set environment variables</h3>
export GROQ_API_KEY=your_api_key_here
or on Windows:
setx GROQ_API_KEY your_api_key_here

<h3> Run server</h3>
uvicorn main:app --reload


Backend will run at:

http://127.0.0.1:8000

Frontend
<h3> Clone the repository</h3>
git clone <frontend-repo-url>
cd frontend

<h3>Install dependencies</h3>
npm install

<h3> Set environment variable</h3>
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

<h3> Run development server</h3>
npm run dev


Frontend will run at:

http://localhost:3000

 <h2>Design & UX Notes</h2>

Thoughtful spacing, typography, and interaction design

Clear loading and error states

Simple and intuitive user flow

Focus on real-world usability

<h2> Future Enhancements</h2>

Support for pasted text or policy URLs

Multi-document comparison

Policy summarization

Highlighting source clauses in answers

User authentication and history

<h2>Author</h2>

Sheeba Nadeem
B.Tech CSE (Big Data Analytics)
SRM Institute of Science and Technology
