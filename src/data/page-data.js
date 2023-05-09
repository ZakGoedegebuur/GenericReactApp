import FirstModelsPage from "./pages/FirstModels.js"

const data = { sections: [
    { 
        name: "latest",
        stageOnClick: "home",
        subsections: [
          { title: "latest page", date: "28 / 5 / 2023", data: <FirstModelsPage/> },
        ]
      },
      { 
        name: "development",
        stageOnClick: "selector",
        subsections: [
          { title: "page one - dev", date: "7 / 5 / 2023", data: <FirstModelsPage/> },
          { title: "page two - dev", date: "8 / 5 / 2023", data: <FirstModelsPage/> },
        ]
      },
      { 
        name: "images",
        stageOnClick: "page",
        subsections: [
            { title: "page one - images", date: "9 / 5 / 2023", data: <FirstModelsPage/> },
            { title: "page two - images", date: "10 / 5 / 2023", data: <FirstModelsPage/> },
            { title: "page three - images", date: "11 / 5 / 2023", data: <FirstModelsPage/> },
        ]
    },
]}

export default data;

const data2 = { sections: [
  {
    name: "latest",
    page: <FirstModelsPage/>
  },
  {
    name: "development",
    page: <FirstModelsPage/>
  },
  {
    name: "images",
    page: <FirstModelsPage/>
  }
]}