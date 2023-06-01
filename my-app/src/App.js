import './App.css';
import FoodRatingsService from './services/FoodRatingsService';
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await FoodRatingsService;
            setData(response.establishments)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //0
  // "Caring Premises" 1
  // "Restaurant/Cafe/Canteen"
  // 2
  // "Manufacturers/packers"
  // 3
  // "Takeaway/sandwich shop"
  // 4
  // "School/college/university"
  // 5
  // "Retailers - other"
  // 6
  // "Other catering premises"
  // 7
  // "Pub/bar/nightclub"
  // 8
  // "Hotel/bed & breakfast/guest house"
  // 9
  // "Mobile caterer"
  // 10
  // "Distributors/Transporters"
  // 11
  // "Retailers - supermarkets/hypermarkets"
  // 12
  // "Importers/Exporters"

    // Use the data state outside the effect
    const uniqueBusinessTypes = new Set();

    // Run the filtering logic when data changes
    useEffect(() => {

        // Check if data has been fetched
        if (data == null) {
            return;
        } else {
            data.forEach((establishment) => {
                uniqueBusinessTypes.add(establishment.BusinessType);
            });
        console.log(uniqueBusinessTypes)
        return uniqueBusinessTypes;
        }
    }, [data]);



    return (
        <div>
            <h1>My App</h1>
            {data ? (
                    <ul>
                        {data.map((item) => (
                            <li key={item['FHRSID']}>
                                <div>
                                    <p>{item['BusinessName']}</p>
                                    <p>{item['Address']}</p>
                                    <p>{item['City']}</p>
                                    {/* Add more item fields here */}
                                </div>
                            </li>

                        ))}


                    </ul>
                )
                :
                (
                    <p>Loading...</p>
                )
            }
        </div>
    )
        ;
}

export default App;
