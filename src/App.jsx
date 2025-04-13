import { useState, useEffect, useRef } from 'react';
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
  Volume2Icon,
  VolumeXIcon,
  MailIcon, // Añadido para el sobre
  ShieldIcon, // Añadido para elementos medievales
  SwordIcon, // Añadido para elementos medievales
  CrownIcon // Añadido para elementos medievales
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
    
    // Mostrar splash screen por 3 segundos (cambiado a 3 para ver mejor la animación)
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  // Guardamos la pestaña activa en localStorage
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
  };

  // Splash screen con animación de caminantes
  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-amber-900 overflow-hidden">
        <div className="relative w-full max-w-md">
          {/* Fondo con camino */}
          <div className="absolute inset-0 w-full h-64 bg-amber-800 rounded-lg overflow-hidden">
            <div className="absolute bottom-0 w-full h-12 bg-amber-700" /> {/* Camino */}
            <div className="absolute bottom-12 w-full h-24 flex items-end justify-center">
              {/* Animación de personas caminando */}
              <motion.div
                className="relative h-32 w-32"
                initial={{ x: -150 }}
                animate={{ x: 150 }}
                transition={{ 
                  duration: 3,
                  ease: "linear"
                }}
              >
                {/* Persona 1 */}
                <motion.div 
                  className="absolute left-0 bottom-0 w-8 h-16 bg-amber-100 rounded-t-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 0.5
                  }}
                >
                  {/* Cabeza */}
                  <div className="w-6 h-6 bg-amber-200 rounded-full absolute -top-5 left-1" />
                  {/* Piernas con animación de caminar */}
                  <motion.div 
                    className="absolute bottom-0 left-1 w-2 h-6 bg-amber-200 rounded"
                    animate={{ rotate: [0, 30, 0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-1 w-2 h-6 bg-amber-200 rounded"
                    animate={{ rotate: [0, -30, 0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                </motion.div>

                {/* Persona 2 */}
                <motion.div 
                  className="absolute left-12 bottom-0 w-8 h-16 bg-amber-300 rounded-t-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 0.5,
                    delay: 0.2
                  }}
                >
                  {/* Cabeza */}
                  <div className="w-6 h-6 bg-amber-100 rounded-full absolute -top-5 left-1" />
                  {/* Piernas */}
                  <motion.div 
                    className="absolute bottom-0 left-1 w-2 h-6 bg-amber-100 rounded"
                    animate={{ rotate: [0, 30, 0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-1 w-2 h-6 bg-amber-100 rounded"
                    animate={{ rotate: [0, -30, 0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  />
                </motion.div>

                {/* Persona 3 */}
                <motion.div 
                  className="absolute left-24 bottom-0 w-8 h-16 bg-amber-500 rounded-t-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 0.5,
                    delay: 0.4
                  }}
                >
                  {/* Cabeza */}
                  <div className="w-6 h-6 bg-amber-200 rounded-full absolute -top-5 left-1" />
                  {/* Piernas */}
                  <motion.div 
                    className="absolute bottom-0 left-1 w-2 h-6 bg-amber-200 rounded"
                    animate={{ rotate: [0, 30, 0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-1 w-2 h-6 bg-amber-200 rounded"
                    animate={{ rotate: [0, -30, 0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Título */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mt-72"
          >
            <SparklesIcon className="text-amber-100 mx-auto mb-4" size={60} />
            <h1 className="text-4xl font-bold text-amber-100 font-poppins">Camino de Santiago</h1>
            <p className="text-amber-200 mt-2 font-poppins">La aventura comienza...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-amber-900 font-poppins">
      {/* Cabecera con título medieval */}
      <header className="p-4 bg-gradient-to-r from-amber-800 to-amber-900 text-amber-100 shadow-md relative">
        {/* Elementos decorativos en la cabecera */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <ShieldIcon size={24} className="text-amber-200" />
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <ShieldIcon size={24} className="text-amber-200" />
        </div>
        
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

// Componente para la página de inicio con sobre y carta animados
function HomeContent({ onStart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const openEnvelope = () => {
    setShowEnvelope(false);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-amber-300 max-w-3xl mx-auto relative">
      {/* Elemento de audio oculto */}
      <audio 
        ref={audioRef} 
        src="/public/audio/intro.MP3"
        loop
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
      
      {showEnvelope ? (
        <div className="flex flex-col items-center justify-center mt-8 mb-8">
          <motion.div
            className="w-64 h-48 bg-amber-200 rounded-lg shadow-lg relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [0, -10, 0],
              rotateZ: [-1, 1, -1],
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 2.5 },
              rotateZ: { repeat: Infinity, duration: 3 }
            }}
            onClick={openEnvelope}
          >
            {/* Sobre */}
            <div className="absolute inset-0 bg-amber-300 rounded-lg border-2 border-amber-400">
              {/* Sello de cera */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-full shadow-md flex items-center justify-center">
                <CrownIcon size={20} className="text-amber-100" />
              </div>
              
              {/* Texto en el sobre */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-amber-800 font-medium text-sm">
                Para los nobles caballeros
              </div>
              
              {/* Icono grande en el centro */}
              <div className="absolute top-6 left-0 right-0 flex justify-center">
                <MailIcon size={50} className="text-amber-700" />
              </div>
            </div>
          </motion.div>
          <motion.p 
            className="text-amber-700 mt-6 text-center italic"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Toca el sobre para leer el mensaje
          </motion.p>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
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
          Vuestra misión, encomendada por mí, será de gran peso para el destino de nuestra amada Galicia. 
          En estos tiempos oscuros, la sombra ha comenzado a invadir nuestras tierras, cubriéndolas de maldad y desesperanza. 
          Solo vosotros, valientes caballeros, tenéis el coraje y la nobleza necesarios para purificar los caminos y devolverles la luz que antaño brillaba en sus senderos. 
          El <span className="font-bold text-amber-700">Atrapamomentos</span>, artefacto antiguo y poderoso, será vuestra única arma contra las sombras. Solo con él podréis purificar los lugares que recorráis, 
          pues cada misión que completéis irá despojando a nuestra tierra de la oscuridad que la consume.
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
        </motion.div>
      )}
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
  etapa1: "Nobles caballeros, la primera etapa de vuestro viaje os llevará desde Ferrol hasta Pontedeume. En estas tierras costeras, deberéis probar vuestra conexión con lo local, con la naturaleza y con el propio Camino. El Atrapamomentos os servirá para capturar estas esencias. Recordad que cada paso que dais es un paso hacia la restauración de la esencia ancestral. A continuación tenéis cada uno de vosotros un reto asignado, debéis completarlo antes de que acabe la etapa. ¡Ánimo y suerte en la aventura que hoy comienza caballeros!",
  etapa2: "Veo que habéis llegado a Pontedeume, sanos y salvos, valientes peregrinos. En el día de hoy os espera una segunda etapa hasta Betanzos que pondrá a prueba vuestra capacidad de apreciar tanto lo pequeño como lo grandioso. Que vuestros Atrapamomentos capturen la esencia de este tramo con honor. Ya huelo desde aquí la deliciosa tortilla que os está esperando al final del camino. ¡Ánimo valientes! ¡Por el honor de las tierras gallegas!",
  etapa3: "¿Qué tal estáis nobles peregrinos? Espero que hayáis cogido fuerza con mucha tortilla y pulpo. La tercera jornada os adentra en las tierras interiores, desde Betanzos hasta el Hospital de Bruma y Ordes. Este tramo es uno de los más duros físicamente, pero también uno de los más hermosos espiritualmente. El sello del peregrino, los ríos que cruzan vuestro camino y los bosques que os rodean contienen magia antigua que debéis preservar con vuestros Atrapamomentos. Como se que será una etapa dura, os doy estas judías mágicas que os harán recobrar la fuerza cuando estéis muy cansados. Vamos guerreros, el destino de Galicia está en vuestras manos.",
  etapa4: "Ya habéis superado más de la mitad del Camino, mis valientes. Para ser sincero, pensaba que no ibais a sobrevivir a la tercera etapa. Como recompensa, esta cuarta etapa será más corta que las demás, pero no bajéis nunca la guardia. Recorreréis desde Ordes hasta Sigüeiro, donde se os mostrará la verdadera esencia de Galicia: sus hórreos ancestrales, sus gentes y el espíritu peregrino que os une a todos los que recorren esta ruta. Vuestros Atrapamomentos deberán capturar no solo imágenes, sino el alma misma de esta tierra. ¡La gloria está cerca! ¡No os rindáis!",
  etapa5: "La última etapa está ante vosotros, nobles caballeros. Desde Sigüeiro podréis vislumbrar ya las torres de la Catedral de Santiago. Es momento de reflexionar sobre el viaje realizado, de recibir la merecida Compostela y de celebrar vuestra hazaña. Los Atrapamomentos deben registrar este final del Camino, pero recordad: aunque el camino físico termina, el camino espiritual continúa siempre. La imagen final de los tres ante la Catedral sellará vuestra hermandad para siempre. Sois el orgullo de esta tierra y de los que la habitan. ¡Nos vemos en Santiago!"
};

// Componente para mostrar el contenido de cada etapa con elementos medievales
function StageContent({ stage }) {
  const stageData = challenges[stage];
  
  if (!stageData) return null;
  
  // Determinar elementos decorativos según la etapa
  const getMedievalDecorations = (stage) => {
    const decorations = {
      top: [],
      side: []
    };
    
    switch(stage) {
      case 'etapa1':
        decorations.top.push(
          <div key="top-ship" className="absolute -top-6 left-12 transform rotate-12">
            <svg width="40" height="30" viewBox="0 0 40 30" className="text-amber-800 fill-current">
              <path d="M5,15 Q20,0 35,15 L35,20 Q20,5 5,20 Z" />
              <rect x="15" y="8" width="2" height="15" />
              <path d="M17,8 Q25,10 17,15" />
            </svg>
          </div>
        );
        decorations.side.push(
          <div key="side-wave" className="absolute -left-4 top-1/4">
            <svg width="20" height="80" viewBox="0 0 20 80" className="text-blue-800 fill-current opacity-30">
              <path d="M0,20 Q10,10 20,20 Q10,30 0,40 Q10,50 20,60" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        );
        break;
      case 'etapa2':
        decorations.top.push(
          <div key="top-bridge" className="absolute -top-8 right-12">
            <svg width="60" height="30" viewBox="0 0 60 30" className="text-amber-700 fill-current">
              <rect x="0" y="15" width="60" height="2" />
              <rect x="5" y="5" width="2" height="10" />
              <rect x="15" y="5" width="2" height="10" />
              <rect x="25" y="5" width="2" height="10" />
              <rect x="35" y="5" width="2" height="10" />
              <rect x="45" y="5" width="2" height="10" />
              <rect x="55" y="5" width="2" height="10" />
              <path d="M5,5 Q30,-10 55,5" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        );
        break;
      case 'etapa3':
        decorations.top.push(
          <div key="top-mountains" className="absolute -top-10 right-24">
            <svg width="80" height="40" viewBox="0 0 80 40" className="text-green-900 fill-current opacity-30">
              <path d="M0,40 L20,10 L30,20 L50,0 L80,40 Z" />
            </svg>
          </div>
        );
        decorations.side.push(
          <div key="side-tree" className="absolute -right-6 top-1/3">
            <svg width="30" height="60" viewBox="0 0 30 60" className="text-green-800 fill-current opacity-40">
              <rect x="13" y="30" width="4" height="30" />
              <path d="M15,5 L5,30 L25,30 Z" />
              <path d="M15,15 L3,35 L27,35 Z" />
            </svg>
          </div>
        );
        break;
      case 'etapa4':
        decorations.top.push(
          <div key="top-horreo" className="absolute -top-12 left-1/4">
            <svg width="60" height="30" viewBox="0 0 60 30" className="text-amber-700 fill-current">
              <rect x="10" y="15" width="40" height="10" />
              <path d="M5,15 L55,15 L30,5 Z" />
              <rect x="15" y="25" width="4" height="5" />
              <rect x="41" y="25" width="4" height="5" />
            </svg>
          </div>
        );
        break;
      case 'etapa5':
        decorations.top.push(
          <div key="top-cathedral" className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <svg width="80" height="60" viewBox="0 0 80 60" className="text-gray-600 fill-current">
              <rect x="20" y="20" width="40" height="40" />
              <path d="M20,20 L40,0 L60,20 Z" />
              <rect x="35" y="40" width="10" height="20" />
              <rect x="30" y="10" width="5" height="5" />
              <rect x="45" y="10" width="5" height="5" />
            </svg>
          </div>
        );
        decorations.side.push(
          <div key="side-cross" className="absolute -right-4 top-1/2">
            <svg width="30" height="40" viewBox="0 0 30 40" className="text-amber-600 fill-current opacity-60">
              <rect x="12" y="5" width="6" height="30" />
              <rect x="5" y="12" width="20" height="6" />
              <circle cx="15" cy="15" r="4" className="text-amber-400 fill-current" />
            </svg>
          </div>
        );
        break;
      default:
        break;
    }
    
    return decorations;
  };
  
  const decorations = getMedievalDecorations(stage);
  
  return (
    <div className="bg-white rounded-lg p-5 shadow-lg border border-amber-300 relative">
      {/* Elementos decorativos medievales en la parte superior */}
      {decorations.top.map((decoration) => decoration)}
      
      {/* Elementos decorativos medievales en los lados */}
      {decorations.side.map((decoration) => decoration)}
      
      {/* Decoración de borde medieval */}
      <div className="absolute inset-0 border-8 border-amber-100 rounded-lg pointer-events-none" style={{
        borderImage: 'repeating-linear-gradient(45deg, amber-600, amber-600 10px, transparent 10px, transparent 20px) 8'
      }}></div>
      
      {/* Pergamino con bordes ornamentales */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="40" height="40" viewBox="0 0 40 40" className="absolute top-0 left-0 text-amber-700 opacity-20">
          <path d="M0,0 L40,0 L40,10 Q30,15 40,20 L40,40 L30,40 Q25,30 20,40 L0,40 L0,20 Q10,15 0,10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg width="40" height="40" viewBox="0 0 40 40" className="absolute top-0 right-0 text-amber-700 opacity-20">
          <path d="M40,0 L0,0 L0,10 Q10,15 0,20 L0,40 L10,40 Q15,30 20,40 L40,40 L40,20 Q30,15 40,10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg width="40" height="40" viewBox="0 0 40 40" className="absolute bottom-0 left-0 text-amber-700 opacity-20">
          <path d="M0,40 L40,40 L40,30 Q30,25 40,20 L40,0 L30,0 Q25,10 20,0 L0,0 L0,20 Q10,25 0,30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg width="40" height="40" viewBox="0 0 40 40" className="absolute bottom-0 right-0 text-amber-700 opacity-20">
          <path d="M40,40 L0,40 L0,30 Q10,25 0,20 L0,0 L10,0 Q15,10 20,0 L40,0 L40,20 Q30,25 40,30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      <motion.div 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 relative z-10"
      >
        <h2 className="text-xl font-bold text-amber-900 text-center border-b-2 border-amber-300 pb-2 mb-2">
          <div className="flex items-center justify-center">
            <ShieldIcon size={18} className="text-amber-700 mr-2" />
            {stageData.title}
            <ShieldIcon size={18} className="text-amber-700 ml-2" />
          </div>
        </h2>
        
        <div className="flex justify-center mb-4">
          <MapIcon size={28} className="text-amber-700" />
        </div>
      </motion.div>
      
      {/* Mensaje del sabio para esta etapa - estilo pergamino */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-amber-50/60 p-4 rounded-lg border border-amber-200 mb-6 italic text-amber-800 relative"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect fill=\"%23f8f2d4\" width=\"100\" height=\"100\"/><path fill=\"%23f0e6c8\" d=\"M0 0h100v50H0z\"/></svg>')",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Adornos de pergamino */}
        <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-amber-300"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-300"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-amber-300"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-amber-300"></div>
        
        <div className="flex items-start relative z-10">
          <ScrollIcon size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <p>"{stageIntroductions[stage]}"</p>
        </div>
        <div className="flex justify-end items-center mt-2">
          <CrownIcon size={16} className="text-amber-600 mr-2" />
          <p className="text-right text-sm">— Don Pelayo, el Sabio de Ferrol</p>
        </div>
      </motion.div>
      
      <div className="space-y-6 relative z-10">
        {Object.entries(stageData.challenges).map(([person, challenge], index) => (
          <motion.div 
            key={person}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            className="bg-amber-50 p-4 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition-all relative"
          >
            {/* Elemento decorativo para cada desafío */}
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
              <SwordIcon size={20} className="text-amber-700" />
            </div>
            
            <div className="flex items-center mb-2">
              <UserIcon size={18} className="mr-2 text-amber-700" />
              <h3 className="font-bold text-amber-800">Sir {person}</h3>
            </div>
            <div className="flex items-start ml-1">
              <CameraIcon size={16} className="mr-2 mt-1 flex-shrink-0 text-amber-600" />
              <p className="text-amber-900">Usa tu Atrapamomentos para {challenge.toLowerCase().replace("hazte", "hacerte")}</p>
            </div>
            
            {/* Elemento decorativo al final de cada desafío */}
            <div className="absolute right-2 bottom-2 opacity-20">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-amber-800 fill-current">
                <path d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-6 text-center text-sm text-amber-700 italic relative z-10"
      >
        <div className="flex items-center justify-center">
          <div className="h-px w-12 bg-amber-300 mr-3"></div>
          <SunIcon size={16} className="inline-block mr-1" />
          "El Camino forja al caballero, no las victorias"
          <div className="h-px w-12 bg-amber-300 ml-3"></div>
        </div>
      </motion.div>
    </div>
  );
}