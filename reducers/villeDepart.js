export default function(villeDepart = '', action){
    if(action.type == 'villeDepart'){
        
        return action.villeDepart
    } else {
        return villeDepart
    }
}