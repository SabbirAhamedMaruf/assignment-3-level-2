function formatTime(num:number) {
    const hours = Math.floor(num/60)
    const mins = num%60
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

export function generateSlots(start:string, end:string, duration:number) {
    const starthour = parseInt(start.split(":")[0]) * 60;
    const startMin = parseInt(start.split(":")[1]);
    const endhour = parseInt(end.split(":")[0]) * 60;
    const endMin = parseInt(end.split(":")[1]);

    let totalStartMin = starthour + startMin;
    let totalEndMin = endhour + endMin;

    if (totalStartMin > totalEndMin){
      totalEndMin += 24*60
    }

    let startPeriod = totalStartMin;
    let endPeriod = totalStartMin + duration;
    let slotsArray = [];

    
     while (endPeriod <= totalEndMin)
     {   
        let slot = `${formatTime(startPeriod)}`
        slotsArray.push(slot);
        startPeriod = endPeriod;
        endPeriod = startPeriod + duration; 
    }
    slotsArray.push(`${formatTime(endPeriod-duration)}`)
    return slotsArray;
}