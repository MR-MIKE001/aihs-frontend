import Aihsfor from "../component/aihsfor/Aihsfor";
import DontMiss from "../component/dontmiss/DontMiss";
import Hero from "../component/hero/Hero";
import Location from "../component/location/Location";
import AppLayout from "../layout/AppLayout";

function Home() {
  return (
    <AppLayout>
        <main> 
          <Hero/>
          <Location/>
          <Aihsfor/>
          <DontMiss/>
        </main>
    </AppLayout>
  );
}
export default Home;