
import {Outlet} from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'
function EventRootLayout(){
    return <>
    
    <EventsNavigation></EventsNavigation>
    <mai>

    <Outlet></Outlet>
    </mai>
    
    </>
}

export default EventRootLayout;