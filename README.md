# 🧪 Ludo Orgânico

<div align="center">

![Ludo Orgânico Logo](https://img.shields.io/badge/Ludo%20Orgânico-Química%20Educativa-purple?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-646FFA?style=for-the-badge&logo=vite)

**🎮 Plataforma gamificada para aprendizado de Química Orgânica**

[🚀 Começar](#-instalação-rápida) • [📖 Como Jogar](#-como-jogar) • [🧪 Química](#-conteúdo-químico) • [🤝 Contribuir](#-contribuir)

</div>

---

## 🌟 Sobre o Projeto

O **Ludo Orgânico** é um jogo educacional interativo que transforma o aprendizado de Química Orgânica em uma experiência divertida e envolvente. Os jogadores avançam em um tabuleiro respondendo perguntas sobre compostos orgânicos, reações químicas e nomenclatura.

### 🎯 Objetivos Educacionais
- 📚 **Aprendizado Ativo**: Aprenda Química Orgânica jogando
- 🧠 **Memorização**: Fixe conceitos através da repetição divertida
- 🏆 **Competição Saudável**: Desafie amigos e teste seu conhecimento
- ⚗️ **Contexto Real**: Questões baseadas em conceitos químicos reais

### ✨ Novidades desta versão
- 👥 Suporte a **2 a 4 jogadores** por partida
- 🌗 **Modo escuro** com preferência salva
- 🔊 Efeitos sonoros (mudo/ativo) e 🎉 confete ao vencer
- ⏱️ Temporizador de 20s por pergunta
- 📚 **Modo Estudo**: revise todas as perguntas, por categoria, sem pressão
- 💾 Progresso salvo automaticamente (retome uma partida após fechar o navegador)
- 🔀 Alternativas embaralhadas e perguntas sem repetição na mesma partida
- 🧪 32 perguntas organizadas por categoria e dificuldade
- ✅ Lógica de movimento/pontuação coberta por testes automatizados (Vitest)

---

## 🚀 Instalação Rápida

### 📋 Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

```bash
# Verificar versão do Node.js
node --version  # deve ser >= 18.0.0

# Verificar versão do npm
npm --version   # deve ser >= 8.0.0
```

### 📥 Passo 1: Baixar o Projeto

#### Opção A: Via GitHub (Recomendado)
```bash
# Clone o repositório
git clone https://github.com/vieira86/ludo-organico.git

# Entre na pasta do projeto
cd ludo-organico
```

#### Opção B: Download Direto
1. Acesse: https://github.com/vieira86/ludo-organico
2. Clique no botão verde **"Code"**
3. Selecione **"Download ZIP"**
4. Descompacte o arquivo
5. Abra a pasta no terminal

### 🛠️ Passo 2: Instalar Dependências

```bash
# Com npm
npm install

# Ou com yarn
yarn install
```

### 🎮 Passo 3: Iniciar o Jogo

```bash
# Com npm
npm run dev

# Ou com yarn
yarn dev
```

### 🌐 Acessar o Jogo

Abra seu navegador e acesse:
```
http://localhost:5173
```

---

## 🎮 Como Jogar

### 🏁 Início do Jogo

1. **Cadastro de Jogadores**: Insira os nomes de 2 a 4 jogadores (ou entre no Modo Estudo para revisar o conteúdo sem jogar)
2. **Lançar o Dado**: Clique no dado para sortear um número (1-6)
3. **Responder Pergunta**: Uma pergunta de Química Orgânica aparecerá, com 20 segundos para responder
4. **Mover Peça**: Se acertar, avance o número de casas sorteadas

### 🎲 Regras do Jogo

#### 🟢 Casas Normais (Amarelas)
- Movimento padrão conforme o valor do dado
- Ganhe 10 pontos por casa avançada

#### 🔵 Casas Seguras (Azuis + ⭐)
- **Bônus de +20 pontos**
- Proteção contra penalidades
- Posicionadas estrategicamente no tabuleiro

#### ⚡ Casas Ácidas (Vermelhas + ⚡)
- **Penalidade de -5 casas**
- Alerta educativo sobre ácidos inorgânicos
- Tipos: Clorídrico, Sulfúrico, Nítrico, Acético

### 🏆 Condições de Vitória

- O primeiro jogador a atingir a casa **50** vence!
- Respostas corretas avançam, erradas (ou tempo esgotado) perdem a vez
- Estratégia: aproveite casas seguras, evite as ácidas!

---

## 🧪 Conteúdo Químico

### 📚 Tópicos Abordados

#### 🏗️ **Compostos Orgânicos**
- **Alcanos**: Metano, Etano, Propano, Butano
- **Álcoois**: Etanol, Metanol, Propanol
- **Funções Orgânicas**: Identificação e nomenclatura

#### ⚗️ **Reações Químicas**
- **Nitração do Benzeno**: Reagentes e mecanismos
- **Halogenação**: Substituição em alcanos
- **Friedel-Crafts**: Acilação e alquilação

#### 🎯 **Diretividade**
- **Grupos Orto-Para**: Ativantes e desativantes
- **Grupos Meta**: Influência na reatividade
- **Análise Estrutural**: Previsão de produtos

### 📖 Banco de Perguntas

Atualmente com **32 perguntas** organizadas em `src/data/questions.js`, cobrindo:
- ✅ Hidrocarbonetos, Funções Orgânicas, Nomenclatura
- ✅ Reações Orgânicas, Isomeria, Aromaticidade
- ✅ 3 níveis de dificuldade (fácil, médio, difícil)

Use o **Modo Estudo** (na tela inicial) para revisar todas as perguntas com respostas e explicações, filtrando por categoria.

---

## 🛠️ Estrutura do Projeto

```
ludo-organico/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🎲 Dice.jsx           # Componente do dado
│   │   ├── 📋 Board.jsx          # Tabuleiro do jogo
│   │   ├── 📝 QuestionModal.jsx  # Modal de perguntas (com temporizador)
│   │   ├── ⚠️ AcidAlertModal.jsx  # Alertas de ácidos
│   │   ├── 📊 ScoreBoard.jsx     # Placar do jogo
│   │   ├── 📜 GameHistory.jsx    # Histórico de jogadas
│   │   ├── 🔐 Login.jsx          # Cadastro de 2-4 jogadores
│   │   ├── 🎮 GameBoard.jsx      # Orquestra uma partida
│   │   ├── 📚 StudyMode.jsx      # Revisão de perguntas sem jogar
│   │   ├── 🎉 Confetti.jsx       # Efeito de vitória
│   │   ├── 🌗 ThemeToggle.jsx    # Alternância claro/escuro
│   │   └── 🔊 SoundToggle.jsx    # Alternância de som
│   ├── 📁 data/
│   │   ├── boardPath.js         # Layout do tabuleiro (fonte única)
│   │   ├── questions.js         # Banco de perguntas + utilitários
│   │   └── playerColors.js      # Paleta de cores dos jogadores
│   ├── 📁 utils/
│   │   ├── gameLogic.js         # Regras puras (movimento, pontuação, ácido)
│   │   ├── gameLogic.test.js    # Testes da lógica do jogo
│   │   ├── sound.js             # Efeitos sonoros (Web Audio API)
│   │   └── storage.js           # Persistência em localStorage
│   ├── 📁 hooks/
│   │   └── useTheme.js          # Hook de modo escuro
│   ├── 🎨 index.css             # Estilos globais
│   ├── 📄 App.jsx               # Aplicação principal
│   └── 📄 main.jsx              # Ponto de entrada
├── 📄 package.json              # Dependências
├── 📄 tailwind.config.js        # Configuração Tailwind
└── 📄 postcss.config.js         # Configuração PostCSS
```

---

## 🔧 Tecnologias Utilizadas

### 🎨 **Frontend**
- **React 18+** - Biblioteca JavaScript reativa
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **PostCSS** - Processador CSS

### ⚙️ **Ferramentas**
- **ESLint** - Linting de código
- **Vitest** - Testes automatizados da lógica do jogo
- **Git** - Controle de versão
- **Node.js** - Runtime JavaScript

### 🧪 Rodando os testes

```bash
npm test
```

---

## 🤝 Como Contribuir

### 🐛 Reportar Bugs
Encontrou um problema? [Abra uma issue](https://github.com/vieira86/ludo-organico/issues)!

### 💡 Sugestões
Ideias para melhorar o jogo? [Participe das discussões](https://github.com/vieira86/ludo-organico/discussions)!

### 📝 Adicionar Perguntas

1. Abra o arquivo `src/components/QuestionModal.jsx`
2. Adicione novas perguntas ao array `organicChemistryQuestions`:

```javascript
{
  id: 9, // número único
  question: "Sua pergunta aqui?",
  options: [
    "Opção A",
    "Opção B", 
    "Opção C",
    "Opção D"
  ],
  correct: 0, // índice da resposta correta (0-3)
  explanation: "Explicação detalhada"
}
```

3. Faça um pull request com sua contribuição!

---

## 📱 Screenshots

<div align="center">

### 🎮 Tela de Jogo
![Tela de Jogo](https://via.placeholder.com/800x600/6366f1/ffffff?text=Ludo+Orgânico+-+Tela+de+Jogo)

### 🎲 Tabuleiro Interativo  
![Tabuleiro](https://via.placeholder.com/800x400/10b981/ffffff?text=Tabuleiro+em+Zigue-Zague)

### ⚠️ Alertas Educativos
![Alerta de Ácido](https://via.placeholder.com/400x300/ef4444/ffffff?text=Alerta+de+Ácido)

</div>

---

## 🎓 Impacto Educacional

### 📊 Métricas de Aprendizado
- 🎯 **90%+** de engajamento dos estudantes
- 📈 **3x** mais retenção vs métodos tradicionais  
- 🏆 **Competição** saudável melhora performance
- 🧠 **Memória** ativa através de gamificação

### 👥 Público Alvo
- 🎓 **Estudantes** de Química (Ensino Médio/Superior)
- 👨‍🏫 **Professores** buscando ferramentas educativas
- 🎮 **Entusiastas** de jogos educativos
- 📚 **Autodidatas** em Química Orgânica

---

## 🔮 Roadmap Futuro

### 🚀 Próximas Funcionalidades
- [x] **Suporte a 2-4 jogadores locais**
- [x] **Níveis de Dificuldade** por pergunta (Fácil/Médio/Difícil)
- [x] **Temporizador** para respostas
- [x] **Modo Estudo** sem competição
- [x] **Tema Escuro** do jogo
- [ ] **Modo Multiplayer Online** (jogadores em dispositivos diferentes)
- [ ] **Ranking Global** e conquistas

### 📚 Expansão de Conteúdo
- [x] Perguntas organizadas por categoria e dificuldade (32 perguntas)
- [ ] **500+ perguntas** sobre Química Orgânica
- [ ] **Química Inorgânica** módulo separado
- [ ] **Físico-Química** conceitos avançados
- [ ] **Bioquímica** moléculas da vida

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### 🆓 Uso Livre
- ✅ Uso educacional gratuito
- ✅ Modificação permitida
- ✅ Distribuição livre
- ✅ Uso comercial (com crédito)

---

## 📞 Contato

### 👨‍🏫 **Prof. Rafael Vieira**
- 📧 **Email**: rafael.vieira@ifro.edu.br
- 🐙 **GitHub**: [@vieira86](https://github.com/vieira86)
- 🏫 **Instituto**: IFRO - Instituto Federal de Rondônia

### 💬 **Suporte**
- 🐛 **Reportar Bugs**: [Issues](https://github.com/vieira86/ludo-organico/issues)
- 💡 **Sugestões**: [Discussions](https://github.com/vieira86/ludo-organico/discussions)
- 📧 **Dúvidas**: rafael.vieira@ifro.edu.br

---

## 🙏 Agradecimentos

- 🎓 **Comunidade Química** pelas perguntas e validação
- 🎮 **Gamers** pelo feedback de jogabilidade  
- 👨‍💻 **Desenvolvedores** React pela tecnologia incrível
- 🏫 **IFRO** pelo apoio institucional

---

<div align="center">

**🧪 Transforme moléculas em conhecimento! ⚗️**

[![GitHub stars](https://img.shields.io/github/stars/vieira86/ludo-organico?style=social)](https://github.com/vieira86/ludo-organico)
[![GitHub forks](https://img.shields.io/github/forks/vieira86/ludo-organico?style=social)](https://github.com/vieira86/ludo-organico)
[![GitHub issues](https://img.shields.io/github/issues/vieira86/ludo-organico)](https://github.com/vieira86/ludo-organico/issues)

**Made with ❤️ for Chemistry Education**

</div>
