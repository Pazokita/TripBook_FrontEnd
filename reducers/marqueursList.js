export default function(marqueursList = [], action){
    if(action.type == 'marqueursList'){
        return action.marqueursList

    } else {
        return marqueursList
    }
}