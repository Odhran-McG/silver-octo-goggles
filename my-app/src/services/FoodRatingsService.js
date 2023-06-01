import React, {useEffect, useState} from 'react';
import axios from 'axios';

const foodRatingsService = axios.create({
    baseURL: 'https://api.ratings.food.gov.uk'
});

// set headers to use API 2.0
foodRatingsService.defaults.headers.common['x-api-version'] = '2';

// endpoints
const establishmentsEndpoint = "/establishments"
const belfastAuthorityId = '138';
const businessType = '138';

// BusinessTypeIds that relate to food places people will actually eat at. e.g. restaurant, cafe, coffee shop, chip van etc.
//       "BusinessTypeId": 7843,
//       "BusinessTypeName": "Pub/bar/nightclub",
//       "BusinessTypeId": 1,
//       "BusinessTypeName": "Restaurant/Cafe/Canteen",
//       "BusinessTypeId": 7844,
//       "BusinessTypeName": "Takeaway/sandwich shop",
// poll data where it may be exempt

// API docs https://api.ratings.food.gov.uk/Help/Index/#Establishments
// GET BusinessTypes/basic

const fetchData = async () => {
    try {
        const response = await foodRatingsService.get();
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const fetchEstablishmentData = async () => {
    try {
        const response = await foodRatingsService.get(establishmentsEndpoint, {
            params: {
                localAuthorityId: belfastAuthorityId,
            },
        })
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default fetchEstablishmentData();

// TODO migrate this to a class like this
// import axios from 'axios';
//
// class ApiService {
//   constructor() {
//     this.api = axios.create({
//       baseURL: 'https://api.example.com',
//     });
//   }
//
//   getRestaurantData() {
//     return this.api.get('/users');
//   }
//
//   // Add more API request methods as needed
// }
//
// export default new ApiService();