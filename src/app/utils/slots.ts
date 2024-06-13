export  function generateSlots(startTime: string, endTime:string, duration:number) {
    const startHour = parseInt(startTime?.split(":")[0]);
    const endHour = parseInt(endTime?.split(":")[0]);

    const slots = [];

    for (let i = startHour; i <= endHour; i++) {
        slots.push(`${i}:${startTime?.split(":")[1]}`);
    }
    return slots
}
