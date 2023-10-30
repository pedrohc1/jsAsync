function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);
    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

//Promise.all Promise.race Promise.resolve Promise.reject
//Promise all so retorna true se todas as promises forem resolvidas\
//Promise race entrega a promise que e resolvida primeiro
//Promise reject

const promises = [
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  "Outro valor",
];

Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => console.log(erro));
