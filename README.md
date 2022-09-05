Pacotes e dependências instaladas

 - roteamento de páginas:
npm install react-router-dom@5.2.0
npm install -D @types/react-router-dom (para usar em dev porque é TypeScript)
 - estilos (auxilia a criar estilos por componente de forma isolada):
npm install --save styled-components
npm install -D @types/styled-components
mais informações: https://styled-components.com/
npm install polished (efeitos de cores)
fonte roboto obtida em: https://fonts.google.com/specimen/Roboto
ícones:
npm install react-icons
 - para consumir API:
npm install axios
 - build
para se gerar relatório do tamanho dos componentes do build:
npm install cra-bundle-analyzer
adicionado em scripts de package.json: "analyzer": "npm run build && npx cra-bundle-analyzer"
 - wbpack magic commets obtidos em:
https://webpack.js.org/api/module-methods/