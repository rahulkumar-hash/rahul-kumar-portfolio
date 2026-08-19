import confetti from "canvas-confetti";
import { personalInfo, experiences, skillsData, projects, educationData, achievements } from "../data/portfolio";

export function triggerConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#06b6d4", "#3b82f6", "#10b981", "#ffffff"]
    });
  } catch (e) {
    // Graceful fallback
  }
}

// Core highlight projects strictly from Rahul Kumar's original 2-page resume
const coreResumeProjectIds = [
  "the-zodify",
  "astro-sushil",
  "proven-ro",
  "fretbox-chat",
  "party-witty",
  "fusionnet"
];

export function downloadResume() {
  triggerConfetti();

  const coreProjects = projects.filter((p) => coreResumeProjectIds.includes(p.id));

  // Create an HTML printable document that mirrors Rahul's original clean 2-page resume format
  const resumeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rahul Kumar - Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.45;
      padding: 36px 48px;
      max-width: 900px;
      margin: 0 auto;
      font-size: 13px;
    }
    .header { text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px; }
    .header h1 { font-size: 24px; font-weight: 800; letter-spacing: 0.5px; color: #0f172a; margin-bottom: 4px; text-transform: uppercase; }
    .header .subtitle { font-size: 13px; font-weight: 600; color: #0284c7; margin-bottom: 6px; }
    .header .contact-row { font-size: 11.5px; color: #475569; display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
    .header .contact-row a { color: #0284c7; text-decoration: none; }
    .status-badge { background: #e0f2fe; color: #0369a1; padding: 1px 8px; border-radius: 9999px; font-weight: 600; font-size: 11px; }

    .section-title {
      font-size: 13.5px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 3px;
      margin-top: 14px;
      margin-bottom: 8px;
    }
    p.summary { font-size: 12px; color: #334155; line-height: 1.5; text-align: justify; margin-bottom: 6px; }

    .skill-category { margin-bottom: 5px; font-size: 12px; }
    .skill-category strong { color: #0f172a; font-weight: 700; }

    .job-item { margin-bottom: 14px; }
    .job-header { display: flex; justify-content: space-between; align-items: baseline; font-size: 12.5px; font-weight: 700; color: #0f172a; }
    .job-sub { display: flex; justify-content: space-between; font-size: 11.5px; color: #64748b; font-style: italic; margin-bottom: 4px; }
    ul.job-bullets { list-style: disc; margin-left: 18px; font-size: 12px; color: #334155; space-y: 2px; }
    ul.job-bullets li { margin-bottom: 3px; }
    .tech-stack-row { font-size: 11px; color: #0369a1; margin-top: 3px; font-family: 'JetBrains Mono', monospace; }

    .project-item { margin-bottom: 12px; }
    .project-title { font-size: 12.5px; font-weight: 700; color: #0f172a; }
    .project-title a { color: #0284c7; text-decoration: none; }
    
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${personalInfo.name}</h1>
    <div class="subtitle">Full Stack Developer | React.js Developer | Node.js & MERN Specialist</div>
    <div class="contact-row">
      <span>📍 ${personalInfo.location}</span>
      <span>📞 ${personalInfo.phone}</span>
      <span>✉️ <a href="mailto:${personalInfo.email}">${personalInfo.email}</a></span>
      <span class="status-badge">${personalInfo.status}</span>
    </div>
  </div>

  <div class="section-title">Professional Summary</div>
  <p class="summary">${personalInfo.summary}</p>

  <div class="section-title">Technical Skills</div>
  <div class="skill-category"><strong>Frontend Technologies:</strong> React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Redux Toolkit, Zustand, Context API, Tailwind CSS, Material-UI, HTML5, CSS3</div>
  <div class="skill-category"><strong>Backend Technologies:</strong> Node.js, Express.js, RESTful APIs, Server-Sent Events (SSE), Socket.IO, JWT Authentication, Node-Cron, Microservices</div>
  <div class="skill-category"><strong>Databases & Caching:</strong> MongoDB (Aggregation Pipelines, Indexing), PostgreSQL / SQL basics, Redis (Caching, Session Management)</div>
  <div class="skill-category"><strong>DevOps & Cloud Tools:</strong> Git / GitHub, Docker basics, AWS (S3 / EC2 basics), Postman, Linux / VPS Deployment, Nginx, PM2, VS Code, CI/CD basics</div>
  <div class="skill-category"><strong>Integrations & APIs:</strong> Payment Gateways (Razorpay / Stripe), Firebase Services, ChatGPT / OpenAI API, Geocoding & Maps APIs</div>

  <div class="section-title">Professional Experience</div>
  ${experiences
    .map(
      (exp) => `
    <div class="job-item">
      <div class="job-header">
        <span>${exp.role} – ${exp.company}</span>
        <span>${exp.period}</span>
      </div>
      <div class="job-sub">
        <span>${exp.location}</span>
      </div>
      <ul class="job-bullets">
        ${exp.points.map((pt) => `<li>${pt}</li>`).join("")}
      </ul>
      <div class="tech-stack-row">Tech Stack: ${exp.techStack.join(", ")}</div>
    </div>
  `
    )
    .join("")}

  <div class="section-title">Key Projects (High Impact & Live Client Systems)</div>
  ${coreProjects
    .map(
      (proj) => `
    <div class="project-item">
      <div class="project-title">${proj.title} – ${proj.tagline} ${proj.liveUrl ? `(<a href="${proj.liveUrl}" target="_blank">${proj.domain}</a>)` : ""}</div>
      <ul class="job-bullets" style="margin-top: 3px;">
        ${proj.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
      <div class="tech-stack-row">Tech Stack: ${proj.techStack.join(", ")}</div>
    </div>
  `
    )
    .join("")}

  <div class="section-title">Key Achievements</div>
  <ul class="job-bullets">
    ${achievements.map((ach) => `<li><strong>${ach.label}:</strong> ${ach.description}</li>`).join("")}
  </ul>

  <div class="section-title">Education</div>
  ${educationData
    .map(
      (edu) => `
    <div class="job-item" style="margin-bottom: 6px;">
      <div class="job-header">
        <span>${edu.degree}</span>
        <span>${edu.period}</span>
      </div>
      <div class="job-sub">
        <span>${edu.institution}</span>
      </div>
    </div>
  `
    )
    .join("")}

  <script>
    window.onload = function() {
      setTimeout(() => { window.print(); }, 500);
    };
  </script>
</body>
</html>
  `;

  // Open printable version
  const blob = new Blob([resumeHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const printWindow = window.open(url, "_blank");
  if (!printWindow) {
    // If popup blocked, create standard download link
    const a = document.createElement("a");
    a.href = url;
    a.download = "Rahul_Kumar_Resume.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
