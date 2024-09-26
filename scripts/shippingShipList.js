import { getShippingShips } from "./database.js";

export const ShippingShipList = () => {
    const shippingShips = getShippingShips();

    let shippingShipsHTML = "<ul>";

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li>${ship.name} (Hauler ID: ${ship.haulerId})</li>`;
    }

    shippingShipsHTML += "</ul>";

    return shippingShipsHTML;
};
