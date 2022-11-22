import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Count from "./components/Count";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const accItems = [{
  title: "nisl nunc rhoncus dui vel sem",
  content: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue."
}, {
  title: "tortor",
  content: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim."
}, {
  title: "ullamcorper augue",
  content: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  title: "sit amet cursus id turpis integer",
  content: "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}];

const colors = [{
  label: "Blue",
  value: "cornflowerblue"
}, {
  label: "Yellow",
  value: "goldenrod"
}, {
  label: "Red",
  value: "firebrick"
}, {
  label: "Green",
  value: "lightseagreen"
}];

const App = () => {

  const [selected, setSelected] = useState(colors[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={accItems}></Accordion> */}
     {/* <Search></Search> */}
     {/* <button onClick={()=> setShowDropdown(!showDropdown)}> Toggle dropdown</button> */}
     {/* {showDropdown ? <Dropdown 
      options={colors}
      selected={selected}
      onSelectedChange={setSelected}
      ></Dropdown> : null } */}
      {/* <Translate></Translate> */}
     {/* <Count></Count> */}
     <Header></Header>
     <Route path="/">
        <Accordion items={accItems}></Accordion>
     </Route>
     <Route path="/dropdown">
      <Dropdown 
        label="Select a color"
        options={colors}
        selected={selected}
        onSelectedChange={setSelected}
        ></Dropdown>
     </Route>
     <Route path="/search">
       <Search></Search>
     </Route>
     <Route path="/translate">
      <Translate></Translate> 
     </Route>
    </div>
  );
}

export default App;
