import {useEffect, useState} from "react";

function App4() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]); //set default value as an empty array
    const [exchange, setExchange] = useState(false);
    const [enterVal, setVal] = useState(0);
    const onChange = (event) => {
        setVal(event.target.value);
        console.log(enterVal);
        setExchange(true);
    };

    useEffect( () => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins((json));
            setLoading(false);
        });
    }, []); //use only once

    console.log(coins);
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>


            <input 
                onChange={onChange}
                value = {enterVal}
                type="number"
                placeholder="Enter..."/>

            {loading? <strong>Loading...</strong>:null}
            <ul>
                {coins.map((coin) => 
                <li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD 
                {exchange? (enterVal/coin.quotes.USD.price).toFixed(2): null} {coin.symbol}</li>)}

            </ul>


        </div>
    ); 
}

export default App4;