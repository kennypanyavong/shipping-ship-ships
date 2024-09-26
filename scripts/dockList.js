import { getDocks } from "./database.js"


// export const DockList = () => {
//     const docks = getDocks()

//     let docksHTML = "<ul>"

//     for (const dock of docks) {
//         // Convert each dock object to an <li> and append to the docksHTML string
//         docksHTML += `<li>${dock.location} can hold ${dock.volume} million tons of cargo</li>`
//     }

//     docksHTML += "</ul>"

//     return docksHTML
// }

export const DockList = () => {
    const docks = getDocks();
    let docksHTML = "<ul>";

    for (const dock of docks) {
        docksHTML += `
            <li data-id="${dock.id}" data-type="dock">
                ${dock.location}
            </li>
        `;
    }

    docksHTML += "</ul>";
    return docksHTML;
};