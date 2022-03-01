namespace PrimeiroProjeto.Models
{
    public class Diretor : Professor
    {
        public override void Apresentar()
        {
            Console.WriteLine($"Diretor");
        }
    }
}