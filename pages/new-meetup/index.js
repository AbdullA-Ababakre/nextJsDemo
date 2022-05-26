
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetUpData) => {
        console.log("enteredMeetUpData", enteredMeetUpData);
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log("data",data);
        router.push('/');
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetupPage;