import { IconType } from "react-icons";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface GoalProp {
  text: string;
  icon: IconType;
}

const Goal: React.FC<GoalProp> = ({ text, icon }) => {
  const Icon = icon;
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center">
      <div className="bg-gray-100 hover:bg-primary p-8 rounded-full hover:text-white">
        <Icon className="w-12 h-12" />
      </div>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
};

export default Goal;
