import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark,handleMarkAsRead}) => {
    const {id, title, cover,author_img,posted_date,reading_time,author,hashtags} = blog; 
    return (
        <div className='border-b-2'>
            <img className='w-full mt-10 rounded-lg' src={cover}></img>
            <div className='flex justify-between mt-8 mb-6'>
                <div className='flex'>
                    <img className='w-12 mr-5' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div>
                    <span className='mr-5'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className=''><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>

            <p>
                {
                    hashtags.map((hash, idx)  => <span key={idx}><a className='mr-5 font-semibold text-gray-300' href="">#{hash}</a></span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-blue-500 underline font-bold'>Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;