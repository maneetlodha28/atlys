export interface UserDetails {
  profilePicture: string;
  username: string;
  timeAgo: string;
  isEdited: boolean;
  emoji: string;
  message: string;
  comments: { id: number; value: string }[];
}

export interface PostProps {
  userData: UserDetails;
  onClicked: () => void;
}
