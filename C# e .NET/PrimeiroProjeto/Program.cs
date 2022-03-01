using PrimeiroProjeto.Helper;
using PrimeiroProjeto.Interfaces;
using PrimeiroProjeto.Models;

namespace PrimeiroProjeto
{
    class Program
    {
        static void Main(string[] args)
        {
            var CaminhoDir = "/home/wesley/workspace/Bootcamp-MRV/C# e .NET/PrimeiroProjeto/Arquivos";

            FileHelper fhelper = new FileHelper();
            // fhelper.ListarDir(CaminhoDir);
            fhelper.ListarArqs(CaminhoDir);

            // ICalculadora calcCom = new CalculadoraComum();
            // Console.WriteLine($"A soma é: {calcCom.Somar(5, 5)}");
            // Console.WriteLine($"A subtração é: {calcCom.Subtrair(5, 5)}");
            // Console.WriteLine($"A multiplicação é: {calcCom.Multiplicar(5, 5)}");
            // Console.WriteLine($"A divisão é: {calcCom.Dividir(5, 5)}");

            // Corrente corr = new Corrente();
            // corr.Creditar(1000);
            // corr.ExibirSaldo();

            // Aluno al = new Aluno();
            // al.Nome = "Wesley";
            // al.Idade = 25;
            // al.Nota = 75;
            // al.Apresentar();

            // Professor prof = new Professor();
            // prof.Nome = "João";
            // prof.Idade = 47;
            // prof.Salario = 1500;
            // prof.Apresentar();

            // Pessoa p1 = new Pessoa();
            // Retangulo med = new Retangulo();

            // p1.Nome = "Wesley Pereira";
            // p1.Idade = 25;
            // p1.Apresentar();

            // med.DefMed(0,10);
            // Console.WriteLine($"A área do rentangulo é {med.ObterArea()}");
        }
    }
}
