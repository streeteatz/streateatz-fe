export const fetchAllTrucks = async () => {
  return fetch('https://streeteatz-be-b15261620498.herokuapp.com/vendors/')
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
  .then(data => data)
  .catch(error => {
    throw new Error(error)
  })

}

export const fetchAllMenus = async () => {
  return fetch("https://streeteatz-be-b15261620498.herokuapp.com/items/")
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
  .then(data => data)
  .catch(error => {
    throw new Error(error)
  })
}