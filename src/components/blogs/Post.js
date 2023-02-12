import React from 'react'
import { Link } from 'react-router-dom';

const Post = ({img}) => {
return (
    <div className="m-9 bg-dark/40 p-16 rounded-2xl shadow-xl">
      <img
        className="rounded h-[280px] bg-cover mx-auto"
        src={img}
        alt="blog"
      />
      <div className="flex flex-col items-center">
        <div className="my-3">
          <span className="font-light cursor-pointer mr-10">
              Deficiency
          </span>
          <span className="font-light cursor-pointer">
              Allergy
          </span>
        </div>
        <span className="text-lg font-bold cursor-pointer">
            <Link to='/singlepost'>
                The title of the blog
            </Link>
        </span>
        <hr />
        <span className="italic font-light text-base my-3">1 hour ago</span>
      </div>
      <p className="text-ellipsis line-clamp-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}

export default Post
