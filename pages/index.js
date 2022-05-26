import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { useSession, signIn, signOut } from "next-auth/react"

function HomePage(props) {
    const { data: session } = useSession();
    if (session) {
        return <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }

    return (
        <>
            <MeetupList meetups={props.meetups} />
            <>
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in</button>
            </>
        </>
    )
}


export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
        'mongodb+srv://Abdulla:abdulla007331415@cluster0.oi88h.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('test');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1
    };
}

export default HomePage;
