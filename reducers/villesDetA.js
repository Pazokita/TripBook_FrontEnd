export default function(villesDetA = [], action){
    if(action.type == 'villesDetA'){
        console.log('reducer villes D et A',action.villesDetA)
        return action.villesDetA

    } else {
        return villesDetA
    }
}