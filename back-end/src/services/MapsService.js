const axios = require('axios');
require('dotenv').config()

class MapsService {

    static async searchPlaces(textQuery) {
        const response = await axios.post(
            'https://places.googleapis.com/v1/places:searchText',
            {
                textQuery: textQuery,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
                    'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.priceLevel,places.id',
                },
            }
        );

        return response.data;
    }
}

module.exports = MapsService;