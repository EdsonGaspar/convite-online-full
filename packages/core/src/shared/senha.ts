export class Senha {
  static nova(tamanho: number = 8): string {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const caracteresEspeciais = "!@#$%&*";

    const grupos = [minusculas, maiusculas, numeros, caracteresEspeciais];

    const senha = [];

    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      const caractere = grupo[Math.floor(Math.random() * grupo.length)];
      senha.push(caractere);
    }

    return senha.join("");
  }
}

console.log(Senha.nova());
