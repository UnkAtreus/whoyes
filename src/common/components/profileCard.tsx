import { BsFillChatSquareTextFill, BsHeartFill } from "react-icons/bs";

function ProfileCard(props: any) {
  return (
    <div className="rounded-lg p-4 bg-zinc-100 space-y-2" key={props.index}>
      <div className="flex space-x-2">
        <div className="p-1">
          <img
            className="object-cover w-8 h-8 rounded-full "
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt=""
          />
        </div>
        <div className="flex-1">
          <p className="m-0 font-medium text-sm">{props.username}</p>
          <p className="m-0 text-zinc-400 text-xs">1.2 km far from you</p>
        </div>
        <span className="flex items-start text-zinc-400 text-xs">48 min</span>
      </div>
      <div className="line-clamp-3 text-ellipsis overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, nisi eu consectetur consectetur, nisl nisi consectetur, nisi eu
        consectetur consectetur, nisl nisi consectetur, nisi eu consectetur
        consectetur, nisl nisi consectetur, nisi eu consectetur consectetur,
        nisl nisi
      </div>
      <div className="flex space-x-4">
        <div className="flex space-x-2 items-center">
          <BsHeartFill className="text-zinc-500" onClick={props.showModal} />
          <span>1</span>
        </div>
        <div className="flex space-x-2 items-center">
          <BsFillChatSquareTextFill className="text-zinc-500" />
          <span>1</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
