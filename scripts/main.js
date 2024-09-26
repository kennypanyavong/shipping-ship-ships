import { DockList } from "./dockList.js"
import { HaulerList } from "./haulerList.js"
import { ShippingShipList } from "./shippingShipList.js"
import { getHaulingShips } from "./database.js"
import { getShippingShips } from "./database.js"
import { getDocks } from "./database.js"


const renderDocks = () => {
    const docksContainer = document.getElementById("docks-list")
    docksContainer.innerHTML = DockList()
};

const renderHaulers = () => {
    const haulersContainer = document.getElementById("haulers-list")
    haulersContainer.innerHTML = HaulerList()
};

const renderShippingShips = () => {
    const shippingShipsContainer = document.getElementById("shipping-ships-list")
    shippingShipsContainer.innerHTML = ShippingShipList()
};

document.addEventListener("click", (clickEvent) => {
    const itemClicked =clickEvent.target

    if (itemClicked.dataset.type === "hauler") {
        const haulerId = parseInt(itemClicked.dataset.id)
        let counter = 0

        const shippingShips = getShippingShips()

        for (const ship of shippingShips) {
            if (ship.haulerId === haulerId) {
                counter++
            }
        }
        alert(`Hauler ${itemClicked.innerText} is carrying ${counter} shipping ships.`)
    }
})

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    
    if (itemClicked.dataset.type === "shippingShip") {
        const haulerId = parseInt(itemClicked.dataset.id)
        const shippingShipName = itemClicked.innerText

        
        let haulingShip = { name: "Incorrect" }

        const haulers = getHaulingShips()

       
        for (const hauler of haulers) {
          
            if (hauler.id === haulerId) {
                haulingShip = hauler
                break
            }
        }

       
        alert(`${shippingShipName} is being hauled by ${haulingShip.name}`)
    }
});

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

   
    if (itemClicked.dataset.type === "dock") {
        const dockId = parseInt(itemClicked.dataset.id)
        const haulers = getHaulingShips()
        const dockHaulers = haulers.filter(hauler => hauler.dockId === dockId)

        let message = `The ${itemClicked.innerText} dock is currently unloading `

        if (dockHaulers.length === 0) {
            message += "nothing"
        } else {
            message += dockHaulers.map(hauler => hauler.name).join(", ")
        }

        alert(message)
    }
});

// Render all lists
renderDocks()
renderHaulers()
renderShippingShips()
