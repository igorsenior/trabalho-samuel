// LOJA NATALINA - JavaScript puro, com funções simples.
// As 8 funcionalidades principais estão identificadas nos comentários.

// Atalhos básicos para encontrar elementos no HTML.
function pegar(seletor) { return document.querySelector(seletor); }
function pegarTodos(seletor) { return document.querySelectorAll(seletor); }

function moeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Mensagem curta quando o usuário adiciona algo ao carrinho.
let temporizadorAviso;
function avisar(mensagem) {
  const caixa = pegar('#toast');
  if (!caixa) return;
  caixa.textContent = mensagem;
  caixa.classList.add('visivel');
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(function () { caixa.classList.remove('visivel'); }, 2200);
}

// Menu para celulares.
const menu = pegar('#menu');
const botaoMenu = pegar('#botaoMenu');
if (menu && botaoMenu) {
  botaoMenu.addEventListener('click', function () {
    const aberto = menu.classList.toggle('aberta');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
  });
  pegarTodos('#menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('aberta');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

// Efeito visual de neve: não é necessário baixar nenhuma biblioteca.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let i = 0; i < 15; i++) {
    const floco = document.createElement('span');
    floco.className = 'neve';
    floco.textContent = '❄';
    floco.style.left = (i * 7 + 3) % 100 + '%';
    floco.style.fontSize = (10 + i % 4 * 4) + 'px';
    floco.style.opacity = '0.5';
    floco.style.animationDuration = (9 + i % 6 * 2) + 's';
    floco.style.animationDelay = (-i * 1.8) + 's';
    document.body.appendChild(floco);
  }
}

// 1) CARROSSEL AUTOMÁTICO: funciona apenas na página inicial.
const slides = pegarTodos('.slide');
let slideAtual = 0;
function mostrarSlide(indice) {
  if (slides.length === 0) return;
  slideAtual = (indice + slides.length) % slides.length;
  slides.forEach(function (slide, i) {
    const ativo = i === slideAtual;
    slide.classList.toggle('ativo', ativo);
    slide.setAttribute('aria-hidden', String(!ativo));
  });
  pegarTodos('.ponto-slide').forEach(function (ponto, i) {
    ponto.classList.toggle('ativo', i === slideAtual);
    ponto.setAttribute('aria-label', 'Ir para banner ' + (i + 1));
  });
}
if (slides.length) {
  pegar('#slideAnterior').addEventListener('click', function () { mostrarSlide(slideAtual - 1); });
  pegar('#slideProximo').addEventListener('click', function () { mostrarSlide(slideAtual + 1); });
  pegarTodos('.ponto-slide').forEach(function (ponto, indice) {
    ponto.addEventListener('click', function () { mostrarSlide(indice); });
  });
  setInterval(function () { if (!document.hidden) mostrarSlide(slideAtual + 1); }, 5500);
}

// 2) PARALLAX: a foto da faixa muda um pouco de posição ao rolar a página.
const faixa = pegar('.faixa-parallax');
if (faixa && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', function () {
    const dist = faixa.getBoundingClientRect().top;
    if (dist < window.innerHeight && dist > -faixa.offsetHeight) {
      faixa.style.backgroundPosition = 'center ' + (50 + dist * 0.025) + '%';
    }
  }, { passive: true });
}

// 3) SOM: toca um sino baixado na pasta audio/ apenas quando o botão for clicado.
const botaoSom = pegar('#botaoSom');
if (botaoSom) {
  botaoSom.addEventListener('click', function () {
    const som = new Audio('audio/sininho.wav');
    som.volume = 0.25;
    som.play().catch(function () { avisar('Som não disponível neste navegador.'); });
  });
}

// Encontra um produto no array de 50 objetos, pelo ID.
function encontrarProduto(id) {
  return produtos.find(function (p) { return p.id === Number(id); });
}

