const apiKey = 'Ik1nVljgDt739D9jI5Rgb7AH7PQ9gnnlOPaDu3b2jwUfdkW2BbPyBE48Hx8Z4Neo3qFETevpoyUNvBATJFps61ZPsvdg6N5Jf3KLIFzjuspeTF2IAzhF2aJzc--qWnYx';
const Yelp = {
  search(term, location, sortBy) {
    console.log(`RECIEVED ARGUMENTS:: term: ${term} location: ${location} sortBy: ${sortBy}`)
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        'headers': {
          'Authorization HTTP': `Bearer ${apiKey}`
        }
    })
    .then(response => {
      if (response.ok) {
        console.log("GOT RESPONSE")
        return response.json();
      }
      throw new Error('Request Failed!');
    })
    .then(jsonResponse => {
      console.log("GOT JSON");
      if (jsonResponse.business) {
        return jsonResponse.business.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
      }));
    }
  })
  .catch(err => console.log("ERROR", err))
  }
  // , networkError => console.log(networkError.message)
};

export default Yelp;
