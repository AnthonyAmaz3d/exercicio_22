AOS.init();

const dataDoAniversario = new Date("September 20, 2024 19:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaOTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const mesEmMS = 1000 * 60 * 60 * 24 * 30;
    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60; 

    const mesesAteOAniversario = Math.floor(distanciaAteOAniversario / mesEmMS);
    const diasAteOAniversario = Math.floor((distanciaAteOAniversario % mesEmMS) / diaEmMS);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMS) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutoEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${mesesAteOAniversario}m ${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaOTempo);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);