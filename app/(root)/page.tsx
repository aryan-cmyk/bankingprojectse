
import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home= () =>{
   const loggedIn={firstName:'aryan',lastName:'JSM',email:'contact@jsmastery.pro'};

    return (
        <section className="home">
        <div className="home-content">
        <header className="home-header">
            <HeaderBox
            type ="greeting"
            title ="welcome"
            user= {loggedIn?.firstName|| 'Guest'}
            subtext="Access accounts and manage that account efficiently ."
            />
         
        <TotalBalanceBox
           accounts={[]} 
           totalBanks={1}
           totalCurrentBalance={12500}
           />

         RECENT TRANSACTIONS

        </header> </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance:123.50},{currentBalance:500.30}]}
         />

        
        
        
        
        </section>
    )
}
export default Home