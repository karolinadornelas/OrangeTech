/*Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

   const notas = [5,7,4,3,7,9,10]
   const maxValue = notas.reduce(function(prev, current) { 
	return prev > current ? prev : current; 
})

console.log(maxValue)
