/* 

Loops and Special loops(While loops and Do-while loop)




/* Example */

const members = ['David','John','Tommy']

console.log(members)

/* To add something at the end of a list you use push */

members.push("Anki")

/* To remove the last element of a list you use pop */

members.pop("Anki")

/* To loop through a list using foreach loop*/
for (let member of members)
    console.log(member)


/* Another way for writing foreach loop */
members.forEach(member => {
    console.log(member)
})

/* To loop through a list using foreach loop */

for (let i=0; i<2; i++) {
    console.log(members[i])
}

/* To loop through a list using foreach loop and lenght*/

for (let i=0; i<members.length; i++) {
    console.log(members[i])
}


/* While loops 

Kolla ett condition i början om det är sant gör loopen

while (condition) {
  // code block to be executed
}


E.g

*/








/* DO-while loop

Gör loopen minst en gång sen kolla kondition

do {
  code block to be executed
}
while (condition);

*/

