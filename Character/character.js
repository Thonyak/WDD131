const character = {
  name: "Titan Gorilla",
  class: "Beast King",
  level: 10,
  health: 200,
  image: "images/titan-gorilla.png",

  attacked() {
    if (this.health >= 20) {
      this.level -= 1;
      this.health -= 20;
    } else {
      alert('Character Died');
    }
  },

  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

function updateDisplay() {
  document.querySelector('.image').src = character.image;
  document.querySelector('.image').alt = character.name;
  document.querySelector('.name').textContent = character.name;
  document.getElementById('class').textContent = character.class;
  document.getElementById('level').textContent = character.level;
  document.getElementById('health').textContent = character.health;
}

document.getElementById('attacked').addEventListener('click', () => {
  character.attacked();
  updateDisplay();
});

document.getElementById('levelup').addEventListener('click', () => {
  character.levelUp();
  updateDisplay();
});

// Initial load
updateDisplay();
