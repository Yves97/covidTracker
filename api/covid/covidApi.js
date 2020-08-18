//IMPORT ALL URL 
import {summaryUrl} from '../urls/allUrls'

//get summary data
export const getSummaryData = () => {
    return fetch(summaryUrl)
            .then((response)=> response.json())
            .catch((error)=> console.log(error))
}