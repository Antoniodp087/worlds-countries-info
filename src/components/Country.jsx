import {useState,useEffect} from "react";
import ShowInfo from './ShowInfo'
import axios from 'axios'
const Country = ({country}) => {


    const [info, setInfo] = useState({})
    const [countries, setCountries] = useState(null)

    const [flag,setFlag] = useState(false)

    useEffect(() => {
        if (countries) {
          axios
            .get(` https://studies.cs.helsinki.fi/restcountries/api/name/${countries}`)
            .then(response => {
              setInfo(response.data)
            })
        }
      }, [countries])

    const onSearch = () => {
        setFlag(!flag)
        setCountries(country)
    }

    const show = (flag) =>{
        if(flag)
        return(
            <div>
                <ShowInfo info={info}/>
            </div>
        )
    }

    return (
      <>
      <h3>{country} <button onClick={onSearch}>info</button></h3>
      {show(flag)}
      </>
    )
  }
export default Country