import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class List extends React.Component {
  render() {
    return (
      <div>
        <h1>Names List:</h1>
        <ul className="nameItem">
         {this.props.items.map((index, item ,key) =>
             <li key={index}>
                  <button onClick={() => /*alert("This will move down")*/this.moveDown()}>&#8595;</button>
                  <button onClick={() => alert("This will move up")/*moveUp()*/}>&#8593;</button>
                  {index}
                  {item}
             </li>
          )}
        </ul>
      </div>
    )
  }
}


    // conditional statement reference for moveUp moveDown functions
//   moveDown(){
//        if (index <= listItems.length) {  }
//   };
//     function to move list item down (index + 1?)

//   moveUp(){
//        if (index >= 0) {}
//   };

  //}
// }


// Main component rendered
class NameList extends React.Component{

    state= {
        listItems: [,'Will', 'Sam', 'Vadim', 'Chris']
     };

    //assign index to the actual index ---- const index = this.listItems.index(); //indexOf() ?
    // const index = this.listItems.index()

    // function to move an item up by subtracting 1 from index
    //   moveUp() {
    //   let movedUp = {index} - 1;
    //   move([...listItems], {index}, movedUp);
    // }

    // function to move an item up by adding 1 to index
    // moveDown() {
    //   let movedDown = {index} + 1;
    //   move([...listItems], {index}, movedDown);
    // }

    render() {
      return (
        <div>
          <div>
             <List items={this.state.listItems} />
          </div>
        </div>

       )
    }
}

// ========================================

ReactDOM.render(
  <NameList />,
  document.getElementById('root')
);
