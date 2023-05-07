import FirstModelsPage from "./pages/FirstModels.js"

const data = { sections: [
    { 
        name: "latest",
        subsections: [
            { title: "latest page", date: "28 / 5 / 2023", data: <FirstModelsPage/> },
        ]
    },
    { 
        name: "development",
        subsections: [
            { title: "page one - dev", date: "7 / 5 / 2023", data: <FirstModelsPage/> },
            { title: "page two - dev", date: "8 / 5 / 2023", data: <FirstModelsPage/> },
        ]
    },
    { 
        name: "images",
        subsections: [
            { title: "page one - images", date: "9 / 5 / 2023", data: <FirstModelsPage/> },
            { title: "page two - images", date: "10 / 5 / 2023", data: <FirstModelsPage/> },
            { title: "page three - images", date: "11 / 5 / 2023", data: <FirstModelsPage/> },
        ]
    },
]}

export default data;