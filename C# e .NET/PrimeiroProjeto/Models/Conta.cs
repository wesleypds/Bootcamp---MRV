namespace PrimeiroProjeto.Models
{
    public abstract class Conta
    {
        protected double Saldo;
        public abstract void Creditar(double Valor);
        public void ExibirSaldo()
        {
            System.Console.WriteLine($"Seu saldo é: R${Saldo}.");
        }
    }
}