// 4) PRODUTOS DINÂMICOS: um card é criado para cada objeto do array.
function criarCard(produto) {
  const cartao = document.createElement('article');
  cartao.className = 'card-produto';
  cartao.innerHTML =
    '<img class="foto" src="' + produto.imagem + '" alt="' + produto.nome + '" loading="lazy" width="480" height="480">' +
    '<div class="info-produto">' +
    '<span class="etiqueta">' + produto.categoria + '</span>' +
    '<h3>' + produto.nome + '</h3>' +
    '<p class="descricao">' + produto.descricao + '</p>' +
    '<div class="preco">' + moeda(produto.preco) + '</div>' +
    '<div class="acoes-produto">' +
    '<button class="btn btn-verde btn-pequeno btn-add" data-id="' + produto.id + '" type="button">+ Adicionar</button>' +
    '<button class="btn btn-outline btn-pequeno btn-detalhes" data-id="' + produto.id + '" type="button">Detalhes</button>' +
    '</div></div>';
  return cartao;
}

function listarProdutos(lista, destino) {
  destino.innerHTML = '';
  lista.forEach(function (produto) { destino.appendChild(criarCard(produto)); });
}

// Destaques na página inicial.
const vitrine = pegar('#produtosDestaque');
if (vitrine) {
  listarProdutos([produtos[0], produtos[8], produtos[22], produtos[16]], vitrine);
}

// 5) PESQUISA E FILTRO: o contador muda conforme o resultado.
const grade = pegar('#listaProdutos');
const busca = pegar('#pesquisaProduto');
const filtro = pegar('#filtroCategoria');
function atualizarProdutos() {
  if (!grade) return;
  const texto = busca.value.toLowerCase().trim();
  const categoria = filtro.value;
  const resultado = produtos.filter(function (produto) {
    const combinaNome = produto.nome.toLowerCase().includes(texto);
    const combinaCategoria = categoria === '' || produto.categoria === categoria;
    return combinaNome && combinaCategoria;
  });
  listarProdutos(resultado, grade);
  pegar('#contadorProdutos').textContent = 'Exibindo ' + resultado.length + ' de ' + produtos.length + ' produtos';
  pegar('#nenhumProduto').hidden = resultado.length !== 0;
}
if (grade) {
  busca.addEventListener('input', atualizarProdutos);
  filtro.addEventListener('change', atualizarProdutos);
  pegar('#limparFiltro').addEventListener('click', function () {
    busca.value = '';
    filtro.value = '';
    atualizarProdutos();
    busca.focus();
  });
  // A página inicial pode enviar uma categoria por parâmetro na URL.
  const parametro = new URLSearchParams(location.search).get('categoria');
  if (parametro && Array.from(filtro.options).some(function (o) { return o.value === parametro; })) {
    filtro.value = parametro;
  }
  atualizarProdutos();
}

// Modal simples de detalhes.
const modalProduto = pegar('#modalProduto');
function abrirDetalhes(id) {
  const produto = encontrarProduto(id);
  if (!produto || !modalProduto) return;
  pegar('#conteudoModalProduto').innerHTML =
    '<img src="' + produto.imagem + '" alt="' + produto.nome + '">' +
    '<div><span class="etiqueta">' + produto.categoria + '</span>' +
    '<h3>' + produto.nome + '</h3><p>' + produto.descricao + '</p>' +
    '<p class="preco">' + moeda(produto.preco) + '</p>' +
    '<button type="button" class="btn btn-verde btn-add" data-id="' + produto.id + '">Adicionar ao carrinho</button></div>';
  modalProduto.showModal();
}
if (modalProduto) {
  pegar('#fecharModalProduto').addEventListener('click', function () { modalProduto.close(); });
  modalProduto.addEventListener('click', function (evento) {
    if (evento.target === modalProduto) modalProduto.close();
  });
}

