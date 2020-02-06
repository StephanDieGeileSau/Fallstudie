import React from 'react'

export default function Transaktion(props) {
    console.log(props)

    return (
        props.transactions.map(trans =>{
            return(
                <div>
                    <p>{trans.value}</p>
                    <p>{trans.purpose}</p>
                    <p>{trans.receipient}</p>
                </div>
            )
        })
    )
}
