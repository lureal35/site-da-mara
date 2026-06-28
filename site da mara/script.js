// ========== BANCO DE DADOS DE PRODUTOS ==========
const produtosBD = [
  {
    id: 1,
    nome: "Camiseta Premium",
    preco: 59.90,
    precoOriginal: null,
    parcelamento: "3x de R$ 19,97",
    categoria: "masculino",
    badge: "Novo",
    badgeTipo: "novo",
    descricao: "Camiseta masculina premium confeccionada em algodão penteado 100% nacional. Tecido macio, respirável e de alta durabilidade, ideal para uso diário. Costuras reforçadas, etiqueta suave para maior conforto e modelagem moderna que valoriza o corpo.",
    especificacoes: {
      material: "100% Algodão Penteado",
      cor: "Preto",
      origem: "Nacional",
      garantia: "Contra defeito de fabricação"
    },
    imagens: ["fa-tshirt", "fa-user", "fa-image", "fa-tags"],
    coresImagem: ["#e3f2fd", "#fce4ec", "#fff3e0", "#e8f5e9"],
    tamanhos: ["P", "M", "G", "GG", "XG"]
  },
  {
    id: 2,
    nome: "Vestido Elegante",
    preco: 89.90,
    precoOriginal: 112.00,
    parcelamento: "4x de R$ 22,48",
    categoria: "feminino",
    badge: "-20%",
    badgeTipo: "promocao",
    descricao: "Vestido feminino em tecido fluido, perfeito para eventos especiais. Modelagem elegante que valoriza a silhueta, com tecido leve e confortável. Disponível em diversas cores.",
    especificacoes: {
      material: "Tecido Fluido",
      cor: "Vermelho",
      origem: "Nacional",
      garantia: "Contra defeito de fabricação"
    },
    imagens: ["fa-vest", "fa-user", "fa-image", "fa-tags"],
    coresImagem: ["#fce4ec", "#e3f2fd", "#fff3e0", "#e8f5e9"],
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 3,
    nome: "Tênis Esportivo",
    preco: 139.93,
    precoOriginal: 199.90,
    parcelamento: "5x de R$ 27,99",
    categoria: "masculino",
    badge: "-30%",
    badgeTipo: "promocao",
    descricao: "Tênis masculino com amortecimento, ideal para atividades físicas. Solado antiderrapante, cabedal em material respirável e palmilha macia para máximo conforto durante seus treinos.",
    especificacoes: {
      material: "Material Sintético",
      cor: "Preto/Branco",
      origem: "Importado",
      garantia: "3 meses"
    },
    imagens: ["fa-shoe-prints", "fa-user", "fa-image", "fa-tags"],
    coresImagem: ["#e8f5e9", "#e3f2fd", "#fce4ec", "#fff3e0"],
    tamanhos: ["38", "39", "40", "41", "42", "43", "44"]
  },
  {
    id: 4,
    nome: "Bolsa de Couro",
    preco: 129.90,
    precoOriginal: null,
    parcelamento: "4x de R$ 32,48",
    categoria: "feminino",
    badge: "Mais vendido",
    badgeTipo: "mais-vendido",
    descricao: "Bolsa feminina em couro sintético, múltiplos compartimentos. Design moderno e versátil, ideal para o dia a dia ou ocasiões especiais. Alça ajustável e fechamento seguro.",
    especificacoes: {
      material: "Couro Sintético",
      cor: "Marrom",
      origem: "Nacional",
      garantia: "Contra defeito de fabricação"
    },
    imagens: ["fa-shopping-bag", "fa-user", "fa-image", "fa-tags"],
    coresImagem: ["#fff3e0", "#fce4ec", "#e3f2fd", "#e8f5e9"],
    tamanhos: ["Único"]
  },
  {
    id: 5,
    nome: "Camiseta Básica",
    preco: 49.90,
    precoOriginal: null,
    parcelamento: "2x de R$ 24,95",
    categoria: "masculino",
    badge: "Novo",
    badgeTipo: "novo",
    descricao: "Camiseta casual em algodão, perfeita para o dia a dia. Modelagem confortável e moderna, com tecido de alta qualidade e durabilidade.",
    especificacoes: {
      material: "100% Algodão",
      cor: "Branco",
      origem: "Nacional",
      garantia: "Contra defeito de fabricação"
    },
    imagens: ["fa-tshirt", "fa-user", "fa-image", "fa-tags"],
    coresImagem: ["#e3f2fd", "#fce4ec", "#fff3e0", "#e8f5e9"],
    tamanhos: ["P", "M", "G", "GG", "XG"]
  },
  {
    id: 6,
    nome: "Camisa Social",
    preco: 99.90,
    precoOriginal: null,
    parcelamento: "3x de R$ 33,30",
    categoria: "masculino",
    badge: null,
    badgeTipo: null,
    descricao: "Camisa social masculina de alto padrão. Tecido de algodão egípcio com acabamento impecável, ideal para ambientes de trabalho e eventos formais.",
    especificacoes: {
      material: "Algodão Egípcio",
      cor: "Azul Claro",
      origem: "Nacional",
      garantia: "Contra defeito de fabricação"
    },
    imagens: ["fa-vest", "fa-user", "fa-image", "fa-tags"],
    coresImagem: ["#f3e5f5", "#e3f2fd", "#fff3e0", "#e8f5e9"],
    tamanhos: ["P", "M", "G", "GG", "XG"]
  },
  {
    id: 7,
    nome: "Tênis Casual",
    preco: 149.90,
    precoOriginal: null,
    parcelamento: "5x de R$ 29,98",
    categoria: "masculino",
    badge: null,
    badgeTipo: null,
    descricao: "Tênis casual para dia a dia, confortável e estiloso. Design moderno que combina com diversas ocasiões, do trabalho ao lazer.",
    especificacoes: {
      material: "Lona e Borracha",
      cor: "Bege",
      origem: "Nacional",
      garantia: "3 meses"
    },
    imagens: ["fa-shoe-prints", "fa-user", "fa-image", "fa-tags"],
    coresImagem: ["#e8f5e9", "#e3f2fd", "#fce4ec", "#fff3e0"],
    tamanhos: ["38", "39", "40", "41", "42", "43", "44"]
  }
];

