import Form from "./components/Form"
import WeatherDetail from "./components/WeatherDetail"
import Spinner from "./components/spinner/Spinner"
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, loading, fetchWeather, hasWeatherData } = useWeather()

  return (
    <div className="bg-fondo bg-cover bg-no-repeat w-full h-screen flex flex-col">
      <h1 className="font-bold text-white text-3xl mt-10 w-full text-center">Buscador de clima</h1>
      <div className="w-11/12 m-24 text-center">
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          <Form
            fetchWeather={fetchWeather} />
          {loading && <Spinner />}
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
