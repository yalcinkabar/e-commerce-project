import { Clock3, ChartArea, ChevronRight } from "lucide-react";

function PostCard({ image, title, description }) {
    return (
        <div className="overflow-hidden bg-white shadow-sm">
            {/* Image */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="h-[300px] w-full object-cover"
                />

                <span className="absolute left-5 top-5 bg-[#E74040] px-3 py-1 text-sm font-bold text-white">
                    NEW
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                <div className="mb-3 flex gap-3 text-xs text-[#737373]">
                    <span className="text-[#8EC2F2]">Google</span>
                    <span>Trending</span>
                    <span>New</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl leading-8 text-[#252B42]">
                    {title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-5 text-[#737373]">
                    {description}
                </p>

                {/* Date-icon */}
                <div className="mb-6 flex justify-between text-xs text-[#737373]">
                    <div className="flex items-center gap-1">
                        <Clock3 size={14} className="text-[#23A6F0]" />
                        <span>22 April 2021</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <ChartArea size={14} className="text-[#2DC071]" />
                        <span>10 comments</span>
                    </div>
                </div>

                {/* Learn More */}
                <button className="flex items-center gap-2 text-sm font-bold text-[#737373]">
                    Learn More
                    <ChevronRight size={16} className="text-[#23A6F0]" />
                </button>
            </div>
        </div>
    );
}

export default PostCard;