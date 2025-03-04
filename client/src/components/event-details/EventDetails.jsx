import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useGetOneEvent } from '../../hooks/events-hooks';
import CommentCreate from './comment-create/CommentCreate';
import { AuthContext } from '../../contexts/AuthContext';
import { useGetAllComments } from '../../hooks/comment-hooks';
import styles from './EventDetails.module.css';



export default function EventDetails() {

    const { eventId } = useParams();
    const [eventInfo] = useGetOneEvent(eventId);
    const [comments, setComments] = useGetAllComments(eventId);
    const { isAuthenticated } = useContext(AuthContext);

    return (

        <>
            <div className={styles['container']}>

                <div className={styles['content-section']}>

                    <h2>Title: {eventInfo.title}</h2>

                    <p className={styles['description']}><strong>Description:</strong><br /> {eventInfo.description}</p>
                    <p className={styles['place']}><strong>Place:</strong><br/> {eventInfo.place}</p>
                    <p className={styles['category']}><strong>Category:</strong><br/> {eventInfo.category}</p>
                    <p className={styles['date']}><strong>Date:</strong><br/> {eventInfo.date}</p>

                </div>

                <div className={styles['image-section']}>

                    <img
                        alt={eventInfo.title}
                        src={eventInfo.imageUrl}
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>




            </div>


            <div className={styles['comment-section']}>

                {comments.length > 0
                    ?
                    <>
                        <h2 style={{ marginBottom: '1em', fontSize: '2em' }}>Comments</h2>

                        <ul>
                            {comments.map(c => (
                                <li key={c._id} style={{ border: '5px solid #CCC', padding: '1em', marginBottom: '2em' }}>
                                    <p style={{ fontSize: '1.3em' }}>{c?.author?.email}:  {c.text}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                    :
                    <h2 style={{ fontSize: '2em' }}>No comments yet</h2>
                }

                {isAuthenticated && (
                    <CommentCreate eventId={eventId} setComments={setComments} />
                )}

            </div>

        </>
    )


    // return (
    //     <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    //         <div className="absolute inset-0 -z-10 overflow-hidden">
    //             <svg
    //                 aria-hidden="true"
    //                 className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
    //             >
    //                 <defs>
    //                     <pattern
    //                         x="50%"
    //                         y={-1}
    //                         id="e813992c-7d03-4cc4-a2bd-151760b470a0"
    //                         width={200}
    //                         height={200}
    //                         patternUnits="userSpaceOnUse"
    //                     >
    //                         <path d="M100 200V.5M.5 .5H200" fill="none" />
    //                     </pattern>
    //                 </defs>
    //                 <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
    //                     <path
    //                         d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
    //                         strokeWidth={0}
    //                     />
    //                 </svg>
    //                 <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
    //             </svg>
    //         </div>
    //         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    //             <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    //                 <div className="lg:pr-4">
    //                     <div className="lg:max-w-lg">
    //                         <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{eventInfo.title}</h1>

    //                         <p className="mt-6 text-xl leading-8 text-gray-700">
    //                             {eventInfo.description}
    //                         </p>

    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    //                 <img
    //                     alt=""
    //                     src={eventInfo.imageUrl}
    //                     className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
    //                 />
    //             </div>
    //             <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    //                 <div className="lg:pr-4">
    //                     <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">


    //                         <p className="mt-8">
    //                             Place: {eventInfo.place}
    //                         </p>
    //                         <p className="mt-6">
    //                             Date: {eventInfo.date}
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>







    //     </div>

    // )
}