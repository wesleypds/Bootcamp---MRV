namespace PrimeiroProjeto.Models
{
    public class Corrente : Conta
    {
        public override void Creditar(double Valor)
        {
            base.Saldo = Valor;
        }
    }
}