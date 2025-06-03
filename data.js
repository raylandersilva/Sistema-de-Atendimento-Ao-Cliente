// data.js
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
      banner: 'https://ap.equatorialenergia.com.br/wp-content/uploads/2025/02/AP-1024x181.png', 
      bottons: {
        'SAP-AP': "https://ap-crm-prd.equatorial.corp:44301/sap/bc/bsp/sap/crm_ui_start?sap-client=405&sap-language=PT",
        'Telefones-AP': "https://webconsulta.equatorialenergia.com.br/amapa",
        'Endereços-AP': "https://ap.equatorialenergia.com.br/telefones-enderecos-e-links-uteis/",
        'Prazos-AP': "https://webconsulta.equatorialenergia.com.br/amapa-3/",
        'ATC-AP': "file://10.181.75.23/ATC_Installer/DeskTopATC.application",
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