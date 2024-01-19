export default function UserGoalsHeader() {
    return (
        <div className="flex items-center px-10 border-y h-[6%] ">
            <div className="text-xs w-[50%] pl-2">Name</div>
            <div className="text-xs w-[20%] text-center">Time period</div>
            <div className="text-xs w-[20%] text-center">Progress</div>
            <div className="text-xs w-[10%] text-center">Owner</div>
        </div>
    );
};