import './App.css';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {

  const [latitude,setLatitude]= useState(0)
  const [longitude,setLongitude] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setIsLoading(false)

      },(error) => {
        console.log(error)
        alert("Paikannus epäonnistui")
      })

    } else {
      alert("Selaimesi ei tue paikannusta")
    }

  }, [])

  if (isLoading) {
    return <p>Ladataan sijaintia...</p>
  } else {
  
  return (
    <div className="content">
      <h3>Sijaintisi on</h3>
      <p>
        Sijainti:&nbsp;
        {latitude.toFixed(3)},
        {longitude.toFixed(3)}
      </p>
      <Weather lat={latitude} lng={longitude} />
    </div>
  );
}
}
export default App;
