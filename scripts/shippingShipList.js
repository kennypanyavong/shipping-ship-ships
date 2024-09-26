import { getShippingShips } from "./database.js"

export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `
            <li data-id="${ship.haulerId}" data-type="shippingShip">
                ${ship.name}
            </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
};
