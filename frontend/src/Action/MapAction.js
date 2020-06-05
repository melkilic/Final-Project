export const handleStateChange= (currentLocation)=> {
    return {
        type: "CHANGE_LOCATION",
        //because key and value are the same:
        currentLocation
    }
}