// Factory

const acceptedTypes = ['guerrero', 'mago', 'arquero']

/**
 * @function Player
 * @param {Object} player - Player information
 * @param {string} player.name - The name of the player
 * @param {string} player.type - The type of the player. Can be any of ['guerrero', 'mago', 'arquero']
 * @param {number} player.playerNumber - The number of the player
 * @return instance of new Player 
 */

const Player = function({ name, type = 'guerrero', playerNumber}){

  if(!name){
    throw new Error('"name" no puede quedar vacío');
  }

  if(!acceptedTypes.includes(type)){
    throw new Error(`"type" debe ser de tipo ${acceptedTypes.toString()}`);
  }

  this.name = name;
  this.type = type;
  this.playerNumber = playerNumber;
  this.currentHP = 1000;
  this.lastAttactDamage = 0;
}

Player.prototype.doDamage = function(target){
  const damage = `${this.name} hizo ${this.lastAttactDamage} dañó a ${target.name}`
  const playerColor = this.playerNumber === 1 ? 'orange' : 'green';
  Logger.printOnConsole({
    log: damage,
    color: playerColor,
  })

  Logger.appendLog({
    log: damage,
    color: playerColor,
  })

  target.currentHP -= this.lastAttactDamage;
  target.updateCurrentHP()
}

Player.prototype.calculateDamage = function(){
  this.lastAttactDamage = Number(Math.random() * 50).toFixed(0)
}

Player.prototype.isDead = function(){
  return this.currentHP <= 0;
}

Player.prototype.updateCurrentHP = function(){
  const validHP = this.currentHP < 0? 0 : this.currentHP;
  document.getElementById(`player_${this.playerNumber}_hp`).style.width = `${(validHP * 100)/1000}%`
}

