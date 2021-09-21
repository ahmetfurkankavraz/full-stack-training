
// This is a project that I did in Codecademy Full-Stack-Learning Course

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// factory function for creating organism
function pAequorFactory(num, array){
	
  return {
    specimenNum:num,
    dna: array,

	//methods that in the project
    mutate(){
      let dnaBases = ['A', 'T', 'C', 'G']
      let index = Math.floor(Math.random() * 15)
      dnaBases = dnaBases.filter((x) => {return this.array[index] !== x})
      this.array[index] = dnaBases[Math.floor(Math.random() * 3)]
    },

	//comparing similarity between DNAs
    compareDNA(dna1){
      let count = 0
      for (let i = 0; i < 15; i++){
        if (this.dna[i] === dna1.dna[i])
          count++
      }
      console.log(`specimen #${this.specimenNum} and specimen #${dna1.specimenNum} have ${count/15*100}% DNA in common`)
    },
    
	//if 'C' and 'G's are more than %60, it can survive
    willLikelySurvive(){
      let count = 0
      for (let i = 0; i < 15; i++){
        if (this.dna[i] === 'C' || this.dna[i] === 'G')
          count++
      }
      console.log( count/15 > (3/5))
    }
  }
}

//creating instances
let array = []
for (let i = 0; i < 30; i++)
{
  array.push(pAequorFactory(i, mockUpStrand()))
}

//testing the methods
console.log(array)

console.log('\n')
array[0].compareDNA(array[1])

array[8].willLikelySurvive()

