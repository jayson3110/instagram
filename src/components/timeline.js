import Skeleton from 'react-loading-skeleton';
import userPhotos from '../hooks/use-photos';
import Post from './post';


export default function TimeLine() {

   const { photos } = userPhotos();

   return <div className="container col-span-2">
   
       {!photos ? (

            <>

               {[...new Array(4)].map((_, index) =>
                  <Skeleton count={4}
                   width={540} height={500} className="mb-5"/>
               )}


            </>
         ): photos?.length > 0 ? (
              photos.map((content) => <Post key={content.docId}content={content} />)
         
         ):(

            <p className="text-center text-2xl">Follow people to see photos </p>

         )}
    </div>
}