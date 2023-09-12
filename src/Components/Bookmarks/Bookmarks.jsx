import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='w-1/3 bg-slate-200 rounded-lg p-8'>
            <h3 className='bg-white p-4 m-4 rounded-lg'>Spent time on read:{readingTime} </h3>
            <h3 className='text-xl font-bold ml-4'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark 
                    key={idx} 
                    bookmark={bookmark}
                    ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;