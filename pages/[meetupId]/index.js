import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

function MeetupDetails(props) {
    console.log('props', props);
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://Abdulla:abdulla007331415@cluster0.oi88h.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('test');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
    // return {
    //     fallback: false,
    //     paths: [
    //         {
    //             params: {
    //                 meetupId: 'm1',
    //             },
    //         },
    //         {
    //             params: {
    //                 meetupId: 'm2',
    //             },
    //         },
    //     ],
    // };
}

export async function getStaticProps(context) {

    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://Abdulla:abdulla007331415@cluster0.oi88h.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('test');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };

    // const meetupId = context.params.meetupId;

    // return {
    //     props: {
    //         meetupData: {
    //             image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    //             id: meetupId,
    //             title: 'First Meetup',
    //             address: 'Some Street 5, Some City',
    //             description: 'This is a first meetup',
    //         }
    //     }
    // }
}

export default MeetupDetails;