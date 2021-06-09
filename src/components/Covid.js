import React, {useEffect, useState} from 'react';
import './Covid.css';
 
const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch ('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]); 
            setData(actualData.statewise[0]);   
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <div className="background">
            <h1 className= "liveheader">🔴 Live</h1>
            <h1 className="covidlive">COVID-19 LIVE UPDATE</h1>
            <div className="container">
                <a className="card1" href="#">
                    <h2> <span>OUR </span>COUNTRY</h2>
                    <p className="small">INDIA</p>
                    <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                    </div>
                </a>
                
                <a className="card1" href="#">
                    <h2> <span>TOTAL</span> RECOVERED</h2>
                    <p className="small">{data.recovered}</p>
                    <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                    </div>
                </a>
                
                <a className="card1" href="#">
                    <h2> <span>TOTAL</span> CONFIRMED</h2>
                    <p className="small">{data.confirmed}</p>
                    <div className="dimmer"></div>
                    <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                    </div>
                </a>

                <a className="card1" href="#">
                    <h2> <span>TOTAL</span> DEATH</h2>
                    <p className="small">{data.deaths}</p>
                    <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                    </div>
                </a>

                <a className="card1" href="#">
                    <h2> <span>TOTAL</span> ACTIVE</h2>
                    <p className="small">{data.active}</p>
                    <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                    </div>
                </a>

                <a className="card1" href="#">
                    <h2> <span>LAST</span> UPDATED</h2>
                    <p className="small" id="updatetime">{data.lastupdatedtime}</p>
                    <div className="go-corner" href="#">
                    <div className="go-arrow">
                        →
                    </div>
                    </div>
                </a>
                
            </div>
        </div>
    )
}
export default Covid;
