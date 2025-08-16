# VectorShift Technical Assessment

This repository contains both the **frontend** (React) and **backend** (FastAPI) for the VectorShift pipeline builder assessment.

---

## Frontend (`/frontend`)

A React app for visually building and configuring pipelines using drag-and-drop nodes.

### Getting Started

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Features

- Drag-and-drop pipeline builder (React Flow)
- Custom node types (Input, Output, LLM, Math, Conditional, API, Timer, Merge, Text)
- Node controls for configuration
- Pipeline validation and submission to backend

---

## Backend (`/backend`)

A FastAPI server that validates pipeline structure and checks for cycles (DAG validation).

### Getting Started

1. **Install dependencies:**
   ```bash
   cd backend
   pip install fastapi uvicorn
   ```

2. **Run the server:**
   ```bash
   uvicorn main:app --reload
   ```
   The API will be available at [http://localhost:8000](http://localhost:8000).

### Endpoints

- `GET /` - Health check (`{"Ping": "Pong"}`)
- `POST /pipelines/parse` - Accepts pipeline nodes and edges, returns node/edge count and DAG check

---

## Requirements

- Node.js (v16+ recommended) for frontend
- Python 3.8+