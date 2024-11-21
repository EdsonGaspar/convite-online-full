export class Data {
  static formatar(data: Data): string {
    const pad = (n: number) => n.toString().padStart(2, "0");

    const d = data ?? new Date();
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);
    const dia = pad(d.getDate());
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }

  static desformatar(data: string): Data {
    const [ano, mes, dia, hora, minuto] = data.split(/[-:T]/);
    const d = new Date(Number(ano), Number(mes) - 1, Number(dia), Number(hora));
    return d;
  }
}

// console.log(Data.formatar(new Date()));
console.log(Data.desformatar("2024-11-19T17:43"));
