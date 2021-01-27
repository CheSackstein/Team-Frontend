import {useEffect} from 'react'

export default function MyAppointments(props) {

    let list =[]
    useEffect(() => {
        //let res = await fetch appointments
        let appointments = res.json()
        
    }, [])

    return (
        <div>
        {list}        
        </div>
    )
}
