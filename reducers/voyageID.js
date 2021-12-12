export default function(voyageID = '', action){
    if(action.type == 'voyageID'){
        console.log('voyageID reducer: ', action.voyageID)
        return action.voyageID
    } else {
        return voyageID
    }
}