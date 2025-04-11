import { useState, useEffect, useRef } from 'react'; // Añade useRef aquí
import { challenges } from './challenges';
import { 
  MapIcon, 
  UserIcon, 
  CameraIcon, 
  SunIcon, 
  SparklesIcon, 
  HomeIcon, 
  BookOpenIcon, 
  ChevronRightIcon, 
  ScrollIcon,
  Volume2Icon, // Añade estos dos iconos
  VolumeXIcon 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  
  // Añadimos un efecto para cargar la última pestaña activa guardada
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
    
    // Mostrar splash screen por 2 segundos
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  // Guardamos la pestaña activa en localStorage
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
  };

  // Splash screen
  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-amber-900">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <SparklesIcon className="text-amber-100 mx-auto mb-4" size={60} />
          <h1 className="text-4xl font-bold text-amber-100 font-poppins">Camino de Santiago</h1>
          <p className="text-amber-200 mt-2 font-poppins">La aventura comienza...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-amber-900 font-poppins">
      {/* Cabecera con título medieval */}
      <header className="p-4 bg-gradient-to-r from-amber-800 to-amber-900 text-amber-100 shadow-md">
        <motion.h1 
          className="text-center text-2xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SparklesIcon className="inline-block mr-2" size={24} />
          Camino de Santiago
          <SparklesIcon className="inline-block ml-2" size={24} />
        </motion.h1>
        <motion.div 
          className="text-center text-sm mt-1"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ruta Inglesa - Primavera 2025
        </motion.div>
      </header>

      {/* Contenido principal */}
      <main className="flex-grow p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' ? (
              <HomeContent onStart={() => handleTabChange('etapa1')} />
            ) : (
              <StageContent stage={activeTab} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navegación de pestañas en la parte inferior */}
      <nav className="bg-gradient-to-r from-amber-800 to-amber-900 text-amber-100 p-2 shadow-lg">
        <div className="flex justify-around">
          <TabButton 
            id="home" 
            active={activeTab === 'home'} 
            onClick={() => handleTabChange('home')}
            label="Inicio"
            icon={<HomeIcon size={16} />}
          />
          <TabButton 
            id="etapa1" 
            active={activeTab === 'etapa1'} 
            onClick={() => handleTabChange('etapa1')}
            label="E1"
            icon={<BookOpenIcon size={16} />}
          />
          <TabButton 
            id="etapa2" 
            active={activeTab === 'etapa2'} 
            onClick={() => handleTabChange('etapa2')}
            label="E2"
            icon={<BookOpenIcon size={16} />}
          />
          <TabButton 
            id="etapa3" 
            active={activeTab === 'etapa3'} 
            onClick={() => handleTabChange('etapa3')}
            label="E3"
            icon={<BookOpenIcon size={16} />}
          />
          <TabButton 
            id="etapa4" 
            active={activeTab === 'etapa4'} 
            onClick={() => handleTabChange('etapa4')}
            label="E4"
            icon={<BookOpenIcon size={16} />}
          />
          <TabButton 
            id="etapa5" 
            active={activeTab === 'etapa5'} 
            onClick={() => handleTabChange('etapa5')}
            label="E5"
            icon={<BookOpenIcon size={16} />}
          />
        </div>
      </nav>
    </div>
  );
}