// ========== VARIÁVEIS GLOBAIS ==========
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let cupomAtivo = localStorage.getItem('cupomAtivo') || null;

// ========== FUNÇÕES DE PRODUTO E REDIRECIONAMENTO ==========

// Redireciona para página de detalhes do produto
function verDetalhesProduto(produtoId) {
  window.location.href = `produto.html?id=${produtoId}`;
}

// ========== FUNÇÕES DA PÁGINA INICIAL ==========

// Carrega produtos na página inicial
function carregarProdutosHome() {
  const container = document.getElementById('produtos-home-container');
  if (!container) return;
  
  let html = '';
  
  produtosBD.slice(0, 8).forEach(produto => {
    const badgeClass = produto.badgeTipo === 'promocao' ? 'badge promocao' : 'badge';
    const badgeHtml = produto.badge ? `<span class="${badgeClass}">${produto.badge}</span>` : '';
    const precoOriginalHtml = produto.precoOriginal ? `<span class="preco-original">R$ ${produto.precoOriginal.toFixed(2)}</span>` : '';
    
    html += `
      <div class="card ${produto.categoria} ${produto.badgeTipo === 'promocao' ? 'promocao' : ''}" onclick="verDetalhesProduto(${produto.id})">
        <div class="card-img" style="background-color: ${produto.coresImagem[0]};">
          <i class="fas ${produto.imagens[0]}"></i>
          ${badgeHtml}
        </div>
        <div class="card-content">
          <h3>${produto.nome}</h3>
          <p class="descricao">${produto.descricao.substring(0, 50)}...</p>
          <div class="preco">
            ${precoOriginalHtml}
            <span class="preco-atual">R$ ${produto.preco.toFixed(2)}</span>
            <span class="preco-parcelado">ou ${produto.parcelamento}</span>
          </div>
          <button class="btn-comprar" onclick="event.stopPropagation(); comprar('${produto.nome}')">Comprar</button>
          <button class="btn-carrinho" onclick="event.stopPropagation(); adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// ========== FUNÇÕES DA PÁGINA DE PRODUTO ==========

// Carrega detalhes do produto na página produto.html
function carregarDetalhesProduto() {
  const container = document.getElementById('produto-detalhes');
  if (!container) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const produtoId = parseInt(urlParams.get('id')) || 1;
  
  const produto = produtosBD.find(p => p.id === produtoId) || produtosBD[0];
  
  // Atualizar breadcrumb
  const breadcrumbSpan = document.getElementById('produto-nome-breadcrumb');
  if (breadcrumbSpan) breadcrumbSpan.textContent = produto.nome;
  
  const breadcrumbCategoria = document.getElementById('breadcrumb-categoria');
  if (breadcrumbCategoria) {
    breadcrumbCategoria.textContent = produto.categoria === 'masculino' ? 'Masculino' : 'Feminino';
    breadcrumbCategoria.href = `index.html?filtro=${produto.categoria}#produtos`;
  }
  
  // Gerar HTML do produto
  let html = `
    <div class="produto-galeria">
      <div class="produto-imagem-principal" id="imagemPrincipal">
        <i class="fas ${produto.imagens[0]}"></i>
      </div>
      <div class="produto-miniaturas">
  `;
  
  produto.imagens.forEach((imagem, index) => {
    html += `
      <div class="miniatura ${index === 0 ? 'active' : ''}" onclick="mudarImagem(${index + 1})">
        <i class="fas ${imagem}"></i>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
    
    <div class="produto-info">
      <span class="categoria-badge">${produto.categoria === 'masculino' ? 'Masculino' : 'Feminino'}</span>
      <h1 class="produto-titulo">${produto.nome}</h1>
      <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
      <div class="produto-parcelamento">ou ${produto.parcelamento}</div>
      
      <div class="produto-descricao">
        <p>${produto.descricao}</p>
      </div>
      
      <div class="produto-especificacoes">
  `;
  
  for (const [key, value] of Object.entries(produto.especificacoes)) {
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    html += `
      <div class="especificacao-item">
        <span>${label}:</span>
        <span>${value}</span>
      </div>
    `;
  }
  
  html += `
      </div>
      
      <div>
        <h3>Selecione o Tamanho:</h3>
        <div class="tamanhos" id="tamanhos-container">
  `;
  
  produto.tamanhos.forEach(tamanho => {
    const isActive = (tamanho === 'M' || tamanho === '40' || tamanho === 'Único') ? 'active' : '';
    html += `
      <button class="tamanho-btn ${isActive}" data-tamanho="${tamanho}">${tamanho}</button>
    `;
  });
  
  html += `
        </div>
      </div>
      
      <div class="quantidade">
        <h3>Quantidade:</h3>
        <button class="quantidade-btn" onclick="alterarQuantidadeProduto(-1)">-</button>
        <input type="number" class="quantidade-input" value="1" min="1" max="10" id="quantidadeProduto">
        <button class="quantidade-btn" onclick="alterarQuantidadeProduto(1)">+</button>
      </div>
      
      <div class="acoes-produto">
        <button class="btn-comprar btn-comprar-agora" onclick="comprarAgora('${produto.nome}', ${produto.preco})">
          <i class="fas fa-bolt"></i> Comprar Agora
        </button>
        <button class="btn-carrinho btn-adicionar-carrinho" onclick="adicionarProdutoCarrinho('${produto.nome}', ${produto.preco})">
          <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
        </button>
      </div>
      
      <a href="index.html#produtos" class="voltar-produtos">
        <i class="fas fa-arrow-left"></i> Voltar para todos os produtos
      </a>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Salvar produto atual no escopo global
  window.produtoAtual = produto;
  
  // Configurar eventos dos botões de tamanho
  setTimeout(() => {
    document.querySelectorAll('.tamanho-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('.tamanho-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }, 100);
}

// Carrega produtos relacionados
function carregarProdutosRelacionados() {
  const container = document.getElementById('produtos-relacionados-container');
  if (!container) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const produtoId = parseInt(urlParams.get('id')) || 1;
  const produtoAtual = produtosBD.find(p => p.id === produtoId) || produtosBD[0];
  
  const relacionados = produtosBD
    .filter(p => p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id)
    .slice(0, 3);
  
  let html = '';
  
  relacionados.forEach(produto => {
    const badgeClass = produto.badgeTipo === 'promocao' ? 'badge promocao' : 'badge';
    const badgeHtml = produto.badge ? `<span class="${badgeClass}">${produto.badge}</span>` : '';
    const precoOriginalHtml = produto.precoOriginal ? `<span class="preco-original">R$ ${produto.precoOriginal.toFixed(2)}</span>` : '';
    
    html += `
      <div class="card ${produto.categoria}" onclick="verDetalhesProduto(${produto.id})">
        <div class="card-img" style="background-color: ${produto.coresImagem[0]};">
          <i class="fas ${produto.imagens[0]}"></i>
          ${badgeHtml}
        </div>
        <div class="card-content">
          <h3>${produto.nome}</h3>
          <p class="descricao">${produto.descricao.substring(0, 50)}...</p>
          <div class="preco">
            ${precoOriginalHtml}
            <span class="preco-atual">R$ ${produto.preco.toFixed(2)}</span>
            <span class="preco-parcelado">ou ${produto.parcelamento}</span>
          </div>
          <button class="btn-comprar" onclick="event.stopPropagation(); comprar('${produto.nome}')">Comprar</button>
          <button class="btn-carrinho" onclick="event.stopPropagation(); adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// Funções de imagem do produto
function mudarImagemProduto(numero) {
  if (!window.produtoAtual) return;
  
  const imagemPrincipal = document.getElementById('imagemPrincipal');
  if (imagemPrincipal) {
    imagemPrincipal.innerHTML = `<i class="fas ${window.produtoAtual.imagens[numero-1]}"></i>`;
    imagemPrincipal.style.backgroundColor = window.produtoAtual.coresImagem[numero-1];
    
    document.querySelectorAll('.miniatura').forEach((miniatura, index) => {
      miniatura.classList.remove('active');
      if (index === numero-1) miniatura.classList.add('active');
    });
  }
}

function mudarImagem(numero) {
  mudarImagemProduto(numero);
}

// Funções de quantidade
function alterarQuantidadeProduto(valor) {
  const input = document.getElementById('quantidadeProduto');
  if (input) {
    let quantidade = parseInt(input.value) || 1;
    quantidade += valor;
    if (quantidade < 1) quantidade = 1;
    if (quantidade > 10) quantidade = 10;
    input.value = quantidade;
  }
}

// Funções de carrinho na página de produto
function adicionarProdutoCarrinho(nome, preco) {
  const quantidade = parseInt(document.getElementById('quantidadeProduto')?.value) || 1;
  const tamanhoElement = document.querySelector('.tamanho-btn.active');
  const tamanho = tamanhoElement ? tamanhoElement.textContent : 'M';
  
  const nomeCompleto = `${nome} - Tamanho ${tamanho}`;
  
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  const produtoExistente = carrinho.find(item => item.nome === nomeCompleto);
  
  if (produtoExistente) {
    produtoExistente.quantidade += quantidade;
  } else {
    carrinho.push({
      nome: nomeCompleto,
      preco: preco,
      quantidade: quantidade,
      tamanho: tamanho
    });
  }
  
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  mostrarNotificacao('Produto adicionado ao carrinho!');
}

function comprarAgora(nome, preco) {
  const quantidade = parseInt(document.getElementById('quantidadeProduto')?.value) || 1;
  const tamanhoElement = document.querySelector('.tamanho-btn.active');
  const tamanho = tamanhoElement ? tamanhoElement.textContent : 'M';
  const valorTotal = (preco * quantidade).toFixed(2);
  
  const mensagem = `Olá! Gostaria de comprar:\n\nProduto: ${nome}\nTamanho: ${tamanho}\nQuantidade: ${quantidade}\nValor total: R$ ${valorTotal}`;
  const url = `https://wa.me/5511987654321?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
}

// ========== FUNÇÕES DO CARRINHO ==========

// Atualiza contador do carrinho
function atualizarContadorCarrinho() {
  const contadores = document.querySelectorAll('.cart-count');
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  
  contadores.forEach(contador => {
    if (contador) contador.textContent = totalItens;
  });
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  const produtoExistente = carrinho.find(item => item.nome === nome);
  
  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push({
      nome: nome,
      preco: preco,
      quantidade: 1
    });
  }
  
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  mostrarNotificacao(`${nome} adicionado ao carrinho!`);
}

// Remove item do carrinho por índice
function removerItem(index) {
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  if (carrinho[index]) {
    const nome = carrinho[index].nome;
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    
    if (window.location.pathname.includes('carrinho.html')) {
      carregarCarrinhoPagina();
    }
    
    mostrarNotificacao(`${nome} removido do carrinho`);
  }
}

// Altera quantidade no carrinho
function alterarQuantidade(index, valor) {
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  if (carrinho[index]) {
    carrinho[index].quantidade += valor;
    
    if (carrinho[index].quantidade < 1) {
      carrinho[index].quantidade = 1;
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    
    if (window.location.pathname.includes('carrinho.html')) {
      carregarCarrinhoPagina();
    }
  }
}

// Atualiza quantidade por valor direto
function atualizarQuantidade(index, valor) {
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  if (carrinho[index]) {
    carrinho[index].quantidade = parseInt(valor) || 1;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    
    if (window.location.pathname.includes('carrinho.html')) {
      carregarCarrinhoPagina();
    }
  }
}

// Limpa todo o carrinho
function limparCarrinho() {
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  if (carrinho.length === 0) {
    mostrarNotificacao('Carrinho já está vazio');
    return;
  }
  
  if (confirm('Tem certeza que deseja limpar todo o carrinho?')) {
    carrinho = [];
    localStorage.removeItem('carrinho');
    localStorage.removeItem('cupomAtivo');
    cupomAtivo = null;
    atualizarContadorCarrinho();
    
    if (window.location.pathname.includes('carrinho.html')) {
      carregarCarrinhoPagina();
    }
    
    mostrarNotificacao('Carrinho limpo com sucesso');
  }
}

// ========== FUNÇÕES DA PÁGINA DE CARRINHO ==========

// Carrega os itens na página de carrinho
function carregarCarrinhoPagina() {
  const container = document.getElementById('carrinhoConteudo');
  if (!container) return;
  
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  if (carrinho.length === 0) {
    container.innerHTML = `
      <div class="carrinho-vazio">
        <i class="fas fa-shopping-cart"></i>
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione produtos para continuar</p>
        <button class="btn-comprar" onclick="window.location.href='index.html#produtos'">
          Ver Produtos
        </button>
      </div>
    `;
    atualizarResumoCarrinho();
    return;
  }
  
  let html = '';
  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    html += `
      <div class="carrinho-item">
        <div class="carrinho-item-imagem">
          <i class="fas fa-tshirt"></i>
        </div>
        <div class="carrinho-item-info">
          <h4 class="carrinho-item-titulo">${item.nome}</h4>
          <p class="carrinho-item-detalhes">Preço unitário: R$ ${item.preco.toFixed(2)}</p>
          <div class="carrinho-item-acoes">
            <div class="quantidade-carrinho">
              <button onclick="alterarQuantidade(${index}, -1)">-</button>
              <input type="number" value="${item.quantidade}" min="1" max="10" 
                     onchange="atualizarQuantidade(${index}, this.value)">
              <button onclick="alterarQuantidade(${index}, 1)">+</button>
            </div>
            <button class="remover-item" onclick="removerItem(${index})">
              <i class="fas fa-trash"></i> Remover
            </button>
          </div>
        </div>
        <div class="carrinho-item-preco">
          R$ ${subtotal.toFixed(2)}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  atualizarResumoCarrinho();
}

// Atualiza resumo do carrinho
function atualizarResumoCarrinho() {
  const subtotalElement = document.getElementById('subtotal');
  const freteElement = document.getElementById('frete');
  const descontoElement = document.getElementById('desconto');
  const totalElement = document.getElementById('total');
  
  if (!subtotalElement) return;
  
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  cupomAtivo = localStorage.getItem('cupomAtivo') || null;
  
  let subtotal = 0;
  carrinho.forEach(item => {
    subtotal += item.preco * item.quantidade;
  });
  
  let desconto = 0;
  let frete = subtotal > 200 ? 0 : 15.90;
  
  if (cupomAtivo) {
    if (cupomAtivo === 'fretegratis') {
      frete = 0;
    } else {
      desconto = subtotal * parseFloat(cupomAtivo);
    }
  }
  
  const total = subtotal + frete - desconto;
  
  subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
  freteElement.textContent = frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2)}`;
  descontoElement.textContent = `- R$ ${desconto.toFixed(2)}`;
  totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

// ========== FUNÇÕES DE CUPOM ==========

// Aplica cupom de desconto
function aplicarCupom() {
  const input = document.getElementById('cupomInput');
  if (!input) return;
  
  const mensagem = document.getElementById('cupomMensagem');
  const cupom = input.value.toUpperCase().trim();
  
  const cuponsValidos = {
    'MARAMODA10': 0.10,
    'PRIMEIRACOMPRA': 0.15,
    'FRETEGRATIS': 'fretegratis'
  };
  
  if (cuponsValidos[cupom]) {
    localStorage.setItem('cupomAtivo', cuponsValidos[cupom]);
    cupomAtivo = cuponsValidos[cupom];
    
    if (mensagem) {
      mensagem.textContent = 'Cupom aplicado com sucesso!';
      mensagem.style.color = '#4CAF50';
    }
    
    atualizarResumoCarrinho();
    mostrarNotificacao('Cupom aplicado!');
  } else {
    if (mensagem) {
      mensagem.textContent = 'Cupom inválido ou expirado';
      mensagem.style.color = '#ff7eb3';
    }
  }
  
  input.value = '';
}

// ========== FUNÇÕES DE FILTRO ==========

// Filtra produtos por categoria
function filtrar(categoria) {
  const container = document.getElementById('produtos-home-container');
  if (!container) return;
  
  const cards = container.querySelectorAll('.card');
  const botoesFiltro = document.querySelectorAll('.filtro-btn');
  
  botoesFiltro.forEach(botao => {
    botao.classList.remove('active');
    if (categoria === 'todos' && botao.textContent.toLowerCase().includes('todos')) {
      botao.classList.add('active');
    } else if (botao.textContent.toLowerCase().includes(categoria)) {
      botao.classList.add('active');
    }
  });
  
  cards.forEach(card => {
    if (categoria === 'todos') {
      card.style.display = 'block';
    } else if (categoria === 'promocao') {
      if (card.classList.contains('promocao')) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    } else {
      if (card.classList.contains(categoria)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

// Processa filtro da URL
function processarFiltroURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const filtro = urlParams.get('filtro');
  
  if (filtro && window.location.hash === '#produtos') {
    setTimeout(() => filtrar(filtro), 300);
  }
}

// ========== FUNÇÕES DE NOTIFICAÇÃO ==========

// Mostra notificação
function mostrarNotificacao(mensagem) {
  const notificacaoAnterior = document.querySelector('.notificacao');
  if (notificacaoAnterior) notificacaoAnterior.remove();
  
  const notificacao = document.createElement('div');
  notificacao.className = 'notificacao';
  notificacao.textContent = mensagem;
  
  document.body.appendChild(notificacao);
  
  setTimeout(() => {
    notificacao.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notificacao.remove(), 300);
  }, 3000);
}

// ========== FUNÇÕES DE WHATSAPP ==========

// Compra direta via WhatsApp
function comprar(nomeProduto) {
  const mensagem = `Olá! Gostaria de comprar o produto: ${nomeProduto}`;
  const url = `https://wa.me/5511987654321?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Finaliza compra via WhatsApp (versão antiga, mantida para compatibilidade)
function finalizarCompra() {
  abrirCheckout();
}

// ========== FUNÇÕES DE NEWSLETTER ==========

// Cadastra newsletter
function cadastrarNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  const email = emailInput ? emailInput.value : '';
  
  if (email) {
    mostrarNotificacao(`Obrigado por se cadastrar! Em breve você receberá nossas ofertas no email: ${email}`);
    if (emailInput) emailInput.value = '';
  }
}

// ========== FUNÇÕES DE MENU ==========

// Menu responsivo - versão melhorada
function toggleMenu() {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('open');
  }
}

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(event) {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (nav && nav.classList.contains('open') && 
      !nav.contains(event.target) && 
      !menuToggle.contains(event.target)) {
    nav.classList.remove('open');
  }
});