// 6) CARRINHO: quantidade e valor total. Guarda os itens no navegador.
const chaveCarrinho = 'lojaNatalinaCarrinho';
let carrinho = {};
try { carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || {}; }
catch (erro) { carrinho = {}; }
function salvarCarrinho() {
  try { localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho)); }
  catch (erro) { /* Alguns navegadores bloqueiam armazenamento. */ }
}
function calcularTotal() {
  let quantidade = 0, total = 0;
  produtos.forEach(function (produto) {
    const unidades = Number(carrinho[produto.id]) || 0;
    quantidade += unidades;
    total += unidades * produto.preco;
  });
  return { quantidade: quantidade, total: total };
}
function atualizarCarrinho() {
  const resumo = calcularTotal();
  pegar('#numeroCarrinho').textContent = resumo.quantidade;
  pegar('#totalCarrinho').textContent = moeda(resumo.total);
  const lista = pegar('#itensCarrinho');
  lista.innerHTML = '';
  let temItens = false;
  produtos.forEach(function (produto) {
    const unidades = Number(carrinho[produto.id]) || 0;
    if (!unidades) return;
    temItens = true;
    const item = document.createElement('div');
    item.className = 'item-carrinho';
    item.innerHTML =
      '<img src="' + produto.imagem + '" alt="' + produto.nome + '">' +
      '<div><h3>' + produto.nome + '</h3><small>' + moeda(produto.preco) + '</small>' +
      '<div class="quantidade">' +
      '<button type="button" data-carrinho="menos" data-id="' + produto.id + '" aria-label="Diminuir ' + produto.nome + '">−</button>' +
      '<span>' + unidades + '</span>' +
      '<button type="button" data-carrinho="mais" data-id="' + produto.id + '" aria-label="Aumentar ' + produto.nome + '">+</button>' +
      '<button type="button" class="remover" data-carrinho="remover" data-id="' + produto.id + '">Remover</button>' +
      '</div></div>';
    lista.appendChild(item);
  });
  pegar('#carrinhoVazio').hidden = temItens;
  pegar('#limparCarrinho').disabled = !temItens;
}
function adicionarCarrinho(id) {
  const produto = encontrarProduto(id);
  if (!produto) return;
  carrinho[id] = (Number(carrinho[id]) || 0) + 1;
  salvarCarrinho();
  atualizarCarrinho();
  avisar(produto.nome + ' adicionado ao carrinho.');
}
const fundoCarrinho = pegar('#fundoCarrinho');
function abrirCarrinho() {
  fundoCarrinho.classList.add('aberto');
  document.body.classList.add('sem-rolagem');
  pegar('#abrirCarrinho').setAttribute('aria-expanded','true');
  pegar('#fecharCarrinho').focus();
}
function fecharCarrinho() {
  fundoCarrinho.classList.remove('aberto');
  document.body.classList.remove('sem-rolagem');
  pegar('#abrirCarrinho').setAttribute('aria-expanded','false');
  pegar('#abrirCarrinho').focus();
}
pegar('#abrirCarrinho').addEventListener('click', abrirCarrinho);
pegar('#fecharCarrinho').addEventListener('click', fecharCarrinho);
fundoCarrinho.addEventListener('click', function (e) {
  if (e.target === fundoCarrinho) fecharCarrinho();
});
pegar('#limparCarrinho').addEventListener('click', function () {
  carrinho = {};
  salvarCarrinho();
  atualizarCarrinho();
});

// Um único evento trata os botões criados dinamicamente.
document.addEventListener('click', function (evento) {
  const adicionar = evento.target.closest('.btn-add');
  const detalhes = evento.target.closest('.btn-detalhes');
  const quantidade = evento.target.closest('[data-carrinho]');
  if (adicionar) adicionarCarrinho(adicionar.dataset.id);
  if (detalhes) abrirDetalhes(detalhes.dataset.id);
  if (quantidade) {
    const id = quantidade.dataset.id;
    if (quantidade.dataset.carrinho === 'remover') delete carrinho[id];
    else if (quantidade.dataset.carrinho === 'mais') carrinho[id]++;
    else {
      carrinho[id]--;
      if (carrinho[id] <= 0) delete carrinho[id];
    }
    salvarCarrinho();
    atualizarCarrinho();
  }
});
atualizarCarrinho();

// 7) FORMULÁRIO: validação no navegador (NÃO envia mensagens reais).
const formulario = pegar('#formContato');
function erroCampo(nome, mensagem) {
  const campo = pegar('#' + nome);
  const erro = pegar('#erro-' + nome);
  campo.classList.toggle('invalido', Boolean(mensagem));
  campo.setAttribute('aria-invalid', String(Boolean(mensagem)));
  erro.textContent = mensagem;
}
if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const nome = pegar('#nome').value.trim();
    const email = pegar('#email').value.trim();
    const assunto = pegar('#assunto').value;
    const mensagem = pegar('#mensagem').value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    erroCampo('nome', nome.length >= 3 ? '' : 'Digite pelo menos 3 caracteres.');
    erroCampo('email', emailValido ? '' : 'Digite um e-mail válido.');
    erroCampo('assunto', assunto ? '' : 'Escolha um assunto.');
    erroCampo('mensagem', mensagem.length >= 10 ? '' : 'Digite pelo menos 10 caracteres.');
    const temErro = Boolean(pegar('.invalido'));
    pegar('#resultadoFormulario').style.display = temErro ? 'none' : 'block';
    if (!temErro) {
      formulario.reset();
      avisar('Formulário validado com sucesso!');
    }
  });
}

