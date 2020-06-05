const axios = require('axios')

let apiKey = process.env.APIKEY || '077cb81fab6b439eb699f9e9472c7b2a'
apiKey = `&apiKey=${apiKey}`

const getNews = async () => {
  try {
    const result = await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us${apiKey}`)
    return result
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

module.exports = {
  getNews
}
