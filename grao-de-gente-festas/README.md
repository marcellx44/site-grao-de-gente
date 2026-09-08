# Grão de Gente Festas — Site Institucional

Site institucional em HTML5, CSS3 e JavaScript Vanilla para o salão de festas **Grão de Gente Festas**, em São Gonçalo - RJ.

## 📁 Estrutura do projeto

```
grao-de-gente-festas/
│
├── index.html
│
├── css/
│   ├── style.css          # Variáveis, layout, componentes e animações
│   └── responsive.css     # Breakpoints (notebook, tablet, mobile)
│
├── js/
│   └── script.js          # Menu mobile, scroll suave, reveal, contadores, galeria/lightbox
│
├── assets/
│   ├── images/            # Fotos do salão e das festas
│   ├── icons/             # Reservado para ícones customizados
│   └── logo/              # Reservado para arquivo de logo oficial
│
└── README.md
```

## 🖼️ Imagens

As imagens em `assets/images/` são fotos reais do salão e de festas realizadas:

| Arquivo | Uso no site |
|---|---|
| `hero.jpg` | Fundo da seção principal (Hero) |
| `espaco-01.jpg` / `espaco-02.jpg` | Seção "O Espaço" e seção emocional |
| `festa-01.jpg`, `festa-02.jpg`, `festa-03.jpg` | Galeria de festas temáticas |
| `galeria-01.jpg`, `galeria-02.jpg` | Seção de diferenciais e galeria |

Para substituir por novas fotos, basta manter o mesmo nome de arquivo (ou atualizar o `src` correspondente no `index.html`).

## ⚙️ Como usar

1. Abra a pasta `grao-de-gente-festas` no VS Code.
2. Abra o arquivo `index.html` diretamente no navegador (ou use a extensão **Live Server**).
3. Pronto — o site está funcionando localmente.

## 📞 Contato configurado

- **WhatsApp:** (21) 97686-7558 — todos os botões de orçamento abrem o WhatsApp com mensagem pré-definida.
- **Endereço:** Tv. das Flôres, 353 — Mangueira, São Gonçalo - RJ, 24435-410 (com mapa incorporado do Google Maps).

## 🎨 Design System

Paleta oficial da marca, definida em variáveis CSS (`css/style.css`):

| Cor | Uso |
|---|---|
| Laranja `#F0672E` | Cor primária — "Grão", CTAs |
| Rosa/magenta `#E23E7E` | Cor secundária — "Gente", CTAs, gradientes |
| Teal `#0E9488` | Cor institucional — seção "Estrutura", ícones |
| Amarelo `#F5B942` | Detalhes, estrelas de avaliação |
| Teal-carvão `#142523` | Texto escuro, fundo do rodapé |

Tipografia: **Playfair Display** (títulos) + **Poppins** (textos).

## ✅ Funcionalidades

- Header fixo com efeito ao rolar a página
- Hero com badge de capacidade e painel de estatísticas flutuante
- Seção "Estrutura completa" com as comodidades reais do espaço (climatização, capacidade, cozinha equipada, área kids, fraldário etc.)
- Menu hamburguer animado no mobile
- Scroll suave entre seções
- Animações de entrada (scroll reveal) em todas as seções
- Contadores animados na seção de confiança
- Cards de serviço numerados com efeito hover em gradiente
- Galeria em grid assimétrico com lightbox (zoom, navegação e fechamento)
- Depoimentos com aspas decorativas e avaliação do Google
- Botão flutuante do WhatsApp com tooltip
- Mapa do Google Maps incorporado e responsivo
- Totalmente responsivo (desktop, notebook, tablet e smartphone)
- SEO básico (title, meta description, Open Graph, tags semânticas)
