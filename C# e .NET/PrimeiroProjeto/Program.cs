using PrimeiroProjeto.Models;

namespace PrimeiroProjeto
{
    class Program
    {
        static void Main(string[] args)
        {
            Corrente corr = new Corrente();
            corr.Creditar(1000);
            corr.ExibirSaldo();

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
