function LikeModalContent() {
  return (
    <div className="w-full grid grid-cols-4 py-4 items-center align-middle">
      <div className="col-span-3">
        <div className="flex">
          <img
            className="object-cover w-10 h-10 rounded-full mr-2 self-center"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="m-0 font-medium text-sm text">Username</p>
            <p className="m-0 text-zinc-400 text-xs">1.2 km far from you</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <h1 className="hover:text-primary">Chat</h1>
      </div>
    </div>
  );
}

export default LikeModalContent;
