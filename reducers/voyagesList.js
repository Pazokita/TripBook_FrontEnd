export default function(voyagesList = [], action){
    if(action.type == 'voyagesList'){
        return action.voyagesList
    } else {
        return voyagesList
    }
}