import { useEffect } from 'react'
import { playAcid } from '../utils/sound'

const ACID_MESSAGES = {
  cloridrico: {
    title: '⚠️ ÁCIDO CLORÍDRICO!',
    message: 'Você caiu em uma casa INORGÂNICA, recheada de ÁCIDO CLORÍDRICO!',
    description: 'Este ácido forte é usado industrialmente e é extremamente corrosivo.',
    color: 'from-yellow-400 to-orange-500'
  },
  sulfurico: {
    title: '⚠️ ÁCIDO SULFÚRICO!',
    message: 'Você caiu em uma casa INORGÂNICA, recheada de ÁCIDO SULFÚRICO!',
    description: 'O ácido sulfúrico é um dos ácidos mais fortes e mais utilizados na indústria.',
    color: 'from-red-400 to-purple-500'
  },
  nitrico: {
    title: '⚠️ ÁCIDO NÍTRICO!',
    message: 'Você caiu em uma casa INORGÂNICA, recheada de ÁCIDO NÍTRICO!',
    description: 'O ácido nítrico é altamente corrosivo e usado na produção de fertilizantes.',
    color: 'from-orange-400 to-red-500'
  },
  acetico: {
    title: '⚠️ ÁCIDO ACÉTICO!',
    message: 'Você caiu em uma casa recheada de ÁCIDO ACÉTICO!',
    description: 'O ácido acético é o principal componente do vinagre.',
    color: 'from-green-400 to-yellow-500'
  }
}

// O componente só é montado pelo GameBoard quando o alerta precisa aparecer,
// então a animação de entrada roda automaticamente via CSS (sem estado extra).
const AcidAlertModal = ({ onConfirm, acidType, housesBack }) => {
  useEffect(() => {
    playAcid()
  }, [])

  const currentAcid = ACID_MESSAGES[acidType] || ACID_MESSAGES.cloridrico

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-modal-pop">
        {/* Cabeçalho com gradiente */}
        <div className={`bg-gradient-to-r ${currentAcid.color} -mx-8 -mt-8 p-6 rounded-t-2xl mb-6`}>
          <h2 className="text-3xl font-bold text-white text-center mb-2">
            {currentAcid.title}
          </h2>
        </div>

        {/* Mensagem principal */}
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
            {currentAcid.message}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {currentAcid.description}
          </p>

          {/* Ícone de ácido */}
          <div className="text-6xl mb-4">⚗️</div>

          {/* Penalidade */}
          <div className="bg-red-50 dark:bg-red-950/50 border-2 border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
            <p className="text-red-700 dark:text-red-300 font-bold text-lg">
              📍 VOLTE {housesBack} CASAS!
            </p>
          </div>
        </div>

        {/* Botão de confirmação */}
        <button
          onClick={onConfirm}
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Entendido! Volto {housesBack} casas
        </button>

        {/* Efeito de borbulhas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-4 left-4 w-2 h-2 bg-red-400 rounded-full animate-ping" />
          <div className="absolute top-8 right-8 w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-red-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </div>
  )
}

export default AcidAlertModal
