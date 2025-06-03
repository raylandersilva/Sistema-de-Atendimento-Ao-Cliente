// Variáveis globais para alarmes
let alarms = [];
let alarmCheckInterval;

// Inicializar sistema de alarmes
function initAlarmSystem() {
  loadAlarms();
  setupAlarmButton();
  startAlarmChecker();
}

// Carregar alarmes salvos
function loadAlarms() {
  const savedAlarms = localStorage.getItem('alarms');
  if (savedAlarms) {
    alarms = JSON.parse(savedAlarms);
    updateAlarmsList();
  }
}

// Salvar alarmes
function saveAlarms() {
  localStorage.setItem('alarms', JSON.stringify(alarms));
  updateAlarmsList();
}

// Configurar botão de alarme
function setupAlarmButton() {
  const alarmButton = document.getElementById('alarmButton');
  alarmButton.addEventListener('click', showAlarmsList);
}

// Mostrar lista de alarmes
function showAlarmsList() {
  updateAlarmsList();
  document.getElementById('alarmsList').style.display = 'block';
  
  // Configurar botões
  document.getElementById('addNewAlarm').onclick = () => {
    document.getElementById('alarmsList').style.display = 'none';
    showAlarmPopup();
  };
  
  document.getElementById('closeAlarmsList').onclick = () => {
    document.getElementById('alarmsList').style.display = 'none';
  };
}

// Mostrar popup de configuração de alarme
function showAlarmPopup(alarmId = null) {
  const popup = document.getElementById('alarmPopup');
  popup.style.display = 'block';
  
  // Limpar campos se for um novo alarme
  if (alarmId === null) {
    document.getElementById('alarmName').value = '';
    document.getElementById('alarmTime').value = '12:00';
    document.querySelectorAll('#alarmDays input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
  } else {
    // Preencher campos com dados do alarme existente
    const alarm = alarms.find(a => a.id === alarmId);
    if (alarm) {
      document.getElementById('alarmName').value = alarm.name;
      document.getElementById('alarmTime').value = alarm.time;
      
      // Corrigindo o erro aqui - verificar se alarm.days existe antes de usar includes
      const checkboxes = document.querySelectorAll('#alarmDays input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = alarm.days ? alarm.days.includes(parseInt(checkbox.value)) : false;
      });
    }
  }
  
  // Configurar botões
  document.getElementById('saveAlarm').onclick = () => saveAlarm(alarmId);
  document.getElementById('cancelAlarm').onclick = () => {
    popup.style.display = 'none';
  };
  
  // Adicionar texto explicativo se não existir
  if (!document.querySelector('#alarmDays .info-text')) {
    const infoText = document.createElement('div');
    infoText.className = 'info-text';
    infoText.style = 'font-size: 12px; margin-top: 5px; color: #ccc;';
    infoText.textContent = 'Deixe todos desmarcados para alarme único (uma vez)';
    document.getElementById('alarmDays').appendChild(infoText);
  }
}

// Salvar alarme (novo ou existente)
function saveAlarm(alarmId) {
  const name = document.getElementById('alarmName').value.trim();
  const time = document.getElementById('alarmTime').value;
  const days = Array.from(document.querySelectorAll('#alarmDays input[type="checkbox"]:checked'))
    .map(checkbox => parseInt(checkbox.value));
  
  if (!name) {
    alert('Por favor, dê um nome ao alarme.');
    return;
  }
  
  if (!time) {
    alert('Por favor, defina um horário para o alarme.');
    return;
  }
  
  
  if (alarmId === null) {
    // Novo alarme
    const newAlarm = {
      id: Date.now(),
      name,
      time,
      days: days.length > 0 ? days : null, // null significa disparar apenas uma vez
      active: true,
      oneTime: days.length === 0 // Marca como alarme único se nenhum dia for selecionado
    };
    alarms.push(newAlarm);
  } else {
    // Editar alarme existente
    const alarmIndex = alarms.findIndex(a => a.id === alarmId);
    if (alarmIndex !== -1) {
      alarms[alarmIndex] = {
        ...alarms[alarmIndex],
        name,
        time,
        days: days.length > 0 ? days : null,
        oneTime: days.length === 0
      };
    }
  }
  
  saveAlarms();
  document.getElementById('alarmPopup').style.display = 'none';
}

// Atualizar lista de alarmes na UI
function updateAlarmsList() {
  const container = document.getElementById('alarmsContainer');
  container.innerHTML = '';
  
  if (alarms.length === 0) {
    container.innerHTML = '<p>Nenhum alarme configurado.</p>';
    return;
  }
  
  alarms.forEach(alarm => {
    const alarmElement = document.createElement('div');
    alarmElement.className = 'alarm-item';
    alarmElement.dataset.id = alarm.id; // Adiciona ID como data attribute
    
    const daysNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const activeDays = alarm.days ? alarm.days.map(day => daysNames[day]).join(', ') : 'Uma vez';
    
    alarmElement.innerHTML = `
      <span>
        <strong>${alarm.name}</strong> - ${alarm.time} (${activeDays})
        <br><small>${alarm.active ? 'Ativo' : 'Inativo'}</small>
      </span>
      <div class="alarm-actions">
        <button class="edit">Editar</button>
        <button class="delete">Excluir</button>
        <button class="toggle" style="background-color: ${alarm.active ? '#f44336' : '#4CAF50'}">
          ${alarm.active ? 'Desativar' : 'Ativar'}
        </button>
      </div>
    `;
    
    container.appendChild(alarmElement);
  });
  
  // Adiciona event delegation para evitar múltiplos listeners
  container.addEventListener('click', handleAlarmActions);
}

