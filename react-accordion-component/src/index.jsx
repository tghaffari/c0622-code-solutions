import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const data = [
  {
    id: 1,
    title: 'Summer',
    description: `Summer is the hottest of the four temperate seasons,
    occurring after spring and before autumn. At or centred on the summer
    solstice, the earliest sunrise and latest sunset occurs, daylight hours
    are longest and dark hours are shortest, with day length decreasing as the
    season progresses after the solstice.`
  },
  {
    id: 2,
    title: 'Fall',
    description: `Fall, also known as “autumn” in other parts of the world,
    is one of the four seasons in the Northern Hemisphere. It falls between
    summer and winter. During this season, the temperatures gradually grow
    cooler, causing striking changes in the natural world, such as the falling
    of leaves. `
  },
  {
    id: 3,
    title: 'Winter',
    description: `Winter is one of the four seasons of temperate zones.
    It is the season with the shortest days and the lowest temperatures.
    In areas further away from the equator, winter is often marked by snow.
    Depending on place and culture, what is considered to be the start and
    end of winter vary. `
  },
  {
    id: 4,
    title: 'Spring',
    description: `Spring is the season during which the natural world revives
    and reinvigorates after the colder winter months. During spring, dormant
    plants begin to grow again, new seedlings sprout out of the ground and
    hibernating animals awake. What most people call spring relies on the
    astronomical definition of the word. `
  }

];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion data={data} />);
