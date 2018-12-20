import axios from 'axios'
const KEY = 'AIzaSyAh1CES1OfUwwGIiOs_w9-PTHf4g3knPT8'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
