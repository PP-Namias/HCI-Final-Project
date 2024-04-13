import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".Frame",
  `The main structural part of a bicycle that holds everything together is called the frame. Steel was traditionally used to construct bicycle frames. However, today they are primarily made of aluminum alloy. High-end bicycles, however, use materials like titanium and carbon fiber. Frames must be stiff, light, and strong.
  <br />
  <br />
  Different frame materials have different properties that can affect weight, stiffness, and ride quality, and the geometry of the frame can have an impact on the bike's stability, agility, and responsiveness. Additionally, frames can vary in shape and design to optimize performance for each type of riding, including road cycling, mountain biking, and touring.The diamond frame, which consists of 6 tubes shaped into two connected triangles, is the most popular type of frame:`,
  "Frame",
  "Central Part"
);

hoverChangeExperience(
  ".Fork",
  `The fork is an important part of a bicycle because it connects the front wheel to the frame and allows the rider to turn. It is made up of two fork blades made of steel, aluminum, or carbon fiber, the form and thickness of which impact the ride quality.
  <br />
  <br />
  The steerer tube is a cylindrical tube that attaches to the headset and allows the fork and front wheel to rotate freely.
  <br />
  <br />
  Suspension can also be added to forks, which can improve a bike's ride quality. Suspension forks can be air-sprung or coil-sprung, and their travel can vary based on the kind of riding.
  `,
  "Fork",
  "Front Parts"
);

hoverChangeExperience(
  ".Stem",
  `The stem is an important component of a bicycle that connects the steerer tube of the fork to the handlebars. It is located at the front of the bike and extends forward from the top of the head tube.
  <br />
  <br />
  The handlebars typically pass through the upper end of the stem and are secured in place using bolts or clamps. Some stems also allow for angle adjustment, enabling further customization of the handlebar position.`,
  "Stem",
  "Front Parts"
);

hoverChangeExperience(
  ".Headset",
  `The headset is a component located within the head tube of a bicycle frame that serves as the interface between the frame and the fork.
  <br />
  <br />
  It consists of several parts, including bearings, races, and bearing cups. The bearings facilitate smooth rotation by allowing the fork to pivot within the head tube, while the races and bearing cups provide a surface for the bearings to roll on.
  <br />
  <br />
  Suspension can also be added to forks, which can improve a bike's ride quality. Suspension forks can be air-sprung or coil-sprung, and their travel can vary based on the kind of riding.
  <br />
  <br />
  When you turn the handlebars, the fork steerer tube rotates within the headset bearings, which is then transmitted to the fork blades and front wheel, resulting in the desired change in direction.`,
  "Headset",
  "Front Parts"
);

hoverChangeDescription(
  ".Namias",
  "Jhon Keneth Namias"
);
hoverChangeDescription(
  ".Caratao",
  "Jacelyn Caratao"
);
hoverChangeDescription(
  ".Fungo",
  "Gian Higino Fungo"
);
hoverChangeDescription(
  ".Ronan",
  "Ronan"
);
hoverChangeDescription(
  ".Estremadura",
  "Rashly Estremadura"
);
hoverChangeDescription(
  ".Bua",
  "Paulvincent Bua"
);