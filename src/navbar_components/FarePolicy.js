import React from 'react'

const FarePolicy = () => {
  return (
    <div>
      <h3>Cancellation</h3>
      <p>Refund Amount = Pad Amount - Airline Cancellation Fee</p>
      <h3>Re-issue</h3>
      <p>Re-issue Fee: Airlines + Fare Difference</p>
      <h3>Void</h3>
      <p>Re-issue Fee = Airlines Fee + Fare Difference</p>
      <h3>Refund</h3>
      <p>Re-issue Fee = Airlines Fee + Fare Difference</p>
    </div>
  )
}

export default FarePolicy
