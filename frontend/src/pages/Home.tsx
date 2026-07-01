import React from "react";

const Home = () => {
  return (
    // <div>
    //   <div className="bg-gray-200 h-screen text-2xl flex text-center justify-center py-20">
    //     Hi User! Get your Score here... !
    //     <div className="bg-blue-600 flex ">Upload here</div>
    //   </div>
    // </div>
    <div className="bg-gray-200 h-screen flex py-40 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl mb-6">Hi User! Get your Score here...!</h1>

        <div className="bg-blue-600 text-white px-6 py-3 rounded">
          Upload here
        </div>
      </div>
    </div>
  );
};

export default Home;
