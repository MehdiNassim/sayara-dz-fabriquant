import {
    // TODO: change icons
    DirectionsCar as CarIcon,
} from "@material-ui/icons";
import Models from '../views/dashboard/models';
import Versions from '../views/dashboard/versions';
import Options from '../views/dashboard/options';
import Colors from '../views/dashboard/colors';
import Videos from '../views/dashboard/videos';
import Images from '../views/dashboard/images';
import Pricing from '../views/dashboard/pricing';
import Stock from '../views/dashboard/stock';
import Orders from '../views/dashboard/orders';
import Simulator from '../views/dashboard/simulation';
import Home from '../views/dashboard/home';

export default {
    home: {
        label: 'Accueil',
        icon: CarIcon,
        component: Home,
    },
    orders: {
        label: 'Commandes',
        icon: CarIcon,
        component: Orders,
    },
    stock: {
        label: 'Stock',
        icon: CarIcon,
        component: Stock,
    },
    pricing: {
        label: 'Tarification',
        icon: CarIcon,
        component: Pricing,
    },
    models: {
        label: 'Modèles',
        icon: CarIcon,
        component: Models,
    },
    versions: {
        label: 'Versions',
        icon: CarIcon,
        component: Versions,
    },
    images: {
        label: 'Images',
        icon: CarIcon,
        component: Images,
    },
    videos: {
        label: 'Videos',
        icon: CarIcon,
        component: Videos,
    },
    colors: {
        label: 'Couleurs',
        icon: CarIcon,
        component: Colors,
    },
    options: {
        label: 'Options',
        icon: CarIcon,
        component: Options,
    },
    simulation: {
        label: 'Simulation du prix',
        icon: CarIcon,
        component: Simulator,
    },
};

/*
Features:
- Se connecter
- Se déconnecter
- modèles (CRUD)
- Versions (CRUD)
- Couleurs (CRUD)
- Options (CRUD)
- Afficher les véhicules disponibles (STOCK)
- Uploader fichier stock
- Simuler Prix (composer => simuler)
- Uploader fichier des tarifs
- Commandes (Lister, Accepter ou rejeter => maj stock)

Sections:
- Accueil
- Modèles
- Versions
- Stock
- Couleurs
- Options
- Simuler le prix
- Commandes
* */
