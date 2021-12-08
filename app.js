function getRandomValue(min , max){
    return Math.floor(Math.random() * (max , min)) + min;
  }
  new Vue({
      el: '#game',
  
      data: {
        monsterHealth: 100,
        playerHealth: 100,
        currentRound: 0,
        winner: null,
        logMessages: []
      },
      computed: {
        monsterBarStyle() {
          if (this.monsterHealth < 0) {
            return {width: '0%'}
          }
          return {width: this.monsterHealth + '%'};
        },
        playerBarStyle() {
          if (this.playerHealth < 0) {
            return {width: '0%'}
          }
          return {width: this.playerHealth + '%'};
        },
        specialAttackRound () {
          return this.currentRound % 5 !==0
        }
      },
      watch: {
        playerHealth(value) {
          if(value <= 0 && this.monsterHealth <= 0) {
            this.winner = 'draw';
          }
          else if (value <= 0) {
            this.winner = 'monster';
          }
        },
        monsterHealth(value) {
          if (value <= 0 && this.playerHealth <= 0) {
            this.winner = 'draw';
          }
          else if (value <= 0) {
            this.winner = 'player';
          }
        }
      }, 