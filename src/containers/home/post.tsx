import { FunctionComponent } from "react";
import { getEmoji } from "src/utils/generalUtils";
import { ReactComponent as Dots } from "src/assets/icons/dots.svg";
import { ReactComponent as Comments } from "src/assets/icons/message.svg";
interface UserDetails {
  profilePicture: string;
  username: string;
  timeAgo: string;
  isEdited: boolean;
  emoji: string;
  message: string;
  comments: { id: number; value: string }[];
}

interface PostProps {
  userData: UserDetails;
  onClicked: () => void;
}

const Post: FunctionComponent<PostProps> = (props) => {
  const { userData, onClicked } = props;
  const {
    profilePicture,
    username,
    timeAgo,
    isEdited,
    emoji,
    message,
    comments,
  } = userData;
  return (
    <div className="bg-primary py-6 px-5 rounded-lg mt-6" onClick={onClicked}>
      <div className="flex items-center mb-4">
        <div className="h-11 w-11">
          <img
            src={profilePicture}
            alt="User"
            className="w-11 h-1q rounded-full"
          />
        </div>
        <div className="ml-4">
          <p className="text-primary fs-16 font-medium lh-19">{username}</p>
          <p className="text-secondary lh-17 fs-14 mt-1">
            {timeAgo} {isEdited ? "• Edited" : ""}
          </p>
        </div>
        <div className="ml-auto h-5 w-5">
          <button className="text-secondary fs-14">
            <Dots />
          </button>
        </div>
      </div>
      <div className="bg-secondary p-4 rounded-lg mb-4">
        <div className="flex items-start     mb-2">
          <div className="h-12 p-4 w-12 bg-primary fs-18 rounded-full flex items-center">
            {getEmoji(emoji)}
          </div>
          <p className="ml-3 text-secondary leading-6 fs-16">{message}</p>
        </div>
      </div>
      <div className="flex items-center cursor-pointer">
        <Comments />
        <p className="text-secondary text-sm ml-2">
          {comments.length} comment{comments.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default Post;
