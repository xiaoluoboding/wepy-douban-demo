const giphyApiBase = 'http://api.giphy.com'
const doubanApiBase = 'https://api.douban.com'

const config = {
  /* giphy gif api */
  randomUrl: `${giphyApiBase}/v1/gifs/random`,
  trendingUrl: `${giphyApiBase}/v1/gifs/trending`,
  giphyApiKey: 'dc6zaTOxFJmzC',
  /* douban movie api */
  inTheatersUrl: `${doubanApiBase}/v2/movie/in_theaters`,
  comingSoonUrl: `${doubanApiBase}/v2/movie/coming_soon`,
  /* douban book api */
  bookUrl: `${doubanApiBase}/v2/book`,
  appKey: '6awzqwf73tz0w1us02sf2g4800uygxf7',
  appID: 'wx78b25a3605bf5b17',
  appSecret: '42404aefecf77560b1e08223c7798e9c',
  showSuccessTime: 1000,
}

export default config
