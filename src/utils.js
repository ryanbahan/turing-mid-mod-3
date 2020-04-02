export function postNewReservation(card) {
    const data = JSON.stringify(card);

    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: data
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

export function deleteReservation (id) {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
