import { DockList } from "./dockList.js";
import { HaulerList } from "./haulerList.js";
import { ShippingShipList } from "./shippingShipList.js";

const renderDocks = () => {
    const docksContainer = document.getElementById("docks-list");
    docksContainer.innerHTML = DockList();
};

const renderHaulers = () => {
    const haulersContainer = document.getElementById("haulers-list");
    haulersContainer.innerHTML = HaulerList();
};

const renderShippingShips = () => {
    const shippingShipsContainer = document.getElementById("shipping-ships-list");
    shippingShipsContainer.innerHTML = ShippingShipList();
};

// Render all lists
renderDocks();
renderHaulers();
renderShippingShips();
