namespace PrimeiroProjeto.Models
{
    public class Aluno : Pessoa 
    {
        public int Nota { get; set; }

        public override void Apresentar()
        {
            Console.WriteLine($"Olá, Meu nome é {Nome} e tenho {Idade} anos. Sou aluno de nota {Nota}.");
        }
    }
}