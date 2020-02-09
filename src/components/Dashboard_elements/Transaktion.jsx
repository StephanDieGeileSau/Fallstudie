import React from 'react'

export default function Transaktion(props) {
    return (
        props.transactions.map(trans =>{
            return(
                <div>
                    <table id="transaktion">
                        <tr>
                            <td id="transreceipent">{trans.receipient}</td>
                            <td id="transvalue">{trans.value} €</td>
                        </tr>
                            <td id="transpurpose" colspan="2">{trans.purpose}</td>
                    </table>
                </div>
            )
        })
    )
}
