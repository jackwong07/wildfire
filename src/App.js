import { useState, useEffect } from 'react'
import Map from './components/Map'

function App() {
  const [eventData, setEventData] = useState([])
  //eventData state and setEventData function
  const [loading, setLoadingData] = useState(false)

  useEffect(() => {
    const fetchEvents= async()=> {
      setLoadingData(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoadingData(false)
    }

    fetchEvents()
  }), [])
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;