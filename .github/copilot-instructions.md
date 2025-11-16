# Instruções para Agentes de IA - brunabertini

## Visão Geral do Projeto

Este é um projeto de **landing page simples** contendo três arquivos principais:
- `index.html`: Estrutura semântica em português brasileiro
- `style.css`: Design responsivo com gradiente hero e seções
- `script.js`: Lógica mínima do lado do cliente

O projeto segue padrões de desenvolvimento front-end vanilla (sem frameworks).

## Arquitetura e Componentes

### Estrutura HTML
A página segue uma hierarquia simples com seções semânticas:
- **Hero Section** (`.hero`): Full viewport height com gradiente linear
- **Seções de Conteúdo** (`.section`): Blocos de conteúdo com padding consistente
- **Footer**: Atribuição e copyright

### Estilos CSS
- **Responsividade**: Viewport meta tag configurada; design mobile-first
- **Paleta de Cores**: Gradiente primário (azul `#0099ff` → ciano `#00ffaa`), cinza para seções alternadas
- **Tipografia**: Font stack genérico (Arial, sans-serif); color dark-on-light/light-on-dark conforme seção
- **Layout Flexbox**: Hero e seções usam `display: flex` para alinhamento central

### JavaScript
Atualmente contém apenas um log de inicialização (`console.log("Landing page carregada!")`). Expansões futuras devem manter o padrão vanilla JS.

## Fluxo de Desenvolvimento

### Setup Local
```bash
python3 -m http.server 8000
```
Executa servidor HTTP na porta 8000 a partir do diretório raiz. Acesse `http://localhost:8000`.

### Adições Comuns
- **Novos elementos interativos**: Adicionar event listeners em `script.js`
- **Novas seções**: Replicar estrutura de `.section` em `index.html` com classes apropriadas (`.dark` para fundo alternado)
- **Ajustes de design**: Modificar variáveis CSS (cores, padding, fonts) em `style.css`

## Conventions e Padrões

1. **Idioma**: Todo conteúdo está em português brasileiro (pt-BR)
2. **Nomenclatura CSS**: Classes descritivas (`.hero`, `.btn`, `.section`, `.dark`) baseadas em função, não aparência
3. **Estrutura HTML**: Tags semânticas (`<header>`, `<section>`, `<footer>`); atributos `id` para âncoras internas
4. **Links internos**: Usar `href="#id"` para navegação dentro da página (vide botão "Saiba mais")

## Dependências Externas

- Nenhuma dependência NPM ou bibliotecas de terceiros
- Servidor HTTP embutido do Python 3 para desenvolvimento local

## Próximos Passos Sugeridos

- Implementar smooth scroll para links âncora
- Adicionar formulário de contato funcional
- Otimizar imagens (se adicionadas)
- Considerar animações CSS para entrada de seções
