
using TerceiroProjeto.Models;

int[] arrayOrdenado = new int[10] { 10, 5, 1, 7, 4, 2, 8, 6, 3, 9 };
OperacaoArray opArray = new OperacaoArray();

Console.WriteLine("Array desordenado");
opArray.imprimirArray(arrayOrdenado);

Console.WriteLine("Array ordenado com bublle short");
opArray.ordenarArray(ref arrayOrdenado);
opArray.imprimirArray(arrayOrdenado);

// int[] arrayInteiro = new int[3];

// arrayInteiro[0] = 10;
// arrayInteiro[1] = 20;
// arrayInteiro[2] = 30;

// Console.WriteLine("Imprimindo com loop for");
// for (int i = 0; i < arrayInteiro.Length; i++)
// {
//     Console.WriteLine($"Posição {i+1} = {arrayInteiro[i]}");
// }

// Console.WriteLine("Imprimindo com loop foreach");
// foreach (int item in arrayInteiro)
// {
//     Console.WriteLine(item);
// }

// int[,] matriz = new int[4,2]
// {
//     { 1, 2 },
//     { 3, 4 },
//     { 5, 6 },
//     { 7, 8 }
// };

// for (int i = 0; i < matriz.GetLength(0); i++)
// {
//     for (int j = 0; j < matriz.GetLength(1); j++)
//     {
//         Console.WriteLine($"Posição {i}:{j} da matriz = {matriz[i,j]}");
//     }
// }
