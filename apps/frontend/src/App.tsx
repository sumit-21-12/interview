import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

function App() {
const [count,setcount]=useState(0);

  useEffect(()=>{
const y=setInterval(() => {
  setcount(count +1);
}, 1000);

return ()=>{
  clearInterval(y)
}
},[])


  let a=1;
a=a+1;
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div>{count}</div>
      <div>{a}</div>
      <Button onClick={() => setcount(count + 1)}>Click me</Button>
      
      
    </div>
  )
}

export default App