import {saveAs} from 'file-saver';
import FoodRatingsApi from "../api/FoodRatingsApi";


async function dataUpdateService() {

    const belfastDataFileName = 'belfast_data_latest.json'
    const api = new FoodRatingsApi();

    try {
        const data = await api.fetchBelfastEstablishments()
            .then(data => {
                // Write the JSON data to a file
                const jsonData = JSON.stringify(data);
                const blob = new Blob([jsonData], {type: 'application/json'});
                saveAs(blob, belfastDataFileName);
            });
        console.log(data);
    } catch (error) {
        // Handle the error here
        console.error('Error:', error);
    }

}

export default dataUpdateService()