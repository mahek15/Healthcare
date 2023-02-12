import React from 'react'

const Write = () => {
    return (
        <div className="p-5 mb-20">
          <img
            className="h-[350px] w-[70vw] mx-auto object-cover rounded-sm"
            src="/images/blog01.jpg"
            alt=""
          />
          <form className="relative ">
            <div className="flex items-center mx-auto mt-10">
              <label htmlFor="fileInput">
                <img src='/images/add.png' alt='add'/>
              </label>
              <input id="fileInput" type="file" style={{ display: "none" }} />
              <input
                className="font-medium text-lg border-none p-3"
                placeholder="Title"
                type="text"
                autoFocus={true}
              />
            </div>
            <div className="flex items-center mx-auto my-10">
              <textarea
                className="font-medium text-lg border-none p-3 w-[70vw] h-full"
                placeholder="blog content goes heree..."
                type="text"
                autoFocus={true}
              />
            </div>
            <button className="absolute bg-neon text-dark cursor-pointer flex rounded-md items-center p-3 " type="submit ">
              Publish
            </button>
          </form>
        </div>
      );
}

export default Write
