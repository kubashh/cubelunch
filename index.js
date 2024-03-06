const adress = "https://ideal-disco-wr7pjrr654jr367q-8888.app.github.dev";

async function sendRequest() {
  try {
    const response = await fetch(adress, {
      method: "POST",
      body: JSON.stringify({ data: "wysylam" }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Błąd zapytania: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("Odpowiedź od serwera:", responseData);
  } catch (error) {
    console.error("Błąd podczas wykonywania żądania:", error);
  }
}

async function getRequest() {
  try {
    const response = await fetch(adress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    // Tutaj możesz dodać kod obsługi odpowiedzi, np. sprawdzanie statusu
    if(response.ok) {
      console.log("Żądanie wykonane pomyślnie!");
    } else {
      console.error("Błąd podczas wykonywania żądania:", response.status);
    }
  } catch(error) {
    console.error("Błąd podczas wykonywania żądania:", error);
  }
}