// Nova função para lidar com todas as ações
function handleAlarmActions(event) {
  const alarmElement = event.target.closest('.alarm-item');
  if (!alarmElement) return;
  
  const alarmId = parseInt(alarmElement.dataset.id);
  const alarmIndex = alarms.findIndex(a => a.id === alarmId);
  if (alarmIndex === -1) return;

  if (event.target.classList.contains('edit')) {
    editAlarm(alarmId);
  } else if (event.target.classList.contains('delete')) {
    deleteAlarm(alarmId);
  } else if (event.target.classList.contains('toggle')) {
    toggleAlarm(alarmId);
  }
}

// Funções separadas para cada ação
function editAlarm(alarmId) {
  document.getElementById('alarmsList').style.display = 'none';
  showAlarmPopup(alarmId);
}

function deleteAlarm(alarmId) {
  if (confirm('Tem certeza que deseja excluir este alarme?')) {
    alarms = alarms.filter(a => a.id !== alarmId);
    saveAlarms();
  }
}

function toggleAlarm(alarmId) {
  const alarmIndex = alarms.findIndex(a => a.id === alarmId);
  if (alarmIndex !== -1) {
    alarms[alarmIndex].active = !alarms[alarmIndex].active;
    saveAlarms();
  }
}

// Verificar se algum alarme deve disparar
function checkAlarms() {
  const now = new Date();
  const currentDay = now.getDay(); // 0 (Domingo) a 6 (Sábado)
  const currentHours = now.getHours().toString().padStart(2, '0');
  const currentMinutes = now.getMinutes().toString().padStart(2, '0');
  const currentTime = `${currentHours}:${currentMinutes}`;
  
  alarms.forEach(alarm => {
    if (alarm.active && alarm.time === currentTime) {
      if (alarm.oneTime) {
        // Alarme único - verificar se nunca foi disparado
        if (!alarm.lastTriggered) {
          triggerAlarm(alarm);
          alarm.lastTriggered = now.toISOString();
          saveAlarms();
        }
      } else {
        // Alarme recorrente - verificar dia da semana e se já foi disparado hoje
        if (alarm.days.includes(currentDay) && 
            (!alarm.lastTriggered || !isSameDay(new Date(alarm.lastTriggered), now))) {
          triggerAlarm(alarm);
          alarm.lastTriggered = now.toISOString();
          saveAlarms();
        }
      }
    }
  });
}

// Verificar se duas datas são no mesmo dia
function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

// Disparar alarme
function triggerAlarm(alarm) {
  // Criar notificação
  const notification = document.createElement('div');
  notification.className = 'alarm-notification';
  
  // Variável para armazenar o objeto de áudio
  let alarmAudio = null;
  
  // Reproduzir som de alarme
  playAlarmSound()
    .then(audio => {
      alarmAudio = audio;
    })
    .catch(error => {
      console.error('Não foi possível reproduzir o som do alarme:', error);
    });
  
  // Configurar o conteúdo da notificação
  notification.innerHTML = `
    <span>⏰ ALARME: ${alarm.name} - ${alarm.time}</span>
    <button id="closeAlarm">&times;</button>
  `;
  
  // Adicionar evento para fechar a notificação
  const closeButton = notification.querySelector('#closeAlarm');
  closeButton.addEventListener('click', () => {
    // Parar o som se estiver tocando
    if (alarmAudio) {
      alarmAudio.pause();
      alarmAudio.currentTime = 0;
    }
    // Remover a notificação
    document.body.removeChild(notification);
  });
  
  document.body.appendChild(notification);
  
  // Remover notificação após 30 segundos (e parar o som)
  const timeoutId = setTimeout(() => {
    if (document.body.contains(notification)) {
      if (alarmAudio) {
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
      }
      document.body.removeChild(notification);
    }
  }, 30000);
  
  // Limpar o timeout se o usuário fechar manualmente
  notification.addEventListener('click', () => {
    clearTimeout(timeoutId);
  });
}

// Reproduzir som de alarme
function playAlarmSound() {
  try {
    const audio = new Audio('alarms/alarm1.mp3');
    audio.volume = 0.7;
    audio.loop = false;
    audio.play().catch(e => {
      console.error('Erro ao reproduzir o som do alarme:', e);
      // Fallback para som padrão
      const fallbackAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
      return fallbackAudio.play().then(() => fallbackAudio);
    });
    return Promise.resolve(audio);
  } catch (error) {
    console.error('Erro ao carregar o som do alarme:', error);
    return Promise.reject(error);
  }
}

// Iniciar verificador de alarmes
function startAlarmChecker() {
  // Verificar a cada minuto
  alarmCheckInterval = setInterval(checkAlarms, 1000);
  // Verificar imediatamente ao carregar (para caso a página tenha sido aberta no horário exato)
  checkAlarms();
}

// Inicializar o sistema de alarmes quando a página carregar
window.addEventListener('load', initAlarmSystem);