// const family =
// {
//     name: 'Sally',
//     gender: 'female',
//     pathProps: {},
//     textProps: { x: -25, y: 25 },
//     children: [{
//         name: 'Suzie',
//         pathProps: 'black',
//         textProps: { x: -25, y: 25 },
//         children: []
//     }, {
//         name: 'Blue',
//         pathProps: {},
//         textProps: { x: -25, y: 25 },
//         children: [{
//             name: 'Aquamarine',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }, {
//             name: 'Cyan',
//             textProps: { x: -25, y: 25 },
//             children: []
//         }, {
//             name: 'Navy',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }, {
//             name: 'Turquoise',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }]
//     }, {
//         name: 'Green',
//         pathProps: {},
//         textProps: { x: -25, y: 25 },
//         children: []
//     }, {
//         name: 'Purple',
//         pathProps: {},
//         textProps: { x: -25, y: 25 },
//         children: [{
//             name: 'Indigo',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }, {
//             name: 'Violet',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }]
//     }, {
//         name: 'Red',
//         pathProps: {},
//         textProps: { x: -25, y: 25 },
//         children: [{
//             name: 'Crimson',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }, {
//             name: 'Maroon',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }, {
//             name: 'Scarlet',
//             pathProps: {},
//             textProps: { x: -25, y: 25 },
//             children: []
//         }]
//     }, {
//         name: 'White',
//         pathProps: {},
//         textProps: { x: -25, y: 25 },
//         children: []
//     }, {
//         name: 'Yellow',
//         pathProps: {},
//         textProps: { x: -25, y: 25 },
//         children: []
//     }]
// }


// Sally's children 5555, 6666, 7777, 8458189966444,
// 897543276547654765443576

const family =
{
    id: 2351232112252,
    name: "Sally",
    gender: "female",
    parents: [],
    pathProps: {},
    textProps: { x: -25, y: 25 },
    children: [{
        id: 1231239887112,
        name: "Billy",
        children: [8458189966444, 5555, 6666, 7777,
            897543276547654765443576],
        gender: "male",
        parents: [],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    },
    {
        id: 7777,
        name: "Suzie",
        gender: "female",
        children: [317849882, 8569047194214199353],
        parents: [2351232112252, 1231239887112],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    },
    {
        id: 23123122,
        name: "Sam",
        gender: "male",
        children: [317849882, 8569047194214199353],
        parents: [],
        pathProps: {},
        textProps: { x: -25, y: 25 },


    },
    {
        id: 317849882,
        name: "Josh",
        gender: "male",
        children: [43924235082592],
        parents: [7777, 23123122],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    },
    {
        id: 8593288989,
        name: "Sarah",
        gender: "female",
        children: [43924235082592],
        parents: [],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    },
    {
        id: 43924235082592,
        name: "Jim",
        gender: "male",
        children: [9305009999],
        parents: [317849882, 8593288989],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    },
    {
        id: 83473298328562398696,
        name: "Clara",
        gender: "female",
        children: [9305009999],
        parents: [],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    },
    {
        id: 9305009999,
        name: "Joe",
        children: [],
        gender: "male",
        parents: [43924235082592, 83473298328562398696],
        pathProps: {},
        textProps: { x: -25, y: 25 },
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
        parents: [],

    },
    {
        id: 565893648394894339808,
        name: "Bob",
        gender: "male",
        children: [],
        parents: [8569047194214199353, 4382743284732483290],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    },
    {
        id: 8458189966444,
        name: "Ricky",
        gender: "male",
        children: [],
        parents: [2351232112252, 1231239887112],

    },
    {
        id: 897543276547654765443576,
        name: "Julian",
        gender: "male",
        children: [],
        parents: [1231239887112, 2351232112252],
        pathProps: {},
        textProps: { x: -25, y: 25 },
    }],
}
export default family;