const { createLinkedList, createNode } = require('./linked_list')

const list = createLinkedList()
const values = ['a', 'b', 'c', 'd', 'e']
const nodes = values.map(val => list.push(val))

list.pop()

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Linked List Example</h2>
      <p>result for delete: ${list.delete(1)}</p>
      <p>result for print: ${list.print()}</p>
    `

