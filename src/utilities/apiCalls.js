export const fetchAllTrucks = async () => {
  return fetch('https://streeteatz-be-b15261620498.herokuapp.com/vendors/')
  .then(response => response.json())
  .then(data => data)
  .catch(error => {
    throw new Error(error)
  })

}