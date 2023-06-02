import axios from 'axios';

class FoodRatingsApi {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.ratings.food.gov.uk',
            headers: {
                'x-api-version': '2',
            }
        });
    }

    belfastEstablishmentsQuery = 'establishments/' +
        '?localAuthorityid=138' +
        '&SchemeType=FHRS' +
        '&businessTypeId=1' +
        '&businessTypeId=7843' +
        '&businessTypeId=7844';

    async fetchBelfastEstablishments() {
        try {
            const response = await this.instance.get(this.belfastEstablishmentsQuery);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new FoodRatingsApi();
