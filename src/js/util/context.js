export default function fetchContext(gameId) {
  return fetch(`http://52.207.220.185:8005/context/${gameId}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      "Accept": "application/json"
    }
  }).then((response) => response.json());
}
