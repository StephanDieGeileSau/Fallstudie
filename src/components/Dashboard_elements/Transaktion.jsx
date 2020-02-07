import React from 'react'

export default function Transaktion(props) {
    return (
        props.transactions.map(trans =>{
            return(
                <div>
                {trans.receipient}
                {trans.value}
                {trans.purpose}
                </div>
            )
        })
    )
}
