import {useState,useEffect} from "react";
import Country from "./Country";


const Filter = ({cList}) => {

    const [value, setValue] = useState('')
    
    
    const handleChange = (event) => {
        setValue(event.target.value)
      }
    
      
    
      
    const filt= (value) =>{
        if(value!==""){
            const tofilter = []

            Object.entries(cList)
                .map(([listCode, { name }]) => {; tofilter.push(name.common) })

            const filtered = tofilter.filter(p=>p.toUpperCase().includes(value.toUpperCase()))
                   
            if(filtered.length === 1){
                return(
                   <Country country={filtered} />
                )
            }
            else if(filtered.length<10){
                return filtered.map((p,id) =><Country key={id} country={p} /> )
           
            }

            else
            return <p>Too many matches, specify another filter</p>

        }
    }
    
    return(
        <>
        <div>
             Country: <input value={value} onChange={handleChange} />
            {filt(value)}
        </div>
        </>
    )
}
export default Filter
