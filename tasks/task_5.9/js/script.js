let names = [
    [
        ['куры', 'гуси', 'павлины'],
        ['сокол', 'орел', 'соловей']
    ],
    [
        ['собака', 'кошка'],
        ['обезьяна', 'рысь']
    ]
]

for (i of names) {
  for (j of i) {
    j.forEach((item) => console.log(item));
	}
  } 