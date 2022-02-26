using System;
using PrimeiroProjeto.Models;

namespace PrimeiroProjeto
{
    class Program
    {
        static void Main(string[] args)
        {
            Pessoa p1 = new Pessoa();
            Retangulo med = new Retangulo();

            p1.Nome = "Wesley Pereira";
            p1.Idade = 25;
            p1.Apresentar();

            med.DefMed(0,10);
            Console.WriteLine($"A área do rentangulo é {med.ObterArea()}");
        }
    }
}
