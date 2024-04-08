const LoadingSpinner = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style={{"display": "block"}} xmlnsXlink="http://www.w3.org/1999/xlink">
        <g>
          <path d="M17 50A33 33 0 0 0 83 50A33 35.6 0 0 1 17 50" fill="#f2f2f2" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="1.3157894736842106s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.3;360 50 51.3" />
          </path>
        </g>
      </svg>
    </div>
  )
}

export default LoadingSpinner
