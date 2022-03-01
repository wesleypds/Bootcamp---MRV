namespace SegundoProjeto.Models
{
    public class Pessoa
    {
        private string? nome;
        private string? sobreNome;
        public Pessoa()
        {
            nome = string.Empty;
            sobreNome = string.Empty;
        }
        public Pessoa(string nome, string sobreNome)
        {
            this.nome = nome;
            this.sobreNome = sobreNome;
        }
        public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é: {nome} {sobreNome}");
        }
    }
}