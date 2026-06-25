# AI Threat Intelligence Platform


![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black)
![SQLite](https://img.shields.io/badge/SQLite-Database-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Overview

The AI Threat Intelligence Platform is a full-stack cybersecurity application that automates threat analysis from raw text and uploaded files. The platform extracts Indicators of Compromise (IOCs), enriches them with threat intelligence, maps them to the MITRE ATT&CK framework, calculates risk scores, generates Sigma detection rules, and produces AI-powered threat reports.

The application is built using FastAPI for the backend, Next.js for the frontend, SQLite for data storage, and integrates AI to generate professional threat intelligence reports.

---

## Features

### Threat Analysis

* Analyze raw threat intelligence text
* Upload PDF, JSON and TXT files
* Automatic IOC extraction

### IOC Extraction

The platform detects:

* IPv4 Addresses
* URLs
* Domains
* Email Addresses
* CVEs
* MD5 Hashes
* SHA1 Hashes
* SHA256 Hashes

### Threat Enrichment

* CVE Severity
* CVSS Score
* IP Reputation
* Threat Confidence
* IOC Metadata

### MITRE ATT&CK Mapping

Automatically maps extracted IOCs to:

* ATT&CK Technique ID
* Technique Name
* ATT&CK Tactic

### Risk Scoring

Assigns:

* Low
* Medium
* High
* Critical

risk levels to every IOC.

### AI Report Generation

Generates a structured Threat Intelligence Report including:

* Executive Summary
* Threat Assessment
* MITRE ATT&CK Analysis
* Risk Analysis
* Mitigation Recommendations

### Sigma Rule Generation

Automatically generates Sigma detection rules for extracted IOCs.

### History Management

Stores every analysis inside SQLite database including:

* Analysis metadata
* AI Report
* IOC Results
* Highest Risk Level
* Timestamp

---

## Technology Stack

### Backend

* FastAPI
* Python
* SQLAlchemy
* SQLite
* PyPDF2

### Frontend

* Next.js
* React
* Tailwind CSS

### Database

* SQLite

---

## System Architecture

```text
                        User
                          │
                          ▼
                Next.js Frontend (React)
                          │
                    REST API Requests
                          │
                          ▼
                 FastAPI Backend (Python)
                          │
         ┌────────────────┼────────────────┐
         │                │                │
         ▼                ▼                ▼
 IOC Extraction    Threat Enrichment   File Parsing
         │                │                │
         └────────────────┼────────────────┘
                          │
                          ▼
              MITRE ATT&CK Mapping
                          │
                          ▼
                 Risk Score Calculation
                          │
                          ▼
               AI Report Generation
                          │
                          ▼
              Sigma Rule Generation
                          │
                          ▼
                 SQLite Database
                          │
                          ▼
                Analysis History
```

## Project Structure

```
backend/
    app/
        api/
        services/
        schemas/
        models/
        database/

frontend/
    src/
        app/
        components/
        services/
```

---

## Installation

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

### Threat Analysis

```
POST /api/analyze-threat/text
```

Analyze raw text.

```
POST /api/analyze-threat/file
```

Analyze uploaded files.

---

### AI Report

```
POST /api/analyze-threat/generate-report
```

---

### Sigma Rules

```
POST /api/analyze-threat/generate-sigma
```

---

### History

```
GET /api/history
```

Returns all previous analyses.

```
GET /api/history/{analysis_id}
```

Returns a specific analysis.

---

## Workflow

1. User submits text or uploads a file.
2. Parser extracts content.
3. IOC Extraction Service identifies IOCs.
4. Enrichment Service enriches IOCs.
5. MITRE Service maps ATT&CK techniques.
6. Risk Engine calculates IOC severity.
7. AI Report Generator creates a threat report.
8. Sigma Generator creates Sigma detection rules.
9. Analysis is stored in SQLite.
10. Results are displayed on the frontend dashboard.

---

## Live Demo

### Frontend

https://threat-intelligence-platform-seven.vercel.app/

### Backend API

https://threat-intelligence-platform-ydcq.onrender.com/

### Swagger Documentation

https://threat-intelligence-platform-ydcq.onrender.com/docs

## Future Enhancements

* Live Threat Intelligence APIs
* VirusTotal Integration
* AbuseIPDB Integration
* Authentication & User Management
* PostgreSQL Database
* Cloud Deployment
* Interactive Threat Dashboards

---

## Authors

U Akshay
