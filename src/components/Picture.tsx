// TODO : update picture

import { Avatar } from "./ui";
import { Lucide } from "./icons";

export default () => {
  return (
    <div className=" bg-neutral-8 flex items-center justify-center w-full h-full">
      <Avatar src="/profile.png" alt="profile-picture" size="unset" >
        <Lucide.IconImage className="size-full opacity-10" />
      </Avatar>
    </div>
  );
};
