import { FunctionComponent } from "react";
import Button from "src/components/form/button";
import { getEmoji } from "src/utils/generalUtils";

interface UserDetails {
  profilePicture: string;
  username: string;
  timeAgo: string;
  isEdited: boolean;
  emoji: string;
  message: string;
  commentsCount: number;
}

interface PostProps {
  userData: UserDetails;
  onMoreOptionsClicked: () => void;
}

const Post: FunctionComponent<PostProps> = (props) => {
  const { userData, onMoreOptionsClicked } = props;
  const {
    profilePicture,
    username,
    timeAgo,
    isEdited,
    emoji,
    message,
    commentsCount,
  } = userData;
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-6">
      <div className="flex items-center mb-4">
        <div className="h-11 w-11">
          <img
            src={profilePicture}
            alt="User"
            className="w-11 h-1q rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-white text-sm font-semibold">{username}</h2>
          <p className="text-gray-500 text-xs mt-1">
            {timeAgo} {isEdited ? "• Edited" : ""}
          </p>
        </div>
        <div className="ml-auto">
          <button
            onClick={onMoreOptionsClicked}
            className="text-gray-500 hover:text-gray-300"
          >
            ...
          </button>
        </div>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg mb-4">
        <div className="flex items-start     mb-2">
          <div
            style={{ background: "#27292D", fontSize: "18px" }}
            className="h-12 p-4 w-12  rounded-full flex items-center"
          >
            {getEmoji(emoji)}
          </div>
          <p className="ml-3 text-gray-400 text-sm">{message}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-gray-500 text-sm">
          {commentsCount} comment{commentsCount > 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
};

export default Post;
