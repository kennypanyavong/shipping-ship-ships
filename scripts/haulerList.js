import { getHaulingShips } from "./database.js"
import { getShippingShips } from "./database.js"



export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `
            <li data-id="${hauler.id}" data-type="hauler">
                ${hauler.name}
            </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
};

document.addEventListener("click", (clickEvent) => {
        const itemClicked = clickEvent.target

            if(itemClicked.dataset.type === "hauler") {
                const haulerId = parseInt(itemClicked.dataset.id)
                let shipCount = 0

                const shippingShips = getShippingShips()

                for (const ship of shippingShips) {
                    if (ship.haulerId === haulerId) {
                        shipCount++
                    }
                }
                alert(`Hauler ${itemClicked.textContent} is carrying ${shipCount} shipping ships`)
            }
    }
)