// ========== FUNÇÕES DE PAGAMENTO ==========

// Variável global para controle do checkout
let checkoutData = {
    step: 1,
    paymentMethod: null,
    orderData: null,
    paymentStatus: null
};

// Abre o modal de checkout
function abrirCheckout() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Seu carrinho está vazio!');
        return;
    }
    
    // Cria o modal se não existir
    if (!document.getElementById('checkoutModal')) {
        criarModalCheckout();
    }
    
    document.getElementById('checkoutModal').classList.add('open');
    atualizarResumoPedido();
}

// Fecha o modal de checkout
function fecharCheckout() {
    document.getElementById('checkoutModal').classList.remove('open');
    checkoutData.step = 1;
    checkoutData.paymentMethod = null;
}

// Cria o modal de checkout
function criarModalCheckout() {
    const modal = document.createElement('div');
    modal.id = 'checkoutModal';
    modal.className = 'checkout-modal';
    
    modal.innerHTML = `
        <div class="checkout-content">
            <button class="close-checkout" onclick="fecharCheckout()">&times;</button>
            
            <div class="checkout-steps">
                <div class="step active" id="step1">1. Dados</div>
                <div class="step" id="step2">2. Pagamento</div>
                <div class="step" id="step3">3. Confirmar</div>
            </div>
            
            <!-- Step 1: Dados do Cliente -->
            <div class="checkout-form" id="step1-form">
                <h3>Dados para Entrega</h3>
                
                <div class="form-group">
                    <label for="nome">Nome Completo *</label>
                    <input type="text" id="nome" required>
                </div>
                
                <div class="form-group">
                    <label for="email">E-mail *</label>
                    <input type="email" id="email" required>
                </div>
                
                <div class="form-group">
                    <label for="telefone">Telefone/WhatsApp *</label>
                    <input type="tel" id="telefone" placeholder="(11) 98765-4321" required>
                </div>
                
                <div class="form-group">
                    <label for="cep">CEP *</label>
                    <input type="text" id="cep" onblur="buscarCep()" required>
                </div>
                
                <div class="form-group">
                    <label for="endereco">Endereço *</label>
                    <input type="text" id="endereco" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="numero">Número *</label>
                        <input type="text" id="numero" required>
                    </div>
                    <div class="form-group">
                        <label for="complemento">Complemento</label>
                        <input type="text" id="complemento">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="bairro">Bairro *</label>
                        <input type="text" id="bairro" required>
                    </div>
                    <div class="form-group">
                        <label for="cidade">Cidade *</label>
                        <input type="text" id="cidade" required>
                    </div>
                </div>
                
                <button class="btn-pagar" onclick="proximoStep()">Continuar para Pagamento</button>
            </div>
            
            <!-- Step 2: Método de Pagamento -->
            <div class="checkout-form hidden" id="step2-form">
                <h3>Escolha a Forma de Pagamento</h3>
                
                <div class="payment-methods">
                    <div class="payment-method" onclick="selecionarPagamento('pix')">
                        <i class="fas fa-qrcode"></i>
                        <span>PIX</span>
                    </div>
                    <div class="payment-method" onclick="selecionarPagamento('credit')">
                        <i class="fas fa-credit-card"></i>
                        <span>Cartão de Crédito</span>
                    </div>
                    <div class="payment-method" onclick="selecionarPagamento('boleto')">
                        <i class="fas fa-barcode"></i>
                        <span>Boleto</span>
                    </div>
                    <div class="payment-method" onclick="selecionarPagamento('whatsapp')">
                        <i class="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </div>
                </div>
                
                <div id="payment-details"></div>
                
                <div class="order-summary" id="order-summary-step2"></div>
                
                <button class="btn-pagar" onclick="processarPagamento()" id="btn-processar" disabled>
                    Processar Pagamento
                </button>
            </div>
            
            <!-- Step 3: Confirmação -->
            <div class="checkout-form hidden" id="step3-form">
                <div class="payment-status" id="payment-status"></div>
                <div class="order-summary" id="order-summary-final"></div>
                <button class="btn-pagar" onclick="finalizarPedido()" id="btn-finalizar" style="display: none;">
                    Finalizar Pedido
                </button>
                <button class="btn-pagar" onclick="fecharCheckout()" id="btn-fechar" style="display: none;">
                    Fechar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Próximo passo do checkout
function proximoStep() {
    // Validar dados do step 1
    if (checkoutData.step === 1) {
        const campos = ['nome', 'email', 'telefone', 'cep', 'endereco', 'numero', 'bairro', 'cidade'];
        let valido = true;
        
        campos.forEach(campo => {
            const input = document.getElementById(campo);
            if (!input || !input.value) {
                if (input) input.style.borderColor = '#ff7eb3';
                valido = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (!valido) {
            mostrarNotificacao('Preencha todos os campos obrigatórios');
            return;
        }
        
        // Salvar dados do cliente
        checkoutData.cliente = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            endereco: document.getElementById('endereco').value,
            numero: document.getElementById('numero').value,
            complemento: document.getElementById('complemento').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value
        };
    }
    
    // Avançar para próximo step
    checkoutData.step++;
    atualizarSteps();
    
    if (checkoutData.step === 2) {
        document.getElementById('step1-form').classList.add('hidden');
        document.getElementById('step2-form').classList.remove('hidden');
        atualizarResumoPedido();
    }
}

// Seleciona método de pagamento
function selecionarPagamento(metodo) {
    checkoutData.paymentMethod = metodo;
    
    // Atualizar visual dos botões
    document.querySelectorAll('.payment-method').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Habilitar botão de processar
    document.getElementById('btn-processar').disabled = false;
    
    // Mostrar detalhes do pagamento
    const detailsDiv = document.getElementById('payment-details');
    
    switch(metodo) {
        case 'pix':
            detailsDiv.innerHTML = `
                <div class="pix-code">
                    <p>Escaneie o QR Code ou copie o código PIX:</p>
                    <div class="qr-code">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mercadodamara-${Date.now()}" alt="QR Code PIX">
                    </div>
                    <div class="code" id="pixCode">MERCADODAMARA-${Date.now()}-PIX</div>
                    <button class="btn-copy" onclick="copiarPix()">Copiar Código</button>
                </div>
            `;
            break;
            
        case 'credit':
            detailsDiv.innerHTML = `
                <div class="form-group">
                    <label for="cardNumber">Número do Cartão</label>
                    <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="cardName">Nome no Cartão</label>
                        <input type="text" id="cardName">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="cardExpiry">Validade</label>
                        <input type="text" id="cardExpiry" placeholder="MM/AA">
                    </div>
                    <div class="form-group">
                        <label for="cardCvv">CVV</label>
                        <input type="text" id="cardCvv" placeholder="123">
                    </div>
                </div>
                <div class="form-group">
                    <label for="installments">Parcelas</label>
                    <select id="installments">
                        <option value="1">1x sem juros</option>
                        <option value="2">2x sem juros</option>
                        <option value="3">3x sem juros</option>
                        <option value="4">4x com juros</option>
                        <option value="5">5x com juros</option>
                        <option value="6">6x com juros</option>
                    </select>
                </div>
            `;
            break;
            
        case 'boleto':
            detailsDiv.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-barcode" style="font-size: 3rem; color: #666;"></i>
                    <p>Boleto gerado com sucesso!</p>
                    <p>Você receberá o boleto por e-mail</p>
                    <button class="btn-copy" onclick="window.open('#');">Visualizar Boleto</button>
                </div>
            `;
            break;
            
        case 'whatsapp':
            detailsDiv.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fab fa-whatsapp" style="font-size: 3rem; color: #25D366;"></i>
                    <p>Você será redirecionado para o WhatsApp</p>
                    <p>Nossa equipe confirmará seu pedido</p>
                </div>
            `;
            break;
    }
}

// Copiar código PIX
function copiarPix() {
    const pixCode = document.getElementById('pixCode');
    navigator.clipboard.writeText(pixCode.textContent).then(() => {
        mostrarNotificacao('Código PIX copiado!');
    });
}

// Processa o pagamento
function processarPagamento() {
    const btn = document.getElementById('btn-processar');
    btn.disabled = true;
    btn.innerHTML = '<span class="loading-spinner"></span> Processando...';
    
    // Simular processamento de pagamento
    setTimeout(() => {
        // Gerar número do pedido
        const numeroPedido = 'PED-' + Date.now().toString().slice(-8);
        
        // Dados do pedido
        checkoutData.orderData = {
            numero: numeroPedido,
            data: new Date().toLocaleString('pt-BR'),
            cliente: checkoutData.cliente,
            itens: carrinho,
            subtotal: calcularSubtotal(),
            frete: calcularFrete(),
            desconto: calcularDesconto(),
            total: calcularTotal(),
            pagamento: checkoutData.paymentMethod,
            status: 'aguardando_pagamento'
        };
        
        // Enviar email para o vendedor
        if (typeof CONFIG !== 'undefined') {
            enviarEmailVendedor(checkoutData.orderData);
        } else {
            console.warn('Config não encontrada, salvando localmente');
            salvarPedidoLocal(checkoutData.orderData);
        }
        
        // Avançar para confirmação
        checkoutData.step = 3;
        atualizarSteps();
        
        document.getElementById('step2-form').classList.add('hidden');
        document.getElementById('step3-form').classList.remove('hidden');
        
        // Mostrar status
        const statusDiv = document.getElementById('payment-status');
        let statusHtml = '';
        
        if (checkoutData.paymentMethod === 'pix' || checkoutData.paymentMethod === 'boleto') {
            statusHtml = `
                <i class="fas fa-clock pending"></i>
                <h2>Aguardando Pagamento</h2>
                <p>Seu pedido #${numeroPedido} foi gerado!</p>
                <p>Você receberá um e-mail com as instruções</p>
            `;
            document.getElementById('btn-fechar').style.display = 'block';
        } else if (checkoutData.paymentMethod === 'credit') {
            statusHtml = `
                <i class="fas fa-check-circle success"></i>
                <h2>Pagamento Aprovado!</h2>
                <p>Seu pedido #${numeroPedido} foi confirmado!</p>
                <p>Você receberá um e-mail com os detalhes</p>
            `;
            document.getElementById('btn-finalizar').style.display = 'block';
        } else if (checkoutData.paymentMethod === 'whatsapp') {
            statusHtml = `
                <i class="fab fa-whatsapp" style="color: #25D366; font-size: 4rem;"></i>
                <h2>Redirecionando para WhatsApp</h2>
                <p>Aguarde...</p>
            `;
            setTimeout(() => {
                const mensagem = gerarMensagemWhatsApp(checkoutData.orderData);
                window.open(`https://wa.me/${CONFIG.VENDEDOR_WHATSAPP}?text=${encodeURIComponent(mensagem)}`, "_blank");
                document.getElementById('btn-fechar').style.display = 'block';
            }, 2000);
        }
        
        statusDiv.innerHTML = statusHtml;
        
        // Atualizar resumo final
        const resumoFinal = document.getElementById('order-summary-final');
        resumoFinal.innerHTML = gerarResumoHTML(checkoutData.orderData);
        
        btn.disabled = false;
        btn.innerHTML = 'Processar Pagamento';
    }, 2000);
}

