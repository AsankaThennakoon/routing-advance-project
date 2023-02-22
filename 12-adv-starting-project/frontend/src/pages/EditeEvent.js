import {  useRouteLoaderData } from 'react-router-dom';
import EditeForm from '../components/EventForm';
function EditeEventPage() {

    const data=useRouteLoaderData('event-detail');
    return (
      <EditeForm event={data.event}/>
    );
  }
  export default EditeEventPage;
  