namespace PrimeiroProjeto.Models
{
    public class Retangulo
    {
        private double Comprimento;
        private double Largura;
        private bool Valido;
        public void DefMed(double comp, double larg)
        {
            if (comp > 0 && larg > 0)
            {
                this.Comprimento = comp;
                this.Largura = larg;
                this.Valido = true;
            }else
            {
                Console.WriteLine($"Valores inválidos!! Segue os valores: {comp}, {larg}");
            }
        }
        public double ObterArea()
        {
            if (Valido)
            {
                return Comprimento * Largura;
            }
            else
            {
                Console.WriteLine("Preencha com valores válidos.");
                return 0;
            }
        }
    }
}