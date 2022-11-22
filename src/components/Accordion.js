import React, {useState} from "react";

// React.Fragment ensures that a wrapping div is not always necessary

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    //define a helper function to handle click. 
    // These are like the member fucntions in a class based component.
    const onTitleClick = (index) => {
        console.log('Title clicked : ', index);
        setActiveIndex(index);
    }


    const renderedItems = items.map((item, index)=>{
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
}

export default Accordion;


