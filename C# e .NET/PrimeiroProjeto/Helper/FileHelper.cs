namespace PrimeiroProjeto.Helper
{
    public class FileHelper
    {
        public void ListarDir(string Caminho) 
        {
            var retornoCaminho = Directory.GetDirectories(Caminho, "*", SearchOption.AllDirectories);
            foreach (var Retorno in retornoCaminho)
            {
                Console.WriteLine(Retorno);
            }
        }
        public void ListarArqs(string Caminho)
        {
            var retornoArqs = Directory.GetFiles(Caminho, "*", SearchOption.AllDirectories);
            foreach (var Retorno in retornoArqs)
            {
                Console.WriteLine(Retorno);
            }
        }
    }
}