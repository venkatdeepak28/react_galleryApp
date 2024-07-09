// Write your code here.
const EachThumbnail = props => {
  let classValue
  const {eachObj, opacity, funClick} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachObj
  const clickFunc = () => {
    funClick(id)
  }
  if (opacity === id) {
    classValue = 'custom-btn'
  } else {
    classValue = 'custom-btn unselected'
  }
  return (
    <li className="list-el">
      <button className={`${classValue}`} type="submit" onClick={clickFunc}>
        <img className="logo" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default EachThumbnail
