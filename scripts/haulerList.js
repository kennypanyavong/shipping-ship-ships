import { getHaulingShips } from "./database.js";

// document.addEventListener(
//     "click",
//     () => {
//         const itemClicked = clickEvent.target
//     }
// )

export const HaulerList = () => {
    const haulers = getHaulingShips();

    let haulersHTML = "<ul>";

    for (const hauler of haulers) {
        haulersHTML += `<li>${hauler.name} (Dock ID: ${hauler.dockId})</li>`;
    }

    haulersHTML += "</ul>";

    return haulersHTML;
};
