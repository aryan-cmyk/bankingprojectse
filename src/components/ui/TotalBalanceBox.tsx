import React from 'react'
import { formatAmount } from '../../../lib/utils'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
const TotalBalanceBox = (
{
    accounts=[],totalBanks ,totalCurrentBalance
}:TotalBalanceBoxProps) => {
  return (
    <div>
      <section className="total-balance">
        <div className="total-balance-chart">
         {     }
        </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
            BankAccounts:{totalBanks}
        </h2>
      <div className="flex flex-col gap-2">
         <p className="total-balance-label">Total current balance</p>


         <p className="total balance amount flex-center gap-2">
            
           <AnimatedCounter  amount={totalCurrentBalance}/>
           
         </p>
 </div> 
      </div>
      </section>
    </div>
  )
}

export default TotalBalanceBox