// Componente para la página de inicio con la nueva historia
function HomeContent({ onStart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-300 max-w-3xl mx-auto">

       {/* Elemento de audio oculto */}
       <audio 
        ref={audioRef} 
        src="\public\audio\intro.MP3" // Asegúrate de poner la ruta correcta
        loop // Opcional: si quieres que se repita
      />

      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-amber-900 text-center border-b-2 border-amber-300 pb-3 mb-4">
          La Encomienda del Sabio de Ferrol
        </h2>

        <motion.button
          onClick={toggleAudio}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 shadow-sm"
          aria-label={isPlaying ? "Silenciar audio" : "Reproducir audio"}
        >
          {isPlaying ? <Volume2Icon size={20} /> : <VolumeXIcon size={20} />}
        </motion.button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="prose prose-amber mx-auto"
      >
        <div className="mb-6 text-center">
          <ScrollIcon size={40} className="text-amber-600 mx-auto mb-2" />
        </div>
        
        <p className="text-amber-900 mb-4 italic">
          <span className="font-bold text-amber-700">Óscar</span>, <span className="font-bold text-amber-700">Jorge</span> y <span className="font-bold text-amber-700">Luis</span>, 
          tres nobles caballeros de linaje puro y alma valiente, 
          escuchad las palabras del Sabio Anciano de Ferrol, protector de estas tierras sagradas. 
          Desde la ciudad de Ferrol, donde el mar y las montañas se encuentran en un abrazo eterno, 
          un lugar de antiguas fortalezas y murallas que resuenan con los ecos de los héroes pasados, surge vuestra misión. 
          Vuestra tierra, forjada por siglos de historia, será el punto de partida de este viaje que marcará el futuro de Galicia.
        </p>
        
        <p className="text-amber-900 mb-4 italic">
        El viaje que emprendéis no será fácil, pues debéis recorrer cinco arduas etapas. 
        Desde la noble ciudad de Ferrol, donde vuestros pasos se inician, 
        hasta la venerada Compostela, vuestro destino final. A lo largo del Camino, atravesaréis tierras que han sido marcadas por la lluvia constante, la naturaleza salvaje
         y criaturas místicas que acechan en cada rincón. Desde los oscuros bosques de Pontedeume, hasta las antiguas murallas de Betanzos, 
         y las montañas del Hospital de Bruma, todo pondrá a prueba vuestra astucia y valor.
        </p>
        
        <p className="text-amber-900 mb-4 italic">
        El Camino os llevará también a los valles de Ordes y Sigüeiro, donde los senderos serán escurridizos y la niebla os impedirá ver más allá de un paso. 
        Pero no temáis, caballeros, pues cada etapa será una oportunidad para restaurar la luz. 
        Solo mediante el Atrapamomentos y el cumplimiento de las misiones que os he encomendado podréis sanar esta tierra y disipar las sombras que la asolan.
        </p>
        
        <p className="text-amber-900 mb-4 italic">
        El futuro de Galicia depende de vuestra fortaleza, de vuestra capacidad para enfrentar lo desconocido y de vuestra valentía ante el peligro. 
        Cada paso será crucial. Cada reto superado será una victoria para la luz y una derrota para la oscuridad. 
        El camino será largo y peligroso, pero es vuestra nobleza la que iluminará el sendero.
        </p>
        
        <p className="text-amber-900 mb-4 italic">
          Adelante, caballeros. El destino de Galicia está en vuestras manos, y sólo con vuestra destreza y coraje podrá salvarse.
        </p>
        
        
        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-amber-800 my-6">
          "Recordad siempre: el verdadero Camino no está en la distancia recorrida, sino en la transformación 
          de vuestras almas al andar. Que la luz del Apóstol ilumine vuestros pasos."
          <br />— El Sabio de Ferrol
        </blockquote>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-6"
      >
        <button 
          onClick={onStart}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all transform hover:scale-105 flex items-center mx-auto"
        >
          Comenzar el Camino 
          <ChevronRightIcon className="ml-2" size={18} />
        </button>
      </motion.div>
    </div>
  );
}

