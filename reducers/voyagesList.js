export default function(voyagesList = [], action){
    if(action.type == 'voyagesList'){
        return action.voyagesList

    } /* else if(action.type == 'newVoyagesList'){
        var voyagesListCopy = [...voyagesList]

        voyagesListCopy.push(action.voyagesList)

    } */ else {
        return voyagesList
    }
}