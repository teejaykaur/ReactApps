import React from "react";
import { Deck, Slide, Heading, Link, Text, Image } from "spectacle";

import createTheme from "spectacle/lib/themes/default";
import versus from './images/VMC.png';

const theme = createTheme({
  primary: "#ff4081"
});

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
    <Slide transition={["zoom"]} bgColor="primary">
    <Image src={require('./FirstPage.jpg')}  alt="Versus" width="70%"/>
      <Heading size={1} fit caps>
        Containerization 
      </Heading>
   
      <Link href="https://github.com/FormidableLabs/spectacle">
        <Text bold caps textColor="tertiary">
          View on Github
        </Text>
      </Link>
      
    </Slide>
    <Slide transition={["spin", "slide"]} bgColor="beige">
      <Heading size={1} caps fit lineHeight={1} textColor="primary">
       Agenda

      </Heading>
      <Text bold caps textColor="black">
          1. What are containers and Why use them? </Text>
          <Text bold caps textColor="black"> 2. Orchestration with Kubernetes </Text>
          <Text bold caps textColor="black">   3. Monolith Versus Microservices </Text>
          <Text bold caps textColor="black"> 4. Microservices: Architecture to Support Agile </Text>
          <Text bold caps textColor="black">    5. Security Requirements with containers </Text>
          <Text bold caps textColor="black">   6. Kahot! </Text>
        
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="lightgray">
      <Heading size={1} caps fit lineHeight={1} textColor="primary">
       What are Containers?

      </Heading>
      <Text bold  textColor="black" >
          Containers offer a logical packaging mechanism in which applications can be  </Text>
          <Text bold  textColor="black"> abstracted from the envrionment in which they actually run </Text>
          <Image src={require('./VMC.jpg')}  alt="Versus" width="50%"/>
        
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="lightgray">
      <Heading size={1} caps fit lineHeight={1} textColor="primary">
       ..So Why are we talking about it ?

      </Heading>
      <Text bold  textColor="black" >
          We can get rid of - "I don't know why it's not"  </Text>
          <Text bold  textColor="black"> working for you?" </Text>
          <Text bold  textColor="black"> Great for Service Based Architecture </Text>
          <Text bold  textColor="black"> Containers offer variety of Performance Benefits </Text>
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="lightgray">
      <Heading size={1} caps fit lineHeight={1} textColor="primary">
       Orchestration

      </Heading>
      <Image src={require('./orch.jpg')}  alt="Versus" width="50%"/>
        
      <Text bold  textColor="black">
          Running containers across many machines.  </Text>
          <Text bold  textColor="black" textSize ="80%"> Scaling up and down by adding or removing containers when demand changes. </Text>
          <Text bold  textColor="black"> Distributing load between the containers. </Text>
          <Text bold  textColor="black" textSize="90%"> Lauching new containers on different machines if something fails. </Text>
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="lightgray">
      <Heading size={1} caps fit lineHeight={1} textColor="primary">
       CHALLENGES WITH MONOLITH ARCHITECTURE

      </Heading>
      <Image src={require('./Mono.jpeg')}  alt="Versus" width="50%"/>
        
      <Text textSize="100%"  textColor="black">
          1)  Application is too large and complex! </Text>
          <Text   textColor="black" textSize ="80%"> 2) Impact of a change is usually not very well understood which leads to do extensive manual testing.</Text>
          <Text textColor="black" textSize ="80%"> 3) Reduced Reliability~ Bug in any module (e.g. module leak) can potentially bring down the entire process.</Text>
         
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="lightgray">
      <Heading size={1} caps fit lineHeight={1} textColor="primary">
       ENTERING MICROSERVICES

      </Heading>
      <Image src={require('./micro.jpg')}  alt="Versus" width="50%"/>
        
      <Text textSize="70%"  textColor="black">
          1)  Split your application into a set of smaller, interconnected services instead of building a single monolith architecture. </Text>
          <Text   textColor="black" textSize ="80%"> 2) These services are built around business capabilities and are independently deployable.</Text>
          <Text textColor="black" textSize ="100%"> 3) Services communicate with each other by well-defined APIs. Internal Implementation of each service are hidden from other services.</Text>
         
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="lightgray">
      <Heading size={1} caps fit lineHeight={1} textColor="primary">
       AGILE INTEGRATION

      </Heading>
      
      <Text textSize="100%"  textColor="black">
          1) NEED TO BE MORE RESPONSIVE TO THE CHANGES IN THE OVERALL TECH INDUSTRY; THE DRIVING NEED TO MOVE FASTER. </Text>
          <Text   textColor="black" textSize ="80%"> 2) BRING BUSINESS COMPONENTS OR SERVICE TOGETHER QUICKLY AND RESPOND TO MARKET DEMANDS.</Text>
          <Text textColor="black" textSize ="80%"> 3) USE OF SMALLER TEAMS AND AN INCREMENTAL APPROACH.</Text>
          <Text textColor="black" textSize ="80%"> 4) INTEGRATION UP FRONT.</Text>
         
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="lightgray">
      <Heading size={5} caps fit lineHeight={1} textColor="primary">
       CONTAINERS ARE HERE, NOW HOW DO WE SECURE THEM?

      </Heading>
      
        
      <Text textSize="80%"  caps textColor="black">
          1) INtegrate static application security testing into the build process. </Text>
          <Text   textColor="black" caps bold textSize ="80%">2)robust, centralized authentication and authorization policies for access. </Text>
          <Text textColor="black" caps textSize ="80%"> 3) Make sure that your platform is mostly "atomic".</Text>
          
         
    </Slide>

    <Slide transition={["spin", "slide"]} bgColor="tertiary">
      <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
        Designed By  - TJ

      </Heading>
    </Slide>
  </Deck>
);

export default Presentation;
