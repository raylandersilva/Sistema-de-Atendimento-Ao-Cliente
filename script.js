const toggleWindowFeatures = document.getElementById("toggleWindowFeatures");

// const
const toggleSapAuto = document.getElementById("toggleSapAuto");
const sapTexto = document.getElementById("sapTexto");
const campoTelefone = document.getElementById("telefone");


// Função para alternar a exibição do histórico
function toggleHistorico() {
  var historico = document.getElementById('historico');
  historico.style.display = historico.style.display === 'none' ? 'block' : 'none';
}
// Função para alternar a exibição do informativo
function toggleInformativo() {
  var historico = document.getElementById('informativo');
  historico.style.display = historico.style.display === 'none' ? 'flex' : 'none';
}

// Função para abrir URLs de Sap por estado
function abrirSapPorEstado() {
  const estado = document.getElementById("estadoTelefone").textContent.trim();
  const toggle = document.getElementById("toggleWindowFeatures").checked;

  if (infoEstado[estado] && infoEstado[estado].bottons['SAP-'+estado]) {
    const sapLink = infoEstado[estado].bottons['SAP-'+estado];
    
    var width = window.screen.width * 0.65;
    var height = window.screen.height * 1.0;

    if (toggle) {
      window.open(sapLink, '_blank', `width=${width},height=${height},resizable=yes,scrollbars=yes`);
    } else {
      window.open(sapLink, '_blank');
    }
  } else {
    alert('Sistema SAP não disponível para este estado.');
  }
}

function carregarInformativos() {
  const informativoElement = document.getElementById("informativo");
  informativoElement.innerHTML = informativos.map(
      (info) => `
          <p>
              <span class="data">Data: ${info.data}</span><br>
              <span class="informacao">${info.informacao}</span>
          </p>
      `
  ).join("");
}

window.addEventListener("load", carregarInformativos);


// Função para alternar o menu
function toggleMenu() {
  const botoesContainer = document.getElementById('botoesContainer');
  botoesContainer.classList.toggle('active');
}

// Toggle para modo escuro
const toggle = document.getElementById("toggleMode");


// Seleciona os elementos dos campos atendente e histórico
const campoAtendente = document.getElementById("usuario");
const campoHistorico = document.getElementById("historico");

// Função para aplicar preferências ao carregar a página
function aplicarPreferencias() {
    // Aplica o modo escuro persistente
    const darkMode = localStorage.getItem("darkMode") === "enabled";
    document.body.classList.toggle("dark-mode", darkMode);
    toggle.checked = darkMode;

    // Carrega o valor do campo "Atendente" do localStorage, se disponível
    const atendenteSalvo = localStorage.getItem("atendente");
    if (atendenteSalvo) {
        campoAtendente.value = atendenteSalvo;
    }

    // Carrega o valor do campo "Histórico" do localStorage, se disponível
    const historicoSalvo = localStorage.getItem("historico");
    if (historicoSalvo) {
        campoHistorico.value = historicoSalvo;
    }

     // Carrega o valor do toggle SAP automático do localStorage, se disponível
     const sapAutoEnabled = localStorage.getItem("sapAutoEnabled") === "true";
     toggleSapAuto.checked = sapAutoEnabled; // Aplica o estado salvo ao toggle
     
     const toggleWindowFeatures = document.getElementById("toggleWindowFeatures");

    // Restaurar o estado do toggle do localStorage
    const savedState = localStorage.getItem("toggleWindowFeaturesState");
    if (savedState !== null) {
      toggleWindowFeatures.checked = savedState === "true"; // Converte string para booleano
    }
}

// Salva o valor do campo atendente no localStorage ao alterar o valor
campoAtendente.addEventListener("input", function () {
    localStorage.setItem("atendente", campoAtendente.value);
});

// Função para salvar o conteúdo do histórico no localStorage
function salvarHistorico() {
    localStorage.setItem("historico", campoHistorico.value);
}

// Salva o conteúdo do histórico a cada 5 segundos
setInterval(salvarHistorico, 5000);

