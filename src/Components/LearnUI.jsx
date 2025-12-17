import { useEffect, useState } from "react"

const LearnUI = () => {
    // const [num, setnum] = useState(0);
    // const [name, setname] = useState("");
    const [date, setdate] = useState(new Date());


    // useEffect(()=>{
    //     console.log("component Re-render")
    // }, [])

    useEffect(() => {
  const clockID = setInterval(() => {
    const newDate = new Date();
    console.log(newDate);
    setdate(newDate);
  }, 1000);

  return () => clearInterval(clockID);
}, []);

  return (
    <div className="my-12 text-center">
      <h1 className="text-3xl">{date.toString()}</h1>
      </div>
    // <div className="my-12 text-center">
    //     <h1 className="3xl">Num:{num} and Name : {name} </h1>
    //     Enter Name : <input type="text" className="border my-3" 
    //     onChange={(e) => setname(e.target.value)} /> <br />
    //     <button className="btn btn-primary mt-4"
    //     onClick={()=> setnum(num+1)}>Increment</button>
    // </div>
  )
}

export default LearnUI