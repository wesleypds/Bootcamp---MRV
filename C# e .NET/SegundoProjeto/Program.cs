using SegundoProjeto.Models;

Log log = Log.GetInstance();
log.propriedadeLog = "Teste propriedade log";

Log log2 = Log.GetInstance();
Console.WriteLine(log2.propriedadeLog);

// Pessoa ps = new Pessoa("Wesley", "Pereira");
// ps.Apresentar();
