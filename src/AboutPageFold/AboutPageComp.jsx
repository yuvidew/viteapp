import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const AboutComp = () => {

    const ansQus = [
        {
            Qus : 'What is react js',
            Ans : "React.js, commonly referred to as React, is an open-source JavaScript library for building user interfaces or UI components. It was developed and is maintained by Facebook, and it is widely used for building single-page applications where the user interface needs to be dynamic and responsive. React allows developers to create reusable UI components and manage the state of the application efficiently. One of its key features is the virtual DOM (Document Object Model), which is a lightweight copy of the actual DOM. React uses the virtual DOM to efficiently update only the parts of the actual DOM that have changed, rather than re-rendering the entire DOM, resulting in improved performance."
        },
        {
            Qus : 'what is the Higher order Component',
            Ans : "A Higher-Order Component (HOC) is a design pattern in React.js that involves the use of functions to enhance or modify the behavior of a component. Essentially, a Higher-Order Component is a function that takes a component and returns a new component with additional or modified functionality. In React, components are the building blocks of a user interface. They encapsulate the logic and presentation of a specific piece of the UI. HOCs allow you to reuse component logic, apply cross-cutting concerns, and compose components in a more modular and flexible way"
        },
        {
            Qus : 'what is the State',
            Ans : "In the context of React.js, 'state' refers to the data that determines the behavior and appearance of a component. It is essentially an object that represents the current condition of the component, and when the state changes, React re-renders the component to reflect the updated state. State is a fundamental concept in React and is crucial for building dynamic and interactive user interfaces. Each React component can have its own state, which is managed internally by the component. State is mutable and can be updated using the setState() method provided by React. When the state of a component changes, React efficiently re-renders only the parts of the user interface affected by that change, thanks to its virtual DOM mechanism."
        },
        {
            Qus : 'What is redux',
            Ans : "Redux is an open-source JavaScript library for managing the state of a web application in a predictable way. It is commonly used with React but can be used with any JavaScript framework or library. Redux provides a central store to hold the entire state of an application, and the state can only be modified through well-defined actions. This strict control over state changes makes it easier to understand, debug, and maintain complex applications."
        },
        {
            Qus : 'What is props',
            Ans : "In React, 'props' is a shorthand for 'properties,' and it refers to a mechanism for passing data from a parent component to a child component. Props allow you to pass dynamic values or functions to a component, making it more flexible and reusable."
        },
    ]
    return (
        <Container>
        <section 
        className="d-flex align-items-center justify-content-center" 
        style={{
            height : '70vh'
        }}>
            <Accordion className='w-100'>
                {ansQus.map((ele , index) => (
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{ele.Qus}</Accordion.Header>
                        <Accordion.Body>
                        {ele.Ans}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </section>
        </Container>
    );
}

export default AboutComp;