// Componente para cada botón de pestaña
function TabButton({ id, active, onClick, label, icon }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-2 rounded-lg transition-all flex items-center ${
        active 
          ? 'bg-amber-600 text-amber-50 shadow-md' 
          : 'bg-amber-800/70 text-amber-200 hover:bg-amber-700'
      }`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </motion.button>
  );
}

// Mensajes del sabio para cada etapa
const stageIntroductions = {
  etapa1: "Nobles caballeros, la primera etapa de vuestro viaje os llevará desde Ferrol hasta Pontedeume. En estas tierras costeras, deberéis probar vuestra conexión con lo local, con la naturaleza y con el propio Camino. Los Atrapamomentos os servirán para capturar estas esencias. Recordad que cada paso que dais es un paso hacia la restauración de la magia ancestral.",
  etapa2: "Habéis llegado a Pontedeume, valientes peregrinos. La segunda etapa hasta Betanzos pondrá a prueba vuestra capacidad de apreciar tanto lo pequeño como lo grandioso. Desde los carteles que dan la bienvenida a los viajeros, hasta la famosa tortilla de Betanzos y los monumentos que guardan la historia de estas tierras. Que vuestros Atrapamomentos capturen la esencia de este tramo con honor.",
  etapa3: "La tercera jornada os adentra en las tierras interiores, desde Betanzos hasta el Hospital de Bruma y Ordes. Este tramo es uno de los más duros físicamente, pero también uno de los más hermosos espiritualmente. El sello del peregrino, los ríos que cruzan vuestro camino y los bosques que os rodean contienen magia antigua que debéis preservar con vuestros Atrapamomentos.",
  etapa4: "Ya habéis superado más de la mitad del Camino, mis valientes. Esta cuarta etapa desde Ordes hasta Sigüeiro os muestra la verdadera esencia de Galicia: sus hórreos ancestrales, sus gentes y el espíritu peregrino que os une a todos los que recorren esta ruta. Vuestros Atrapamomentos deberán capturar no solo imágenes, sino el alma misma de esta tierra.",
  etapa5: "La última etapa está ante vosotros, nobles caballeros. Desde Sigüeiro podréis vislumbrar ya las torres de la Catedral de Santiago. Es momento de reflexionar sobre el viaje realizado, de recibir la merecida Compostela y de celebrar vuestra hazaña. Los Atrapamomentos deben registrar este final del Camino, pero recordad: aunque el camino físico termina, el camino espiritual continúa siempre. La imagen final de los tres ante la Catedral sellará vuestra hermandad para siempre."
};

// Componente para mostrar el contenido de cada etapa
function StageContent({ stage }) {
  const stageData = challenges[stage];
  
  if (!stageData) return null;
  
  return (
    <div className="bg-white rounded-lg p-5 shadow-lg border border-amber-300">
      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-xl font-bold text-amber-900 text-center border-b-2 border-amber-300 pb-2 mb-2">
          {stageData.title}
        </h2>
        
        <div className="flex justify-center mb-4">
          <MapIcon size={28} className="text-amber-700" />
        </div>
      </motion.div>
      
      {/* Mensaje del sabio para esta etapa */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-amber-50/60 p-4 rounded-lg border border-amber-200 mb-6 italic text-amber-800"
      >
        <div className="flex items-start">
          <ScrollIcon size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <p>"{stageIntroductions[stage]}"</p>
        </div>
        <p className="text-right text-sm mt-2">— Don Pelayo, el Sabio de Ferrol</p>
      </motion.div>
      
      <div className="space-y-6">
        {Object.entries(stageData.challenges).map(([person, challenge], index) => (
          <motion.div 
            key={person}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            className="bg-amber-50 p-4 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-2">
              <UserIcon size={18} className="mr-2 text-amber-700" />
              <h3 className="font-bold text-amber-800">Sir {person}</h3>
            </div>
            <div className="flex items-start ml-1">
              <CameraIcon size={16} className="mr-2 mt-1 flex-shrink-0 text-amber-600" />
              <p className="text-amber-900">Usa tu Atrapamomentos para {challenge.toLowerCase().replace("hazte", "hacerte")}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-6 text-center text-sm text-amber-700 italic"
      >
        <SunIcon size={16} className="inline-block mr-1" />
        "El Camino forja al caballero, no las victorias"
      </motion.div>
    </div>
  );
}