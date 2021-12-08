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