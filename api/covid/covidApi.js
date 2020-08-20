//IMPORT ALL URL 
import {summaryUrl} from '../urls/allUrls'
import {baseUrl} from '../urls/baseUrl/base'

//get summary data
export const getSummaryData = () => {
    return fetch(summaryUrl)
            .then((response)=> response.json())
            .catch((error)=> console.log(error))
}

//get live data 
export const getLiveDataFromCountries = (country) => {
    const url = `${baseUrl}/country/${country}/status/confirmed/live`
    return fetch(url)
            .then((response)=> response.json())
            .catch((error)=> console.log(error))
}