function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(!hasDrivingLiscence){
        return "you cannot drive";
    } else {
        if(isTired || !isSober){
            return "you sholdnt drive";
           }
    }
    return "you can drive";
}
CanDrive(hasDrivingLiscence,isTired,isSober)
module.exports = CanDrive;
