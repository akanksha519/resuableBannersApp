import './App.css'

import BannerCard from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    buttonText: 'Show More',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    buttonText: 'Show More',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    buttonText: 'Show More',
    className: 'card-3',
  },
]

const App = () => {
  ;<div className="list-container">
    <ul>
      {bannerCardsList.map(eachCard => (
        <BannerCard bannerDetails={eachCard} key={eachCard.id} />
      ))}
    </ul>
  </div>
}

export default App
