const toggleWindowFeatures = document.getElementById("toggleWindowFeatures");
const estadosPorDDD = {
  '98': 'MA',
  '99': 'MA',
  '82': 'AL',
  '86': 'PI',
  '89': 'PI',
  '91': 'PA',
  '93': 'PA',
  '94': 'PA',
  '96': 'AP',
  '51': 'RS',
  '53': 'RS',
  '54': 'RS',
  '55': 'RS',
  '61': 'GO',
  '62': 'GO',
  '64': 'GO',
};




const infoEstado = {
  'MA': { 
    banner: 'https://ma.equatorialenergia.com.br/wp-content/uploads/2024/11/MA-1024x181.png', 
    bottons: {
      'SAP-MA': "http://unifica.equatorialenergia.com.br:9204/sap(bD1wdCZjPTQwMSZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-client=401&sap-language=PT",
      'Telefones-MA': "https://webconsulta.equatorialenergia.com.br/maranhao",
      'Endereços-MA': "https://ma.equatorialenergia.com.br/informacoes-gerais/telefones-enderecos-e-links-uteis/",
      'Prazos-MA': "https://webconsulta.equatorialenergia.com.br/maranhao-3/",
      'ATC-MA': "http://10.7.1.20:8090/account/index.rails",
      'SOMOS-MA': "http://somos-ma.equatorialenergia.com.br/somos/index.php",
      'FAF-MA': "http://10.6.1.18/reports/report/CORP-RELACIONAMENTO%20COM%20O%20CLIENTE/FERRAMENTA%20DE%20ANALISE%20DE%20FATURA/Analise%20de%20Faturamento_Cemar",
      'Desligamento-MA': "https://ma.equatorialenergia.com.br/desligamento-programado/",
    },
    info: `QUADRO DE INFORMAÇÕES DO ESTADO DE MARANHÃO
    
  CÓDIGOS DE MOTIVOS DE REJEIÇÃO DE MEDIDORES.

M1 ► PADRÃO COMPLETO INEXISTENTE.
M2 ► CLIENTE NÃO ACEITOU O FINACIAMENTO DO PADRÃO.
M3 ► CLIENTE AUSENTE.
M4 ► PENDÊNCIA DE ROLDANA.
M5 ► PENDÊNCIA DE CAIXA.
M6 ► PENDÊNCIA DE DIJUNTOR.
M7 ► PENDÊNCIA DE ATERRAMENTO.
M8 ► PENDÊNCIA DE BENGALA(CANELETA).
M9 ► PENDÊNCIA DE ELETRODUTO.  
CÓDIGO 30 ► PROBLEMA/DEFEITO TRANSFORMADOR.
    
    TAXA DE RELIGAÇÕES
    
    Normal [Até 24horas úteis/comercial (08:00 até 18:00 Seg-Sex)]
Monofásico:  R$ 10,73
Bifásico:    R$ 14,79 
Trifásico:   R$ 44,40
    
    Contatos Central Geração Distribuída
geracaodistribuida.maranhao@equatorialenergia.com.br
TEL: 0800 098 0055
    
    NUMERO DA CENTRAL DE VENDA/RETENÇÃO
0800 728 9518',`,
  },
  'AL': { 
    banner: 'https://al.equatorialenergia.com.br/wp-content/uploads/2024/11/AL-1024x179.png', 
    bottons: {
      'SAP-AL': "http://ealspdccrm02.equatorial.corp:8000/sap(bD1wdCZjPTQwMyZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm",
      'Telefones-AL': "https://webconsulta.equatorialenergia.com.br/alagoas",
      'Endereços-AL': "https://al.equatorialenergia.com.br/informacoes-gerais/telefones-enderecos-e-links-uteis/",
      'Prazos-AL': "https://webconsulta.equatorialenergia.com.br/alagoas-3/",
      'ATC-AL': "file://10.181.75.23/ATC_Installer/DeskTopATC.application",
      'SOMOS-AL': "https://somos-al.equatorialenergia.com.br/index.php",
      'FAF-AL': "http://10.6.1.18/reports/report/CORP-RELACIONAMENTO%20COM%20O%20CLIENTE/FERRAMENTA%20DE%20ANALISE%20DE%20FATURA/Analise%20de%20Faturamento%20Eqtl%20Alagoas",
      'Desligamento-AL': "https://al.equatorialenergia.com.br/desligamento-programado/",
    },
    info: `QUADRO DE INFORMAÇÕES DO ESTADO DE ALAGOAS
    
  CÓDIGOS DE MOTIVOS DE REJEIÇÃO DE MEDIDORES.

M1 ► PADRÃO COMPLETO INEXISTENTE.
M2 ► CLIENTE NÃO ACEITOU O FINACIAMENTO DO PADRÃO.
M3 ► CLIENTE AUSENTE.
M4 ► PENDÊNCIA DE ROLDANA.
M5 ► PENDÊNCIA DE CAIXA.
M6 ► PENDÊNCIA DE DIJUNTOR.
M7 ► PENDÊNCIA DE ATERRAMENTO.
M8 ► PENDÊNCIA DE BENGALA(CANELETA).
M9 ► PENDÊNCIA DE ELETRODUTO.  
CÓDIGO 30 ► PROBLEMA/DEFEITO TRANSFORMADOR.
    
    TAXA DE RELIGAÇÕES
    
    Normal [Até 24horas úteis/comercial (08:00 até 18:00 Seg-Sex)]
Monofásico:   R$ 10,61
Bifásico:     R$ 14,62 
Trifásico:    R$ 43,90
    
    Contatos Central Geração Distribuída
geracaodistribuida.alagoas@equatorialenergia.com.br
TEL: 0800 082 2800
    
    NUMERO DA CENTRAL DE VENDA/RETENÇÃO
0800 728 9518`,
  },
  'PI': { 
    banner: 'https://pi.equatorialenergia.com.br//wp-content/uploads/2024/11/PI-1024x179.png', 
    bottons: {
      'SAP-PI': "http://epispdccrm02.equatorial.corp:8000/sap(bD1wdCZjPTQwNCZkPW1pbg%3D%3D)/bc/bsp/sap/crm_ui_start/default.htm",
      'Telefones-PI': "https://webconsulta.equatorialenergia.com.br/piaui",
      'Endereços-PI': "https://pi.equatorialenergia.com.br/informacoes-gerais/telefones-enderecos-e-links-uteis/",
      'Prazos-PI': "https://webconsulta.equatorialenergia.com.br/piaui-3/",
      'ATC-PI': "http://10.6.10.170:8090/account/index.rails",
      'SOMOS-PI': "https://somos-pi.equatorialenergia.com.br/somos/index.php",
      'FAF-PI': "http://10.6.1.18/reports/report/CORP-RELACIONAMENTO%20COM%20O%20CLIENTE/FERRAMENTA%20DE%20ANALISE%20DE%20FATURA/Analise%20de%20Faturamento%20Eqtl%20Piaui",
      'Desligamento-PI': "https://pi.equatorialenergia.com.br/desligamento-programado/",
    },
    info: `QUADRO DE INFORMAÇÕES DO ESTADO DE PIAUI
    
  CÓDIGOS DE MOTIVOS DE REJEIÇÃO DE MEDIDORES.

M1 ► PADRÃO COMPLETO INEXISTENTE.
M2 ► CLIENTE NÃO ACEITOU O FINACIAMENTO DO PADRÃO.
M3 ► CLIENTE AUSENTE.
M4 ► PENDÊNCIA DE ROLDANA.
M5 ► PENDÊNCIA DE CAIXA.
M6 ► PENDÊNCIA DE DIJUNTOR.
M7 ► PENDÊNCIA DE ATERRAMENTO.
M8 ► PENDÊNCIA DE BENGALA(CANELETA).
M9 ► PENDÊNCIA DE ELETRODUTO.  
CÓDIGO 30 ► PROBLEMA/DEFEITO TRANSFORMADOR.
    
    TAXA DE RELIGAÇÕES
    
    Normal [Até 24horas úteis/comercial (08:00 até 18:00 Seg-Sex)]
Monofásico:  R$ 10,38 
Bifásico:    R$ 14,30 
Trifásico:   R$ 42,93
    
    Contatos Central Geração Distribuída
geracaodistribuida.piaui@equatorialenergia.com.br
TEL: 0800 025 0116
    
    NUMERO DA CENTRAL DE VENDA/RETENÇÃO
0800 728 9518`,
  },
  'PA': { 
    banner: 'https://pa.equatorialenergia.com.br/wp-content/uploads/2024/11/PA-1024x181.png', 
    bottons: {
      'SAP-PA': "http://unifica.equatorialenergia.com.br:9203/sap(bD1wdCZjPTQwMiZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?sap-client=402&sap-language=PT",
      'Telefones-PA': "https://webconsulta.equatorialenergia.com.br/para",
      'Endereços-PA': "https://pa.equatorialenergia.com.br/informacoes-gerais/telefones-enderecos-e-links-uteis/",
      'Prazos-PA': "https://webconsulta.equatorialenergia.com.br/para-3/",
      'ATC-PA': "http://10.130.1.7:8083/account/index.rails",
      'SOMOS-PA': "https://somos-pa.equatorialenergia.com.br/somos/index.php",
      'FAF-PA': "http://10.6.1.18/reports/report/CORP-RELACIONAMENTO%20COM%20O%20CLIENTE/FERRAMENTA%20DE%20ANALISE%20DE%20FATURA/Analise%20de%20Faturamento_Celpa",
      'Desligamento-PA': "https://pa.equatorialenergia.com.br/desligamento-programado/",
    },
    info: `QUADRO DE INFORMAÇÕES DO ESTADO DE PARÁ
    
  CÓDIGOS DE MOTIVOS DE REJEIÇÃO DE MEDIDORES.

M1 ► PADRÃO COMPLETO INEXISTENTE.
M2 ► CLIENTE NÃO ACEITOU O FINACIAMENTO DO PADRÃO.
M3 ► CLIENTE AUSENTE.
M4 ► PENDÊNCIA DE ROLDANA.
M5 ► PENDÊNCIA DE CAIXA.
M6 ► PENDÊNCIA DE DIJUNTOR.
M7 ► PENDÊNCIA DE ATERRAMENTO.
M8 ► PENDÊNCIA DE BENGALA(CANELETA).
M9 ► PENDÊNCIA DE ELETRODUTO.  
CÓDIGO 30 ► PROBLEMA/DEFEITO TRANSFORMADOR.
    
    TAXA DE RELIGAÇÕES
    
    Normal [Até 24horas úteis/comercial (08:00 até 18:00 Seg-Sex)]
Monofásico:    R$ 10,72   
Bifásico:      R$ 14,77 
Trifásico:     R$ 44,35

    Urgência [Até 4 horas úteis/comercial (08:00 até 18:00 Seg-Sex)]
Monofásico:   R$ 53,78   
Bifásico:     R$ 80,70 
Trifásico:    R$ 134,52
  
    NUMERO DA CENTRAL DE VENDA/RETENÇÃO
0800 728 9518
    
    ►CIDADES COM RELIGAÇÃO DE URGÊNCIA◄
    
Altamira	     08:00 – 18:00
Ananindeua     08:00 – 18:00
Bélem	         08:00 – 18:00
Benevides	     08:00 – 18:00
Castanhal	     08:00 – 18:00
Itaituba	     08:00 – 18:00
Marabá	       08:00 – 18:00
Marituba	     08:00 – 18:00
Mosqueiro	     08:00 – 18:00
Outeiro	       08:00 – 18:00
Santa Bárbara	 08:00 – 18:00
Santa Izabel	 08:00 – 18:00
Santarém	     08:00 – 18:00`,
  },
  'AP': { 
    banner: 'https://ap.equatorialenergia.com.br//wp-content/uploads/2024/09/AP-1-1024x181.png', 
    bottons: {
      'SAP-AP': "https://ap-crm-prd.equatorial.corp:44301/sap/bc/bsp/sap/crm_ui_start?sap-client=405&sap-language=PT",
      'Telefones-AP': "https://webconsulta.equatorialenergia.com.br/amapa",
      'Endereços-AP': "https://ap.equatorialenergia.com.br/telefones-enderecos-e-links-uteis/",
      'Prazos-AP': "https://webconsulta.equatorialenergia.com.br/amapa-3/",
      'ATC-AP': "http://10.98.20.77:8090/account/index.rails",
      'SOMOS-AP': "https://somos-ap.equatorialenergia.com.br/somos/index.php",
      'Desligamento-AP': "https://ap.equatorialenergia.com.br/desligamento-programado/",
    },
    info: `QUADRO DE INFORMAÇÕES DO ESTADO DE AMAPÁ
    
  CÓDIGOS DE MOTIVOS DE REJEIÇÃO DE MEDIDORES.

M1 ► PADRÃO COMPLETO INEXISTENTE.
M2 ► CLIENTE NÃO ACEITOU O FINACIAMENTO DO PADRÃO.
M3 ► CLIENTE AUSENTE.
M4 ► PENDÊNCIA DE ROLDANA.
M5 ► PENDÊNCIA DE CAIXA.
M6 ► PENDÊNCIA DE DIJUNTOR.
M7 ► PENDÊNCIA DE ATERRAMENTO.
M8 ► PENDÊNCIA DE BENGALA(CANELETA).
M9 ► PENDÊNCIA DE ELETRODUTO.  
CÓDIGO 30 ► PROBLEMA/DEFEITO TRANSFORMADOR.
    
    TAXA DE RELIGAÇÕES
    
    Normal [Até 24horas úteis/comercial (08:00 até 18:00 Seg-Sex)]
Monofásico:   R$ 10,38
Bifásico:     R$ 14,29
Trifásico:    R$ 42,92
    
Contatos Central Geração Distribuída
amapa.geracaodistribuida@equatorialenergia.com.br
TEL: 0800 096 9600
    
    NUMERO DA CENTRAL DE VENDA/RETENÇÃO
0800 728 9518`,
   },
  'RS': { 
    
    bottons: {
      'Telefones-RS': "https://ceee.equatorialenergia.com.br/ceee/locais-de-atendimento",
      'Endereços-RS': "https://ceee.equatorialenergia.com.br/ceee/locais-de-atendimento",
      'Prazos-RS': "https://webconsulta.equatorialenergia.com.br/rio-grande-do-sul-2/",
      'ATC-RS': "http://10.63.79.108:8090/home/index.rails",
      'SOMOS-RS': "https://somos-rs.equatorialenergia.com.br/somos/index.php",
    },
    info: `QUADRO DE INFORMAÇÕES DO ESTADO DE RS
    
  CÓDIGOS DE MOTIVOS DE REJEIÇÃO DE MEDIDORES.

M1 ► PADRÃO COMPLETO INEXISTENTE.
M2 ► CLIENTE NÃO ACEITOU O FINACIAMENTO DO PADRÃO.
M3 ► CLIENTE AUSENTE.
M4 ► PENDÊNCIA DE ROLDANA.
M5 ► PENDÊNCIA DE CAIXA.
M6 ► PENDÊNCIA DE DIJUNTOR.
M7 ► PENDÊNCIA DE ATERRAMENTO.
M8 ► PENDÊNCIA DE BENGALA(CANELETA).
M9 ► PENDÊNCIA DE ELETRODUTO.  
CÓDIGO 30 ► PROBLEMA/DEFEITO TRANSFORMADOR.
    
    TAXA DE RELIGAÇÕES
    
    Normal [Até 24horas úteis/comercial (08:00 até 18:00 Seg-Sex)]

Monofásico:   R$ 10,35
Bifásico:     R$ 14,25
Trifásico:    R$ 42,80

    URGÊNCIA
Monofásico:   R$ 51,90	
Bifásico:     R$ 77,87	
Trifásico:    R$ 129,80

Central de Atendimento Geração Distribuída
0800 642 6643

Clara - Apenas WhatsApp
(51) 3382-5500

Central de Atendimento Equatorial:
0800 721 2333

Deficientes Auditivos:
0800 642 2333

Central de Atendimento Grandes Clientes
0800 642 2800

Central de Atendimento Ouvidoria
0800 642 4900`,
   },
  'GO': { 
    
    banner: 'https://go.equatorialenergia.com.br//wp-content/uploads/2023/07/Canais-de-atendimento-ajustado-1-1-1024x198.jpg',
    bottons: {
      'SAP-GO': "http://10.204.10.156:4002/atc/login",
      'Telefones-GO': "https://webconsulta.equatorialenergia.com.br/goias-2/",
      'Endereços-GO': "https://webconsulta.equatorialenergia.com.br/goias-3/",
      'Prazos-GO': "https://webconsulta.equatorialenergia.com.br/goias/",
    },
    info: `QUADRO DE INFORMAÇÕES DO ESTADO DE GO
    
  CÓDIGOS DE MOTIVOS DE REJEIÇÃO DE MEDIDORES.

M1 ► PADRÃO COMPLETO INEXISTENTE.
M2 ► CLIENTE NÃO ACEITOU O FINACIAMENTO DO PADRÃO.
M3 ► CLIENTE AUSENTE.
M4 ► PENDÊNCIA DE ROLDANA.
M5 ► PENDÊNCIA DE CAIXA.
M6 ► PENDÊNCIA DE DIJUNTOR.
M7 ► PENDÊNCIA DE ATERRAMENTO.
M8 ► PENDÊNCIA DE BENGALA(CANELETA).
M9 ► PENDÊNCIA DE ELETRODUTO.  
CÓDIGO 30 ► PROBLEMA/DEFEITO TRANSFORMADOR.
    
    TAXA DE RELIGAÇÕES
    
    Normal [Até 24horas úteis/comercial (08:00 até 18:00 Seg-Sex)]
  Monofásico: R$ 10,78	
  Bifásico:   R$ 14,85	
  Trifásico:  R$ 44,60`,
   },
};

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
    document.getElementsByClassName('containerforms')[0].removeChild(formExistente);
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
  popup.id = 'popup-selection-state'
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
  `;

  const title = document.createElement('h3');
  title.textContent = 'Selecione o Estado:';
  popup.appendChild(title);

  const select = document.createElement('select');
  select.style = 'width: 100%; margin-bottom: 10px; padding: 10px; border-radius: 4px; background-color: blue;';
  for (const estado in infoEstado) {
      const option = document.createElement('option');
      option.value = estado;
      option.textContent = estado;
      select.appendChild(option);
  }
  popup.appendChild(select);

  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Confirmar';
  confirmButton.style = 'margin-right: 10px; padding: 10px; background-color: green; color: white; border: none; border-radius: 4px;';
  confirmButton.onclick = () => {
      const estadoSelecionado = select.value;
      if (estadoSelecionado) {
          const { banner, info } = infoEstado[estadoSelecionado];
          document.getElementById('banner').src = banner;
          document.getElementById('estadoTelefone').textContent = estadoSelecionado;
          document.getElementById('dadosDeInfor').value = info;
          document.getElementById('banner').style.display = 'block';
          document.getElementById('bttonSAP').style.display = 'flex';
          document.getElementById('dadosDeInfor').style.display = 'block';
          criarBotoesPorEstado(estadoSelecionado)
          document.body.removeChild(popup);
          if (toggleSapAuto.checked) {
            abrirSapPorEstado();
          }
      }
  };
  popup.appendChild(confirmButton);

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancelar';
  cancelButton.style = 'padding: 10px; background-color: red; color: white; border: none; border-radius: 4px;';
  cancelButton.onclick = () => {
      document.body.removeChild(popup);
  };
  popup.appendChild(cancelButton);

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
      document.getElementsByClassName('containerforms')[0].removeChild(formExistente);
    }
    let form = document.createElement('form');

    let formTitle = document.createElement('h2');
    formTitle.textContent = "↓►Informações a serem confirmadas◄↓";
    formTitle.style = 'background: crimson;border-radius: 20px;padding: 10px;width: fit-content;box-shadow: black 5px 7px 10px;margin: auto;margin-bottom: 15px;font-size: 1em;';
    form.style = 'font-family: Arial, sans-serif;color: rgb(255, 255, 255);display: flex;left: 0px;top: 90px;padding: 20px;background-color: #160b7a;border-radius: 8px;box-shadow: rgb(0, 0, 0) 0px 0px 25px;flex-wrap: wrap;align-items: baseline;';
    form.appendChild(formTitle);
    
    let containerForms = document.getElementsByClassName('containerforms')[0];
    if (containerForms) {
      if (containerForms.children.length > 0) {
        containerForms.insertBefore(form, containerForms.children[1] || null);
      } else {
        containerForms.appendChild(form);
      }
    } else {
      console.error("Elemento com a classe 'containerforms' não encontrado.");
    }
    
    form.setAttribute("id", "popupForm");
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
          textarea.style.width = '100%';
          textarea.rows = '3';
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

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Confirmar Checklist';
    submitButton.type = 'button';
    submitButton.style = 'width: 100%;height: 50px;background-color: green;color: white;position: relative;';
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

        document.getElementsByClassName('containerforms')[0].removeChild(form);
        resolve(respostas);
      }
    };

    form.appendChild(submitButton);
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

function selecionarECopiar(input) {
  // Seleciona todo o texto dentro do input
  input.select();
}

// Função para exibir alertas
function exibirAlertas(alertas) {
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
      width: 90%;
  `;

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
  lista.style = 'list-style: none; padding: 0;';
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
      width: 100%;
  `;
  botaoFechar.onclick = () => document.body.removeChild(popup);
  popup.appendChild(botaoFechar);

  document.body.appendChild(popup);
}