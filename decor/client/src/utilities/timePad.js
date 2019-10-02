
const timePad = (time) => {
    let splitTime = time.split(':');
    let newTime = '';
    if(splitTime[0].length < 2){
        newTime = '0';
        newTime += splitTime[0];
    }
    else{
        newTime = splitTime[0];
    }   
    newTime += ':';
    if(splitTime[1].length < 2){
        newTime += '0';
        newTime += splitTime[1];
    }
    else{
        newTime += splitTime[1];
    }   
    return newTime;
}

export default timePad;