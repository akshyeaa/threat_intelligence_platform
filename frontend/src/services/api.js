const API_BASE =
  "http://127.0.0.1:8000/api/analyze-threat";

export async function analyzeText(content) {
  const response = await fetch(
    `${API_BASE}/text`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    }
  );

  return response.json();
}

export async function generateReport(
  content
) {
  const response = await fetch(
    `${API_BASE}/generate-report`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    }
  );

  return response.json();
}

export async function generateSigma(
  content
) {
  const response = await fetch(
    `${API_BASE}/generate-sigma`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    }
  );

  return response.json();
}

export async function analyzeFile(
  file
) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await fetch(
      `${API_BASE}/file`,
      {
        method: "POST",
        body: formData,
      }
    );

  return response.json();
}


// export async function getHistory() {

//   const response =
//     await fetch(
//       "http://127.0.0.1:8000/api/history"
//     );

//   return response.json();

// }

export async function getAnalysis(id) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/history/${id}`
  );

  return response.json();
}

export async function getHistory() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/history"
  );

  return response.json();
}