// Alterna o modo escuro e armazena a preferência no localStorage
toggle.addEventListener("change", function () {
    const darkModeEnabled = toggle.checked;
    document.body.classList.toggle("dark-mode", darkModeEnabled);
    localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
});

toggleSapAuto.addEventListener("change", function () {
  const sapAutoEnabled = toggleSapAuto.checked;
  localStorage.setItem("sapAutoEnabled", sapAutoEnabled); // Salva o estado
});



// Salvar o estado do toggle no localStorage
toggleWindowFeatures.addEventListener("change", function () {
  localStorage.setItem("toggleWindowFeaturesState", this.checked);
});

// Aplica preferências ao carregar a página
window.addEventListener("load", aplicarPreferencias);


function criarBotoesPorEstado(estado) {
  const divBottons = document.getElementById('bttonSAP');

  // Limpa os botões existentes
  divBottons.innerHTML = '';

  // Verifica se o estado é válido e existe em infoEstado
  if (infoEstado[estado] && infoEstado[estado].bottons) {
    const bottons = infoEstado[estado].bottons;

    // Cria um botão para cada link no estado
    for (const nomeBotao in bottons) {
      const url = bottons[nomeBotao];

      const button = document.createElement('button');
      button.textContent = nomeBotao;
      button.style = `
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
      `;

      // Adiciona o evento de clique para abrir o link
      button.onclick = () => {
        window.open(url, '_blank');
      };

      // Adiciona o botão à div
      divBottons.appendChild(button);
    }

    // Exibe a div dos botões
    divBottons.style.display = 'flex';
  } else {
    // Oculta a div se o estado não for válido
    divBottons.style.display = 'none';
  }
}


// Função para limpar os campos do formulário
function limparCampos() {
  document.getElementById('estadoTelefone').textContent = 'UF';
  document.getElementById('banner').style.display = 'none';
  document.getElementById('bttonSAP').style.display = 'none';
  const usuario = document.getElementById("usuario").value;
  
  document.getElementById("formulario").reset();
  document.getElementById("dadosDeInfor").value = '';
  document.getElementById("usuario").value = usuario;

  const formExistente = document.getElementById('popupForm');
  if (formExistente) {
    formExistente.parentNode.removeChild(formExistente);
  }

  const selectDescricao = document.getElementById('descricao');
  const options = selectDescricao.getElementsByTagName('option');
  for (let i = 0; i < options.length; i++) {
    options[i].style.display = '';
  }
  // Carrega o valor do toggle SAP automático do localStorage, se disponível
  const sapAutoEnabled = localStorage.getItem("sapAutoEnabled") === "true";
  toggleSapAuto.checked = sapAutoEnabled; // Aplica o estado salvo ao toggle

  verificarTexto();
}



function abrirUrlPorDDD(ddd) {
  if (ddd !== '') {
      const estadoSpan = document.getElementById('estadoTelefone');
      const dadosDeInforTextarea = document.getElementById('dadosDeInfor');

      // Obter o estado pelo DDD
      const estado = estadosPorDDD[ddd];

      if (estado) {
          // Obter o banner e info pelo estado
          const { banner, info } = infoEstado[estado];

          // Atualizar os elementos da página
          document.getElementById('banner').src = banner;
          estadoSpan.textContent = estado;
          dadosDeInforTextarea.value = info;
          document.getElementById('banner').style.display = 'block';
          document.getElementById('bttonSAP').style.display = 'flex';
          criarBotoesPorEstado(estado);
          
          // Verifica se o toggle está ativado e abre o SAP automaticamente
          if (toggleSapAuto.checked) {
              abrirSapPorEstado();
          };
          verificarTexto();
      } else {
          // Estado não encontrado: exibe popup para selecionar manualmente
          exibirPopupSelecaoEstado();
      }
  }
}