// 8) CONTAGEM REGRESSIVA: calcula os dias até 25 de dezembro.
function atualizarContagem() {
  const alvo = pegar('#dias');
  if (!alvo) return;
  const agora = new Date();
  let natal = new Date(agora.getFullYear(), 11, 25, 0, 0, 0);
  if (agora.getMonth() === 11 && agora.getDate() === 25) {
    pegar('#mensagemNatal').textContent = 'Feliz Natal!';
    ['dias','horas','minutos','segundos'].forEach(function (id) { pegar('#' + id).textContent = '00'; });
    return;
  }
  if (agora > natal) natal = new Date(agora.getFullYear() + 1, 11, 25, 0, 0, 0);
  const segundosTotal = Math.floor((natal - agora) / 1000);
  const dias = Math.floor(segundosTotal / 86400);
  const horas = Math.floor(segundosTotal % 86400 / 3600);
  const minutos = Math.floor(segundosTotal % 3600 / 60);
  const segundos = segundosTotal % 60;
  pegar('#dias').textContent = String(dias).padStart(2,'0');
  pegar('#horas').textContent = String(horas).padStart(2,'0');
  pegar('#minutos').textContent = String(minutos).padStart(2,'0');
  pegar('#segundos').textContent = String(segundos).padStart(2,'0');
}
if (pegar('#dias')) { atualizarContagem(); setInterval(atualizarContagem, 1000); }

// GALERIA: abre foto maior, com botões para avançar e voltar.
const galeria = pegar('#gradeGaleria');
const modalGaleria = pegar('#modalGaleria');
let imagensGaleria = [];
let fotoAtual = 0;
function mostrarFoto(indice) {
  fotoAtual = (indice + imagensGaleria.length) % imagensGaleria.length;
  const produto = imagensGaleria[fotoAtual];
  pegar('#imagemAmpliada').src = produto.imagem;
  pegar('#imagemAmpliada').alt = produto.nome;
  pegar('#legendaGaleria').textContent = produto.nome + ' — foto ' + (fotoAtual + 1) + ' de ' + imagensGaleria.length;
}
if (galeria && modalGaleria) {
  // Fotos únicas de produtos diferentes.
  const ids = [1,2,5,9,10,13,17,19,23,24,29,30,35,37,40,42,43,46,48,49];
  imagensGaleria = ids.map(function (id) { return encontrarProduto(id); });
  imagensGaleria.forEach(function (produto, indice) {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'foto-galeria';
    botao.setAttribute('aria-label', 'Ampliar: ' + produto.nome);
    botao.innerHTML = '<img loading="lazy" src="' + produto.imagem + '" alt="' + produto.nome + '"><span>' + produto.nome + '</span>';
    botao.addEventListener('click', function () { mostrarFoto(indice); modalGaleria.showModal(); });
    galeria.appendChild(botao);
  });
  pegar('#fecharModalGaleria').addEventListener('click', function () { modalGaleria.close(); });
  pegar('#fotoAnterior').addEventListener('click', function () { mostrarFoto(fotoAtual - 1); });
  pegar('#fotoProxima').addEventListener('click', function () { mostrarFoto(fotoAtual + 1); });
  modalGaleria.addEventListener('click', function (evento) { if (evento.target === modalGaleria) modalGaleria.close(); });
  document.addEventListener('keydown', function (evento) {
    if (!modalGaleria.open) return;
    if (evento.key === 'ArrowRight') mostrarFoto(fotoAtual + 1);
    if (evento.key === 'ArrowLeft') mostrarFoto(fotoAtual - 1);
  });
}

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && fundoCarrinho.classList.contains('aberto')) fecharCarrinho();
});