// Envia email para o vendedor
function enviarEmailVendedor(orderData) {
    // Inicializar EmailJS se não estiver inicializado
    if (typeof emailjs !== 'undefined') {
        emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
        
        const templateParams = {
            to_email: CONFIG.VENDEDOR_EMAIL,
            from_name: orderData.cliente.nome,
            from_email: orderData.cliente.email,
            pedido_numero: orderData.numero,
            pedido_data: orderData.data,
            cliente_nome: orderData.cliente.nome,
            cliente_telefone: orderData.cliente.telefone,
            cliente_email: orderData.cliente.email,
            cliente_endereco: `${orderData.cliente.endereco}, ${orderData.cliente.numero} ${orderData.cliente.complemento ? '- ' + orderData.cliente.complemento : ''}`,
            cliente_bairro: orderData.cliente.bairro,
            cliente_cidade: orderData.cliente.cidade,
            cliente_cep: orderData.cliente.cep,
            itens: orderData.itens.map(item => 
                `${item.nome} - ${item.quantidade}x R$ ${item.preco.toFixed(2)} = R$ ${(item.preco * item.quantidade).toFixed(2)}`
            ).join('\n'),
            subtotal: `R$ ${orderData.subtotal.toFixed(2)}`,
            frete: orderData.frete === 0 ? 'Grátis' : `R$ ${orderData.frete.toFixed(2)}`,
            desconto: `R$ ${orderData.desconto.toFixed(2)}`,
            total: `R$ ${orderData.total.toFixed(2)}`,
            pagamento: orderData.pagamento === 'pix' ? 'PIX' : 
                       orderData.pagamento === 'credit' ? 'Cartão de Crédito' : 
                       orderData.pagamento === 'boleto' ? 'Boleto' : 'WhatsApp',
            status: orderData.status
        };
        
        emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                console.log('Email enviado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao enviar email:', error);
                salvarPedidoLocal(orderData);
            });
    } else {
        salvarPedidoLocal(orderData);
    }
}

