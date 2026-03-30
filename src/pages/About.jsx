import Experience from "../component/experience/Experience";
import Forwho from "../component/forwho/Forwho";
import Hero from "../component/hero/Hero";
import Join from "../component/join/Join";
import WhyAhis from "../component/whyAhis/WhyAhis";
import AppLayout from "../layout/AppLayout";

 function About() {
  return( 
<AppLayout>
        <> 
        <Hero Title="About AHIS" Subtitle="Learn more about Africa International Housing Show (AIHS)" />
        <Forwho/>
        <WhyAhis/>
        <Experience/>
        <Join/>
        </>
</AppLayout>

  );
}
export default About;