function exibirPopupSelecaoEstado() {
  const popup = document.createElement('div');
  popup.id = 'popup-selection-state';
  popup.style = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #193082;
      color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      width: 300px;
      max-height: 80vh;
      overflow-y: auto;
  `;

  const title = document.createElement('h3');
  title.textContent = 'Selecione o Estado:';
  title.style = 'text-align: center; margin-bottom: 15px;';
  popup.appendChild(title);

  // Criar container para os botões dos estados
  const buttonsContainer = document.createElement('div');
  buttonsContainer.style = 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 15px;';
  
  // Criar botões para cada estado
  for (const estado in infoEstado) {
      const estadoButton = document.createElement('button');
      estadoButton.textContent = estado;
      estadoButton.style = `
          padding: 10px;
          background-color: #2a4bac;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          font-size: 15pt;
      `;
      estadoButton.onmouseover = () => estadoButton.style.backgroundColor = '#3a5cbc';
      estadoButton.onmouseout = () => estadoButton.style.backgroundColor = '#2a4bac';
      
      estadoButton.onclick = () => {
          const { banner, info } = infoEstado[estado];
          document.getElementById('banner').src = banner;
          document.getElementById('estadoTelefone').textContent = estado;
          document.getElementById('dadosDeInfor').value = info;
          document.getElementById('banner').style.display = 'block';
          document.getElementById('bttonSAP').style.display = 'flex';
          document.getElementById('dadosDeInfor').style.display = 'block';
          criarBotoesPorEstado(estado);
          document.body.removeChild(popup);
          if (toggleSapAuto.checked) {
              abrirSapPorEstado();
          }
      };
      
      buttonsContainer.appendChild(estadoButton);
  }
  popup.appendChild(buttonsContainer);

  // Botão de fechar
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Fechar';
  closeButton.style = `
      width: 100%;
      padding: 10px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
  `;
  closeButton.onclick = () => {
      document.body.removeChild(popup);
  };
  popup.appendChild(closeButton);

  document.body.appendChild(popup);
}


// Adiciona o evento ao campo telefone para acionar abrirUrlPorDDD ao inserir o DDD
campoTelefone.addEventListener("change", function () {
    const ddd = this.value.substring(0, 2);
    abrirUrlPorDDD(ddd);
});


function abrirEquatorialSite() {  
  window.open('https://www.equatorialenergia.com.br/');
}

// Verifica se há texto no campo de informações e exibe ou oculta
function verificarTexto() {
  const textarea = document.getElementById('dadosDeInfor');
  textarea.style.display = textarea.value.trim() === '' ? 'none' : 'block';
}
window.onload = verificarTexto;

// Função para filtrar descrições
document.getElementById("pesquisaDescricao").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const select = document.getElementById("descricao");
  const options = select.getElementsByTagName("option");

  for (let option of options) {
      option.style.display = option.textContent.toLowerCase().includes(input) ? "" : "none";
  }
});

// Função para carregar descrições ao DOM
document.addEventListener("DOMContentLoaded", function () {
  const selectDescricao = document.getElementById('descricao');
  for (const categoria in categoriasDescricao) {
    const optgroup = document.createElement('optgroup');
    optgroup.label = categoria;
    optgroup.style = 'background: blue; font-size: 10pt;';
    categoriasDescricao[categoria].forEach(function (descricaoObj) {
      const option = document.createElement('option');
      option.style = 'background: black; word-wrap: anywhere; font-size: 8pt;';
      option.value = descricaoObj.descricao;
      option.textContent = descricaoObj.descricao.trim();
      optgroup.appendChild(option);
    });

    selectDescricao.appendChild(optgroup);
  }
});


document.getElementById("descricao").addEventListener("change", async function() {
  let descricaoSelecionada = this.value;

  // Itera sobre todas as categorias e verifica se a descrição selecionada tem perguntas associadas
  for (const categoria in categoriasDescricao) {
    categoriasDescricao[categoria].forEach(async function(descricaoObj) {
      if (descricaoSelecionada.includes(descricaoObj.descricao.trim())) {
        // Verifica se há alertas e os exibe
        if (descricaoObj.alerts && descricaoObj.alerts.length > 0) {
          exibirAlertas(descricaoObj.alerts);
        }
        // Se a descrição tiver perguntas, chama a função para exibir o pop-up
        if (descricaoObj.perguntas && descricaoObj.perguntas.length > 0) {
          let respostas = await criarPopUp(descricaoObj.perguntas);
          
          // Exibe as respostas no textarea do quadro de informações
          let dadosDeInforTextarea = document.getElementById('dadosDeInfor');
          let textoRespostas = '';
          for (const [pergunta, resposta] of Object.entries(respostas)) {
            textoRespostas += `${pergunta}${Array.isArray(resposta) ? resposta.join(', ') : resposta}\n`;
          }
          dadosDeInforTextarea.value = `\n${textoRespostas}`;
          verificarTexto();

        }
      }
    });
  }
});

// Obtém o elemento com a classe .botoes
const botoesContainer = document.getElementById('botoesContainer');

// Evento de clique para fechar o contêiner quando clicar fora
document.addEventListener('click', function(event) {
  const botoesContainer = document.getElementById('botoesContainer');
  const menuToggle = document.querySelector('.menu-toggle');
  
  // Verifica se o clique foi fora do contêiner de botões e do botão de menu
  if (!botoesContainer.contains(event.target) && !menuToggle.contains(event.target)) {
    botoesContainer.classList.remove('active');  // Remove a classe 'active' se clicar fora
  }
});


function pegarValorElemento(id) {
  const elemento = document.getElementById(id);

  if (!elemento) return 'N/A'; // Se o elemento não existir, retorna 'N/A'

  switch (elemento.type) {
    case 'checkbox':
      return elemento.checked ? 'SIM' : 'N/A'; // Se for checkbox, retorna 'SIM' ou 'N/A'
    case 'textarea':
    case 'text':
    case 'tel':
    case 'password':
      return elemento.value.trim() || 'N/A'; // Para outros tipos de texto, retorna o valor ou 'N/A' se vazio
    default:
      return 'N/A';
  }
}

function criarPopUp(perguntas) {
  return new Promise((resolve) => {
    // Remove qualquer pop-up existente
    let formExistente = document.getElementById('popupForm');
    if (formExistente) {
      formExistente.parentNode.removeChild(formExistente);
    }
    let form = document.createElement('form');

    let formTitle = document.createElement('h2');
    formTitle.textContent = "↓►Informações a serem confirmadas◄↓";
    formTitle.style = 'background: crimson;border-radius: 20px;padding: 10px;width: fit-content;box-shadow: black 5px 7px 10px;margin: auto;margin-bottom: 15px;font-size: 1em;';
    form.style = 'font-family: Arial, sans-serif;color: rgb(255, 255, 255);display: flex;padding: 20px;background-color: #160b7a;border-radius: 8px;box-shadow: rgb(0, 0, 0) 0px 0px 25px;flex-wrap: wrap;align-items: baseline;';
    form.appendChild(formTitle);
    
    let containerForms = document.getElementsByClassName('containerforms')[0];
    if (containerForms) {
      form.setAttribute("id", "popupForm");

      // Adiciona o formulário diretamente no body, logo após o containerforms
      if (containerForms.nextSibling) {
        document.body.insertBefore(form, containerForms.nextSibling);
      } else {
        document.body.appendChild(form);
      }
    } else {
      console.error("Elemento com a classe 'containerforms' não encontrado.");
    }

    
    form.setAttribute("id", "popupForm");
    let bttonemergency = document.createElement('h3');
    bttonemergency.textContent = "EMERGENCIA";
    bttonemergency.setAttribute("id", "bttonemergency");
    bttonemergency.addEventListener('click', function() {
    window.open(
        'https://forms.office.com/Pages/ResponsePage.aspx?id=UUVNECctOUiHsoYmSlIQpRtvS2oXzwlBiQGbf6zGA45UQzBVOTFSMEtHVFo4UzA5WUZaN1VPUUtOQS4u', 
        '_blank'
      );
    });
    form.appendChild(bttonemergency);
    let respostas = {};
    
    perguntas.forEach((perguntaObj, index) => {
      let label = document.createElement('label');
      label.style = 'width: 100%;'
      label.textContent = perguntaObj.pergunta;
      form.appendChild(label);

      switch (perguntaObj.type) {
        case 'checkbox':
          let checkboxGroup = document.createElement('div');
          checkboxGroup.classList.add('checkbox-group');
          checkboxGroup.style = `display: flex; flex-wrap: wrap; flex: 1; align-items: center; gap: 10px;`;
          if (perguntaObj.options.length > 3) {
            checkboxGroup.style += ' flex-direction: column;';
          }
          
          perguntaObj.options.forEach(option => {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = option;
            checkbox.style = 'width: 20px; height: 20px; margin-bottom: 10px; margin-top: 10px;';
            checkbox.name = `pergunta_${index}`;
            checkbox.classList.add(`checkbox-pergunta_${index}`);
            checkboxGroup.appendChild(checkbox);
            checkboxGroup.appendChild(document.createTextNode(option));
            checkboxGroup.appendChild(document.createElement('br'));
          });

          form.appendChild(checkboxGroup);
          respostas[perguntaObj.pergunta] = [];
          break;

        case 'radio':
          let radioGroup = document.createElement('div');
          radioGroup.classList.add('radio-group');
          radioGroup.style = `display: flex; flex-wrap: wrap; flex: 1; align-items: center; gap: 10px;`;
          if (perguntaObj.options.length > 3) {
            radioGroup.style += ' flex-direction: column;';
          }

          perguntaObj.options.forEach(option => {
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.value = option;
            radio.style = 'width: 20px; height: 20px; margin-bottom: 10px; margin-top: 10px;';
            radio.name = `pergunta_${index}`; 
            radioGroup.appendChild(radio);
            radioGroup.appendChild(document.createTextNode(option));
            radioGroup.appendChild(document.createElement('br'));
          });
          form.appendChild(radioGroup);
          respostas[perguntaObj.pergunta] = '';
          break;

        case 'textarea':
          let textarea = document.createElement('textarea');
          textarea.name = `pergunta_${index}`;
          textarea.id = `pergunta`;
          textarea.style.width = '100%';
          textarea.rows = '6';
          textarea.style.borderRadius = '15px';
          form.appendChild(textarea);
          respostas[perguntaObj.pergunta] = '';
          form.appendChild(document.createElement('br'));

          // Aqui ajustamos a lógica para pegar o valor de valorPadrao
          if (perguntaObj.valorPadrao) {
            const valor = pegarValorElemento(perguntaObj.valorPadrao);
            // Se o valor for 'N/A', usamos valorPadrao
            textarea.value = valor === 'N/A' ? perguntaObj.valorPadrao : valor;
          }
          textarea.addEventListener('change', () => {
            textarea.value = textarea.value.toUpperCase();
          });
          break;

        default:
          let input = document.createElement(perguntaObj.type === 'textarea' ? 'textarea' : 'input');
          input.type = perguntaObj.type === 'string' ? 'text' : perguntaObj.type;
          input.name = `pergunta_${index}`;
          form.appendChild(input);
          respostas[perguntaObj.pergunta] = '';
          if (perguntaObj.valorPadrao) {
            const valor = pegarValorElemento(perguntaObj.valorPadrao);
            // Se o valor for 'N/A', usamos valorPadrao
            input.value = valor === 'N/A' ? perguntaObj.valorPadrao : valor;
          }
          input.addEventListener('change', () => {
            input.value = input.value.toUpperCase();
          });
          break;
      }

      form.appendChild(document.createElement('br'));
    });

    function pegarValorElemento(id) {
      const elemento = document.getElementById(id);
      if (!elemento) return 'N/A';
      
      switch (elemento.type) {
        case 'checkbox':
          return elemento.checked ? 'SIM' : 'N/A';
        case 'textarea':
        case 'text':
        case 'tel':
        case 'password':
          return elemento.value.trim() || 'N/A';
        default:
          return 'N/A';
      }
    }

    function validarCheckboxes() {
      let isValid = true;

      perguntas.forEach((perguntaObj, index) => {
        if (perguntaObj.type === 'checkbox') {
          const checkboxes = document.querySelectorAll(`.checkbox-pergunta_${index}`);
          const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
          if (!isChecked) {
            isValid = false;
            alert(`Por favor, selecione pelo menos uma opção para: ${perguntaObj.pergunta}`);
          }
        }
      });

      return isValid;
    }

    function validarRadio() {
      let isValid = true;

      perguntas.forEach((perguntaObj, index) => {
        if (perguntaObj.type === 'radio') {
          const radios = document.querySelectorAll(`input[name='pergunta_${index}']`);
          const isChecked = Array.from(radios).some(radio => radio.checked);
          if (!isChecked) {
            isValid = false;
            alert(`Por favor, selecione uma opção para: ${perguntaObj.pergunta}`);
          }
        }
      });

      return isValid;
    }

    let buttonWrapper = document.createElement('div');
    buttonWrapper.style = 'display: flex; gap: 10px; width: 100%; margin-top: 20px;';

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Confirmar Checklist';
    submitButton.type = 'button';
    submitButton.style = 'flex: 1; height: 50px; background-color: green; color: white; border: none; border-radius: 5px; cursor: pointer;';
    submitButton.onclick = () => {
      if (validarCheckboxes() && validarRadio()) {
        let inputs = form.elements;
        perguntas.forEach((perguntaObj, index) => {
          if (perguntaObj.type === 'checkbox') {
            respostas[perguntaObj.pergunta] = [];
            Array.from(inputs).forEach(input => {
              if (input.name === `pergunta_${index}` && input.checked) {
                respostas[perguntaObj.pergunta].push(input.value);
              }
            });
          } else if (perguntaObj.type === 'radio') {
            Array.from(inputs).forEach(input => {
              if (input.name === `pergunta_${index}` && input.checked) {
                respostas[perguntaObj.pergunta] = input.value;
              }
            });
          } else if (['string', 'number', 'date', 'time', 'email', 'tel', 'url', 'range', 'color', 'file', 'textarea'].includes(perguntaObj.type)) {
            respostas[perguntaObj.pergunta] = inputs[`pergunta_${index}`].value;
          }
        });

        const formExistente = document.getElementById('popupForm');
        if (formExistente) {
          formExistente.parentNode.removeChild(formExistente);
        }

        // Scroll para o container
        containerForms.scrollIntoView({ behavior: 'smooth', block: 'start' });

        resolve(respostas);
      }
    };

    let closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.type = 'button';
    closeButton.style = 'flex: 1; height: 50px; background-color: crimson; color: white; border: none; border-radius: 5px; cursor: pointer;';
    closeButton.onclick = () => {
      form.remove(); // remove o popupForm
    };

    // Adiciona os botões à div e depois ao formulário
    buttonWrapper.appendChild(submitButton);
    buttonWrapper.appendChild(closeButton);
    form.appendChild(buttonWrapper);

    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}




function verificarDiaDaSemana() {
  const hoje = new Date();
  const diaDaSemana = hoje.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

  // Verifica se hoje é sexta-feira (5)
  if (diaDaSemana === 5) {
    const aviso = document.getElementById('avisoSexta');

    // Função para exibir e esconder o aviso
    function exibirAviso() {
      aviso.style.display = 'block'; // Exibe o aviso

      // Esconde o aviso após 30 segundos
      setTimeout(() => {
        aviso.style.display = 'none';
      }, 30 * 1000); // 30 segundos em milissegundos
    }

    // Exibe o aviso inicialmente
    exibirAviso();

    // Configura para repetir a cada 5 minutos
    setInterval(exibirAviso, 5 * 60 * 1000); // 5 minutos em milissegundos
  }
}

// Verifica o dia da semana ao carregar a página
window.addEventListener('load', verificarDiaDaSemana);



// Função para copiar dados e dar feedback visual
document.getElementById("formulario").addEventListener("submit", function(event){
  event.preventDefault();
  var formData = new FormData(this);
  var historico = '';
  var dados = '';

  // Inclui a data e hora no início
  historico += `      ${new Date().toLocaleString()}\n`;

// Depois, processa os outros campos
for (const [key, value] of formData.entries()) {
  if (key !== 'DESCRIÇÃO' && value !== '') {
    dados += `${key}:   ${value}\n`;
    historico += `${key}:   ${value}\n`;
  }
}

// Primeiro, processa 'DESCRIÇÃO'
for (const [key, value] of formData.entries()) {
  if (key === 'DESCRIÇÃO' && value !== '') {
    dados += `${value}\n`;
    historico += `${value}\n`;
  }
}



  // Coleta respostas do pop-up, se existirem
  let respostasTexto = document.getElementById('dadosDeInfor').value.trim();
  if (respostasTexto && !respostasTexto.includes("QUADRO DE INFORMAÇÕES DO ESTADO")) {
    dados += `\n${respostasTexto}\n`;
    historico += `\n${respostasTexto}\n`;
  }

  // Adiciona separador e data/hora ao histórico
  historico = "_________________________________________________\n" + historico;
  document.getElementById("historico").value = historico + document.getElementById("historico").value;

  // Copia os dados para a área de transferência
  navigator.clipboard.writeText(dados).then(function() {
    showCopyFeedback(); // Chama a função de feedback visual
  }, function(err) {
    console.error('Erro ao copiar os dados para a área de transferência:', err);
  });
});

// Função de feedback visual para o botão de cópia
function showCopyFeedback() {
  const copyButton = document.querySelector("#formulario button[type='submit']");
  copyButton.textContent = "Copiado!";
  copyButton.style.backgroundColor = "#4CAF50"; // Verde para indicar sucesso

  // Volta ao estado original após 2 segundos
  setTimeout(() => {
    copyButton.textContent = "Copiar";
    copyButton.style.backgroundColor = "green"; // Cor original do botão
  }, 2000);
}

function abrirPopupProtocolo() {
  // Criação do popup
  const popup = document.createElement("div");
  popup.style = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #1c1e80;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      z-index: 1000;
  `;

  // Input para o protocolo
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Digite o protocolo";
  input.id = "protocoloInput";
  input.style = "width: 100%; padding: 8px; margin-bottom: 10px;";

  // Botão para pesquisar
  const button = document.createElement("button");
  button.textContent = "Pesquisar";
  button.style = "width: 100%; padding: 10px; background-color: green; color: white; border: none; border-radius: 4px;";
  button.onclick = () => {
      const protocolo = document.getElementById("protocoloInput").value.trim();
      if (!protocolo) {
          alert("Por favor, insira um protocolo.");
          return;
      }
      const estado = document.getElementById("estadoTelefone").textContent.trim();
      if (!estado) {
          alert("Estado não identificado. Verifique o telefone informado.");
          return;
      }
      const url = `https://backoffice-${estado.toLowerCase()}.equatorialenergia.com.br/relatorios/?protocolo_solicitacao=${protocolo}&pesquisar=pesquisar`;
      window.open(url, "_blank");
      document.body.removeChild(popup); // Remove o popup
  };

  // Botão para fechar
  const closeButton = document.createElement("button");
  closeButton.textContent = "Fechar";
  closeButton.style = "width: 100%; padding: 10px; background-color: red; color: white; border: none; border-radius: 4px; margin-top: 10px;";
  closeButton.onclick = () => document.body.removeChild(popup);

  // Adicionando os elementos ao popup
  popup.appendChild(input);
  popup.appendChild(button);
  popup.appendChild(closeButton);

  // Adicionando o popup ao corpo
  document.body.appendChild(popup);
}


