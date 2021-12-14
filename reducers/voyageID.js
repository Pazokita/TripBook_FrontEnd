export default function(voyageID = '', action){
    if(action.type == 'voyageID'){
        return action.voyageID
    } else {
        return voyageID
    }
}