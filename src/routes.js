import JoshiversePage from "./pages/joshiverse/JoshiversePage";
import Podcasts from "./pages/joshiverse/Podcasts";
import SasiPage from "./pages/sasi/SasiPage";

export const ROUTES = [
    {
        path: '',
        element: <JoshiversePage/>
    },
    {
        path: '/sasi',
        element: <SasiPage />
    },
    {
        path: '/podcasts',
        element: <Podcasts />
    }
    
]