function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conexao com o BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da Base", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Tratando os dados da Base", rand(1, 3)); ///se esperaAi() receber um number o reject vai ser utilizando mostrando erro
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then((resposta) => {
    console.log("Exibe dados na tela");
  })
  .catch((e) => {
    console.log("ERROR:", e);
  });

console.log("Isso aqui sera exibido antes de qualquer promise");
