import { createContext, useState } from 'react';

const RoadmapContext = createContext({});

const RoadmapMock = {
    currentDate: '21-08-2021',
    status: ['white', 'green', 'green', 'grey', 'white', 'white', 'white'],
    events: [
      {
        name: 'Vacations',
        status: ['white', 'green', 'green', 'grey', 'grey', 'green', 'white'],
        child: [
          {
            name: 'Days off',
            startDate: '21-08-2021',
            endDate: '22-08-2021',
            progress: 50
          }
        ]
      },
      {
        name: 'Goals',
        status: ['white', 'green', 'green', 'grey', 'white', 'white', 'white'],
        child: [
          {
            name: 'Goal BB',
            startDate: '20-08-2021',
            endDate: '29-08-2021',
            progress: 25
          },
          {
            name: 'Goal AA',
            startDate: '15-08-2021',
            endDate: '22-08-2021',
            progress: 75
          }
        ]
      }
    ]
  };

const SimpleRoadmapHandler = props => {
    const [data, setData] = useState(RoadmapMock);

    return { data, setData };
}

const RoadmapProvider = ({ children }) => {
    const handler = SimpleRoadmapHandler();

    return (
        <RoadmapContext.Provider value={handler}>
            { children }
        </RoadmapContext.Provider>
    )
}

export { RoadmapContext, RoadmapProvider };