import React from 'react';
import './App.css';



// Requirements
// - People with a gender of "female" should have background-color lightpink - People with gender of "male" should have background-color lightblue.
//  - Pass a gender prop and change the color acordingly 
// - Each box should contain the person’s name
//    - Pass a name prop
// - The Tree should be able to consume any Tree, not just the one provided.
//     - Test with different data

interface Family {
  id: number;
  name: string;
  children: number[];
  gender: string;
  parents: number[];
  partner?: {
    id: number,
    name: string,
    gender: string,
  },
}

// type Goal = {
//   id: number;
//   name: string;
//   chidlren: Family[]
//   parents: number[];

// }


const family: Family[] = [
  {
    id: 2351232112252,
    name: "Sally",
    children: [5555, 6666, 7777, 8458189966444,
      897543276547654765443576],
    gender: "female",
    parents: [],
    // partner: {
    //   id: 1231239887112,
    //   name: "Billy",
    //   gender: "male",
    // },
  },
  {
    id: 1231239887112,
    name: "Billy",
    children: [8458189966444, 5555, 6666, 7777,
      897543276547654765443576],
    gender: "male",
    parents: [],
    // partner: {
    //   id: 2351232112252,
    //   name: "Sally",
    //   gender: "female",
    // },
  },
  {
    id: 7777,
    name: "Suzie",
    gender: "female",
    children: [317849882, 8569047194214199353],
    parents: [2351232112252, 1231239887112],
  },
  {
    id: 23123122,
    name: "Sam",
    gender: "male",
    children: [317849882, 8569047194214199353],
    parents: []
  },
  {
    id: 317849882,
    name: "Josh",
    gender: "male",
    children: [43924235082592],
    parents: [7777, 23123122]
  },
  {
    id: 8593288989,
    name: "Sarah",
    gender: "female",
    children: [43924235082592],
    parents: []
  },
  {
    id: 43924235082592,
    name: "Jim",
    gender: "male",
    children: [9305009999],
    parents: [317849882, 8593288989]
  },
  {
    id: 83473298328562398696,
    name: "Clara",
    gender: "female",
    children: [9305009999],
    parents: []
  },
  {
    id: 9305009999,
    name: "Joe",
    children: [],
    gender: "male",
    parents: [43924235082592, 83473298328562398696]
  },
  {
    id: 8569047194214199353,
    name: "Charlie",
    gender: "male",
    children: [565893648394894339808],
    parents: [23123122, 7777],
  },
  {
    id: 4382743284732483290,
    name: "Jessie",
    gender: "female",
    children: [565893648394894339808],
    parents: []
  },
  {
    id: 565893648394894339808,
    name: "Bob",
    gender: "male",
    children: [],
    parents: [8569047194214199353, 4382743284732483290],
  },
  {
    id: 8458189966444,
    name: "Ricky",
    gender: "male",
    children: [],
    parents: [2351232112252, 1231239887112]
  },
  {
    id: 897543276547654765443576,
    name: "Julian",
    gender: "male",
    children: [],
    parents: [1231239887112, 2351232112252],
  },
];


function App() {

  // const parents = family.filter(member => member.parents.length === 0)
  // let parentGroup = [];

  // const findChildren = (parents) => parents.map(parent => {
  //   const children = parent.children.map(i => family.find(children => children.id === i))
  //   const test = {
  //     ...parent,
  //     children
  //   }
  //   return test
  // })



  return (
    <div className="App">
      <h1>Family Tree</h1>
      <div>
        <ul>
          {family.map(member => {
            return <li>
              {member.name}
            </li>
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;
