export const generateId=()=>{
    const random =Math.random().toString(15).substring(0,15)
    return random;
  }