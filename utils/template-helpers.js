module.exports = {
  loop_eyes: function(numEyes = 1, fileName) {
    return [...new Array(numEyes)].map(() => `
      <img 
        class="eyes"
        src='/assets/kenney_monsterbuilderpack/PNG/Default/${fileName}' 
      />
    `).join('')
  }
}