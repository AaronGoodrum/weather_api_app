
const axios = require('axios')
const wsdot = 'http://www.wsdot.wa.gov/Ferries/API/Schedule/rest/routes/'
const APIAccessCode = '?apiaccesscode=babfc5df-b6f1-42df-b555-c89d6d3f0cb4'
const TripDate = '2019-10-17'

// Make a request for a user with a given ID
async function handle () {
  console.log('test GET')

axios.get(wsdot + TripDate +  APIAccessCode)
  .then(function (response) {
    // handle success
    console.log('server', response)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
export default handle