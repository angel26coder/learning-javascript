function playerAttack(playerName, attackType) {
    console.log(`${playerName} ha usado un ataque de ${attackType}`)
}

function calculateDamage(attackType) {
    if (attackType == "fuego") {
        return 30;
    } else if (attackType == "agua") {
        return 20;
    } else if (attackType == "tierra") {
        return 10;
    }
}

function enemyDefend(playerName, attackType, enemyName, enemyHealth) {
    playerAttack(playerName, attackType)
    let damage = calculateDamage(attackType);
    let remainingHealth = enemyHealth - damage;
    if (remainingHealth > 0) {
        console.log(`El enemigo ${enemyName} a sobrevivido con ${remainingHealth} puntos de vida`)
    } else if (remainingHealth <= 0) {
        console.log(`El enemigo ${enemyName} ha sido derrotado.`)
    }
}



enemyDefend("Angela", "fuego", "Ricardo", 80)
enemyDefend("Angela", "tierra", "Bruno", 5)
enemyDefend("Angela", "agua", "Stella", 60)