// ATALHOS

// Função para criar o botão flutuante
function criarBotaoFlutuante() {
  const botao = document.createElement('div');
  botao.style = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: orange;
      color: white;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      z-index: 1000;
  `;
  botao.textContent = '?';
  botao.title = 'Clique para ver dicas de atalhos do Windows';
  botao.onclick = abrirPopupDicas;
  document.body.appendChild(botao);
}

// Função para abrir o popup com dicas de atalhos
function abrirPopupDicas() {
  const popup = document.createElement('div');
  popup.style = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #193082;
      color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      width: 300px;
  `;

  const title = document.createElement('h3');
  title.textContent = 'Dicas de Atalhos do Windows';
  title.style = 'margin-bottom: 10px;';
  popup.appendChild(title);

  const lista = document.createElement('ul');
  lista.style = 'list-style: none; padding: 0;';
  const atalhos = [
    ['Ctrl + C', 'Copiar'],
    ['Ctrl + V', 'Colar'],
    ['Ctrl + X', 'Recortar'],
    ['Alt + Tab', 'Alternar entre janelas'],
    ['⊞ + L', 'Bloqueia a área de trabalho'],
    ['⊞ + D', 'Mostrar a área de trabalho'],
    ['⊞ + H', 'Digita o que você fala no mic'],
    ['⊞ + V', 'Assistente de Copia e Cola'],
    ['⊞ + Ctrl + L', 'Legenda para as ligações']
  ];
  atalhos.forEach(([comando, descricao]) => {
      const item = document.createElement('li');
      item.textContent = `${comando}: ${descricao}`;
      lista.appendChild(item);
  });
  popup.appendChild(lista);

  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'Fechar';
  botaoFechar.style = `
      margin-top: 20px;
      padding: 10px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
  `;
  botaoFechar.onclick = () => document.body.removeChild(popup);
  popup.appendChild(botaoFechar);

  document.body.appendChild(popup);
}

