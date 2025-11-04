import styles from './App.module.css';
import Form from './components/Form/Form';
import type { SearchType } from './types';
import useWeather from './hooks/useWeather';
import WeatherDetail from './components/weatherDetails/WeatherDetail'
import Spinner from './components/spinner/Spinner';
import Alert from './components/Alert/alert';


function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather();
  console.log(import.meta.env);
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        <div className={styles.resultBox}>  
           {loading ? <Spinner /> : hasWeatherData && <WeatherDetail weather={weather} />}
           {notFound && <Alert>Ciudad No Encontrada</Alert>}
        </div>
       

      </div>
    </>
  )
}

export default App
