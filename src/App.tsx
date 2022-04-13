import React from 'react';
import { Tree } from 'react-tree-graph';
import family from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';

interface Family {
  id: number;
  name: string;
  children?: number[];
  gender?: string;
  parents?: number[];
}

const App = (props: Family) => {

  return (

    <div className='App' >
      <Tree
        animated={true}
        data={family}
        nodeRadius={15}
        margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
        height={700}
        width={1000} >[{props.name}]</Tree>
    </div >
  );
}

export default App;