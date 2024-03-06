const adress = "https://kubashh.github.io/cubelunch/backend/serwer.js"

async function sendRequest() {
  try {
    const response = await fetch(adress, {
      method: "POST",
      body: "wysylam",
      headers: {
        "Content-Type": "text/plain"
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
