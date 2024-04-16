import Form from "./components/Form"
import WeatherDetail from "./components/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, fetchWeather, hasWeatherData } = useWeather()

  return (
    <div className="bg-fondo bg-cover bg-no-repeat w-full h-screen flex flex-col">
      <h1 className="font-bold text-white text-3xl mt-10 w-full text-center">Buscador de clima</h1>
      <div className="w-11/12 m-24 text-center">
        <div className="grid grid-cols-2 gap-10">
          <Form
            fetchWeather={fetchWeather} />
          {hasWeatherData &&
            <WeatherDetail
              weather={weather} />
          }

        </div>
      </div>
    </div>
  )
}

export default App