// Salvar pedido localmente (fallback)
function salvarPedidoLocal(orderData) {
    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.push(orderData);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    console.log('Pedido salvo localmente:', orderData);
}

// Gerar mensagem para WhatsApp
function gerarMensagemWhatsApp(orderData) {
    let mensagem = `*NOVO PEDIDO - ${orderData.numero}*\n\n`;
    mensagem += `*Cliente:* ${orderData.cliente.nome}\n`;
    mensagem += `*Telefone:* ${orderData.cliente.telefone}\n`;
    mensagem += `*E-mail:* ${orderData.cliente.email}\n\n`;
    mensagem += `*Endereço:*\n`;
    mensagem += `${orderData.cliente.endereco}, ${orderData.cliente.numero}\n`;
    if (orderData.cliente.complemento) mensagem += `Complemento: ${orderData.cliente.complemento}\n`;
    mensagem += `${orderData.cliente.bairro} - ${orderData.cliente.cidade}\n`;
    mensagem += `CEP: ${orderData.cliente.cep}\n\n`;
    mensagem += `*Itens do Pedido:*\n`;
    
    orderData.itens.forEach(item => {
        mensagem += `- ${item.nome}: ${item.quantidade}x R$ ${item.preco.toFixed(2)} = R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    
    mensagem += `\n*Resumo:*\n`;
    mensagem += `Subtotal: R$ ${orderData.subtotal.toFixed(2)}\n`;
    mensagem += `Frete: ${orderData.frete === 0 ? 'Grátis' : `R$ ${orderData.frete.toFixed(2)}`}\n`;
    mensagem += `Desconto: R$ ${orderData.desconto.toFixed(2)}\n`;
    mensagem += `*Total: R$ ${orderData.total.toFixed(2)}*\n\n`;
    mensagem += `*Pagamento:* ${orderData.pagamento === 'pix' ? 'PIX' : orderData.pagamento === 'credit' ? 'Cartão' : orderData.pagamento === 'boleto' ? 'Boleto' : 'WhatsApp'}\n`;
    mensagem += `*Status:* ${orderData.status}\n\n`;
    mensagem += `_Pedido gerado em ${orderData.data}_`;
    
    return mensagem;
}

// Gerar resumo HTML do pedido
function gerarResumoHTML(orderData) {
    let html = '<h4>Resumo do Pedido</h4>';
    
    orderData.itens.forEach(item => {
        html += `
            <div class="summary-item">
                <span>${item.nome} (${item.quantidade}x)</span>
                <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            </div>
        `;
    });
    
    html += `
        <div class="summary-item">
            <span>Subtotal</span>
            <span>R$ ${orderData.subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-item">
            <span>Frete</span>
            <span>${orderData.frete === 0 ? 'Grátis' : `R$ ${orderData.frete.toFixed(2)}`}</span>
        </div>
        <div class="summary-item">
            <span>Desconto</span>
            <span>- R$ ${orderData.desconto.toFixed(2)}</span>
        </div>
        <div class="summary-total">
            <span>Total</span>
            <span>R$ ${orderData.total.toFixed(2)}</span>
        </div>
    `;
    
    return html;
}

// Atualizar resumo do pedido
function atualizarResumoPedido() {
    const resumo = document.getElementById('order-summary-step2');
    if (resumo) {
        resumo.innerHTML = `
            <h4>Resumo do Pedido</h4>
            ${carrinho.map(item => `
                <div class="summary-item">
                    <span>${item.nome} (${item.quantidade}x)</span>
                    <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
                </div>
            `).join('')}
            <div class="summary-item">
                <span>Subtotal</span>
                <span>R$ ${calcularSubtotal().toFixed(2)}</span>
            </div>
            <div class="summary-item">
                <span>Frete</span>
                <span>${calcularFrete() === 0 ? 'Grátis' : `R$ ${calcularFrete().toFixed(2)}`}</span>
            </div>
            <div class="summary-item">
                <span>Desconto</span>
                <span>- R$ ${calcularDesconto().toFixed(2)}</span>
            </div>
            <div class="summary-total">
                <span>Total</span>
                <span>R$ ${calcularTotal().toFixed(2)}</span>
            </div>
        `;
    }
}

// Atualizar steps do checkout
function atualizarSteps() {
    for (let i = 1; i <= 3; i++) {
        const step = document.getElementById(`step${i}`);
        if (step) {
            if (i < checkoutData.step) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (i === checkoutData.step) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        }
    }
}

// Calcular subtotal
function calcularSubtotal() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

// Calcular frete
function calcularFrete() {
    const subtotal = calcularSubtotal();
    return subtotal > 200 ? 0 : 15.90;
}

// Calcular desconto
function calcularDesconto() {
    const subtotal = calcularSubtotal();
    let desconto = 0;
    
    if (cupomAtivo && cupomAtivo !== 'fretegratis') {
        desconto = subtotal * parseFloat(cupomAtivo);
    }
    
    return desconto;
}

// Calcular total
function calcularTotal() {
    return calcularSubtotal() + calcularFrete() - calcularDesconto();
}

// Finalizar pedido
function finalizarPedido() {
    // Limpar carrinho
    carrinho = [];
    localStorage.removeItem('carrinho');
    localStorage.removeItem('cupomAtivo');
    cupomAtivo = null;
    atualizarContadorCarrinho();
    
    // Mostrar mensagem de sucesso
    mostrarNotificacao('Pedido finalizado com sucesso!');
    
    // Fechar modal e redirecionar
    setTimeout(() => {
        fecharCheckout();
        window.location.href = 'index.html';
    }, 2000);
}

// Buscar CEP (via ViaCEP)
function buscarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('endereco').value = data.logradouro || '';
                    document.getElementById('bairro').value = data.bairro || '';
                    document.getElementById('cidade').value = data.localidade || '';
                }
            })
            .catch(error => console.error('Erro ao buscar CEP:', error));
    }
}

// ========== CONFIGURAÇÃO DE EVENT LISTENERS ==========

function configurarEventListeners() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.removeEventListener('submit', cadastrarNewsletter);
    newsletterForm.addEventListener('submit', cadastrarNewsletter);
  }
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      if (nav && window.innerWidth <= 768) nav.classList.remove('open');
    });
  });
  
  // Adiciona suporte a touch para botões
  const botoes = document.querySelectorAll('button, .btn-comprar, .btn-carrinho, .filtro-btn, .nav-link');
  botoes.forEach(botao => {
    botao.addEventListener('touchstart', function(e) {
      // Previne o comportamento padrão apenas se necessário
    }, { passive: true });
  });
}

// ========== INICIALIZAÇÃO ==========

document.addEventListener('DOMContentLoaded', function() {
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  cupomAtivo = localStorage.getItem('cupomAtivo') || null;
  atualizarContadorCarrinho();
  
  configurarEventListeners();
  
  const path = window.location.pathname;
  
  if (path.includes('carrinho.html')) {
    carregarCarrinhoPagina();
  }
  
  if (path.includes('produto.html')) {
    carregarDetalhesProduto();
    carregarProdutosRelacionados();
  }
  
  if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
    carregarProdutosHome();
    processarFiltroURL();
  }
});

// ========== EXPOR FUNÇÕES GLOBALMENTE ==========
window.verDetalhesProduto = verDetalhesProduto;
window.filtrar = filtrar;
window.comprar = comprar;
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.removerItem = removerItem;
window.alterarQuantidade = alterarQuantidade;
window.atualizarQuantidade = atualizarQuantidade;
window.limparCarrinho = limparCarrinho;
window.finalizarCompra = finalizarCompra;
window.aplicarCupom = aplicarCupom;
window.toggleMenu = toggleMenu;
window.mudarImagem = mudarImagem;
window.alterarQuantidadeProduto = alterarQuantidadeProduto;
window.adicionarProdutoCarrinho = adicionarProdutoCarrinho;
window.comprarAgora = comprarAgora;
window.abrirCheckout = abrirCheckout;
window.fecharCheckout = fecharCheckout;
window.proximoStep = proximoStep;
window.selecionarPagamento = selecionarPagamento;
window.copiarPix = copiarPix;
window.processarPagamento = processarPagamento;
window.finalizarPedido = finalizarPedido;
window.buscarCep = buscarCep;