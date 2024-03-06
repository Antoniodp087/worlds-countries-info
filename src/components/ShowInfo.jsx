const ShowInfo = ({info}) => {

const name = info.name
const currencies = info.currencies
const capital = info.capital
const area = info.area
const timezones = info.timezones
const continents = info.continents
const startOfWeek = info.startOfWeek

const flags = info.flags
const coatOfArms = info.coatOfArms

const Name = () => {
    if(name)
    return(
        <div>
            <h1>{name.official}</h1>
            <h2>Common name: {name.common}</h2>
        </div>
    )
}

const Capital = () => {
    if(capital)
    return(
        <div>
            <h2>Capital: {capital}</h2>
        </div>
    )
}

const Continents = () => {
    if(continents)
    return(
        <div>
            <h2>Country of continent: {continents}</h2>
        </div>
    )
}

const Area = () => {
    if(area)
    return(
        <h2>Area: {area} m<sup>2</sup></h2>
    ) 
}

const Timezone = () => {
    if(timezones)
    return(
        <div>
            <h2>Timezone: {timezones.join('\n')}</h2>
        </div>
    )
}

const StartWeek =  ( ) => {
    if(startOfWeek)
    return(
        <h2>Start of working week: {startOfWeek}</h2>
    )
}

const Currencies = () => {
    
    if(currencies){
        return(
            <div> 
                <h2>
                    Currencies: 
                </h2>
                {
                    Object.entries(currencies)
                        .map(([currencyCode, { name, symbol }]) => (
                        <h2 key={currencyCode}>
                            <p>
                                {name} : {symbol}
                            </p>
                         </h2>
                        )
                    )
                }
            </div>
        )
    }

} 

const Immage = () => {
    if(flags&&coatOfArms)
    return(
        <div>
        <div>
            <h1>Flag</h1>
            <img src={flags.png} alt={flags.alt} title={flags.alt} ></img>
        </div>
        <div>
            <h1>Arms</h1>
            <img src={coatOfArms.png} height='200' ></img>
        </div>
        
        </div>
    )
}

return(
    <>
    <div>
        <Name></Name> 
        <Capital></Capital>
        <Continents></Continents>
        <Area></Area>          
        <Timezone></Timezone>
        <StartWeek></StartWeek>
        <Currencies></Currencies>
        <Immage></Immage>
    </div>
    </>
)
}

export default ShowInfo