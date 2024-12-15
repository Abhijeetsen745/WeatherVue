import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import './App.css';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1545134969-8debd725b007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=170667a&w=0&k=20&c=8ijy1ixq0ALEpJIt9D4ElKJzayexgzXTDG2ZRCYVfHQ=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1642356775007-b2a5fd6aef19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?b=1&s=170667a&w=0&k=20&c=3nGMfD-sXDLS5jwwLV89TcEstDn00juZJ--18xie-UM=";
  return (
    <div className="Infobox" >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} &nbsp;&nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min temp = {info.tempMin}</p>
            <p>Max temp = {info.tempMax}</p>
            <p>
              The Weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
