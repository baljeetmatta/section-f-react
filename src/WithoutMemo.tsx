import { useCallback, useMemo, useState } from "react";

const WithoutMemo=()=>{
    const [count,setCount]=useState(0);
    const [counter,setCounter]=useState(0);



        // const expensiveCal=(num:number)=>{
        //     console.log("CAlculation started...")
        //     let total=0;
        //     for(let i=1;i<=1000000;i++)
        //         total+=i;
        //     console.log("Calculation Done...")
        //     return total+num;
        // }

         const expensiveCal=useCallback((num:number)=>{
            console.log("CAlculation started...")
            let total=0;
            for(let i=1;i<=1000000;i++)
                total+=i;
            console.log("Calculation Done...")
            return total+num;
        },[]);


        const result=useMemo(()=>expensiveCal(count),[count]);

    return (
            <>
            <div>
                Result:{result}
            </div>
            <div>Count:{count}</div>
            <div>Counter:{counter}</div>
            <div>
                <button onClick={()=>setCount(count+1)} >Change</button>
            </div>
             <div>
                <button onClick={()=>setCounter(counter+1)} >Change Counter</button>
            </div>
            </>
        )

}
export default WithoutMemo;
