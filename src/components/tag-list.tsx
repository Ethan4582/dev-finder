import React from "react";

type TagListProps = {
  languages: string[];
  className?: string;
};

const TagList: React.FC<TagListProps> = ({ languages, className }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {languages.map((lang, idx) => (
        <span
          key={idx}
          className="px-3 py-1 rounded-full text-sm font-medium border 
                     bg-gray-100 text-gray-800 border-gray-300 
                     dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
        >
          {lang}
        </span>
      ))}
    </div>
  );
};

export default TagList;
