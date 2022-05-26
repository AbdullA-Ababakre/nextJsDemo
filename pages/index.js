import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
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