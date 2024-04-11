#!/usr/bin/env node
import os from 'os-utils';

function monitorarPC(): void {
    console.log("Monitorando o PC...");

    setInterval(() => {
        os.cpuUsage((usoCPU: number) => {
            const usoMemoria: number = (1 - os.freememPercentage()) * 100;

            // Definindo cores com códigos ANSI
            const corCPU: string = usoCPU > 80 ? "\x1b[31m" : "\x1b[32m"; // Vermelho para uso crítico, verde caso contrário
            const corMemoria: string = usoMemoria > 80 ? "\x1b[31m" : "\x1b[32m"; // Vermelho para uso crítico, verde caso contrário
            const resetCor: string = "\x1b[0m"; // Reset de cor

            console.log(`Uso de CPU: ${corCPU}${usoCPU.toFixed(2)}%${resetCor} | Uso de Memória: ${corMemoria}${usoMemoria.toFixed(2)}%${resetCor}`);
        });
    }, 1000);
}

function main(): void {
    monitorarPC();
}

main();
