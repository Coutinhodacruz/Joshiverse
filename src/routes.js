import JoshiversePage from "./pages/joshiverse/JoshiversePage";
import MakokoOutreach from "./pages/sasi/MakokoOutreach";
import PercilOutreach from "./pages/sasi/PercilOutreach";
import Podcasts from "./pages/joshiverse/Podcasts";
import SasiPage from "./pages/sasi/SasiPage";
import WesleyOutreach from "./pages/sasi/WesleyOutreach";


export const ROUTES = [
  {
    path: '/',
    element: <JoshiversePage/>,
    
  },
    
  {
    path: '/sasi',
    element: <SasiPage />
  },

  {
    path: '/makoko-outreach',
    element: <MakokoOutreach />
  },

  {
    path: '/percil-outreach',
    element: <PercilOutreach />
  },

  {
    path: '/wesley-outreach',
    element: <WesleyOutreach />
  },

  {
    path: '/podcasts',
    element: <Podcasts />
  }  
]