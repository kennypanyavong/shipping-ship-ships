const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Cargo Crusader", dockId: 1},
        { id: 2, name: "Freight Falcon", dockId: 2},
        { id: 3, name: "Transport Titan", dockId: 3},
        { id: 4, name: "Load Lifter", dockId: 4},
        { id: 5, name: "Haul Hero", dockId: 5}
    ],
    shippingShips: [
        { id: 1, name: "Ocean Voyager", haulerId: 1},
        { id: 2, name: "Steel Horizon", haulerId: 2},
        { id: 3, name: "Waves of Fortune", haulerId: 3},
        { id: 4, name: "Anchor's Pride", haulerId: 4},
        { id: 5, name: "Global Quest", haulerId: 5}
    ]
}

export const getDocks = () => {
    return [...database.docks]
}

export const getHaulingShips = () => {
    return [...database.haulers]
}

export const getShippingShips = () => {
    return [...database.shippingShips]
}