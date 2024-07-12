const KnowMe = () => {
  return (
    <div className=" my-10">
      <h1 className="extrabold text-4xl sm:text-5xl my-3 sm:mt-16">
        Get to know me
      </h1>
      <div className="flex items-center justify-between text-center gap-3 flex-col sm:flex-row ">
        <div className="sm:w-1/2 p-6">
          <a href="/about">
            <h1 className="extrabold text-2xl">About Me</h1>
            <p className="faint inter">Who I am and What I do</p>
            <img
              className="h-48 mx-auto rounded-full mt-3"
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=740"
              alt=""
            />
          </a>
        </div>
        <div className=" sm:w-1/2 p-6">
          <a href="/tech">
            <h1 className="extrabold text-2xl">Tech Stack</h1>
            <p className="faint inter">
              The dev tools, apps, devices, and games I use and play.
            </p>
            <img
              className="h-48 mx-auto ml-24"
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-269ba.appspot.com/o/Tech%2FTechstack.png?alt=media&token=eefd1a79-9d1c-4d43-a126-0eb5d7c235f5"
              }
              alt="tech"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KnowMe;
