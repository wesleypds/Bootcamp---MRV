namespace PrimeiroProjeto.Models
{
    public class Professor : Pessoa
    {
        public int Salario { get; set; }
        public override void Apresentar()
        {
            Console.WriteLine($"Olá, Meu nome é {Nome} e tenho {Idade} anos. Sou professor de salário {Salario}.");
        }
    }
}