// Chama a função para criar o botão flutuante ao carregar a página
window.onload = () => {
  criarBotaoFlutuante();
};


// Função para exibir alertas
function exibirAlertas(alertas) {
  const popup = document.createElement('div');
  popup.style = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(25, 48, 130);
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
    z-index: 1000;
    width: 90%;
    max-height: 75%;
    overflow: auto;
    display: flex;
    flex-flow: column wrap;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    font-size: 10pt;
    font-size: clamp(0.1rem, 2.5vw, 1rem);
    `
    ;

  

  const title = document.createElement('h3');
  title.textContent = 'Aviso Importante';
  title.style = `
      margin-bottom: 10px;
      background-color: #ffcc00;
      color: black;
      padding: 4px;
      border: 3px solid;
      border-radius: 11px;
      margin: auto;
      left: 0;
      right: 0;
      width: max-content;
  `;
  popup.appendChild(title);

  const lista = document.createElement('ul');
  lista.style = 'list-style: none; padding: 0;overflow-y: auto;';
  alertas.forEach((alerta) => {
      const item = document.createElement('li');
      item.textContent = `⚠️ ${alerta}`;
      item.style = `padding-bottom: 10px;font-weight: bold;`;
      lista.appendChild(item);
  });
  popup.appendChild(lista);

  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'Fechar';
  botaoFechar.style = `
    margin-top: 20px;
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 50%;
    left: 0;
    right: 0;
    margin: auto;
    margin-bottom: 10px;
  `;
  botaoFechar.onclick = () => document.body.removeChild(popup);
  popup.appendChild(botaoFechar);

  document.body.appendChild(popup);
}
window.onbeforeunload = function() {
  return "Você tem certeza que deseja sair?";
};

// Função para copiar o conteúdo do input
function copiarTexto(inputSelector) {
  const inputElement = document.querySelector(inputSelector);
  
  if (inputElement) {
    // Seleciona o conteúdo do input
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o conteúdo para a área de transferência
    document.execCommand("copy");

    // Alerta ou notifica o usuário que o conteúdo foi copiado
    // alert("Texto copiado: " + inputElement.value);
  }
}

// Função para colar o conteúdo no input
async function colarTexto(inputSelector) {
  const inputElement = document.querySelector(inputSelector);

  if (inputElement) {
    try {
      // Usando a API Clipboard para acessar o conteúdo da área de transferência
      const texto = await navigator.clipboard.readText();

      // Coloca o texto no input
      inputElement.value = texto;
    } catch (err) {
      console.error("Falha ao colar o conteúdo:", err);
    }
  }
}

// Função para limpar o conteúdo do input
function limparTexto(inputSelector) {
  const inputElement = document.querySelector(inputSelector);

  if (inputElement) {
    // Limpa o conteúdo do input
    inputElement.value = '';
  }
}

function search() {
    var query = document.getElementById('query').value;
    window.open('https://www.bing.com/search?q=' + encodeURIComponent(query), '_blank');
}