export const methodsCardRotate =(index:number)=>{
    const maxRotation = 12;
    const step = (maxRotation * 2) / 7 ;//--7 is total items
    return -maxRotation + step * index;
}