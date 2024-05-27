// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, buttonText, className} = bannerDetails

  return (
    <li className={`${className} bg-container`}>
      <h1 className="heading">{headerText}</h1>
      <p className="descrip">{description}</p>
      <button type="button">{buttonText}</button>
    </li>
  )
}

export default BannerCard
