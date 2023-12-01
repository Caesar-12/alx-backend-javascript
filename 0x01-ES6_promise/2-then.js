export default function handleResponseFromAPI(promise) {
  if (promise) {
    console.log('Got a response from the API');
    return ({ status: 200, body: 'Success' });
  }
  console.log('Got a response from the API');
  return (new Error());
}
